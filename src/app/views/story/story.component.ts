import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

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

    if(scrollPosition >= 820){
      this.animations.apply1 = true;
    }
    if(scrollPosition >= 1140){
      this.animations.apply2 = true;
    }
    if(scrollPosition >= 1340){
      this.animations.apply3 = true;
    }
    if(scrollPosition >= 2080){
      this.animations.apply4 = true;
    }
    if(scrollPosition >= 2400){
      this.animations.apply5 = true;
    }
    if(scrollPosition >= 2725){
      this.animations.apply6 = true;
    }
    if(scrollPosition >= 3065){
      this.animations.apply7 = true;
    }
    if(scrollPosition >= 3390){
      this.animations.apply8 = true;
    }
    if(scrollPosition >= 3730){
      this.animations.apply9 = true;
    }
    if(scrollPosition >= 4190){
      this.animations.apply10 = true;
    }
    if(scrollPosition >= 4580){
      this.animations.apply11 = true;
    }
    if(scrollPosition >= 4980){
      this.animations.apply12 = true;
    }
    if(scrollPosition >= 5400){
      this.animations.apply13 = true;
    }
    
  }

}
