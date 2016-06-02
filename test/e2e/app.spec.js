describe('Todos tracker', function() {

  beforeEach(function() {
    browser.get('/');
  });

  it('has two todos', function() {
    var todoList = $$('#todos li');
    expect(todoList.get(0).getText()).toEqual('Name: ToDo1, Complete: false');
    expect(todoList.get(1).getText()).toEqual('Name: ToDo2, Complete: true');
  });

  it('can add a todo to list', function() {
    $('input#new-todo').sendKeys('ToDo3');
    $('button.btn-add').click();
    var todoList = $$('#todos li');
    expect(todoList.get(2).getText()).toEqual('Name: ToDo3, Complete: false');
  });


  it('can delete an item from the list', function() {
    $$('li button.btn-delete').first().click();
    var todoList = $$('#todos li');
    expect(todoList.count()).toEqual(1);
    expect(todoList.get(0).getText()).toEqual('Name: ToDo2, Complete: true');
  });

  it('can mark a todo as complete', function() {
    $$('li button.btn-complete').first().click();
    var todoList = $$('#todos li');
    expect(todoList.get(0).getText()).toEqual('Name: ToDo1, Complete: true');
  });

});
