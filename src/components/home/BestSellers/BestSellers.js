import React from "react";
import {
  bestSellerFour,
  bestSellerOne,
  bestSellerThree,
  bestSellerTwo,
} from "../../../assets/images/index";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

const BestSellers = () => {
    return ( <
        div className = "w-full pb-20" >
        <
        Heading heading = "Our Bestsellers" / >
        <
        div className = "w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10" >
        <
        Product _id = "1011"
        img = { bestSellerOne }
        productName = "Premium Cashews"
        price = "280.00"
        color = " White"
        badge = { true }
        des = " a crunchy, flavorful snack that are high in protein, healthy fats, and other nutrients." /
        >
        <
        Product _id = "1012"
        img = { bestSellerTwo }
        productName = "Premium Raisins"
        price = "250.00"
        color = "Light goldenish"
        badge = { false }
        des = " flavourful, great in taste and long in size. As a consumer, you seek freshness." /
        >
        <
        Product _id = "1013"
        img = { bestSellerThree }
        productName = "Premium Almonds"
        price = "290.00"
        color = "Light brown"
        badge = { true }
        des = " carefully selected almonds are sourced from the finest growers to ensure superior quality and taste." /
        >
        <
        Product _id = "1014"
        img = { bestSellerFour }
        productName = "Premium Almonds"
        price = "290.00"
        color = "Light brown"
        badge = { false }
        des = "These almonds are rich in magnesium, which can help maintain healthy blood pressure levels." /
        >
        <
        /div> < /
        div >
    );
};

export default BestSellers;