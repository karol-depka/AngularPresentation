import { Component } from '@angular/core';
import {Observable, Subscriber} from "rxjs";

export class ExampleItem {
  constructor(public id: string) {}

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: ExampleItem[] = [new ExampleItem('test')];

  itemsObservable = new Observable<ExampleItem[]>((observer: Subscriber<ExampleItem[]>) => {
    setInterval(() => {
      this.items.push(new ExampleItem('item: ' + new Date()));
      observer.next(this.items);
    }, 1000);
  });


  title = 'app works!';
}
