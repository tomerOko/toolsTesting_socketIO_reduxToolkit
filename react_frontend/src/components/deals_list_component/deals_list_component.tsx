import React, {useState} from "react";
import { Fragment } from "react";
import { useAppSelector } from '../../redux/store';
import {IAccommodationAsDeal} from '../../types/interfaces/search_vication_packages.types'
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import SingleDealComponent from "../single_deal_component/single_deal_component";
import "./deals_list_component.css"
import { MaterialFormComponent } from "../material_form_component/material_form_component";

const DealsListComponent : React.FC = (props:any) => {

    //hooks here
    const accommodations:IAccommodationAsDeal[] = useAppSelector(state => state.DealsFromServerReducer.accommodations)

    //life cycle hooks here
    //logic can be here

    return(
        <Fragment>
            <div className="dealsListContainer">
                <MaterialFormComponent/>
                <div className="centeredList" id="style-7">
                    {
                    accommodations.map((accommodation, index) =>  <SingleDealComponent key={index} data={accommodation}/>)
                    }
                </div>  
                </div>
        </Fragment>
    )
}

export default DealsListComponent
