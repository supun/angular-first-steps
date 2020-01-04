import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-build-model',
  templateUrl: './build-model.component.html',
  styleUrls: ['./build-model.component.css']
})
export class BuildModelComponent implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.getData();
  }

}
