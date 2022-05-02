const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

	if (!(arr instanceof Array)) {
		throw new Error("'arr' parameter must be an instance of the Array!");
	}

	let copyOfArr = arr.map(x => x);
	copyOfArr.forEach((x, i, obj) => {
		if (typeof x === "string") {
			switch (x) {
				case "--discard-next":
					if (i + 1 < obj.length) {
						obj[i + 1] = "";
					}
					obj[i] = "";
					break;
				case "--discard-prev":
					if (i - 1 >= 0) {
						obj[i - 1] = "";
					}
					obj[i] = "";
					break;
				case "--double-next":
					if (i + 1 < obj.length && obj[i + 1] != "") {
						obj[i] = obj[i + 1];
					} else {
						obj[i] = "";
					}
					break;
				case "--double-prev":
					if (i - 1 >= 0 && obj[i - 1] != "") {
						obj[i] = obj[i - 1];
					} else {
						obj[i] = "";
					}
					break;
			}
		}
	});

	for (let i = copyOfArr.length - 1; i >= 0; --i) {
		if (copyOfArr[i] === "") {
			copyOfArr.splice(i, 1);
		}
	}
	return copyOfArr;
}

module.exports = {
	transform
};
