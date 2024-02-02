import React, { useState } from 'react';
import { Switch, Route,useHistory } from 'react-router-dom';
import './App.css';
import Home from './Components/HomeScreen';
import SearchScreen from './Components/SearchScreen';
import { searchData } from './api/GoogleSearch';






const App=()=>{         
  const history =useHistory();
  const [searchTerm,setSearchTerm]=useState('fullyWorld');
  const [googleData,setGoogleData]=useState({});
  
  const setSearch= async(term)=>{
    setSearchTerm(term);
    
   const data = await searchData(term);
   setGoogleData(data);
    history.push('/search');
    console.log(data);

    
  }
   return (
    
    
      <div className="App">
        <Switch>
          <Route exact path= {'/'} component={()=><Home setSearch={setSearch} />}/>
          <Route exact path={'/search'} component={()=> <SearchScreen searchTerm= {searchTerm} />} />
        </Switch>
   
      
      </div>
   
  
    
  );
   }


export default App;
