import React,{useEffect,useState} from 'react';
import {NativeSelect,FromControl} from '@material-ui/core'
import styles from './CountryPicker.module.css';
import {fetchcountries} from '../../api' 
import { VerifiedUserRounded } from '@material-ui/icons';


const CountryPicker=({handleCountryChange})=>{ 

const [fetchedcountries,setfetchedcountries]=useState([]);

 useEffect(()=>{ 

    

     const fetchAPI=async()=>{
         setfetchedcountries(await fetchcountries());
     }
     fetchAPI();
 },[setfetchedcountries]);
 
    return(

        <formControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
    <option value=''>Global</option>


    {fetchedcountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </formControl>
    );
} 

export default CountryPicker;
