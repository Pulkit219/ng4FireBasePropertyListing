import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
fireb: FirebaseListObservable<any[]>;
  constructor(private firb : FirebaseService) {
this.fireb = firb.getListings();
console.log(this.fireb);
console.log("getting stated");
   }

  ngOnInit() {
  }

}
