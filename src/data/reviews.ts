// Real testimonial text and photos. The first three are pulled from Leroy's
// original website (matched left to right in their original order); the rest
// are real Google reviews supplied directly, each with its own review link.
import { pupilPhotos } from "./pupilPhotos";

export interface Review {
  reviewerName: string;
  initials: string;
  quote: string;
  isAuthorPlaceholder?: boolean;
  image?: string;
  googleUrl?: string;
}

export const reviews: Review[] = [
  {
    reviewerName: "Former pupil",
    initials: "FP",
    isAuthorPlaceholder: true,
    quote:
      "Leroy is very friendly and a great instructor, he has been nothing but patient and understanding with me. I was very nervous when I first started but he has helped me build my confidence — I can't thank him enough.",
    image: pupilPhotos.pass1,
  },
  {
    reviewerName: "Former pupil",
    initials: "FP",
    isAuthorPlaceholder: true,
    quote:
      "Thanks to Leroy's efficient teaching I managed to pass first time! He is a brilliant driving instructor.",
    image: pupilPhotos.pass2,
  },
  {
    reviewerName: "Former pupil",
    initials: "FP",
    isAuthorPlaceholder: true,
    quote:
      "Driving with Leroy helped restore and build my confidence after taking a long break from driving lessons. He was able to adapt to my learning style in building my knowledge of the rules of the road.",
    image: pupilPhotos.pass3,
  },
  {
    reviewerName: "Ben Coxhead",
    initials: "BC",
    quote:
      "Leroy is a highly professional and patient driving instructor who made learning to drive feel clear and manageable. He helped me build the skills and mindset needed to feel genuinely prepared on the road. I recommend him without hesitation.",
    googleUrl: "https://share.google/vtCw2Y44dZ1vFf0h7",
    image: pupilPhotos.benCoxhead,
  },
  {
    reviewerName: "Vikki Page",
    initials: "VP",
    quote:
      "Really good and thorough teaching, Leroy helped me build confidence in driving whilst also ensuring I was constantly learning, improving my driving skills and following all the necessary requirements to pass my test. Happy to say I passed my test first time!",
    googleUrl: "https://share.google/2B6P3xD5garCUoYNI",
    image: pupilPhotos.vikkiPage,
  },
  {
    reviewerName: "Kayla Prior",
    initials: "KP",
    quote:
      "Leroy is an amazing instructor, always making me laugh and not making me feel bad for any mistakes I make in lessons. Super friendly and loved the dog. Passed first time too!",
    googleUrl: "https://share.google/5qMC3zbenaFIaBQAg",
    image: pupilPhotos.kaylaPrior,
  },
  {
    reviewerName: "Michael Brooks",
    initials: "MB",
    quote:
      "Well thought out lesson plans taught in a relaxed fun way to improve my confidence on motorways. Thanks again.",
  },
  {
    reviewerName: "Matilda Hill",
    initials: "MH",
    quote:
      "Highly recommend!! I was so anxious the first few lessons, Leroy was very calm and incredibly patient with me throughout the whole process.",
  },
];
