const baseURL = "buildwithbuds.vercel.app";

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": false  ,
  "/gallery": true,
};

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true,
};

const style = {
  theme: "dark", // dark | light
  neutral: "slate", // sand | gray | slate
  brand: "blue", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "color", // color | contrast
  solidStyle: "plastic", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
};

const effects = {
  mask: {
    cursor: true,
    x: 0,
    y: 0,
    radius: 60,
  },
  gradient: {
    display: true,
    x: 0,
    y: 0,
    width: 100,
    height: 40,
    tilt: -45,
    colorStart: "accent-background-strong",
    colorEnd: "static-transparent",
    opacity: 90,
  },
  dots: {
    display: false,
    size: 20,
    color: "accent-on-background-medium",
    opacity: 50,
  },
  lines: {
    display: false,
    color: "brand-alpha-strong",
    opacity: 100,
  },
  grid: {
    display: true,
    color: "accent-alpha-medium",
    opacity: 100,
  },
};

const display = {
  location: false,
  time: false,
};

const mailchimp = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: true,
      x: 100,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      x: 100,
      y: 50,
      width: 100,
      height: 100,
      tilt: 25,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
      opacity: 70,
    },
    dots: {
      display: false,
      size: 24,
      color: "brand-on-background-weak",
      opacity: 100,
    },
    lines: {
      display: false,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
    grid: {
      display: false,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
  },
};

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL };
