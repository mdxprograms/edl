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
  div({ className: classes.Card }, [CardImage(), CardContent()]);

export default Card;
