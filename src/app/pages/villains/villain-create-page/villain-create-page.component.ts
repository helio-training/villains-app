import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './villain-create-page.component.html',
  styleUrls: ['./villain-create-page.component.scss']
})
export class VillainCreatePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  onValid(villain){
    console.log(villain);
  }

}
