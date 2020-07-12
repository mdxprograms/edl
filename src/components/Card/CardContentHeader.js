import { DOM } from "@wallerbuilt/mantle";

import classes from "./classes";

const { div, p } = DOM;

const CardContentHeader = () =>
  div({ className: classes.CardContentHeader.div }, [
    p({ className: classes.CardContentHeader.leftP }, "Title goes here"),
    p(
      { className: classes.CardContentHeader.rightP },
      "Description goes here..."
    ),
  ]);

export default CardContentHeader;
