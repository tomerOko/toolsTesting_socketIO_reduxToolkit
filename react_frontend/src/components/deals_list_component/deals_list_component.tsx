import React, {useState} from "react";
import { Fragment } from "react";
import { useAppSelector } from '../../redux/store';
import {IAccommodationAsDeal} from '../../types/interfaces/search_vication_package.types'
import './'


const DealsListComponent = (props:any) => {

    //hooks here
    const accommodations:IAccommodationAsDeal[] = useAppSelector(state => state.DealsFromServerReducer.accommodations)


    //life cycle hooks here


    //logic can be here

    
    //the final tsx component here
    return(
        <Fragment>
            <div className="listAreaScrollable">
                {accommodations.map((accommodation) => (
                    <div>
                        name : {accommodation.HotelName}
                        beds : {accommodation.HotelInfo.Beds}
                        {accommodation.HotelInfo.Position}
                        {/* add some maps provider in push the coordinates in */}
                        {accommodation.HotelInfo.Rating}
                        {/* add some starts components that get number as a prop and show it */}
                        {/* todo - style this hole  */}
                        {/* todo - add some photos from the discription */}
                    </div>
                ))}
            </div>
            <button>
                new search
                {/*todo - a link back to the form component */}
                {/* change it to a material button */}
            </button>
        
           
        </Fragment>
    )
}

export default DealsListComponent
