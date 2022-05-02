import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherApp from './container/WeatherApp/WeatherApp';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<WeatherApp />
		</div>
	);
};

export default App;
