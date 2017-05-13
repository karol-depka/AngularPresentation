import { Component } from '@angular/core';
import {Observable, Subscriber} from 'rxjs';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

export class ExampleItem {
  constructor(public id: string) {}

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items2: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.items2 = db.list('/items');
    this.items2.push('TEST ' + new Date());
  }

  items: ExampleItem[] = [new ExampleItem('test')];
  title = 'app works!';

  itemsObservable = new Observable<ExampleItem[]>(
    (observer: Subscriber<ExampleItem[]>) => {
    setInterval(() => {
      this.items.push(new ExampleItem('item: ' + new Date()));
      observer.next(this.items);
    }, 1000);
  });


}
