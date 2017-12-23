import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'protein-listing',
  templateUrl: './protein.component.html',
  styleUrls: ['./protein.component.css']
})
export class ProteinComponent implements OnInit {

  @Input()  protein;
  @Output() private onSelect = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }



  selectProtein(item) {
   // console.log(item)
    this.onSelect.emit(item);
  }

  
}
