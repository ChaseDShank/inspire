function TodoService() {
	// A local copy of your todos
	var todoList = []
	var baseUrl = 'https://inspire-server.herokuapp.com/api/todos/Chase'


	function logError(err) {
		console.error('Something isn\'t working properly ', err)
		// CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		// do this without breaking the controller/service responsibilities
	}

	this.getTodos = function (draw) {
		$.get(baseUrl)
			.then(function (res) { 
				todos = res
				draw(todos)
				
			})
			.fail(logError)
	}



	this.addTodo = function (todo, getTodos) {
		// WHAT IS THIS FOR???
		$.post(baseUrl, todo)
			.then(getTodos)
		
			.fail(logError)
	}

	this.toggleTodoStatus = function (todoId) {

		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(YOURTODOVARIABLEHERE)
		})
			.then(function (res) {
			})
			.fail(logError)
	}						

	this.removeTodo = function (index, getTodos) {
		// Umm this one is on you to write.... It's also unique, like the ajax call above. The method is a DELETE
		$.ajax({
            url: baseUrl + '/' + index,
            method: 'DELETE'
        })
			.then(getTodos)
            .fail(logError)
    }
		
}


