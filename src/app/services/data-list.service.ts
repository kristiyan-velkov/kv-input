import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IkvAutocompleteListItem } from '../components/kv-autocomplete/models/kv-autocomplete.interface';

@Injectable({
  providedIn: 'root'
})
export class DataListService {

  private defaultListValues: IkvAutocompleteListItem[] = [
    { index: 10, value: 'fitness' },
    { index: 9, value: 'box' },
    { index: 8, value: 'golf' },
    { index: 7, value: 'baseball' },
    { index: 6, value: 'chess' },
    { index: 5, value: 'volleyball' },
    { index: 4, value: 'basketball' },
    { index: 3, value: 'tennis' },
    { index: 2, value: 'football', },
    { index: 1, value: 'ski' },
  ];

  constructor(private http: HttpClient) { }

  public getDefaultListValues(): Observable<IkvAutocompleteListItem[]> {
    return of(this.defaultListValues);
  }

  public addAutoCompleteListItem(listItem: string): void {
    const generatedListItem: IkvAutocompleteListItem = {
      index: this.defaultListValues.length + 1,
      value: listItem
    };

    this.defaultListValues.unshift(generatedListItem);
    this.getDefaultListValues();
  }
}
