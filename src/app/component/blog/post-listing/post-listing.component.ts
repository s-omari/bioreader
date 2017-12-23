import { Component, OnInit, Input , Output  , EventEmitter} from '@angular/core';


@Component({
  selector: 'post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.css']
})
export class PostListingComponent implements OnInit {
  @Input() private post;
  @Output() private onSelect = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectItem(item) {

     this.onSelect.emit(item);
   }
 

}
