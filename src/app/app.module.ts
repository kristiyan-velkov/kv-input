import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DemoFormComponent } from './components/demo-form/demo-form.component';
import { KvInputModule } from './components/kv-input/kv-input.module';

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
    KvInputModule
  ],
  providers: [
    KvInputModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
