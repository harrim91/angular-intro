toDoApp.controller('ToDoController', ['ToDoFactory',function(ToDoFactory) {

  var self = this;

  self.todos = [
                new ToDoFactory('ToDo1'),
                new ToDoFactory('ToDo2')
               ];

  self.addToDo = function(name) {
    self.todos.push(new ToDoFactory(name));
  };

  self.deleteToDo = function(index) {
    self.todos.splice(index, 1);
  };
}]);