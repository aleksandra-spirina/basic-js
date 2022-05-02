const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

	constructor(...args) {
		this.type = (args.length === 0 || args[0] === true) ? "direct" : "reverse";
	}

	encrypt(...args) {
		if (args.length < 2) {
			throw new Error("Incorrect arguments!");
		}
		let message = args[0].toUpperCase();
		let key = args[1].toUpperCase();

		let counter = 0;
		let arr = message.split('');
		arr.forEach((element, i, obj) => {
			if (/[A-Z]/i.test(element)) {
				let code = (element.charCodeAt(0) + key.charCodeAt(counter % key.length)) % 26;
				obj[i] = String.fromCharCode(code);
				console.log(obj[i]);
				++counter;
			}
		});

		arr = (this.type === "reverse") ? arr.reverse() : arr;
		return arr.join('');
	}
	decrypt(...args) {
		if (args.length < 2) {
			throw new Error("Incorrect arguments!");
		}
		let message = args[0];
		let key = args[1];
	}
}

module.exports = {
	VigenereCipheringMachine
};
