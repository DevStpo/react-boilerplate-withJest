import React from 'react'
import ReactDOM from 'react-dom'
import { FavoriteNumber } from '../favorite-number'
test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElementNS('div')
  ReactDOM.render(<FavoriteNumber />, div)
  console.log(div.innerHTML)
})
