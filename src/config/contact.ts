import { mailingListURL } from "./home";

export { mailingListURL };

export const contacts: ContactGroup[] = [
  {
    role: "Co-President",
    people: [
      {
        name: "David Walton",
        email: "dawalton@stanford.edu",
        image: "/src/images/contact/david.png",
      },
      {
        name: "Juliet Horenziak",
        email: "jhornezi@stanford.edu",
        image: "/src/images/contact/julieth.jpg",
      },
    ],
  },
  {
    role: "Webmaster",
    people: [
      {
        name: "Anthony Riley",
        email: "anthonyjriley@gmail.com",
        image: "/src/images/contact/anthony.jpg",
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
