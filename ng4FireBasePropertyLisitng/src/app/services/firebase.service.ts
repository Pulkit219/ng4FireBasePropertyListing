import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

listings: FirebaseListObservable<any[]>;
  constructor(private afd: AngularFireDatabase)
  
   {
this.listings = afd.list('/listings') as FirebaseListObservable<Listing[]>

    //  this.listings = afd.list('/listings');
    }


  getListings()
  {
return this.listings;

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