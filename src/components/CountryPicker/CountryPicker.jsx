import React,{useEffect,useState} from 'react';
import {NativeSelect,FromControl} from '@material-ui/core'
import styles from './CountryPicker.module.css';
import {countries} from '../../api' 
import { VerifiedUserRounded } from '@material-ui/icons';


const CountryPicker=()=>{ 

const [fetchedcountries,setfetchedcountries]=useState([]);

 useEffect(()=>{ 

    

     const fetchAPI=async()=>{
         setfetchedcountries(await fetchcountries());
     }
     fetchAPI();
 },[setfetchedcountries]);
 console.log(fetchedcountries);
    return(

        <formControl className={styles.formControl}>
            <NativeSelect>
    <option value='global'>Global</option>
            </NativeSelect>
        </formControl>
    );
}

export default CountryPicker;
