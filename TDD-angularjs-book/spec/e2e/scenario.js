describe('', function() {
	//ASSEMBLE
	beforeEach(function() {
		//ACT
		browser.get('/');
	});
	it('Check all item in the list', function() {
		//ASSERT
		var todoListItems = element.all(by.repeater('item in list'));
		expect(todoListItems.count()).toBe(3);
	});
});