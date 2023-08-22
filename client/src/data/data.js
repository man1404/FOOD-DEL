import burger1 from '../assests/burger1.png'
import burger2 from '../assests/burger2.png'
import burger3 from '../assests/burger3.png'
import burger4 from '../assests/burger4.png'
import burger5 from '../assests/burger5.png'

import fries1 from '../assests/fries1.png'
import fries2 from '../assests/fries2.png'
import fries3 from '../assests/fries3.png'
import fries4 from '../assests/fries4.png'
import fries5 from '../assests/fries5.png'

import pizza1 from '../assests/pizza1.jpg'
import pizza2 from '../assests/pizza2.jpg'
import pizza3 from '../assests/pizza3.jpg'
import pizza4 from '../assests/pizza4.jpg'
import pizza5 from '../assests/pizza5.jpg'

import pasta1 from '../assests/pasta1.jpeg'
import pasta2 from '../assests/pasta2.jpeg'
import pasta3 from '../assests/pasta3.jpeg'
import pasta4 from '../assests/pasta4.jpeg'
import pasta5 from '../assests/pasta5.jpeg'

export const foodTypes = [
    {
        name: 'burger',
        img: burger1,
        id: crypto.randomUUID()
    },
    {
        name: 'fries',
        img: fries1,
        id: crypto.randomUUID()
    },
    {
        name: 'pizza',
        img: pizza1,
        id: crypto.randomUUID()
    },
    {
        name: 'pasta',
        img: pasta1,
        id: crypto.randomUUID()
    },
]


// 24 foods (6 burger, 6 fries, 6 pizza, 6 pasta)
export const foods = [
    {
        name: 'Burger 1',
        category: 'burger',
        img: burger1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 2',
        category: 'burger',
        img: burger2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 3',
        category: 'burger',
        img: burger3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 4',
        category: 'burger',
        img: burger4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 5',
        category: 'burger',
        img: burger5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 1',
        category: 'pizza',
        img: pizza1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 2',
        category: 'pizza',
        img: pizza2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 3',
        category: 'pizza',
        img: pizza3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 4',
        category: 'pizza',
        img: pizza4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 5',
        category: 'pizza',
        img: pizza5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'fries 1',
        category: 'fries',
        img: fries1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'fries 2',
        category: 'fries',
        img: fries2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'fries 3',
        category: 'fries',
        img: fries3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'fries 4',
        category: 'fries',
        img: fries4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'fries 5',
        category: 'fries',
        img: fries5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 1',
        category: 'pasta',
        img: pasta1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 2',
        category: 'pasta',
        img: pasta2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 3',
        category: 'pasta',
        img: pasta3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 4',
        category: 'pasta',
        img: pasta4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 5',
        category: 'pasta',
        img: pasta5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
]
//module.exports = {foodTypes,foods};