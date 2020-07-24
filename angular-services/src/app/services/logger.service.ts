import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  log(text: string): void{
    console.log(`Log ${text}`);
  }
}
