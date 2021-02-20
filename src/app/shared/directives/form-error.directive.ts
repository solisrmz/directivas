import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[formError]'
})
export class FormErrorDirective implements OnInit, OnChanges {
  
  private _color: string = 'red';
  private _mensaje: string = 'Campo requerido';
  htmlElement: ElementRef<HTMLElement>;

  @Input() set valido(valor: boolean){
    if( valor ){
      this.htmlElement.nativeElement.classList.add('hidden');
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  @Input() set color( valor: string){
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje( valor: string){
    this._mensaje = valor;
    this.changeMessage();
  }

  constructor( private el: ElementRef<HTMLElement> ) { 
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
    console.log('Directiva');
    this.class();
    this.changeMessage();
    this.setColor();
  }

  changeMessage():void{
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

  setColor(){
    this.htmlElement.nativeElement.style.color = this._color;
  }

  class(){
    this.htmlElement.nativeElement.classList.add('form-text');
  }
}
