// Real pupil photos for the Passed Pupils gallery. Badges only claim
// "Passed First Time" where the matching review/testimonial explicitly says
// so — see reviews.ts for the source quotes these were paired with.
import { pupilPhotos } from "./pupilPhotos";

export interface RealPupil {
  image?: string;
  badge: "Passed First Time" | "Passed";
}

export const realPupils: RealPupil[] = [
  { image: pupilPhotos.pass1, badge: "Passed" },
  { image: pupilPhotos.pass2, badge: "Passed First Time" },
  { image: pupilPhotos.pass3, badge: "Passed" },
  { image: pupilPhotos.benCoxhead, badge: "Passed" },
  { image: pupilPhotos.vikkiPage, badge: "Passed First Time" },
  { image: pupilPhotos.kaylaPrior, badge: "Passed First Time" },
];

export const placeholderPupilSlots = 1;
