import React, {useState} from "react";
import { Fragment } from "react";
import { useAppSelector } from '../../redux/store';
import {IAccommodationAsDeal} from '../../types/interfaces/search_vication_packages.types'
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import './single_deal_component.css'
import Slider from "react-slick";


const singleDealComponent : React.FC<{data:IAccommodationAsDeal}> = (props) => {
    
    //hooks here
    //life cycle hooks here
    //logic can be here

    var settings = {
        className: "",
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      };

    return(
        <Fragment>
            <div className="singleDealContainer">
                <div className="carousleContainer">
                    <Slider {...settings}>
                        {
                            props.data.HotelDescriptiveContent.Images.map((img, index)=>{
                                return(
                                    <div key={index}>
                                        <img src={img.URL} className="singleImage" />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
                <span></span>
                <div>
                    <p style={{fontSize:"22px"}}>{props.data.HotelName}</p>
                    <p>price: {props.data.PricesInfo.AmountAfterTax}$ (tax included)</p>
                    <p>rating: {props.data.HotelInfo.Rating}/5</p>
                </div>
            </div>
        </Fragment>
    )
}

export default singleDealComponent

//            <div style={{position:"fixed", width:"50vw", height:"50vh", display:"block", backgroundColor:"red"}}>
