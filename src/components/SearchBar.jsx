import React, { useState, useEffect } from 'react';
import '../App.css';

export const SearchBar = (props) => {
  const RecievefromChild  = props.RecievefromChild;

  const [searchvalue, setsearchvalue] = useState('');
  const [flag, setFlag] = useState(false);
  const [btnFlag, setBtnFlag] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [cityName, setCityName] = useState('');
  const [celsiusHeading, setCelsiusHeading] = useState('');
  const [celsiusTemp, setCelsiusTemp] = useState('');
  const [fahrenheitHeading, setFahrenheitHeading] = useState('');
  const [fahrenheitTemp, setFahrenheitTemp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [dataforParent, setdataforParent] = useState({
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

  useEffect(() => {
    setdataforParent({
      searchvalue,
      flag,
      btnFlag,
      empty,
      cityName,
      celsiusHeading,
      celsiusTemp,
      fahrenheitHeading,
      fahrenheitTemp,
      errorMessage
    });
  }, [searchvalue, flag, btnFlag, empty, cityName, celsiusHeading, celsiusTemp, fahrenheitHeading, fahrenheitTemp, errorMessage]);

  useEffect(() => {
    RecievefromChild(dataforParent);
  }, [dataforParent]);

  const handleClick = (e) => {
    if (e.key === "Enter") {
      fetchData();
    }
  };

  const fetchData = () => {
    if (searchvalue.trim() === '') {
      setErrorMessage('Please enter a city name');
      setEmpty(true);
      setCityName('');
      setCelsiusHeading('');
      setCelsiusTemp('');
      setFahrenheitHeading('');
      setFahrenheitTemp('');
      return;
    } else {
      setEmpty(false);
    }

    setErrorMessage('');
    setCityName('');
    setCelsiusHeading('');
    setCelsiusTemp('');
    setFahrenheitHeading('');
    setFahrenheitTemp('');
    setFlag(true);
    setBtnFlag(true);

    fetch(`http://api.weatherapi.com/v1/current.json?key=cd54a8e95e254465bfa115318241507&q=${searchvalue}&aqi=no`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.current.temp_c, data.current.temp_f);
        setFlag(false);
        setBtnFlag(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setFlag(false);
        setBtnFlag(false);
        handleError();
      });
  };

  const setData = (data_cel, data_Fahren) => {
    setCityName(searchvalue);
    setCelsiusHeading("Celsius Temperature is");
    setCelsiusTemp(data_cel + '°C');
    setFahrenheitHeading("Fahrenheit Temperature is");
    setFahrenheitTemp(data_Fahren + "°F");
  };

  const handleError = () => {
    setErrorMessage("Error while fetching data");
    setCelsiusHeading('');
    setCelsiusTemp('');
    setFahrenheitHeading('');
    setFahrenheitTemp('');
  };

  return (
    <>
      <input
        type="text"
        id="data"
        placeholder="Enter Here"
        onKeyDown={handleClick}
        value={searchvalue}
        onChange={(e) => setsearchvalue(e.target.value)}
      />
      <button
        disabled={btnFlag}
        className="btn"
        onClick={fetchData}
      >
        Search
      </button>
    </>
  );
};
