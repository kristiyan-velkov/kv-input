import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IKvInputDropdownItem } from './../components/kv-input/models/kv-input-dropdown';
@Injectable({
    providedIn: 'root'
})
export class DataListService {

    private defaultDropDownValues: IKvInputDropdownItem[] = [
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

    constructor() { }

    public getDefaultDropDownData(): Observable<IKvInputDropdownItem[]> {
        return of(this.defaultDropDownValues);
    }

    public addDropDownListItem(listItem: string): void {
        const generatedDropDownItem: IKvInputDropdownItem = {
            index: this.defaultDropDownValues.length + 1,
            value: listItem
        };

        this.defaultDropDownValues.unshift(generatedDropDownItem);
    }
}
