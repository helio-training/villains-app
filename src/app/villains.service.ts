import { Injectable } from '@angular/core';
import { ErrorsService } from './errors.service';

@Injectable()
export class VillainsService {

  constructor(private errorsService:ErrorsService) {

  }

  getVillains() {

    // TODO: Change to call our API
    const villains = [
      { id: 1, name: 'Magneto' },
      { id: 2, name: 'Lawyers' },
      { id: 3, name: `Ex's` },
    ];

    this.errorsService.log(villains);
    return villains;
  }

  getVillain(id) {
    return {}
  }

}
// this.villains = villainsService.getVillains();
