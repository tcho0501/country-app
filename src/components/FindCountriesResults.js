import React from 'react';
import CountryDescription from './CountryDescription'

const FindCountriesResults = ({findCountriesValue, countryResults, handleInfoButtonClick}) => {
    console.log(findCountriesValue, countryResults)
    console.log(countryResults)
    
    if (findCountriesValue.length === 0) {
        return (<p>Please enter a search value...</p>)
    }
    if (countryResults.length === 0) {
        return (<p>Loading...</p>)
    }

    const countriesToShow = countryResults.filter((value) => { return(value.name.includes(findCountriesValue))})

    if (countriesToShow.length > 10) {
        return (<p>More than 10 results, please filter search further...</p>)
    } else {
        if (countriesToShow.length === 1) {
            return (<CountryDescription country = {countriesToShow[0]}/>)
        }
        return (
            <div>
                {countriesToShow.map((country, i) => (
                    <p key = {i}>
                        {country.name} <button type={"submit"}  value = {country.name} onClick = {handleInfoButtonClick}>info</button>
                    </p>
                    
                ))}
            </div>
            
        )
    }
    
}

export default FindCountriesResults;