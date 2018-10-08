import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.sass']
})
export class MainHeaderComponent implements OnInit {

  public showShadow;

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (event): void => {
    var wh = window.innerHeight;
    var py = window.pageYOffset;
    var scrollPosition = wh + py;

    (py > 10) ? this.showShadow = true : this.showShadow = false;
    

  }

}
