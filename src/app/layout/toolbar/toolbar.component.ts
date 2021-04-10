import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() inputSideNav: MatSidenav;
  @Input() isDarkMode: boolean;
  @Output('darkModelToggled') darkModelToggled = new EventEmitter<{ isDarkMode: boolean }>();
  constructor() { }

  ngOnInit() {
  }
  toggleDarkMode()
  {
    this.darkModelToggled.emit({ isDarkMode: !this.isDarkMode });
  }
}
