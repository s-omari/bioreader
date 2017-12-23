import { Component, OnInit , Input	, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'protein-list',
  templateUrl: './protein-list.component.html',
  styleUrls: ['./protein-list.component.css']
})
export class ProteinListComponent implements OnInit {
  @Input() proteins;



  //@Output() private onSelect = new EventEmitter();
  

  constructor() { }

  ngOnInit() {
  }




}
