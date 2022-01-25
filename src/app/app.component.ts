import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { ParentComponentComponent } from './parent-component/parent-component.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  @ViewChild(ParentComponentComponent)
  parentComponentComponent: ParentComponentComponent;

  ngOnInit() {}

  getParentAge() {
    console.log(this.parentComponentComponent.getParentAge());
  }
}
