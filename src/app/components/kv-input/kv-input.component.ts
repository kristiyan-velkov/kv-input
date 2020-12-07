import { Component, Input, OnInit, Output, EventEmitter, ViewChild, forwardRef, ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KvInputDropdownComponent } from './components/kv-input-dropdown/kv-input-dropdown.component';
import { IKvInputDropdownItem } from './models/kv-input-dropdown';

@Component({
    selector: 'app-kv-input',
    templateUrl: './kv-input.component.html',
    styleUrls: ['./kv-input.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => KvInputComponent),
        multi: true,
    }],
})
export class KvInputComponent implements OnInit, ControlValueAccessor {
    @Input() data: IKvInputDropdownItem[];
    @Input() placeholder: string;
    @Input() isDisabled: boolean;
    @Input() showInputClearButton: boolean = true;
    @Input() maxDropDownSuggestions: number = 10;

    @Output() getInputValue: EventEmitter<any> = new EventEmitter();

    @ViewChild('kvInputDropDown') kvInputDropDown: KvInputDropdownComponent;

    public kvInputValue: string = '';
    public dropDownData: IKvInputDropdownItem[];
    public dropDownDataCounter: number = 0;
    public showKvInputDropDown: boolean = false;
    public isKvInputDropDownTouched: boolean = false;
    public isReadOnly: boolean = false;
    
    public onChange: any = () => { };
    private onTouched: any = () => { };

    constructor() { }

    ngOnInit(): void {
        if (this.data) {
            this.dropDownData = this.formatDataToMaxNumber(this.data);
            this.dropDownDataCounter = this.dropDownData.length;
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

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    public setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    public updateInputValueAndRegister(value: string = ''): void {
        this.kvInputValue = value;
        this.onChange(value);
        this.getInputValue.emit(value);
    }

    public formatDataToMaxNumber(data: IKvInputDropdownItem[]): IKvInputDropdownItem[] {
        return data.slice(0, this.maxDropDownSuggestions);
    }

    public openKvInputDropDown(): void {
        if (this.dropDownData) {
            this.showKvInputDropDown = true;
            this.isKvInputDropDownTouched = false;
            this.isReadOnly = false;
        }
    }

    public closeKvInputDropDown(value): void {
        if (value) {
            this.updateInputValueAndRegister(value);
        }

        setTimeout(() => {
            this.showKvInputDropDown = false;
        }, 300);
    }

    public clearInputValue(): void {
        this.updateInputValueAndRegister('');
    }

    public handleEnterEvent(value: string): void {
        if (this.isKvInputDropDownTouched) {
            this.kvInputDropDown.getSelectedDropDownItem();
            this.showKvInputDropDown = false;
            this.isReadOnly = true;
        } else {
            this.updateInputValueAndRegister('');
            this.updateKvInputDropDownList(value);
        }
    }

    public handleInputArrowUpEvent(event: KeyboardEvent): void {
        this.kvInputDropDown.previousDropDownItem();
        this.isKvInputDropDownTouched = true;
    }

    public handleInputArrowDownEvent(event: KeyboardEvent): void {
        this.kvInputDropDown.nextDropDownItem();
        this.isKvInputDropDownTouched = true;
    }
    public updateKvInputDropDownList(value: string): void {
        if (!value) {
            return;
        }

        this.dropDownDataCounter = this.dropDownDataCounter + 1;
        const newDropDownItem: IKvInputDropdownItem = {
            index: this.dropDownDataCounter,
            value
        };

        if (this.dropDownData) {
            this.dropDownData.unshift(newDropDownItem);
        } else {
            this.dropDownData = [];
            this.dropDownData.push(newDropDownItem);
            this.openKvInputDropDown();
        }

        this.dropDownData = this.formatDataToMaxNumber(this.dropDownData);
    }
}
