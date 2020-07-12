import { dispatch, DOM } from "@wallerbuilt/mantle";
import Card from "../Card";

const { div, nav, aside, button } = DOM;

const Cards = () => [Card(), Card()];

const NavContent = div(
  {
    id: "nav-content",
    className:
      "py-4 hidden opacity-0 w-full flex flex-wrap justify-around items-center",
  },
  Cards()
).when({
  "nav:toggle": (self) => {
    self.classList.toggle("hidden");
    self.classList.toggle("opacity-0");
  },
});

const Nav = nav(
  {
    className:
      "flex flex-col bg-white text-gray-700 border-b border-gray-200 z-40",
  },
  [
    button({ className: "bg-black text-white w-full py-3" }, "Menu").on({
      click() {
        dispatch("nav:toggle");
      },
    }),
    NavContent,
  ]
);

export default Nav;
