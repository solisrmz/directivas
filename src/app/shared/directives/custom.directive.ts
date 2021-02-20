import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[custom]'
})
export class CustomDirective {
  
  @Input() set custom( valor: boolean){
    if (valor){
      this.vc.createEmbeddedView( this.tr);
    }else{
      this.vc.clear();
    }
  }
  constructor(private tr: TemplateRef<HTMLElement>, private vc: ViewContainerRef) {
    
  }

}
