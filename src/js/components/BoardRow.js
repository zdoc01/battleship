import React from 'react';
import Tile from './BoardTile';

const BoardRow = props => {
	const { size } = props;

	let tiles = [];
	for (let i = 0; i < size; i++) {
		tiles.push(<Tile key={'tile-' + i} />);
	}

	return (
		<div className="row clearfix">
			{tiles}
		</div>
	);
};

BoardRow.defaultProps = {
	size: 10
};

export default BoardRow;
