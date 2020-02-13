import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  SecurityContext
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[rbSafeHtml]'
})
export class SafeHtmlDirective implements OnInit {
  @Input() rbSafeHtml: string;

  constructor(
    private elementRef: ElementRef,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.innerHTML = this.sanitizer.sanitize(
      SecurityContext.HTML,
      this.rbSafeHtml
    );
  }
}
