import {Component, Input, OnInit} from '@angular/core';
import {EntertainmentData} from "../../models/entertainment-data";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  @Input() data: EntertainmentData [] = [];
  constructor() { }
  getBookmarks() {
    return this.data.filter(data => data.isBookmarked === true);
  }
  ngOnInit(): void {
  }


}
