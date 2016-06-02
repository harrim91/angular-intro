describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl, ToDoFactory;;

  beforeEach(inject(function($controller, _ToDoFactory_) {
    ctrl = $controller('ToDoController');
    ToDoFactory = _ToDoFactory_;
  }));

  it('initializes with several todos', function() {
    // var todo1 = new ToDoFactory('ToDo1');
    // var todo2 = new ToDoFactory('ToDo2');
    expect(ctrl.todos.length).toEqual(2);
  });

  it('todos have a name', function() {
    expect(ctrl.todos[0].name).toEqual('ToDo1');
  });

  it('todos have a complete status', function() {
    expect(ctrl.todos[0].completed).toEqual(false);
  });

  describe('#addToDo', function() {
    it('adds a todo', function() {
      ctrl.addToDo();
      expect(ctrl.todos.length).toEqual(3);
    });
    it('can pass a name', function() {
      ctrl.addToDo('ToDo3');
      expect(ctrl.todos[2].name).toEqual('ToDo3');
    });
    it('defaults to incomplete', function() {
      ctrl.addToDo('ToDo3');
      expect(ctrl.todos[2].completed).toEqual(false);
    });
  });

  describe('#deleteToDo', function() {
    beforeEach(function() {
      ctrl.addToDo('ToDo3');
    });
    it('deletes a todo', function() {
      ctrl.deleteToDo(1);
      expect(ctrl.todos.length).toEqual(2);
    });
    it('deletes a specific todo', function() {
      ctrl.deleteToDo(1);
      expect(ctrl.todos[1].name).toEqual('ToDo3');
    });
  });

});