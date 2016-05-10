import React, { PropTypes } from 'react';
import classNames from 'classnames';

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

	const getClassFromType = type => {
		const tmp = {};

		switch(type) {
			case 1:
				tmp.destroyed = true;
				break;
			case 2:
				tmp.hit = true;
				break;
			case 3:
				tmp.miss = true;
				break;
		}

		return tmp;
	};

	const defaultClasses = {
		'tile': true,
		'static': true,
		'spin-to-front': true
	};

	const classes = classNames({
		...defaultClasses,
		...getClassFromType(type)
	});

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
	type: 0
};

Tile.propTypes = {
	type: PropTypes.number
};

export default Tile;
