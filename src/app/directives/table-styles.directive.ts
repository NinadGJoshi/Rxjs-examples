import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: '[style-table]' })
export class TableStylingDirective {
    private readonly cssClasses: Array<string> = ['table', 'table-bordered', 'table-striped', 'table-hover'];
    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.addClasses();
    }

    private addClasses(){
        this.cssClasses.forEach(cls=> this.renderer.addClass(this.el.nativeElement, cls));
    }
}