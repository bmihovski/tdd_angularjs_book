describe('implement a logic to delete an item from the list', function() {
	beforeEach(function() {
		browser.get('/');
		// get delete item button and press it
		var deleteButton = element(by.css('#DeleteItemButton'));
		deleteButton.click();

	});
	it('item is deleted', function() {
		var todoListItems = element.all(by.repeater('item in list'));
		expect(todoListItems.count()).toBe(2);
	});
});