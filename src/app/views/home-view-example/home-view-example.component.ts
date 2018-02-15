import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view-example',
  templateUrl: './home-view-example.component.html',
  styleUrls: ['./home-view-example.component.sass']
})
export class HomeViewExampleComponent implements OnInit {

  public paramExample: String;
  public childData: String = 'Initial Data';

  constructor() { }

  ngOnInit() {
    this.paramExample = 'Value param';
  }

  emitFnExample(event){
    this.childData = event.data;
  }

}
