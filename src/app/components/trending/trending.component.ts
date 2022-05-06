import {Component, Input, OnInit} from '@angular/core';
import {EntertainmentData} from "../../models/entertainment-data";

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
 @Input() data: EntertainmentData [] = [];
  constructor() {

  }

  getTrending() {
    return this.data.filter(data => data.isTrending === true);
  }

  ngOnInit(): void {
  }

}
