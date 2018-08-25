import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLinear = false;
  
  secondFormGroup: FormGroup;
  customer: any = {};
  resOwner = {
    firstName: "",
    lastName: "",
    address: {
      address: "",
      district: "",
      subDistrict:"",
      province:"",
      postalCode:""

    }
  }
  
  id;
  constructor(private _formBuilder: FormBuilder,
    private db: AngularFireDatabase, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
    this.secondFormGroup = this._formBuilder.group({

      about: ['', Validators.required],
    });
    {
      this.id = this.route.snapshot.paramMap.get("id");
      if (this.id) {
        this.getDetailscustomerByKey(this.id);
      }
    }

  }

  sendResOwner(resOwner) {
  
    this.db.list("restaurantOwner").push(this.resOwner);
    
  }

  addAddress(data: NgForm) {
    if (this.id) {
      this.db.list("wikis").update(this.id, data.value)
    } else {
      this.db.list("wikis").push(data.value)
    }
  }

  getDetailscustomerByKey(id) {
    this.customer = this.db.object('restaurantOwner/' + id).snapshotChanges().map(res => {
      return res.payload.val();
    });

  }
}