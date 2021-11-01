import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-resturant',
  templateUrl: './add-resturant.component.html',
  styleUrls: ['./add-resturant.component.css']
})
export class AddResturantComponent implements OnInit {
  alert:boolean = false;
  addRestaurant= new FormGroup({
    name: new FormControl(''),
    Address: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private resto:CommonService) { }
  ngOnInit(): void {
  }

  createResto(){
    // console.log(this.addRestaurant.value);
    this.resto.addResto(this.addRestaurant.value).subscribe((result)=>{
      this.alert=true;
      this.addRestaurant.reset({});
      console.log("Get Data From Service", result)
    })
  }

  closeAlert(){
    this.alert = false;
  }

}
