import React from 'react';
import "./styles.css";
import { CiLocationOn } from "react-icons/ci";
import { useState, useContext } from "react";
import postServices from '../../services/postServices';
import { AuthContext } from '../../contexts/auth';
import {postsData} from "../../pages/HomePage";



const EventsMap: React.FC<postsData> = ({title, description, place, data, price, photo, id}: postsData) => {

   
  return (
    <div className='event-container'>
      <div className='event-content'>
        <img src={photo} alt="" className='image' style={{ width: 150, height: 150 }} />
        <div className='event-texts'>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className='icon-place'>
                <p className='place'>{place}</p>
                <CiLocationOn style={{color: "#FFB74A"}}/>
            </div>
            
            <p>{data}</p>
            <p>{price}</p>
        </div>   
      </div>
    </div>
  );
}

export default EventsMap;
