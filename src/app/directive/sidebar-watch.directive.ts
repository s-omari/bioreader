import {Directive, ElementRef, Renderer, OnInit, AfterViewInit, AfterViewChecked} from '@angular/core';
import {Store} from "@ngrx/store";


import * as fromRoot from "../shared/store/index";
import * as layout from '../shared/store/layout/layout.actions';
declare var jquery:any;
declare var $ :any;
//let $ = require('jquery');
@Directive({selector: '[sidebarWatch]'})

export class SidebarWatchDirective implements OnInit{
  constructor(private el: ElementRef, private _store: Store<fromRoot.AppState>) {}

  /*
   Doing the checks on ngOnInit makes sure the DOM is fully loaded and the
   elements are available to be selected
   */
  ngOnInit() {
    /*
     Watch for the left sidebar state
     */
    this._store.select(fromRoot.getLayoutLeftSidenavState).subscribe((state) => {
      if (this.el.nativeElement.className == 'left-sidebar') {
        if (state) {
        //  $(".left-sidebar").css("margin-left", "300px");
        //  $(this.el.nativeElement).css('width', '300px');
        } else {
        //  $(".left-sidebar").css("margin-left", "0");
        //  $(this.el.nativeElement).css('width', '0');
        }
      }
    });

    /*
     Watch for the right sidebar state
     */
    this._store.select(fromRoot.getLayoutRightSidenavState).subscribe((state) => {
      /*
       You can use classes (addClass/removeClass) instead of using jQuery css(), or you
       can go completely vanilla by using selectors such as windiw.getElementById(). .
       */
      if (this.el.nativeElement.className == 'right-sidebar') {
        if (state) {
          this._store.dispatch(new layout.OpenRightSidenavAction);
        } else {
          this._store.dispatch(new layout.CloseRightSidenavAction);
        }
      }
    });



        /*
     Watch for the right sidebar state
     */
    this._store.select(fromRoot.getLayoutRightExpandedState).subscribe((state) => {
      /*
       You can use classes (addClass/removeClass) instead of using jQuery css(), or you
       can go completely vanilla by using selectors such as windiw.getElementById(). .
       */
      if (this.el.nativeElement.className == 'right-sidebar') {
        if (state) {
          this._store.dispatch(new layout.ExpandRightSidenavAction);
        } else {
          this._store.dispatch(new layout.CollapseRightSidenavAction);
        }
      }
    });


  }

}
