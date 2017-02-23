import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class LoggerService {

  @Output() logEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.logEmitter.subscribe(log => console[log.kind](log.value));
  }

  private log(kind: string = 'info', value: any) {
    this.logEmitter.emit({ kind, value });
  }

  info(value: any) {
    this.log('info', value);
  }

  debug(value: any) {
    this.log('debug', value);
  }

  error(value: any) {
    this.log('error', value);
  }

}
