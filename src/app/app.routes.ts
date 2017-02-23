import { Routes } from '@angular/router';

import { VillainsListPageComponent } from './pages/villains/villains-list-page/villains-list-page.component';
import { VillainCreatePageComponent } from './pages/villains/villain-create-page/villain-create-page.component';
import { VillainUpdatePageComponent } from './pages/villains/villain-update-page/villain-update-page.component';
import { VillainDeletePageComponent } from './pages/villains/villain-delete-page/villain-delete-page.component';
import { VillainsDetailPageComponent } from './pages/villains/villains-detail-page/villains-detail-page.component';
import { PageNotFoundComponent } from './pages/common/page-not-found/page-not-found.component';

const AppRoutes: Routes = [
  { path: 'villains', component: VillainsListPageComponent },
  { path: 'villains/new', component: VillainCreatePageComponent },
  { path: 'villains/edit/:id', component: VillainUpdatePageComponent },
  { path: 'villains/delete/:id', component: VillainDeletePageComponent },
  { path: 'villains/:id', component: VillainsDetailPageComponent },

  { path: '', redirectTo: '/villains', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

export default AppRoutes;


export const Components = [
  VillainsListPageComponent,
  VillainCreatePageComponent,
  VillainUpdatePageComponent,
  VillainDeletePageComponent,
  VillainsDetailPageComponent,
  PageNotFoundComponent
];
