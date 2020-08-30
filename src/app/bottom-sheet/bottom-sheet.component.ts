import {Component,OnInit} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';

/**
 * @title Bottom Sheet Overview
 */

 @Component({
   selector: 'app-bottom-sheet',
   templateUrl: './bottom-sheet.component.html',
   styleUrls: ['./bottom-sheet.component.css']
 })export class BottomSheetComponent implements OnInit {

 constructor(private _bottomSheet: MatBottomSheet) {}

 ngOnInit(): void {
   }

   openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

 }


 @Component({
  selector: 'app-bottom-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html'
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
