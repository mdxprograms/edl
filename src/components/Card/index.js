import { DOM } from "@wallerbuilt/mantle";
import CardContentHeader from "./CardContentHeader";
import CardImage from "./CardImage";
import classes from "./classes";

const { div, p, img, span } = DOM;

const CardContent = () =>
  div(
    { className: classes.CardContent },
    div({ className: "mb-8" }, CardContentHeader())
  );

const Card = () =>
  div({ className: classes.Card }, [CardImage(), CardContent()]);

export default Card;
