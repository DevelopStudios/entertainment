import {Component, Input, OnInit} from '@angular/core';
import {EntertainmentData} from "../../models/entertainment-data";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  @Input() data: EntertainmentData [] = [];
  constructor() { }
  getSeries() {
    return this.data.filter(data => data.category === 'TV Series');
  }
  ngOnInit(): void {
  }


}
