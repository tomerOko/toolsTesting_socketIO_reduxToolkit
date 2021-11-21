import React, {useState, useEffect} from "react";
import { Fragment } from "react";
import { useAppSelector } from '../../redux/store';
import {IAccommodationAsDeal} from '../../types/interfaces/search_vication_packages.types'
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import './single_deal_component.css'
import Slider from "react-slick";
import star from './ratingStar.png'; 



const singleDealComponent : React.FC<{data:IAccommodationAsDeal}> = (props) => {
    
    //hooks here
    //life cycle hooks here
    //logic can be here

    var settings = {
        className: "",
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows:false
      };


    return(
        <Fragment>

            <div className="singleDealContainer">
                <div className="carousleContainer">
                    <Slider {...settings}>
                        {
                            props.data.HotelDescriptiveContent.Images.map((img, index)=>{
                                return(
                                    <Fragment>
                                        <img key={index} src={img.URL} className="singleImage" />
                                    </Fragment>
                                     )
                            })
                        }
                    </Slider>
                </div>

                <div className="nameSection">
                    <p className="hotelName">{props.data.HotelName}</p>
                    <div className="starsRate" >
                        {props.data.HotelName.split(" ")[0]}
                        {
                                Array.from({ length: Number(props.data.HotelInfo.Rating) }, (_, k) => (
                                    <img key={k} src={star} className="singleStar" />
                                ))
                        }
                    </div>
                    <div className="skiSiteName"><p>Courchevel | France</p></div>
                </div>
   

                <div className="actionSection">
                    <div className="priceTag">&euro;{props.data.PricesInfo.AmountBeforeTax}</div>
                    <p className="pricePerPErson">price per person</p>
                    <div className="parchuseButton">View Ditails</div>
                </div> 
            </div>
        </Fragment>
    )
}

export default singleDealComponent

//            <div style={{position:"fixed", width:"50vw", height:"50vh", display:"block", backgroundColor:"red"}}>
