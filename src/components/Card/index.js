import { DOM, dispatch } from '@wallerbuilt/mantle'
import CardContentHeader from './CardContentHeader'
import CardImage from './CardImage'
import classes from './classes'

const { div } = DOM

const cardData = {
  title: 'Test title',
  description: 'lorem ipsum goes here',
  content:
    '> Lorem ipsum **dolor** sit amet consectetur adipisicing elit. Nulla, iste minima modi incidunt impedit alias eaque sint minus vitae nesciunt, necessitatibus earum quidem perferendis fugit adipisci obcaecati? Officiis, numquam distinctio!',
}

const CardContent = () =>
  div(
    { className: classes.CardContent },
    div({ className: 'mb-8' }, CardContentHeader())
  )

const Card = () =>
  div({ className: classes.Card }, [CardImage(), CardContent()]).on({
    click() {
      dispatch('editor:load-content', { ...cardData })
    },
  })

export default Card
