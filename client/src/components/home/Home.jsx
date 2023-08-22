import React from 'react'
import Hero from '../hero/Hero'
import classes from './home.module.css'
import Foods from '../foods/Foods'
import Newsletter from "../newsletter/Newsletter"
import fastfood from "../../assests/pizza.jpg";
import food from "../../assests/food.png";
import delivery from "../../assests/delivery.png"


const Home = () => {
  return (
    <div className={classes.container}>
    <div className={classes.wrapper}>
      <Hero />
      <div className={classes.delivery}>
        <div className={classes.titles}>
          <span className={classes.deliverySubtitle}>Delivery</span>
          <h2 className={classes.deliveryTitle}>Always on <span>time</span> for you</h2>
        </div>
        <div className={classes.deliveryInfos}>
          <div className={classes.deliveryInfo}>
            <img src={delivery} alt="" className={classes.firstImg}/>
            <h3>Our delivery guy is always on time</h3>
          </div>
          <div className={classes.deliveryInfo}>
            <img src={fastfood} alt="" className={classes.secondImg}/>
            <h3>He works very hard</h3>
          </div>
          <div className={classes.deliveryInfo}>
            <img src={food} alt="" className={classes.thirdImg}/>
            <h3>He is friendly and social</h3>
          </div>
        </div>
      </div>
      <Foods />
      <Newsletter />
    </div>
  </div>
  )
}

export default Home