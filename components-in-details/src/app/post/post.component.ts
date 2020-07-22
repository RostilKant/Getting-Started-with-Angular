import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {

  @Input() post: Post
  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>()
  @ContentChild('info', {static: true}) infoRef: ElementRef

  constructor() { }

  ngOnInit(): void {
    console.log(this.infoRef.nativeElement)
  }

  removePost() {
    this.onRemove.emit(this.post.id)
  }
}
