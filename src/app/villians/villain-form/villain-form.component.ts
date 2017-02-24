import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'villain-form',
  templateUrl: './villain-form.component.html',
  styleUrls: ['./villain-form.component.scss']
})
export class VillainFormComponent {

  @Input() villain;

  @Output() valid = new EventEmitter<any>();

  kindOptions = ['Mutant', 'Human', 'Other'];

// {
//   "bio": "",
//   "gender": "male",
//   "identity": {
//     "name": {
//       "first": "Eric",
//       "middle": "",
//       "last": "Lehnsherr"
//     },
//     "age": ""
//   },
//   "isActive": true,
//   "kind": "Mutant",
//   "name": "Magneto",
//   "nicknames": [],
//   "rating": "",
//   "universe": "Marvel"
// }



  constructor() {
    if (!this.villain) {
      this.villain = {};
    }
  }


  formSubmitted(villain) {
    // Write some additional validation if necessary
    this.valid.emit(villain);
  }



}
