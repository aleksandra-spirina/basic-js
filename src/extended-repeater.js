const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = "{ separator: '+', additionSeparator: '|' }") {
	let addition = options.addition;
	if (typeof str != "string" && typeof addition != "string") {
		str = '' + str;
		addition = '' + addition;
	}
	let addStr = new Array(options.additionRepeatTimes).fill(addition).join(options.additionSeparator ? options.additionSeparator : '|');
	let arr = new Array(options.repeatTimes).fill(str + addStr);
	return arr.join(options.separator ? options.separator : '+');
}
module.exports = {
	repeater
};
