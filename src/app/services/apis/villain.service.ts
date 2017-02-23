import { Injectable } from '@angular/core';
import { LoggerService } from '../common/logger.service';
import { Http } from '@angular/http';


@Injectable()
export class VillainService {

  constructor(private http: Http, private logger: LoggerService) {
  }

  getVillains() {

    // TODO: Change to call our API
    const villains = [
      { id: 1, name: 'Magneto' },
      { id: 2, name: 'Lawyers' },
      { id: 3, name: `Ex's` },
    ];

    // this.logger.info(villains);


    return villains;
  }

  getVillain(id) {
    return {}
  }
}
