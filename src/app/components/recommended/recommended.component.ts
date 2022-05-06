import {Component, Input, OnInit} from '@angular/core';
import {EntertainmentData} from "../../models/entertainment-data";

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {
  @Input() data: EntertainmentData [] = [];
  constructor() { }
  getRecommended() {
    return this.data.filter(data => data.recommended === true);
  }
  ngOnInit(): void {
  }

}
