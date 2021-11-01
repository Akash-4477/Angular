import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-resturant',
  templateUrl: './add-resturant.component.html',
  styleUrls: ['./add-resturant.component.css']
})
export class AddResturantComponent implements OnInit {
 
  constructor(private resto:CommonService) { }
  addRestaurant= new FormGroup({
    name: new FormControl(''),
    Address: new FormControl(''),
    email: new FormControl('')

  })
  ngOnInit(): void {
  }

  createResto(){
    console.log(this.addRestaurant.value);
  }

}
