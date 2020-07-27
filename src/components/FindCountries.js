import React from 'react';

const FindCountries = ({findCountriesValue, handleFindCountriesValueChange}) => {
    // console.log('renderingFindCountries')
    return (
        <div>
          Find Countries:<input value = {findCountriesValue} onChange = {handleFindCountriesValueChange}/>
        </div>
    );
}

export default FindCountries;