import React from 'react';
import Board from './Board';
import Chat from '../containers/Chat';

const App = props => {
	return (
		<section>
			<h1>Welcome to Battleship!</h1>
			<div className="content-wrapper">
				<div className="col col-sm left"></div>
				<div className="col col-lg">
					<Board />
				</div>
				<div className="col col-sm right">
					<Chat />
				</div>
			</div>
		</section>
	);
};

export default App;
