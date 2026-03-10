import { Pipe, PipeTransform } from '@angular/core';
import { Destination } from '../models/destination.model';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(items: Destination[], searchText: string): Destination[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      return item.country.toLowerCase().includes(searchText) || 
             item.name.toLowerCase().includes(searchText);
    });
  }
}
