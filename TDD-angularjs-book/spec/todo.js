describe('Given we are using a todo application', function() {
	// scope hold items on the controller
	var scope = {};
	beforeEach(function(){
		module('todo');
		inject(function($controller){
			$controller('TodoController',{$scope:scope});
		});
	});
	// First test
	it('should define a list object', function() {
		expect(scope.list).toBeDefined();
	})
	// Second test
	it('should define a list object', function() {
		expect(scope.list[0]).toEqual('test');
	});
	// Third test
	it('should define a list object', function() {
		expect(scope.list[1]).toEqual('execute');
	})
	// Fourth test
	it('should define a list object', function() {
		expect(scope.list[2]).toEqual('refactor');
	})
});
