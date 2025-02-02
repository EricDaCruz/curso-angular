import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponentComponent],
  template: `
  <!-- <router-outlet /> -->
    <h1> Curso Angular </h1>
    <app-new-component />
  `,
})
export class AppComponent { }
