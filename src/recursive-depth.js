const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	counter = 1;
	calculateDepth(arr) {
		let obj = this;
		arr.forEach(element => {
			if(Array.isArray(element)){
				obj.counter += obj.DepthCalculator(element);
			}
		});

		return this.counter;
	}
}

module.exports = {
	DepthCalculator
};
