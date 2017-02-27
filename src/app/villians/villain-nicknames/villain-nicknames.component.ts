import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'villain-nicknames',
  templateUrl: './villain-nicknames.component.html',
  styleUrls: ['./villain-nicknames.component.scss']
})
export class VillainNicknamesComponent implements OnInit {

  @Input() nicknames: any[];

  nickname: string = '';

  ngOnInit() {
  }

  added(nickname) {
    if(this.nickname) {
      this.nicknames = [...this.nicknames, nickname];
      this.nickname = '';
    }
  }

  remove(nickname, index) {
    this.nicknames.splice(index, 1);
  }
}
