"""Reusable photo cleanup: crop, portrait-mode background blur + vignette,
gentle colour grade. Used for the hero car photo and, later, pupil photos
that arrive without a clean background.

Usage:
  python3 scripts/portrait_edit.py <input> <output> \
      [--top-crop N] [--bottom-crop N] [--focus-x 0.5] [--focus-y 0.5] \
      [--focus-rx 0.3] [--focus-ry 0.4]

--focus-x/-y is the centre of the sharp region as a fraction of the
(cropped) image size; --focus-rx/-ry are its horizontal/vertical radius as a
fraction of width/height. Defaults suit a portrait subject roughly centred
in frame — tighten the radii for a smaller subject (e.g. a face).
"""

import argparse

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter


def edit(
    src: str,
    out: str,
    top_crop: int = 0,
    bottom_crop: int = 0,
    focus_x: float = 0.5,
    focus_y: float = 0.5,
    focus_rx: float = 0.3,
    focus_ry: float = 0.4,
) -> tuple[int, int]:
    im = Image.open(src).convert("RGB")
    w, h = im.size
    im = im.crop((0, top_crop, w, h - bottom_crop))
    w, h = im.size

    arr = np.array(im).astype(np.float32)
    yy, xx = np.mgrid[0:h, 0:w]

    cx, cy = w * focus_x, h * focus_y
    rx, ry = w * focus_rx, h * focus_ry
    dist = np.sqrt(((xx - cx) / rx) ** 2 + ((yy - cy) / ry) ** 2)
    focus = 1.0 - np.clip((dist - 0.45) / (1.05 - 0.45), 0, 1)
    focus = focus**2 * (3 - 2 * focus)
    focus_img = Image.fromarray((focus * 255).astype(np.uint8), mode="L").filter(
        ImageFilter.GaussianBlur(35)
    )
    focus = np.array(focus_img).astype(np.float32) / 255.0

    blurred = im.filter(ImageFilter.GaussianBlur(26))
    bg = ImageEnhance.Brightness(blurred).enhance(0.5)
    bg = ImageEnhance.Color(bg).enhance(0.35)
    bg_arr = np.array(bg).astype(np.float32)

    focus3 = focus[:, :, None]
    composited = arr * focus3 + bg_arr * (1 - focus3)

    vcx, vcy = w * 0.5, h * 0.42
    vdist = np.sqrt(((xx - vcx) / (w * 0.75)) ** 2 + ((yy - vcy) / (h * 0.75)) ** 2)
    vignette = 1.0 - np.clip((vdist - 0.55) / (1.3 - 0.55), 0, 1) * 0.42
    composited = composited * vignette[:, :, None]

    composited = np.clip(composited, 0, 255).astype(np.uint8)
    out_im = Image.fromarray(composited)
    out_im = ImageEnhance.Contrast(out_im).enhance(1.1)
    out_im = ImageEnhance.Color(out_im).enhance(0.95)

    out_im.save(out, quality=92)
    return out_im.size


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("src")
    parser.add_argument("out")
    parser.add_argument("--top-crop", type=int, default=0)
    parser.add_argument("--bottom-crop", type=int, default=0)
    parser.add_argument("--focus-x", type=float, default=0.5)
    parser.add_argument("--focus-y", type=float, default=0.5)
    parser.add_argument("--focus-rx", type=float, default=0.3)
    parser.add_argument("--focus-ry", type=float, default=0.4)
    args = parser.parse_args()

    size = edit(
        args.src,
        args.out,
        top_crop=args.top_crop,
        bottom_crop=args.bottom_crop,
        focus_x=args.focus_x,
        focus_y=args.focus_y,
        focus_rx=args.focus_rx,
        focus_ry=args.focus_ry,
    )
    print("Saved", args.out, size)
