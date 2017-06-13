import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;
  flmm:FlashMessagesService
  constructor(public afauth:AngularFireAuth, private flm:FlashMessagesService) {
   this.flmm = flm;
    this.user = afauth.authState;
   }

   login() {
    this.afauth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afauth.auth.signOut();
    this.flmm.show('You have been logged out ' , {cssClass: 'alert-success', timeout:3000});
  }

  ngOnInit() {
  }

}
