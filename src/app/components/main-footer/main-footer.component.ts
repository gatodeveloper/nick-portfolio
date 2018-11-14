import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.sass']
})
export class MainFooterComponent implements OnInit {

  public showCopiedText : boolean = false;
  public showClipboardArea : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  copied(event){
    var self = this;
    console.log('Copied')
    this.showCopiedText = true;
    setTimeout(function(){
      console.log('removed')
      self.showCopiedText = false;
      self.showClipboardArea = false;
    }, 3000)
  }

}
