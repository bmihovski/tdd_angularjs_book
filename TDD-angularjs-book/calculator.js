var calculator = {
		multiply: function(amount1, amount2) {
			return amount1 * amount2;
		}
};

function multipleTest1() {
	// Test
	var result = calculator.multiply(3, 3);

	// Assert result is expected
	if (result === 9) {
		console.log('Test passed');
	} else {
		console.log('Test failed');
	}

};
multipleTest1();
