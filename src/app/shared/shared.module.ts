import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorDirective } from './directives/form-error.directive';
import { CustomDirective } from './directives/custom.directive';


@NgModule({
  declarations: [FormErrorDirective, CustomDirective],
  imports: [
    CommonModule
  ], 
  exports: [
    FormErrorDirective, 
    CustomDirective
  ]
})
export class SharedModule { }
