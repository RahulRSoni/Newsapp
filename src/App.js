import React, { useState } from 'react';
import NevBar from './component/NevBar';
import NewCom from './component/NewCom';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
	const pageSize = 21;
	const apiKey = '94e840931ac84c148083df566033915a';
	const [progress, setProgress] = useState(0);

	return (
		<div>
			<NevBar />
			<LoadingBar
				color='#f11946'
				height={3}
				progress={progress}
			/>
			<Routes>
				<Route
					path='/'
					element={
						<NewCom
							setProgress={setProgress}
							apiKey={apiKey}
							key='general'
							pageSize={pageSize}
							country='in'
							category='general'
						/>
					}></Route>
				<Route
					exect
					path='/business'
					element={
						<NewCom
							setProgress={setProgress}
							apiKey={apiKey}
							key='business'
							page
							Size={pageSize}
							country='in'
							category='business'
						/>
					}></Route>
				<Route
					exect
					path='/entertainment'
					element={
						<NewCom
							setProgress={setProgress}
							apiKey={apiKey}
							key='entertainment'
							pageSize={pageSize}
							country='in'
							category='entertainment'
						/>
					}></Route>
				<Route
					exect
					path='/general'
					element={
						<NewCom
							setProgress={setProgress}
							apiKey={apiKey}
							key='general'
							pageSize={pageSize}
							country='in'
							category='general'
						/>
					}></Route>
				<Route
					exect
					path='/health'
					element={
						<NewCom
							setProgress={setProgress}
							apiKey={apiKey}
							key='health'
							pageSize={pageSize}
							country='in'
							category='health'
						/>
					}></Route>
				<Route
					exect
					path='/science'
					element={
						<NewCom
							setProgress={setProgress}
							apiKey={apiKey}
							key='science'
							pageSize={pageSize}
							country='in'
							category='science'
						/>
					}></Route>
				<Route
					exect
					path='/sports'
					element={
						<NewCom
							setProgress={setProgress}
							apiKey={apiKey}
							key='sports'
							pageSize={pageSize}
							country='in'
							category='sports'
						/>
					}></Route>
				<Route
					exect
					path='/technology'
					element={
						<NewCom
							setProgress={setProgress}
							apiKey={apiKey}
							key='technology'
							pageSize={pageSize}
							country='in'
							category='technology'
						/>
					}></Route>
			</Routes>
		</div>
	);
};

export default App;
