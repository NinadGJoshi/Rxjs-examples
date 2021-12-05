import { Component, ContentChildren, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, shareReplay } from 'rxjs/operators';
import { DynamicSeletionDirective } from 'src/app/directives/dynamic-selection.directive';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  public selectedSection: TemplateRef<any> | any;
  @ViewChildren(DynamicSeletionDirective) templateRefs: QueryList<DynamicSeletionDirective> | any;

  public sectionIndex: number = 0;
  private loadResultSub?: BehaviorSubject<boolean>;
  public loadResult$?: Observable<boolean>;

  constructor() {
    this.loadResultSub = new BehaviorSubject<boolean>(false);
    this.loadResult$ = this.loadResultSub?.asObservable().pipe(distinctUntilChanged(),shareReplay(1));
  }

  public getTemplate(templateId: number) {
    return this.templateRefs.toArray().find((x:any) => x.id == templateId)?.template;
  }

  public getSelection(index: number): void {
    this.selectedSection = this.getTemplate(index);
    this.sectionIndex = index;
  }

  public onLoadResult(): void {
    this.loadResultSub?.next(!this.loadResultSub.value);
  }

  private getResult(): void {
    const obs$ = new Observable(observer=> {
      setTimeout(()=>{
        observer.next('Yes, somehow understandable!')
        observer.complete();
      }, 1000);
      observer.next('Hi Observable');
      observer.next('Am I understandable?’');
    });

    obs$.subscribe(console.log);
  }

  ngOnInit(): void {
    this.getResult();
  }
  
  ngAfterViewInit():void {
    this.selectedSection = this.getTemplate(0);
  }
}
