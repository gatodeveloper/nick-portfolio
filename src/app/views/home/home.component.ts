import { Component, OnInit, HostListener, ElementRef} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public mx : number = 0;
  public animations : any = {};

  constructor(
    public el: ElementRef
    ) { }


  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  scroll = (event): void => {
    var wh = window.innerHeight;
    var py = window.pageYOffset;
    var scrollPosition = wh + py;
    this.mx = (scrollPosition > this.mx) ? scrollPosition : this.mx;

    console.log("Scroll Position: ", scrollPosition);
    console.log("Max Position: ", this.mx);

    if(scrollPosition >= 1180){
      this.animations.apply1 = true;
      this.animations.apply2 = true;
    }

    if(scrollPosition >= 1820){
      this.animations.apply3 = true;
      this.animations.apply4 = true;
    }

    if(scrollPosition >= 2450){
      this.animations.apply5 = true;
    }

    if(scrollPosition >= 3070){
      this.animations.apply6 = true;
    }



  };

}
