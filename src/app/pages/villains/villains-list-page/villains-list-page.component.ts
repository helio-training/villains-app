import { Component, OnInit } from '@angular/core';
import { VillainsService } from '../../../villains.service';

@Component({
  selector: 'app-villains-list-page',
  templateUrl: './villains-list-page.component.html',
  styleUrls: ['villains-list-page.component.scss']
})
export class VillainsListPageComponent implements OnInit {

  villains: any;

  constructor(protected villainsService: VillainsService) { }

  // Loading up me data... Beep boop beep
  ngOnInit() {
    this.villains = this.villainsService.getVillains();
  }

}
