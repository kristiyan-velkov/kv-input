import { By } from '@angular/platform-browser';
import { query } from '@angular/animations';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { HighlightMatchedItemsDirective } from './highlight-matched-items.directive';

describe('HighlightMatchedItemsDirective', () => {
    @Component({
        template: '<ul appHighlightMatchedItems [searchedWord]="test" [itemClassOnMatched]="matched"><li><span>1</span><span>test</span></li></ul>'
    })

    class TestComponent { }


    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                HighlightMatchedItemsDirective
            ],
            providers: [
                { provide: HighlightMatchedItemsDirective, useValue: true },
              ],
        }).compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
    });

    it('should create the TestDirectiveComponent', () => {
        expect(component).toBeTruthy();
    });
});
