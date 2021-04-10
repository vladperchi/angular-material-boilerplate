import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-boilerplate';
  themeVariant: string = '';
  onDarkModeToggled(data: { isDarkMode: boolean }) {
    this.themeVariant === '' ? this.themeVariant = 'dark-theme' : this.themeVariant = '';
  }
}

