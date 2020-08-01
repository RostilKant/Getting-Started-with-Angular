import {Component, OnInit} from '@angular/core';
import {delay} from 'rxjs/operators';
import {Todo, TodosService} from './todos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];
  todoTitle = '';
  loading = false;
  error = '';

  constructor(private todosService: TodosService) {

  }

  ngOnInit(): void {
    this.fetchTodos();
  }

  addTodo(): void {
    if (this.todoTitle.trim() === '') {
      return;
    }

    this.todosService.addTodo({
      title: this.todoTitle,
      completed: false,
    }).subscribe(todo => {
      this.todos.unshift(todo);
      this.todoTitle = '';
    });
  }


  fetchTodos(): void {
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe(todos => {
        this.todos = todos;
        this.loading = false;
      }, error => {
        this.error = error.message;
      });
  }

  deleteTodo(todoId: number): void {
    this.todosService.deleteTodo(todoId)
      .subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id !== todoId);
      });
  }

  completeTodo(id: number): void {
    this.todosService.completeTodo(id)
      .subscribe(() => {
        this.todos.find(t => t.id === id).completed = true;
      });
  }
}
