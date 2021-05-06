import React, {useState,useEffect} from 'react';
import {fetachDailyData, fetchDailyData} from '../../api'
const Charts=()=>{

const[dailyData,setDailyData]=useState({});

useEffect(()=>{
     const fetchAPI = async()=>{

         setDailyData(await fetchDailyData());
     }

fetchAPI();
    });

 
    return(

        <h1>Charts</h1>
    );
}

export default Charts;
