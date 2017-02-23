import { Component, OnInit } from '@angular/core';
import { VillainService } from '../../../services/apis/villain.service';


@Component({
  selector: 'app-villains-list-page',
  templateUrl: './villains-list-page.component.html',
  styleUrls: ['villains-list-page.component.scss']
})
export class VillainsListPageComponent implements OnInit {

  villains: any;

  constructor(protected villainService: VillainService) { }

  // Loading up me data... Beep boop beep
  ngOnInit() {
    this.villainService.getVillains()
      .subscribe(villains => {
        this.villains = villains;
      }, err => {
        console.error(err);
      });
  }

}
