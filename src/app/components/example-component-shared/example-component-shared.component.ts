import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ExampleServiceService } from "app/services/example-service/example-service.service";

@Component({
  selector: 'app-example-component-shared',
  templateUrl: './example-component-shared.component.html',
  styleUrls: ['./example-component-shared.component.sass']
})
export class ExampleComponentSharedComponent implements OnInit {

  @Input() componentParamExample;
  @Output() emitExample: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public exampleServiceService: ExampleServiceService
    ) { }

  ngOnInit() {
    this;
    debugger;
  }

  onClick(){
    this.exampleServiceService.getExample()
      .then( result => {
        debugger;
        this.emitExample.emit(result);
      })
      .catch( error =>{})
    
  }



}
