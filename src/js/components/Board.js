import React, { PropTypes } from 'react';
import Row from './BoardRow';

const Board = props => {
	const { size } = props;

	let rows = [];
	for (let i = 0; i < size; i++) {
		rows.push(<Row key={'row-' + i} size={size} />);
	}

	return (
		<div className="board clearfix">
			{rows}
		</div>
	);
};

Board.defaultProps = {
	size: 10
};

export default Board;
