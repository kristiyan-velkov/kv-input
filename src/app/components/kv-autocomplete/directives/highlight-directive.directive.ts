import { Directive, Input, Renderer2, ElementRef, OnChanges, AfterViewInit, Output, EventEmitter } from '@angular/core';
@Directive({
    selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective implements OnChanges, AfterViewInit {
    @Input() searchedWord: string;
    @Input() itemClassOnMatch: string = 'matched';
    @Output() activeItemValue: EventEmitter<boolean> = new EventEmitter();

    public allElementsItems: any[] = [];

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngAfterViewInit(): void {
        this.allElementsItems = this.el.nativeElement.children;
    }
    ngOnChanges(): void {

        if (!this.allElementsItems && this.allElementsItems.length) {
            return;
        }

        for (const item of this.allElementsItems) {
            const elementText: string = item.children[1].innerText;
            if (this.searchedWord && elementText.startsWith(this.searchedWord)) {
                this.renderer.addClass(item, `${this.itemClassOnMatch}`);
            } else {
                const checkIfHaveActiveClass: boolean = item.classList.contains(`${this.itemClassOnMatch}`);

                if (checkIfHaveActiveClass) {
                    this.renderer.removeClass(item, `${this.itemClassOnMatch}`);
                }
            }
        }
    }
}
