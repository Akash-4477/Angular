import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list-resturant',
  templateUrl: './list-resturant.component.html',
  styleUrls: ['./list-resturant.component.css']
})
export class ListResturantComponent implements OnInit {
  public collection:any;

  constructor(private commonservice:CommonService) { }

  ngOnInit(): void {
    this.commonservice.getRestoList().subscribe((result)=>{
    this.collection=result;
    console.log(this.collection)
  });
}

}
