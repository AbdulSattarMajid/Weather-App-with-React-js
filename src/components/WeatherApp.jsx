import React, { useState } from 'react';
import { SearchBar } from './SearchBar'
import { Body } from './Body'
import '../App.css'

export const WeatherApp = () => {
    const [parentData, setparentData] = useState({
        searchvalue: '',
        flag: false,
        btnFlag: false,
        empty: false,
        cityName: '',
        celsiusHeading: '',
        celsiusTemp: '',
        fahrenheitHeading: '',
        fahrenheitTemp: '',
        errorMessage: ''
    });
    
    const RecievefromChild = (ChildData) => {
        setparentData(ChildData);
    }

    return (
        <div className="container">
            <h1>Weather App</h1>
            <div className="for-style">
                <SearchBar RecievefromChild={RecievefromChild} />
                <Body empty={parentData.empty} errorMessage={parentData.errorMessage} cityName={parentData.cityName} celsiusHeading={parentData.celsiusHeading} flag={parentData.flag} celsiusTemp={parentData.celsiusTemp} fahrenheitHeading={parentData.fahrenheitHeading} fahrenheitTemp={parentData.fahrenheitTemp} />
            </div>
        </div>
    );
}

