import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'admin-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
	@Input()  items;
	@Output() private onSelect = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  SelectItem(table) {
        this.onSelect.emit(table);
      }

}
