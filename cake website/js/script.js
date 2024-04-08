// import images as relative image path won't work with vite/vercel.
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import sushi12 from '../assets/sushi-12.png'
import sushi11 from '../assets/sushi-11.png'
import sushi10 from '../assets/sushi-10.png'

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

const trendingTreats = [
  "Cupcakes",
  "Brownies",
  " Macarons",
  "Cheesecake",
  "Truffles",
  "Ice Cream",
];

const trendingDrinks = [
  " Milkshakes",
  "Smoothies",
  "Hot Chocolate",
  "Frappuccinos",
  "Fruit Punch",
  "Bubble Tea",
]

const cards = [
  {
    imgSrc: sushi12,
    alt: "sushi-12",
    title: "Cookies",
    rating: "4.8",
    price: "$15.00"
  },
  {
    imgSrc: sushi11,
    alt: "sushi-11",
    title: "Swiss Rol",
    rating: "4.8",
    price: "$21.00",
    active: true
  },
  {
    imgSrc: sushi10,
    alt: "sushi-10",
    title: "Cake",
    rating: "4.8",
    price: "$70.00"
  }
];