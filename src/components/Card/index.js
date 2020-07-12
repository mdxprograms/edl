import { DOM, setStyle, append, setProp, compose } from "@wallerbuilt/mantle";
import CardImage from './CardImage'
import CardContentHeader from './CardContentHeader'

import classes from './classes'
import withStyle from './styles'

const { div, p, img, span } = DOM;

const CardContent = () => div({ className: classes.CardContent },
  div({ className: "mb-8" }, CardContentHeader())
);

const Card = () =>
  div(
    {
      className: "w-full px-4 md:w-1/3 lg:w-1/2 lg:flex mb-5 lg:justify-center",
    },
    [CardImage(), CardContent()]
  );

export default Card;
