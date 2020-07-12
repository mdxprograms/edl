import { setStyle } from '@wallerbuilt/mantle'

export default {
  CardImage: (element) =>
    setStyle([
      ["background-image", 'url("https://tailwindcss.com/img/card-left.jpg")'],
    ])(element),
};