import { Injectable } from '@angular/core';

// const errorsService = new ErrorsService();
@Injectable()
export class ErrorsService {

  constructor() { }

  log(value){

    console.log(value);
    // Pops open a modal...
  }

  error(value) {
    console.error(value);
    //
  }

}
