import { query } from '@angular/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';


import { KvInputComponent } from './kv-input.component';
import { IKvInputDropdownItem } from './models/kv-input-dropdown';
import { By } from '@angular/platform-browser';
import { KvInputDropdownComponent } from './components/kv-input-dropdown/kv-input-dropdown.component';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
describe('KvInputComponent', () => {
    let component: KvInputComponent;
    let fixture: ComponentFixture<KvInputComponent>;
    let mockData: IKvInputDropdownItem[];

    beforeEach(async () => {
        mockData = [
            { index: 1, value: 'test1' },
            { index: 2, value: 'test2' }
        ];

        await TestBed.configureTestingModule({
            declarations: [
                KvInputComponent,
                KvInputDropdownComponent
            ],
            imports: [
                FormsModule,
                NoopAnimationsModule
            ]
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

    it('should create a input tag when component is created', () => {
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('input')).toBeTruthy();
    });

    it('should set the correct placeholder for input', () => {
        component.placeholder = 'test placeholder';
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('input').placeholder).toContain('test placeholder');
    });


    it('should placeholder to be default if no placeholder was provided as input', () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('input').placeholder).toContain('Type ...');
    });

    it('should not disable input if isDisabled is set to false', () => {
        spyOn(fixture.componentInstance, 'setDisabledState');
        component.setDisabledState(true);
        component.isDisabled = true;
        fixture.detectChanges();

        expect(component.isDisabled).toBeTrue();
    });

    it('should input will be readOnly if readOnly is set to true', () => {
        component.isReadOnly = true;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('input').readOnly).toBeTrue();
    });

    it('should formatDataToMaxNumber method return data with length Equal to MaxDropDownSuggestion', () => {
        component.maxDropDownSuggestions = 1;
        let resultAfterFormatData = component.formatDataToMaxNumber(mockData);
        fixture.detectChanges();

        expect(resultAfterFormatData.length).toEqual(1);
    });

    it('should not show a dropDown when component loads', () => {
        const inputDropDownComponent = fixture.debugElement.queryAll(By.directive(KvInputDropdownComponent));
        fixture.detectChanges();
        expect(inputDropDownComponent.length).toBe(0);
    });

    describe('kv input on focus Event', () => {
        let kvInput;

        beforeEach(() => {
            kvInput = fixture.debugElement.query(By.css('input'));

            mockData = [
                { index: 1, value: 'test1' },
                { index: 2, value: 'test2' }
            ];

            spyOn(fixture.componentInstance, 'openKvInputDropDown');
            kvInput.triggerEventHandler('focus', {});
            component.dropDownData = mockData;
            fixture.componentInstance.showKvInputDropDown = true;
        });

        it('should call OpenKvInputDropDown on focus input', () => {
            fixture.detectChanges();
            expect(fixture.componentInstance.openKvInputDropDown).toHaveBeenCalled();
        });

        it('should show KvInputDropDown component', () => {
            fixture.detectChanges();
            const inputDropDownComponent = fixture.debugElement.queryAll(By.directive(KvInputDropdownComponent));
            expect(inputDropDownComponent.length).toBe(1);
        });

        describe('KvinputDropDown was open', () => {
            it('should set dropDownData to data provided from input data', () => {
                fixture.detectChanges();
                const inputDropDownComponent = fixture.debugElement.queryAll(By.directive(KvInputDropdownComponent));
                expect(inputDropDownComponent[0].componentInstance.dropDownData).toEqual(component.dropDownData);
            });

            it('shoul clear kvInput Value on clear button was clicked', () => {
                spyOn(fixture.componentInstance, 'clearInputValue');
                fixture.detectChanges();
                const inputDropDownComponent = fixture.debugElement.query(By.directive(KvInputDropdownComponent));
                inputDropDownComponent.query(By.css('button')).triggerEventHandler('click', {});

                expect(fixture.componentInstance.clearInputValue).toHaveBeenCalled();
            });
        });
    });

    describe('kv input on blur Event', () => {
        xit('should call closeKvInputDropDown on blur input', () => {
            const kvInput = fixture.debugElement.query(By.css('input'));
            kvInput.triggerEventHandler('blur', kvInput);
            fixture.detectChanges();

            spyOn(fixture.componentInstance, 'closeKvInputDropDown');
            expect(fixture.componentInstance.closeKvInputDropDown).toHaveBeenCalled();
        });

        it('should hide KvInputDropDown component', () => {
            fixture.componentInstance.showKvInputDropDown = false;
            fixture.detectChanges();
            const inputDropDownComponent = fixture.debugElement.queryAll(By.directive(KvInputDropdownComponent));
            expect(inputDropDownComponent.length).toBe(0);
        });
    });

    describe('kv input on keyUp.ArrowUp event', () => {
        it('should call OpenkvInputDropDown method on input keyUp ArrowUp', () => {
            const kvInput = fixture.debugElement.query(By.css('input'));

            spyOn(fixture.componentInstance, 'handleInputArrowUpEvent');

            kvInput.triggerEventHandler('keyup.ArrowUp', null);
            fixture.detectChanges();

            expect(fixture.componentInstance.handleInputArrowUpEvent).toHaveBeenCalled();
        });
    });

    describe('kv input on keyUp.ArrowDown event', () => {
        it('should call handleInputArrowDownEvent method on input keyUp ArrowDown', () => {
            const kvInput = fixture.debugElement.query(By.css('input'));

            spyOn(fixture.componentInstance, 'handleInputArrowDownEvent');

            kvInput.triggerEventHandler('keyup.ArrowDown', null);
            fixture.detectChanges();
            expect(fixture.componentInstance.handleInputArrowDownEvent).toHaveBeenCalled();
        });
    });

    describe('kv input on keyUp.Enter event', () => {
        xit('should call handleEnterEvent', () => {
            const kvInput = fixture.debugElement.query(By.css('input'));
            kvInput.triggerEventHandler('keyup.enter', 'test');
            spyOn(fixture.componentInstance, 'handleEnterEvent');
            fixture.detectChanges();
            expect(fixture.componentInstance.handleEnterEvent).toHaveBeenCalled();
        });
    });


    describe('kv input on Escape event', () => {
        xit('should call handleEnterEvent', () => {
            const kvInput = fixture.debugElement.query(By.css('input'));
            kvInput.triggerEventHandler('keyup.escape', kvInput);
            spyOn(fixture.componentInstance, 'closeKvInputDropDown');
            fixture.detectChanges();
            expect(fixture.componentInstance.closeKvInputDropDown).toHaveBeenCalled();
        });
    });
});

