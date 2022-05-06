import {Component, Input, OnInit} from '@angular/core';
import {EntertainmentData} from "../../models/entertainment-data";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  @Input() data: EntertainmentData [] = [];
  constructor() { }
  getMovies() {
    return this.data.filter(data => data.category === 'Movie');
  }
  ngOnInit(): void {
  }


}
