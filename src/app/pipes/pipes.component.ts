import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  title = 'myNgApp';

  jsonData={
    name:"harshal",
    age:87
  }

  todaysDate=Date()

  modey=100

}
