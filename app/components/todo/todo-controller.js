function ToDoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()

	// Use this getTodos function as your callback for all other edits
	function getTodos(){
		todoService.getTodos(draw)
	}

	function draw(todos) {
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		var template = ''
		for (var i = 0; i < todos.length; i++) {
			var todo = todos[i];
		template += `
			<div class="panel panel-info">
				<div class="panel-heading">
					<i class="glyphicon glyphicon-trash pull-right" onclick="app.controllers.todoController.removeTodo(${i})"></i>
					<h3>${todo.todo}</h3>	
				</div>
			</div>

		`
		}
		document.getElementById('todo').innerHTML = template
	}

	this.addToDoFromForm = function (event) {
		event.preventDefault()
		// TAKE THE INFORMATION FORM THE FORM
		var form = event.target.title.value
		var todo = {
			todo: form

		}

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		                         //^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (index) {
		todoService.removeTodo(index, getTodos)


	}
	getTodos()
	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???

}
