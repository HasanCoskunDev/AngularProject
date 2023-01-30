import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexPageComponent } from './flex-page/flex-page.component';
import { GridPageComponent } from './grid-page/grid-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/flex-page', pathMatch: 'full' },
  { path: 'flex-page', component: FlexPageComponent },
  { path: 'grid-page', component: GridPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
