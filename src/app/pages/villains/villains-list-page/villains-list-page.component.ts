import { Component, OnInit } from '@angular/core';
import { VillainService } from '../../../services/apis/villain.service';


@Component({
  selector: 'app-villains-list-page',
  templateUrl: './villains-list-page.component.html',
  styleUrls: ['villains-list-page.component.scss']
})
export class VillainsListPageComponent implements OnInit {

  villains: any;

  constructor(protected villianService: VillainService) { }

  // Loading up me data... Beep boop beep
  ngOnInit() {
    this.villains = this.villianService.getVillains();
  }

}
