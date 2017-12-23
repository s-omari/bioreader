import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'organism-list',
  templateUrl: './organism-list.component.html',
  styleUrls: ['./organism-list.component.css']
})
export class OrganismListComponent implements OnInit {
  @Input() organism;
  constructor() { }

  ngOnInit() {
  }

}
