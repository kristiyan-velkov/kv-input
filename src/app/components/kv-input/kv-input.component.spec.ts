import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvInputComponent } from './kv-input.component';

describe('KvInputComponent', () => {
  let component: KvInputComponent;
  let fixture: ComponentFixture<KvInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KvInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
