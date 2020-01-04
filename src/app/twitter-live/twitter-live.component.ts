import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter-live',
  templateUrl: './twitter-live.component.html',
  styleUrls: ['./twitter-live.component.scss']
})
export class TwitterLiveComponent implements OnInit {
  title = 'Browser market shares at a specific website, 2014';
  type = 'PieChart';
  data = [
     ['Firefox', 45.0],
     ['IE', 26.8],
     ['Chrome', 12.8],
     ['Safari', 8.5],
     ['Opera', 6.2],
     ['Others', 0.7] 
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {          
  };
 // width = 200;
 // height = 200;

  constructor() { }

  ngOnInit() {
  }

}
