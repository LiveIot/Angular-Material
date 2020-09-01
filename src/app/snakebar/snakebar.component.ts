import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snakebar',
  templateUrl: './snakebar.component.html',
  styleUrls: ['./snakebar.component.css']
})
export class SnakebarComponent implements OnInit {

constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
}
  ngOnInit(): void {
  }

}
