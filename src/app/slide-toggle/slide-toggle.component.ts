import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.css']
})
export class SlideToggleComponent implements OnInit {
color: ThemePalette = 'accent';
checked = false;
disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
