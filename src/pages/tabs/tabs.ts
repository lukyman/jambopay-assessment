import { Component } from '@angular/core';

import { UsersByDriverStatusPage } from '../UsersByDriverStatus/UsersByDriverStatus';
import { UsersByAgePage } from '../UsersByAge/UsersByAge';
import { AllUsersPage } from '../AllUsers/AllUsers';
import { UsersByEducationPage } from '../users-by-education/users-by-education';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AllUsersPage;
  tab2Root = UsersByDriverStatusPage;
  tab3Root = UsersByAgePage;
  tab4Root = UsersByEducationPage;
  constructor() {

  }
}
