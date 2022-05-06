import {Component, Input, OnInit} from '@angular/core';
import { EntertainmentData } from 'src/app/models/entertainment-data';
import { DataListService } from 'src/app/services/data-list.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() trending:boolean = false;
  @Input() background:string = '';
  @Input() data: any;
  @Input() index: any;
  constructor(public service: DataListService) {
  }

  toggleBookmark() {
    this.service.toggleBookmark(this.data);
  }

  ngOnInit(): void {
  }

}
