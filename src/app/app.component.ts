import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlexPageComponent } from './flex-page/flex-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  count = 0;
  subscription?: Subscription;
  header?: any;
  footer?: any;
  buttons?: any;

  constructor() {}

  subscribeToEmitter(componentRef: any) {
    if (!(componentRef instanceof FlexPageComponent)) {
      return;
    }

    const child: FlexPageComponent = componentRef;
    child.clickEvent.subscribe((e) => {
      this.header = document.getElementsByClassName('toolbar');

      this.header[0].style.backgroundColor = e.style.background;

      this.footer = document.getElementsByClassName('footer');

      this.footer[0].style.background = e.style.background;

      this.buttons = document.getElementsByTagName('input');

      this.buttons[4].style.background = e.style.background;
      this.buttons[5].style.background = e.style.background;
    });
  }

  getColorOfItem() {}

  unsubscribe() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  ngOnInit(): void {}
}
