import React from 'react';
import {useLocation} from 'react-router-dom';


export default function Detail(){

    const location = useLocation();
    const {cardImg} = location.state;
    
    return(
        <div>
            <img src = {cardImg}></img>
        </div>
    );
}