import { mailingListURL } from "./home";

export { mailingListURL };

export const contacts: ContactGroup[] = [
  {
    role: "Co-President",
    people: [
      {
        name: "Spencer Seay",
        email: "spenseay@stanford.edu",
        image: "/images/contact/spencer.jpg",
      },
      {
        name: "Oriana Riley",
        email: "oriley@stanford.edu",
        image: "/images/contact/oriana.jpg",
      },
    ],
  },
  {
    role: "Webmaster",
    people: [
      {
        name: "Anthony Riley",
        email: "anthonyjriley@gmail.com",
        image: "/images/contact/anthony.jpg",
      },
    ],
  },
];

interface Contact {
  name: string;
  email: string;
  image: string;
}

interface ContactGroup {
  role: string;
  people: Contact[];
}