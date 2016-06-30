"use strict";

/**
 * Player Model
 * In charge of all things dealing with the player object
 *
 */

module.exports = {
	/**
	* newPlayer
	* Creates a new player object and returns it
	*
	* @param {string} name - The name of the player to create
	* @returns {object} player -  The player object
	*/
	newPlayer: (name) => {
		const player = {
			// TODO: add an actual id
			id: 0,
			name: name,
			// TODO: generate a hand based off newHand in the hand model
			hand: [],
			tricks: []
		};
		return player;
	}
};