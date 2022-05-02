import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import { FiSearch } from 'react-icons/fi';
import './WeatherApp.css';

const WeatherApp = () => {
	const [data, setData] = useState({});
	const [inputValue, setInputValue] = useState('');

	const searchLocation = (event) => {
		if (event.key === 'Enter') {
			axios
				.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=70950661321159feae85c91e43fa5049`
				)
				.then((response) => {
					setData(response.data);
				})
				.catch((error) => console.log(error));
		}
	};

	return (
		<div className="weather__container">
			<div className="wether__up">
				<div className="search__container">
					<div className="searchIcon">
						<FiSearch />
					</div>
					<div className="searchInputContainer">
						<input
							type="text"
							className="searchInput"
							onChange={(e) => setInputValue(e.target.value)}
							value={inputValue}
							placeholder="Enter Location"
							onKeyPress={searchLocation}
						/>
					</div>
				</div>
				<div className="date">
					<Moment format="D MMMM" />
					<span>,</span>
					<Moment format="dddd YYYY" />
				</div>
				{data.name ? (
					<div className="location__container">
						<div className="location__container__left">
							<h2 className="location">{data.name}</h2>
							{data.main ? (
								<p className="degree">{data.main.temp.toFixed(1)} °C</p>
							) : null}
						</div>
						<div className="location__container__right">
							{data.weather ? <p>{data.weather[0].main}</p> : null}
						</div>
					</div>
				) : (
					<p className="select">Select Location</p>
				)}
			</div>
			{data.main ? (
				<div className="wether__down more__info">
					<div>
						<p>Feels Like</p>
						{data.main ? <p>{data.main.feels_like.toFixed(1)} °C</p> : null}
					</div>
					<div>
						<p>Humidity</p>
						{data.main ? <p>{data.main.humidity} %</p> : null}
					</div>
					<div>
						<p>Wind Speed</p>
						{data.wind ? <p>{data.wind.speed.toFixed()} MPH</p> : null}
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default WeatherApp;
