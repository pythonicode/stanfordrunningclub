export const header = "WE DO IT ALL";
export const description =
  "Whether you're a total newbie or a seasoned marathoner, we're your running squad! 🏃‍♂️ Join undegrads, grad students, profs, and Stanford presidents for runs whenever you can make it. No pressure, just good vibes and great company. Trust us, there's always someone at your pace ready to hit the trails! Come run with us and see what the hype is all about. 🌲";

export const images = [
  "/src/images/about/1.webp",
  "/src/images/about/2.webp",
  "/src/images/about/3.webp",
  "/src/images/about/4.webp",
  "/src/images/about/6.webp",
  "/src/images/about/7.webp",
  "/src/images/about/8.webp",
  "/src/images/about/9.webp",
  "/src/images/about/10.webp",
  "/src/images/about/11.webp",
  "/src/images/about/12.webp",
] satisfies string[];

export const traditions: Tradition[] = [
  {
    image: "/src/images/about/dishrun.webp",
    title: "Dish Run",
    description:
      "3.25 mile run through the iconic Dish trail at Stanford, sponsored by the Stanford Rec and Wellness in partnership with Stanford Running Club.",
    when: ["Winter"],
  },
  {
    image: "/src/images/about/laglap.webp",
    title: "Liquidy Lag Lap",
    description:
      "Our take on the classic beer mile, but with a twist. Run a lap around Lagunita Lake, drink a beverage each quarter way, and repeat.",
    when: ["Fall", "Spring"],
  },
  {
    image: "/src/images/about/s2s.webp",
    title: "Stanford to Sea",
    description:
      "24 mile run from Stanford to the Pacific Ocean, with a stop at the beach and a ride back to campus.",
    when: ["Spring"],
  },
];

interface Tradition {
  image: string;
  title: string;
  description: string;
  when: ("Fall" | "Winter" | "Spring" | "Summer")[];
}
