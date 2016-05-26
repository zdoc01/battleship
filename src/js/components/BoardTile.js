import React, { PropTypes } from 'react';
import classNames from 'classnames';

const typeClassMap = {
	'1': 'destroyed',
	'2': 'hit',
	'3': 'miss'
};

/**
 * Individual tile in the game board that gives a visual
 * representation of the following:
 *
 * 1. opponent successful hits
 * 2. user successful hits
 * 3. user misses
 * 4. default state (no hits or misses)
 * 
 * @param  {Object} props Component props
 * @return {Object}       The component
 */
const Tile = props => {
	const { type } = props;
	const typeClass = typeClassMap[type] || '';
	const classes = `tile static spin-to-front ${typeClass}`;

	return (
		<div 
			className={classes}
			onClick={ e => {
				const classes = e.target.classList;
				classes.remove('static');
				classes.toggle('spin-to-back');
				classes.toggle('spin-to-front');
			}}>
		</div>
	);
};

Tile.defaultProps = {
	type: '0'
};

Tile.propTypes = {
	type: PropTypes.string
};

export default Tile;
