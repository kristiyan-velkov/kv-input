import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//components
import { ListOfValuesComponent } from './components/list-of-values/list-of-values.component';
import { KvAutocompleteComponent } from './kv-autocomplete.component';

// directives
import { HighlightDirectiveDirective } from './directives/highlight-directive.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    KvAutocompleteComponent,
    ListOfValuesComponent,
    HighlightDirectiveDirective,
  ],
  exports: [
    KvAutocompleteComponent,
    ListOfValuesComponent,
  ],
  providers: [],
})
export class KvAutocompleteModule { }
