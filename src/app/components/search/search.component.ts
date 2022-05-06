import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchText:string = '';
  @Output() searchItem = new EventEmitter();
  constructor() { }

  emitText(searchValue: string) :void{
    this.searchItem.emit(searchValue);
  }

  ngOnInit(): void {
  }

}
