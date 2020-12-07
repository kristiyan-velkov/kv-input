import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvInputDropdownComponent } from './kv-input-dropdown.component';

describe('KvInputDropdownComponent', () => {
  let component: KvInputDropdownComponent;
  let fixture: ComponentFixture<KvInputDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvInputDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KvInputDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
