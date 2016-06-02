toDoApp.factory('ToDoFactory', function() {
  var ToDo = function(name) {
    this.name = name;
    this.completed = false;
  };

  ToDo.prototype.complete = function() {
    console.log('hello');
    this.completed = true;
  };

  return ToDo;
});