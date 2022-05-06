import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { EntertainmentData } from '../models/entertainment-data';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataListService {
  data = new BehaviorSubject<EntertainmentData[]>([]);
  constructor(private http: HttpClient) { }



  public getData() {
   this.http.get("assets/data.json").subscribe((value:any) => {
     this.data.next(value);
   });
  }

  public toggleBookmark(obj: any) {
    let index = this.data.value.findIndex(value => value.title === obj.title);
    this.data.value[index].isBookmarked = !this.data.value[index].isBookmarked;
  }
}
