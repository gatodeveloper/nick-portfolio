import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-example-component-shared',
  templateUrl: './example-component-shared.component.html',
  styleUrls: ['./example-component-shared.component.sass']
})
export class ExampleComponentSharedComponent implements OnInit {

  @Input() componentParamExample;
  @Output() emitExample: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this;
    debugger;
  }

  onClick(){
    this.emitExample.emit({data: 'Some new data'});
  }



}
