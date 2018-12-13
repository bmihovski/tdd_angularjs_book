describe('', function() {
	beforeEach(function() {
		browser.get('/');
		var input = element(by.model('newTodoItem'));
		input.sendKeys('new Item');

		var inputButton = element(by.css('#AddItemButton'));
		inputButton.click();
	});
	it('Check todo added', function() {
		var todoListItems = element.all(by.repeater('item in list'));
		expect(todoListItems.count()).toBe(4);
	})
});