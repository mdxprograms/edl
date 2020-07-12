import { dispatch, DOM } from "@wallerbuilt/mantle";
import Card from "../Card";
import classes from "./classes";

const { div, nav, aside, button } = DOM;

const Cards = () => [Card(), Card()];

const NavContent = div(
  { id: "nav-content", className: classes.NavContent },
  Cards()
).when({
  "nav:toggle": (self) => {
    self.classList.toggle("hidden");
    self.classList.toggle("opacity-0");
  },
});

const Nav = nav({ className: classes.Nav }, [
  button({ className: classes.NavButton }, "Menu").on({
    click() {
      dispatch("nav:toggle");
    },
  }),
  NavContent,
]);

export default Nav;
