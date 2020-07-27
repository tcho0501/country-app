import React, { useState, useEffect } from 'react';
import FindCountries from './components/FindCountries';
import FindCountriesResults from './components/FindCountriesResults';
import CountryDescription from './components/CountryDescription'
import axios from 'axios'
// import logo from './logo.svg';
// import './App.css';

const App = () => {
  const [findCountriesValue, setFindCountriesValue] = useState([])
  const [countryResults, setCountryResults] = useState([])
  const [singleCountryView, setSingleCountryView] = useState("")

  const handleFindCountriesValueChange = (event) => {
    event.preventDefault()
    console.log('filterValue:', event.target.value)
    setFindCountriesValue(event.target.value)
    setSingleCountryView("")
  }

  const handleInfoButtonClick = (event) => {
    event.preventDefault()
    console.log('Single Country View', event.target.value)
    setSingleCountryView(event.target.value)
  }
  
  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled',response.data)
        setCountryResults(response.data)
      })
  }
  
  useEffect(hook,[])
  console.log('render', countryResults.length, 'countries')

  const countryToShow = countryResults.filter((country) => country.name === singleCountryView)[0]
  console.log(countryToShow)
  
  return (
    <div className="App">
      <h1>Tim's Country App</h1>
      <FindCountries findCountriesValue = {findCountriesValue} handleFindCountriesValueChange = {handleFindCountriesValueChange}/>
      {singleCountryView === "" ? <FindCountriesResults findCountriesValue = {findCountriesValue} countryResults = {countryResults} handleInfoButtonClick = {handleInfoButtonClick}/> : <CountryDescription country = {countryToShow}/>}
    </div>
  );
  
}

export default App;
