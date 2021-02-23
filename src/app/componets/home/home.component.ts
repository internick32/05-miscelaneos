import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <p>Hola mundo desde app.component.html</p>
    <app-clases></app-clases>

    <p [appResaltado]="'pink'">
      Hola mundo...
    </p>

    <app-ng-switch></app-ng-switch> 
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
