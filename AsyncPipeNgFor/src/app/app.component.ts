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

  items: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
  }

  itemsArray: ExampleItem[] = [new ExampleItem('test')];
  title = 'app works!';

  itemsObservable = new Observable<ExampleItem[]>(
    (observer: Subscriber<ExampleItem[]>) => {
    setInterval(() => {
      this.itemsArray.push(new ExampleItem('item: ' + new Date()));
      observer.next(this.itemsArray);
    }, 1000);
  });

  public addItem() {
    this.items.push('TEST ' + new Date());
  }

}
