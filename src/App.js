
import React from 'react';
import styles from './App.module.css'
import {fetachData} from './api/index.js'

import {Cards,Chart,CountryPicker} from './components'
 
class App extends React.Component{

state={
  data:{},
}


  async componentDidMount(){
    const fetchedData = await fetachData();

    this.setState({data:fetchedData});
  }
  render(){
    const {data}=this.state;
    return(
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker/>
        <Chart/>
      </div>
    )
  }
}

export default App;