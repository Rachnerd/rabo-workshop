import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlDirective } from './safe-html.directive';

@NgModule({
  declarations: [SafeHtmlDirective],
  exports: [SafeHtmlDirective],
  imports: [CommonModule]
})
export class SharedModule {}
