import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MdCardModule } from '@angular/material';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: 'AIzaSyBdacC09P7cRfEOc1gO9BLmWVZUWdyPv4Y',
  authDomain: 'angularpresentation.firebaseapp.com',
  databaseURL: 'https://angularpresentation.firebaseio.com',
  projectId: 'angularpresentation',
  storageBucket: 'angularpresentation.appspot.com',
  messagingSenderId: '914516081907'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
