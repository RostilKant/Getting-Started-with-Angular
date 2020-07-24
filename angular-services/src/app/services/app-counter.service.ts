import {Injectable} from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable({ providedIn: 'root' })
export class AppCounterService {
  counter = 0;

  constructor(private logger: LoggerService ) {
  }
  increase(): void{
    this.logger.log('increase');
    this.counter++;
  }

  decrease(): void{
    this.logger.log('decrease');
    this.counter--;
  }
}
