import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { DataListService } from './services/data-list.service';
import { EntertainmentData } from './models/entertainment-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data:EntertainmentData[] = [];
  _dataCopy: EntertainmentData[] = [];
  constructor(public http: HttpClient, public service: DataListService, public router : Router) {
  }
  title = 'entertainment-app';

  search(searchText: string) {
    if(searchText!== ""){
      let searchValue = searchText.toLocaleLowerCase();
      let temp = [...this.data];
          this.data = temp.filter((item:EntertainmentData) =>{
            return item.title.toLocaleLowerCase().match(searchValue );      
          });
        } else {
          console.log('Nothing to search...');
          this.data = this._dataCopy;
        }
  }

  ngOnInit() {
    this.service.getData();
    this.service.data.subscribe((value:any) => {
    this.data = [...value];
    this._dataCopy = [...value];
  })

  }
}
