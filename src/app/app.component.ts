import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponentComponent, TemplateBindingComponent],
  template: `
  <!-- <router-outlet /> -->
    <h1> Curso Angular </h1>
    <app-new-component />
    <app-template-binding />
  `,
})
export class AppComponent { }
