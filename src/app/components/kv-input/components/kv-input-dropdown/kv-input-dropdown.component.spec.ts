import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightMatchedItemsDirective } from '../../directives/highlight-matched-items.directive';

import { KvInputDropdownComponent } from './kv-input-dropdown.component';

describe('KvInputDropdownComponent', () => {
  let component: KvInputDropdownComponent;
  let fixture: ComponentFixture<KvInputDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvInputDropdownComponent, HighlightMatchedItemsDirective],
      providers: [
        { provide: HighlightMatchedItemsDirective, useValue: true },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KvInputDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
