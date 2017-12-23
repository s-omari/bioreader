import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'admin-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  @Input()  rightExpanded;
  @Input()  table;
  @Input()  data;
  @Output() private onDataItemSelected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onItemSelect(selected) {
    this.onDataItemSelected.emit(selected)
  }
}
