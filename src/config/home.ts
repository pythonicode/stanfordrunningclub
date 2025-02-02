export const heroImage = "/src/images/hero.webp";
export const heroText = "Run with us.";

export const schedule = {
  claw: {
    image: "/src/images/schedule/claw.webp",
    title: "Claw Run",
    description:
      "A casual group run with a variety of pace groups, distances and routes around campus",
    days: ["Tuesday", "Wednesday"],
    time: "4:15pm",
    location: {
      name: "The Claw",
      url: "",
    },
    difficulty: "easy",
  },
  track: {
    image: "/src/images/schedule/track.webp",
    title: "Track Workout",
    description:
      "Open to all levels of runners with a variety of workouts to help you improve your speed",
    days: ["Monday", "Thursday"],
    time: "6:00pm",
    location: {
      name: "Cobb Track",
      url: "",
    },
    difficulty: "hard",
  },
  fun: {
    image: "/src/images/schedule/fun.webp",
    title: "Fun Run",
    description:
      "An exciting variety of adventures from fountain hopping to ice cream runs",
    days: ["Friday"],
    time: "4:15pm",
    location: {
      name: "The Claw",
      url: "",
    },
    difficulty: "easy",
  },
  long: {
    image: "/src/images/schedule/long.webp",
    title: "Long Run",
    description:
      "Explore the beautiful trails of the Bay Area and test your endurance",
    days: ["Saturday"],
    time: "9:30am",
    location: {
      name: "Escondido Turnaround",
      url: "",
    },
    difficulty: "medium",
  },
} satisfies Record<ScheduleType, ScheduleItem>;

export const joinUsImage = "/src/images/joinus.webp";

export const mailingListURL =
  "https://mailman.stanford.edu/mailman/listinfo/runningclub";

export const calendarURL =
  "https://outlook.office365.com/owa/calendar/3d6c0cdd40fd4f728fb575da26bc71ed@stanford.edu/2689cb5f4a434de5adff799992c3ee3c1962905941190256865/calendar.html";

type ScheduleType = "claw" | "track" | "fun" | "long";

export interface ScheduleItem {
  image: string;
  title: string;
  description: string;
  days: string[];
  time: string;
  location: {
    name: string;
    url: string;
  };
  difficulty: "easy" | "medium" | "hard";
}
