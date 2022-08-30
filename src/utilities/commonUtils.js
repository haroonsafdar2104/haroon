import Home from "../PortfolioContainer/Home/Home";
import About from "../PortfolioContainer/About/About";
import Resume from "../PortfolioContainer/Resume/Resume";
import Contact from "../PortfolioContainer/Contact/Contact";
import Portfolio from "../PortfolioContainer/Portfolio/Portfolio";
import Work from "../PortfolioContainer/Work/Work";
export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "About",
    component: About,
  },
  
  {
    screen_name: "Resume",
    component: Resume,
  },

  {
    screen_name: "Portfolio",
    component: Portfolio,
  },

  {
    screen_name: "Experience",
    component: Work,
  },

  {
    screen_name: "Contact",
    component: Contact,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};