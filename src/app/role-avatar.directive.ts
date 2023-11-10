import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRoleAvatar]'
})
export class RoleAvatarDirective implements OnInit{
  @Input() role: any;

  constructor(private elementRef: ElementRef, private render: Renderer2) { }

  ngOnInit() {
    if(this.role ==="User"){
      this.elementRef.nativeElement.style.backgroundColor = "blue";
    }
    if (this.role === "Administrator"){
      this.elementRef.nativeElement.style.backgroundColor = "red";
    }
    if (this.role === "Moderator"){
      this.elementRef.nativeElement.style.backgroundColor = "green";
    }
    this.elementRef.nativeElement.style.textAlign = "center";
    this.render.setProperty(this.elementRef.nativeElement, 'innerHTML', this.role.charAt(0));
  }

}
