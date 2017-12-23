import { Component, OnInit, Input , Output  , EventEmitter} from '@angular/core';

@Component({
  selector: 'organism-listing',
  templateUrl: './organism.component.html',
  styleUrls: ['./organism.component.css']
})
export class OrganismComponent implements OnInit {
  @Input() private organism;
  @Output() private onSelect = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  selectOrganism(item) {
    // console.log(item)
     this.onSelect.emit(item);
   }
 

}
