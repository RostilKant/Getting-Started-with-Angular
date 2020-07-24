import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "../app.component";

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], searchField: string = 'title', search: string = ''): Post[] {
    if(!search.trim()){
      return posts
    }
    return posts.filter( p => {
     return p[searchField].toLowerCase().includes(search.toLowerCase())
    })
  }

}
