describe('ToDoFactory', function() {
  beforeEach(module('toDoApp'));

  var toDo;

  beforeEach(inject(function(ToDoFactory) {
    toDo = new ToDoFactory('New ToDo');
  }));

  it('it incomplete be default', function() {
    expect(toDo.completed).toBe (false);
  })

  it('can be marked as complete', function() {
    toDo.complete();
    expect(toDo.completed).toBe(true);
  });



});