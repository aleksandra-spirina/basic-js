const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	values: [],

	getLength() {
		return this.values.length;
	},
	addLink(...args) {
		if (args.length > 0) {
			this.values.push('( ' + args[0] + ' )');
		} else {
			this.values.push('( )');
		}
		return this;
	},
	removeLink(position) {
		if (typeof position === "number" && Number.isInteger(position) && (position > 0 && position <= this.values.length)) {
			this.values.splice(position - 1, 1);
		} else {
			this.values = [];
			throw new Error("You can't remove incorrect link!");
		}

		return this;
	},
	reverseChain() {
		this.values = this.values.reverse();
		return this;
	},
	finishChain() {
		let result = this.values.join("~~");
		this.values = [];
		return result;
	}
};

module.exports = {
	chainMaker
};
