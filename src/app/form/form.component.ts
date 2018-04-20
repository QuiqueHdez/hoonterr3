import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  carsList: any
  error: String

  constructor(public cS: CarsService) { }

  getCars() {
    console.log("haha")
    this.cS.getInfo().catch(e => this.error = e).subscribe(list => console.log("sfkJVHLABSLJ"+ list))
  }
  ngOnInit() {
  }

}
