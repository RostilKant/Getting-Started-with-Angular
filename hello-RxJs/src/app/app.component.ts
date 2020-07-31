import { Component } from '@angular/core';
import {interval, Observable, Subject, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-RxJs';

  sub: Subscription;
  stream$: Subject<number> = new Subject<number>();
  counter = 0;

  constructor() {
    /*const intervalStream$ = interval(1000);

    this.sub = intervalStream$
      .pipe(
        map(value => value + 1),
        filter(value => value % 2 === 0)
      )
      .subscribe(value => console.log(value));
    const stream$ = new Observable(observer => {

      setTimeout(() => {
        observer.next(1);
      }, 500);

      setTimeout(() => {
        observer.complete();
      }, 1000);

      setTimeout(() => {
        observer.error('Something went wrong');
      }, 1500);

      setTimeout(() => {
        observer.next(2);
      }, 2500);

    });

    this.sub = stream$.subscribe(
      value => console.log('Next', value),
      error => console.log('Error', error),
      () => console.log('Completed')
    );*/

    this.sub = this.stream$.subscribe(value => console.log('Subscribe', value));
  }

  stopInterval(): void{
    this.sub.unsubscribe();
  }

  next(): void{
    this.counter++;
    this.stream$.next(this.counter);
  }
}
