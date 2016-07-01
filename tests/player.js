"use strict";

const expect = require("chai").expect;

const playerModel = require("../models/player");
const deckModel = require("../models/deck")
const handModel = require("../models/hands");

let player;
let hands;

describe("Player Model - New Player", () => {
	before(() => {
		hands = handModel.newHands(deckModel.shuffleDeck(deckModel.newDeck(52)));
		player = playerModel.newPlayer("test", hands[0]);
	});

	it("player should be a valid object", (done) => {
		expect(player).to.not.be.an("undefined");
		expect(player).to.be.an("object");
		return done();
	});

	it("player should have required properties", (done) => {
		expect(player).to.have.property("id");
		expect(player).to.have.property("name");
		expect(player).to.have.property("hand");
		expect(player).to.have.property("tricks");
		return done();
	});

	it("player should have the correct starting values", (done) => {
		// TODO: connect to actual ID generation
		expect(player.id).to.equal(0);
		expect(player.name).to.equal("test");
		expect(player.hand).to.be.an("array");
		expect(player.hand.length).to.equal(13);
		expect(player.tricks).to.be.an("array");
		expect(player.tricks.length).to.equal(0);
		return done();
	});
});
