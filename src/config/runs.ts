export const campusRoutes: Route[] = [
  {
    title: "Lake Lagunita",
    distance: 1.4,
    climb: 3,
    stravaId: "3108974817069445566",
  },
  {
    title: "Gelato Run",
    distance: 5,
    climb: 14,
    stravaId: "3108975963726591474",
  },
  {
    title: "Stanford Dish",
    distance: 5.5,
    climb: 146,
    stravaId: "3108976253463552008",
  },
  {
    title: "Campus Drive Loop",
    distance: 6.3,
    climb: 30,
    stravaId: "3108978470380824050",
  },
  {
    title: "The CKC",
    distance: 7,
    climb: 36,
    stravaId: "3108982927667866632",
  },
  {
    title: "Oak Creek Loop",
    distance: 7,
    climb: 14,
    stravaId: "3108984987483120062",
  },
  {
    title: "Encyclopedia Cave",
    distance: null,
    climb: null,
    stravaId: null,
    rickroll: true,
  },
  {
    title: "Coyote Hill",
    distance: 8.7,
    climb: 75,
    stravaId: "3108987525059018760",
  },
  {
    title: "Castle",
    distance: 9,
    climb: 68,
    stravaId: "3108986611634307080",
  },
  {
    title: "Menlo Train Station",
    distance: 9.7,
    climb: 14,
    stravaId: "3108989015295481330",
  },
  {
    title: "Duck Pond",
    distance: 10,
    climb: 89,
    stravaId: "3108990460017721790",
  },
  {
    title: "Donkey Run",
    distance: 10.1,
    climb: 39,
    stravaId: "3109573107679458750",
  },
  {
    title: "Menlo Park Loop",
    distance: 11.3,
    climb: 18,
    stravaId: "3109575788534746558",
  },
  {
    title: "The Dish to Alpine",
    distance: 11.4,
    climb: 174,
    stravaId: "3109574542858953368",
  },
  {
    title: "Ikea Run",
    distance: 11.7,
    climb: 30,
    stravaId: "3109576337164720574",
  },
  {
    title: "SEX BEAST",
    distance: 12.1,
    climb: 25,
    stravaId: "3286870377723112614",
  },
  {
    title: "Matadero Creek Trail",
    distance: 12.9,
    climb: 177,
    stravaId: "3109577019576211606",
  },
  {
    title: "Polo Fields",
    distance: 13.4,
    climb: 26,
    stravaId: "3109578256769536446",
  },
];

export const offCampusRoutes: Route[] = [
  {
    title: "Arasteradero West Loop",
    distance: 17.1,
    climb: 153,
    stravaId: "3109579762431542422",
  },
  {
    title: "Woodside Road-Kings Mountain Road-Greer Road",
    distance: 20.05,
    climb: 575,
    stravaId: "3287642501917833444",
  },
  {
    title: "Foothills 10 Miler",
    distance: 16.40,
    climb: 541,
    stravaId: "3328221744167345968",
  },
  {
    title: "Foothills 12.5 Miler",
    distance: 20.08,
    climb: 669.34,
    stravaId: "3328219475672624312",
  },
  {
    title: "Wunderlich Bear Gulch",
    distance: 15.88,
    climb: 603.81,
    stravaId: "3338436106536510854",
  },
  {
    title: "Skyline Ridge Trail, Peters Creek and Canyon Trail",
    distance: 22.92,
    climb: 770.53,
    stravaId: "3338439194181425438",
  },
];

interface Route {
  title: string;
  distance: number | null; // distance in kilometers
  climb: number | null; // elevation gain in meters
  stravaId: string | null; // id of the route on Strava
  rickroll?: boolean;
}
