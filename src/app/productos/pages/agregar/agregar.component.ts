import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  form!: FormGroup;
  nombre: string = 'Jose';
  color: string = 'red';
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.form = this.fb.group({
      nombre: ['', Validators.required]
    })
  }

  validar(campo:string): boolean{
    return this.form.get(campo)?.invalid || false;
  }

  changeNombre(){
    this.nombre = Math.random().toString();
  }

  changeColor(){
    this.color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

}
