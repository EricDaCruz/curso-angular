import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <!-- <router-outlet /> -->
    <h1> Curso Angular </h1>
    <h2> Components </h2>
  `,
})
export class AppComponent {}
