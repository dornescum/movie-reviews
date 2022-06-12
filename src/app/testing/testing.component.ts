import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-testing', templateUrl: './testing.component.html', styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  firstName: string = "Mihai";
  imgSource: string = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  defaultValue: string = 'what ever';
  isApproved: boolean = false;
  numbers: string[] = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', '10'];
  luckyNumber = 0;
  isStyleApplied:boolean = false;
  highLightColor = 'white';

  constructor() {
  }

  ngOnInit(): void {
  }

  getTheValue(e: any) {
    console.log(e.target.value)
  }

  approved(status: boolean) {
    this.isApproved = status;
  }
  highlight(color:string){
    this.highLightColor = color;
  }
  toggleStyle(){
    this.isStyleApplied = !this.isStyleApplied;
  }
  // changeValue(e){
  //   console.log(e.target.value)
  // }
}
