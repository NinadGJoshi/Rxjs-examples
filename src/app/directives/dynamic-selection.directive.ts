import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({ selector: '[dynamic-selection]' })
export class DynamicSeletionDirective {
    @Input() id: number;
    constructor(public template: TemplateRef<any>) { 
        this.id = 0;
    }
}