
// modules
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { DemoFormComponent } from './components/demo-form/demo-form.component';
import { KvAutocompleteModule } from './components/kv-autocomplete/kv-autocomplete.module';
@NgModule({
  declarations: [
    AppComponent,
    DemoFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    KvAutocompleteModule
  ],
  providers: [KvAutocompleteModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
