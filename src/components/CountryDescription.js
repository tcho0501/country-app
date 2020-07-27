import React from 'react';
// import axios from 'axios'

const CountryDescription = ({country}) => {
    // console.log('renderingFindCountries')
    // TODO: add weather capabilities
    
    console.log(country.flag)
    return (
        <div>
          <h1>{country.name}</h1>
          <img src = {country.flag} alt = {"Flag loading..."} width = {"100px"}/>
          <p> <b>Capital: </b>{country.capital}</p>
          <p> <b>Population: </b>{country.population}</p>
          <h3> Languages </h3>
          <ul>
            {country.languages.map((language,index) => <li key = {index}> {language.name} </li>)}
          </ul>
        </div> 
    );
}

export default CountryDescription;