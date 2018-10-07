import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-design-philosophy',
  templateUrl: './design-philosophy.component.html',
  styleUrls: ['./design-philosophy.component.sass']
})
export class DesignPhilosophyComponent implements OnInit {

  public mx : number = 0;
  public animations : any = {};

  constructor(
    public el: ElementRef
    ) { }


  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (event): void => {
    var wh = window.innerHeight;
    var py = window.pageYOffset;
    var scrollPosition = wh + py;
    this.mx = (scrollPosition > this.mx) ? scrollPosition : this.mx;

    console.log("Scroll Position: ", scrollPosition);
    console.log("Max Position: ", this.mx);

    if(scrollPosition >= 1090){
      this.animations.apply1 = true;
    }

    if(scrollPosition >= 1405){
      this.animations.apply2 = true;
    }

    if(scrollPosition >= 1685){
      this.animations.apply3 = true;
    }

    if(scrollPosition >= 1980){
      this.animations.apply4 = true;
    }



}
