import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvAutocompleteComponent } from './kv-autocomplete.component';

describe('KvAutocompleteComponent', () => {
  let component: KvAutocompleteComponent;
  let fixture: ComponentFixture<KvAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KvAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
