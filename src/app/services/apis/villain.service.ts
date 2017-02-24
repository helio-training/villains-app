import { Injectable } from '@angular/core';
import { LoggerService } from '../common/logger.service';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const ENDPOINT = 'https://villains-api.herokuapp.com/v1/villains';


@Injectable()
export class VillainService {

  constructor(private http: Http, private logger: LoggerService) {
  }

  getVillains(): Observable<any[]> {
    return this.http.get(ENDPOINT)
      .map((response: Response) => response.json());
  }

  getVillain(id) {
    return {}
  }
}
