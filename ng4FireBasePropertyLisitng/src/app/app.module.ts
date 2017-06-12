import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseService } from "./services/firebase.service";
import { FlashMessagesModule } from "angular2-flash-messages";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';

  export const firebaseConfig = {
    apiKey: "AIzaSyASryJCRLU5AzjEvlhRT1VjNBzlcjQkqyw",
    authDomain: "ng4proplist.firebaseapp.com",
    databaseURL: "https://ng4proplist.firebaseio.com",
    projectId: "ng4proplist",
    storageBucket: "ng4proplist.appspot.com",
    messagingSenderId: "928893863653"
  };


const appRoutes: Routes = [
 {path:'' , component:HomeComponent},
  {path:'listings' , component:ListingsComponent},
    {path:'listing/:id' , component:ListingComponent},
  {path:'add-listing' , component:AddListingComponent}
  

];
// const firebaseAuthConfig ={

//   provider: AuthProviders.Google,
//   method: AuthMethods.Popup
// };


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    EditListingComponent,
    AddListingComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
     AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
