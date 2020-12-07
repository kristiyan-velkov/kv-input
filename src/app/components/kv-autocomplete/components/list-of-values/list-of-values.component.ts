import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, Renderer2 } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { IkvAutocompleteListItem } from './../../models/kv-autocomplete.interface';

const listAnimation = trigger('listAnimation', [
    transition('* <=> *', [
        query(':enter',
            [style({ opacity: 0 }), stagger('30ms', animate('60ms ease-out', style({ opacity: 1 })))],
            { optional: true }
        ),
        query(':leave',
            animate('50ms', style({ opacity: 0 })),
            { optional: true }
        )
    ])
]);

@Component({
    selector: 'app-list-of-values',
    templateUrl: './list-of-values.component.html',
    styleUrls: ['./list-of-values.component.scss'],
    animations: [listAnimation]
})
export class ListOfValuesComponent implements OnInit {
    @Input() autoCompleteData: IkvAutocompleteListItem[];
    @Input() showClearButton: boolean;
    @Input() searchText: string;
    @Output() selectedItem: EventEmitter<string> = new EventEmitter();
    @Output() clearButton: EventEmitter<boolean> = new EventEmitter();
    @ViewChild('kvAutocompleteList') autocompleteList: ElementRef;

    public activeListElement: any;

    constructor(private render: Renderer2) { }

    ngOnInit(): void { }

    public previousListItem(): void {
        if (!this.autocompleteList) {
            return;
        }

        if (!this.activeListElement) {
            this.activeListElement = this.autocompleteList.nativeElement.firstChild;
            this.render.addClass(this.activeListElement, 'active');
            return;
        }

        if (this.activeListElement.previousElementSibling) {
            this.render.removeClass(this.activeListElement, 'active');
            this.render.addClass(this.activeListElement.previousElementSibling, 'active');
            this.activeListElement = this.activeListElement.previousElementSibling;
        } else {
            return;
        }
    }
    public nextListItem(): void {
        if (!this.autocompleteList) {
            return;
        }

        if (!this.activeListElement) {
            this.activeListElement = this.autocompleteList.nativeElement.firstChild;
            this.render.addClass(this.activeListElement, 'active');
            return;
        }

        if (this.activeListElement.nextElementSibling) {
            this.render.removeClass(this.activeListElement, 'active');
            this.render.addClass(this.activeListElement.nextElementSibling, 'active');
            this.activeListElement = this.activeListElement.nextElementSibling;
        } else {
            return;
        }
    }

    public handleClickOnSelectedListItem(listItemValue: string): void {
        this.selectedItem.emit(listItemValue);
        this.searchText = '';
    }

    public setActiveItemValue(listItemValue: string): void {
        this.selectedItem.emit(listItemValue);
    }

    public returnSelectedItem(): void {
        this.selectedItem.emit(this.activeListElement.childNodes[1].innerText);
    }
}
