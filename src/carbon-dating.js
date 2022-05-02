const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(...args) {

	if (args.length == 0 || typeof args[0] != "string" || (isNaN(args[0]) && isNaN(parseFloat(args[0])))) {
		return false;
	}

	let sampleActivity = parseFloat(args[0]);

	if (sampleActivity >= 1 && sampleActivity <= MODERN_ACTIVITY) {
		return Math.ceil(HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / sampleActivity) / Math.log(2));
	}

	return false;
}

module.exports = {
	dateSample
};
