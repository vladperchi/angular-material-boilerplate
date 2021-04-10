import { Component, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-boilerplate';
  themeVariant: string = '';
  constructor(private localStorageService: LocalStorageService){}
  ngOnInit()
  {
    this.themeVariant = this.localStorageService.getItem('themeVariant');
  }
  onDarkModeToggled(data: { isDarkMode: boolean }) {
    this.themeVariant === '' ? this.themeVariant = 'dark-theme' : this.themeVariant = '';
    this.localStorageService.setItem('themeVariant',this.themeVariant);
  }
}

