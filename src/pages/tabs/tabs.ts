import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;

  tab3Root = SettingsPage;

  constructor() {

  }
}
