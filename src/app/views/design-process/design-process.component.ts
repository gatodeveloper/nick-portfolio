import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-design-process',
  templateUrl: './design-process.component.html',
  styleUrls: ['./design-process.component.sass']
})
export class DesignProcessComponent implements OnInit {

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

    if(scrollPosition >= 1200){
      this.animations.apply1 = true;
    }

    if(scrollPosition >= 1440){
      this.animations.apply2 = true;
    }

    if(scrollPosition >= 1715){
      this.animations.apply3 = true;
    }

    if(scrollPosition >= 2000){
      this.animations.apply4 = true;
    }

    if(scrollPosition >= 2300){
      this.animations.apply5 = true;
    }

    if(scrollPosition >= 2590){
      this.animations.apply6 = true;
    }



  };

}
