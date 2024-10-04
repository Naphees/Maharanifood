import React from "react";
import Slider from "react-slick";
import {
  newArrFour,
  newArrOne,
  newArrThree,
  newArrTwo,
} from "../../../assets/images/index";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: < SampleNextArrow / > ,
        prevArrow: < SamplePrevArrow / > ,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };
    return ( <
        div className = "w-full pb-16" >
        <
        Heading heading = "New Arrivals" / >
        <
        Slider {...settings } >
        <
        div className = "px-2" >
        <
        Product _id = "100001"
        img = { newArrOne }
        productName = "Premium Cashews"
        price = "280.00"
        color = "White"
        badge = { true }
        des = "crunchy, flavorful, and high in protein, magnesium, and phosphorus." /
        >
        <
        /div> <
        div className = "px-2" >
        <
        Product _id = "100002"
        img = { newArrTwo }
        productName = "Premium Raisins"
        price = "250.00"
        color = "Light goldenish"
        badge = { true }
        des = "a type of dried fruit that can be a healthy snack or used in cooking." /
        >
        <
        /div> <
        div className = "px-2" >
        <
        Product _id = "100003"
        img = { newArrThree }
        productName = "Premium Almonds"
        price = "290.00"
        color = "Light brown"
        badge = { true }
        des = "They are fully edible, although most people find the shell a bit bitter and avoid eating them." /
        >
        <
        /div> <
        div className = "px-2" >
        <
        Product _id = "100004"
        img = { newArrFour }
        productName = "Premium Almonds"
        price = "290.00"
        color = "Light brown"
        badge = { false }
        des = " little powerhouses of Fiber, Protein, Vitamin E, Antioxidants and Minerals." /
        >
        <
        /div> <
        div className = "px-2" >
        <
        Product _id = "100005"
        img = { newArrTwo }
        productName = "Funny toys for babies"
        price = "60.00"
        color = "Mixed"
        badge = { false }
        des = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis." /
        >
        <
        /div> < /
        Slider > <
        /div>
    );
};

export default NewArrivals;