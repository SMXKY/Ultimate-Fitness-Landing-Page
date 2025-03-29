import { navLinksAnimation } from "./animations/navLinks.animation.js";
import { snapBackToCurrentLocationLink } from "./animations/navLinks.animation.js";
import {
  navigateAnimation,
  sideBarNavigateAnimation,
} from "./animations/navigate.anmimation.js";
import { hamburgerMenuAnimation } from "./animations/harmbugerMenu.animation.js";
import { navBarAnimation } from "./animations/navBar.animation.js";

snapBackToCurrentLocationLink();
navLinksAnimation();
navigateAnimation();
sideBarNavigateAnimation();
hamburgerMenuAnimation();
navBarAnimation();
