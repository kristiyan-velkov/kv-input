import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild, Renderer2 } from '@angular/core';
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
export class ListOfValuesComponent implements OnInit, AfterViewInit {
    @Input() autoCompleteData: IkvAutocompleteListItem[];
    @Input() showClearButton: boolean;
    @Output() selectedItem: EventEmitter<IkvAutocompleteListItem> = new EventEmitter();
    @Output() clearButton: EventEmitter<boolean> = new EventEmitter();
    @ViewChild('kvAutocompleteList') autocompleteList: ElementRef;

    public activeListElement: any;

    constructor(private render: Renderer2) { }

    ngOnInit(): void { }

    ngAfterViewInit(): void {
    }

    public previousListItem(): void {
        if (!this.autocompleteList) {
            return;
        }

        if (!this.activeListElement) {
            this.activeListElement = this.autocompleteList.nativeElement.firstChild;
            this.render.addClass(this.activeListElement, 'active');
            return;
        }

        if (this.activeListElement.previousElementSibling ) {
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

    public handleClickOnSelectedListItem(item): void {
        this.selectedItem.emit(item);
    }

    public getSelectedListItem(): string {
        if (this.activeListElement && this.activeListElement.childNodes[1]) {
            return this.activeListElement.childNodes[1].innerText;
        }
    }
}
