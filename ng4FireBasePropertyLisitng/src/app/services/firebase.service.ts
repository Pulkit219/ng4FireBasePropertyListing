import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

listings: FirebaseListObservable<any[]>;
listing:FirebaseObjectObservable<any[]>;
  folder: any;

  constructor(private afd: AngularFireDatabase)
  
   {
// this.listings = afd.list('/listings/listings') as FirebaseListObservable<Listing[]>

    //  this.listings = afd.list('/listings');
    }


  getListings()
  {
    this.listings = this.afd.list('/listings/listings') as FirebaseListObservable<Listing[]>;
return this.listings;

  }
  getListingDetails(id)
  {
this.listing = this.afd.object('/listings/listings/'+id) as FirebaseObjectObservable<Listing>;
return this.listing;  
}

addListing(listing:any)
{


}
}

interface Listing 
{
$key?:string;
title?:string;
image?:string;
type?:string;
city?:string;
owner?:string;
bedroom?:string;
}