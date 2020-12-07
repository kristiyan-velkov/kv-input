import { HighlightMatchedItemsDirective } from './directives/highlight-matched-items.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// components
import { KvInputComponent } from './kv-input.component';

// directives
import { KvInputDropdownComponent } from './components/kv-input-dropdown/kv-input-dropdown.component';


@NgModule({
    declarations: [
        KvInputComponent,
        KvInputDropdownComponent,
        HighlightMatchedItemsDirective
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
    ],
    exports: [
        KvInputComponent,
        KvInputDropdownComponent,
        HighlightMatchedItemsDirective
    ]
})
export class KvInputModule { }
