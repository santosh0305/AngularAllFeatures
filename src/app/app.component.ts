import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  VERSION,
  ViewChild,
} from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  name = 'Angular ' + VERSION.major;

  @ViewChild(ParentComponentComponent)
  parentComponentComponent: ParentComponentComponent;

  ngOnInit() {
    console.log('On Init Invoked');
  }

  getParentAge() {
    console.log(this.parentComponentComponent.getParentAge());
  }

  selectRadio(event: any) {
    console.log(event.target);
  }

  ngOnChanges() {
    console.log('On Change Invoked');
  }

  ngOnDestroy() {
    console.log('On Destory Invoked');
  }
}
