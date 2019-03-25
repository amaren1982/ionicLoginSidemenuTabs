import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
//  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
 // { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
 // { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class MemberRoutingModule { }
