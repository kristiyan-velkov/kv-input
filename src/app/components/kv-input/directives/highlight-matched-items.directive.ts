import { Directive, Input, Renderer2, ElementRef, OnChanges, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[appHighlightMatchedItems]'
})

export class HighlightMatchedItemsDirective implements OnChanges, AfterViewInit {
    @Input() searchedWord: string;
    @Input() itemClassOnMatched = 'matched';

    public allElementItems: any[] = [];

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngAfterViewInit(): void {
        this.allElementItems = this.el.nativeElement.children;
    }
    ngOnChanges(): void {

        if (!this.allElementItems && this.allElementItems.length) {
            return;
        }

        for (const item of this.allElementItems) {
            const itemText: string = item.children[1].innerText;
            if (this.searchedWord && itemText && itemText.startsWith(this.searchedWord)) {
                this.renderer.addClass(item, `${this.itemClassOnMatched}`);
            } else {
                const isItemContainClass: boolean = item.classList.contains(`${this.itemClassOnMatched}`);

                if (isItemContainClass) {
                    this.renderer.removeClass(item, `${this.itemClassOnMatched}`);
                }
            }
        }
    }
}
