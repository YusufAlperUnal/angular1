import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() highlightColor:string="";
  @Input() leaveColor:string="";


  constructor( private el:ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter(){
   //this.makeUnvisible()
    this.makeBigger();
    this.el.nativeElement.style.backgroundColor= this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave(){
    //this.makeVisible()
    this.makeSmaller()
    this.el.nativeElement.style.backgroundColor= this.leaveColor;
  }
  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor=color;
  }
  makeVisible(){
    this.el.nativeElement.style="visibility:visible";
  }
  makeUnvisible(){
    this.el.nativeElement.style="visibility:hidden";
  }
  makeBigger(){
    this.el.nativeElement.style="font-size:2rem";
  }
  makeSmaller(){
    this.el.nativeElement.style="font-size:0.8rem";
  }
}
