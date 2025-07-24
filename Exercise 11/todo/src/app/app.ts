import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public first = 'Finn';
  public last = 'Baldwin';
  protected readonly title = signal('todo');
}
