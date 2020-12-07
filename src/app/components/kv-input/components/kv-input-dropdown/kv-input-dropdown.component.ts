import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, Renderer2 } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { IKvInputDropdownItem } from '../../models/kv-input-dropdown';

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
    selector: 'app-kv-input-dropdown',
    templateUrl: './kv-input-dropdown.component.html',
    styleUrls: ['./kv-input-dropdown.component.scss'],
    animations: [listAnimation]
})
export class KvInputDropdownComponent implements OnInit {

    @Input() dropDownData: IKvInputDropdownItem[];
    @Input() showClearButton: boolean;
    @Input() searchText: string;
    @Output() selectedDropDownItem: EventEmitter<string> = new EventEmitter();
    @Output() clearButtonWasClicked: EventEmitter<boolean> = new EventEmitter();

    @ViewChild('kvInputDropDownList') inputDropDownList: ElementRef;

    public activeDropDownItem: any;
    public dropDownItemId: string = '#value';

    constructor(private renderer: Renderer2) { }

    ngOnInit(): void { }

    public previousDropDownItem(): void {
        if (!this.inputDropDownList) {
            return;
        }

        if (!this.activeDropDownItem) {
            this.activeDropDownItem = this.inputDropDownList.nativeElement.firstChild;
            this.renderer.addClass(this.activeDropDownItem, 'active');
            return;
        }

        if (this.activeDropDownItem.previousElementSibling) {
            this.renderer.removeClass(this.activeDropDownItem, 'active');
            this.renderer.addClass(this.activeDropDownItem.previousElementSibling, 'active');
            this.activeDropDownItem = this.activeDropDownItem.previousElementSibling;
        } else {
            return;
        }
    }
    public nextDropDownItem(): void {
        if (!this.inputDropDownList) {
            return;
        }

        if (!this.activeDropDownItem) {
            this.activeDropDownItem = this.inputDropDownList.nativeElement.firstChild;
            this.renderer.addClass(this.activeDropDownItem, 'active');
            return;
        }

        if (this.activeDropDownItem.nextElementSibling) {
            this.renderer.removeClass(this.activeDropDownItem, 'active');
            this.renderer.addClass(this.activeDropDownItem.nextElementSibling, 'active');
            this.activeDropDownItem = this.activeDropDownItem.nextElementSibling;
        } else {
            return;
        }
    }

    public handleClickOnSelectedItem(listItemValue: string): void {
        this.selectedDropDownItem.emit(listItemValue);
        this.searchText = '';
    }

    public getSelectedDropDownItem(): void {
        if (this.activeDropDownItem && this.activeDropDownItem.querySelector(`${this.dropDownItemId}`).innerText) {
            this.selectedDropDownItem.emit(this.activeDropDownItem.querySelector(`${this.dropDownItemId}`).innerText);
        }
    }
}
