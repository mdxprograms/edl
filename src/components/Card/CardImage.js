import { DOM } from '@wallerbuilt/mantle'

import withStyle from './styles'
import classes from './classes'

const { div } = DOM

const CardImage = () => withStyle.CardImage(
  div({ className: classes.CardImage }, '')
)

export default CardImage

