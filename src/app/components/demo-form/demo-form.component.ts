import { IKvInputDropdownItem } from './../kv-input/models/kv-input-dropdown';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataListService } from 'src/app/services/data-list.service';

@Component({
    selector: 'app-demo-form',
    templateUrl: './demo-form.component.html',
    styleUrls: ['./demo-form.component.scss']
})
export class DemoFormComponent implements OnInit {
    public demoForm: FormGroup = this.fb.group({
        kvInput: new FormControl(''),
    });

    public data: IKvInputDropdownItem[];
    public formStatus: object;

    constructor(private dataListService: DataListService, private fb: FormBuilder) { }

    ngOnInit(): void {
        this.dataListService.getDefaultDropDownData().subscribe(
            res => this.data = res,
            err => new Error(err),
        );
    }

    public onSubmitForm(): void {
        console.log('Form was submitted', this.demoForm.value);
        this.formStatus = this.demoForm.value.kvInput;
        this.demoForm.reset();
    }

    public emitInputValue(value): void {
        this.formStatus = this.demoForm.value.kvInput;
        console.log('Working without formControl', value);
    }
}
