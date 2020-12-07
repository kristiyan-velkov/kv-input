import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataListService } from 'src/app/services/data-list.service';
import { IkvAutocompleteListItem } from '../kv-autocomplete/models/kv-autocomplete.interface';

@Component({
    selector: 'app-demo-form',
    templateUrl: './demo-form.component.html',
    styleUrls: ['./demo-form.component.scss']
})
export class DemoFormComponent implements OnInit {
    public demoForm: FormGroup = this.fb.group({
       kvInput: new FormControl(''),
       testInput: new FormControl(''),
       testInput2: new FormControl(''),
    });

    public data: IkvAutocompleteListItem[];
    public fakeData: IkvAutocompleteListItem[] = [
        {
            index:1,
            value: 'Kiro'
        },
        {
            index:2,
            value: 'Pesho'
        }
    ];
    
    constructor(private dataListService: DataListService, private fb: FormBuilder) { }

    ngOnInit(): void {
        this.dataListService.getDefaultListValues().subscribe(
            res => this.data = res,
            err => new Error(err),
        );
    }

    public onSubmitForm(): void {
        console.log('Form was submitted', this.demoForm.value);
        this.demoForm.reset();
    }

    public emitInputValue(value): void {
        console.log('Working without formControl', value);
    }
}
