import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
flmm:FlashMessagesService;
  user: Observable<firebase.User>;

  constructor(public flm: FlashMessagesService, public afauth: AngularFireAuth) {
this.flmm = flm;
   this.user = afauth.authState;

   }

  ngOnInit() {
  }


 login() {
    this.afauth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.flmm.show('Logged in successfully ' , {cssClass: 'alert-success', timeout:3000});
  }
}
