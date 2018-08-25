import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList,  } from 'angularfire2/database'; 
import {  FirebaseListObservable } from "angularfire2/database-deprecated";
import { Observable} from 'rxjs';
@Component({
  selector: 'app-selecte-restaurant',
  templateUrl: './selecte-restaurant.component.html',
  styleUrls: ['./selecte-restaurant.component.css']
})
export class SelecteRestaurantComponent implements OnInit {


  item: AngularFireList<any[]>
  constructor (db: AngularFireDatabase) {
    this.item = db.list('/restaurantOwner');
  }

  ngOnInit() {
    console.log()
  }


}
