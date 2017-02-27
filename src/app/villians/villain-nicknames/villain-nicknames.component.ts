import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'villain-nicknames',
  templateUrl: './villain-nicknames.component.html',
  styleUrls: ['./villain-nicknames.component.scss']
})
export class VillainNicknamesComponent implements OnInit {

  @Input() nicknames: any[];

  nickname:any = '';

  constructor() {

  }

  ngOnInit() {
    this.nicknames = ['Bro', 'Bruh'];
    console.log(this.nicknames);
  }

}
