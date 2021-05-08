
import React from 'react';
import styles from './App.module.css'
import {fetachData} from './api/index.js'
import Images from './components/Image.js';
import {Cards,Chart,CountryPicker} from './components'
 
class App extends React.Component{

state={
  data:{},
  country:'',
}


  async componentDidMount(){
    const fetchedData = await fetachData();

    this.setState({data:fetchedData});
  }
  handleCountryChange=async(country)=>{
    const fetchedData = await fetachData(country);
    this.setState({data:fetchedData,country:country})
  }
  render(){
    const {data,country}=this.state;
    return(
      <div className={styles.container}>
        <Images/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }
}

export default App;