import { Component, Input, OnInit, Output, EventEmitter, ViewChild, forwardRef, ElementRef, Renderer2 } from '@angular/core';
import { IkvAutocompleteListItem } from './models/kv-autocomplete.interface';
import { ListOfValuesComponent } from './components/list-of-values/list-of-values.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-kv-autocomplete',
    templateUrl: './kv-autocomplete.component.html',
    styleUrls: ['./kv-autocomplete.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => KvAutocompleteComponent),
        multi: true,
    }],
})

export class KvAutocompleteComponent implements OnInit, ControlValueAccessor {
    @Input() data: IkvAutocompleteListItem[];
    @Input() placeholder: string;
    @Input() kvInputReadOnlyStatus: boolean;
    @Input() kvInputDisabledStatus: boolean;
    @Input() showClearButton: boolean = true;
    @Input() maxDropDownResults: number = 10;
 
    @Output() getInputValue: EventEmitter<any> = new EventEmitter();
    @ViewChild('kvDropDownList') dropDownList: ListOfValuesComponent;

    public kvInputValue: string = "";
    public showAutoCompleteList = false;
    public autocompleteData: IkvAutocompleteListItem[];
    public isDropDownOpen: boolean = false;
    public dataCounter: number = 0;

    public onChange: any = () => { };
    private onTouched: any = () => { };

    constructor() { }

    ngOnInit(): void {
        if (this.data) {
            this.autocompleteData = this.formatDataToMaxNumber(this.data);
            this.dataCounter = this.autocompleteData.length;
        }
    }

    set value(val) {
        this.kvInputValue = val;
        this.onChange(val);
        this.onTouched(val);
    }

    public writeValue(value: string): void {
        this.value = value ? value : '';
    }

    public registerOnChange(fn: any) {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    public setDisabledState?(isDisabled: boolean): void {
        this.kvInputDisabledStatus = isDisabled;
    }

    public updateInputValueAndRegister(value: string = ''): void {
        this.kvInputValue = value;
        this.onChange(value);
        this.getInputValue.emit(value);
    }

    public formatDataToMaxNumber(data: IkvAutocompleteListItem[]): IkvAutocompleteListItem[] {
        return data.slice(0, 10);
    }

   public openAutocompleteList(): void {
        if (this.autocompleteData) {
            this.showAutoCompleteList = true;
        }
        console.log('KVINPUT -> focus event');
        this.isDropDownOpen = false;
    }

    public closeAutocompleteList(value): void {
        if (value) {
            this.updateInputValueAndRegister(value);
        }

        setTimeout(() => {
            this.showAutoCompleteList = false;
        }, 300);

        console.log('KVINPUT -> blur event');
    }

    public clearInputValue(): void {
        this.updateInputValueAndRegister('');
    }

    public handleEnterEvent(value: string): void {
        if (this.isDropDownOpen) {
            this.updateInputValueAndRegister(this.dropDownList.getSelectedListItem());
            this.closeAutocompleteList(this.dropDownList.getSelectedListItem());
        } else {
            this.updateInputValueAndRegister('');
            this.updateAutocompleteList(value);
        }
        
        console.log('KVINPUT -> keyup Enter event');
    }


    public handleInputArrowUpEvent(event: KeyboardEvent): void {
        this.dropDownList.previousListItem();
        this.isDropDownOpen = true;
        console.log('KVINPUT -> keyup.ArrowUp event');
    }

   public handleInputArrowDownEvent(event: KeyboardEvent): void {
        this.dropDownList.nextListItem();
        this.isDropDownOpen = true;
        console.log('KVINPUT -> keyup.ArrowDown event');
    }
    public updateAutocompleteList(value: string): void {
        if (!value) return;
        this.dataCounter = this.dataCounter + 1;
        const newDropDownItem: IkvAutocompleteListItem = {
            index: this.dataCounter,
            value
        };

        if (this.autocompleteData) {
            this.autocompleteData.unshift(newDropDownItem);
        } else {
            this.autocompleteData = [];
            this.autocompleteData.push(newDropDownItem);
            this.openAutocompleteList();
        }

        this.autocompleteData = this.formatDataToMaxNumber(this.autocompleteData);
    }
}
