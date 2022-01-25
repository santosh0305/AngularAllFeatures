import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent implements OnInit {
  constructor() {}

  @ViewChild(ChildComponentComponent)
  childComponentComponent: ChildComponentComponent;

  ngOnInit() {}

  getParentAge() {
    this.getChildAge();
    return 38;
  }

  getChildAge() {
    console.log(this.childComponentComponent.getChildAge());
  }
}
