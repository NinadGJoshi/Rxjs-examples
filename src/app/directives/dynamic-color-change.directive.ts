import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[changes-color]' })
export class DynamicColorChangeDirective {
    @Input('index') index: number = 0;

    private colors = ['red', 'blue', 'green', 'gray', 'cyan', 'brown', 'pink', 'orange', 'yellow', 'indigo'];
    constructor(private el: ElementRef) {}

    ngOnChanges(){
        this.changesColors();
    }

    private changesColors(): void {
        this.el.nativeElement.style.backgroundColor = this.colors[this.index];
    }
}