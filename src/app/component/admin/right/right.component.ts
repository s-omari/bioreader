
import { Component, OnInit , Input , Output , EventEmitter ,  ChangeDetectorRef , ChangeDetectionStrategy} from '@angular/core';


@Component({
  selector: 'admin-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RightComponent implements OnInit {

  @Input()  item;
  @Input()  rightContent;
  @Input()  table;
  @Input()  isExpanded;
  @Output() private onOpenUpdateForm = new EventEmitter();
  @Output() private onRightToggle = new EventEmitter();

  constructor( private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
    this.cdRef.detectChanges();
  }

  	///UI INTERRACTIONS
	//when update button clicked
	openUpdateForm(id) {
    this.onOpenUpdateForm.emit(id);
  }
  


}
