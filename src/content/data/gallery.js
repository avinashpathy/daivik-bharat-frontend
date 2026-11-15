import kotilingeshwara1 from "../../assets/gallery/kotilingeshwara-1.jpg";
import kotilingeshwara2 from "../../assets/gallery/kotilingeshwara-2.jpg";
import puri1 from "../../assets/gallery/puri-1.jpg";
import puri2 from "../../assets/gallery/puri-2.jpg";

export const images = { "puri-1": puri1, "puri-2": puri2, "kotilingeshwara-1": kotilingeshwara1, "kotilingeshwara-2": kotilingeshwara2 };

export const albums = [
  {
    slug: "puri-jagannath-temple",
    name: "Shri Jagannath Temple",
    place: "Puri, Odisha",
    photos: [
      { src: puri2, alt: "The shikhara of the Jagannath Temple against a cloudy sky, with smaller white temple towers in front" },
      { src: puri1, alt: "Close-up of the Jagannath Temple shikhara with the Nila Chakra and flag on top" },
    ],
  },
  {
    slug: "kotilingeshwara-temple",
    name: "Kotilingeshwara Temple",
    place: "Kammasandra, Kolar, Karnataka",
    photos: [
      { src: kotilingeshwara1, alt: "Rows of Shiva lingas on colourful platforms in the Kotilingeshwara temple complex" },
      { src: kotilingeshwara2, alt: "Shiva lingas in front of a shrine at Kotilingeshwara, with visitors walking between them" },
    ],
  },
];
