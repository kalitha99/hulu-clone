
import { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import request from './request';
import Result from './Result';

function App() {
	const [selectedoption, setselectedoption] = useState(request.fetchTrending)
	return (
		
		<div className="App">
			<Header />
			<Nav setselectedoption={setselectedoption}/>
			<Result selectedoption={selectedoption} />
		</div>
	);
}

export default App;
