import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyEditComponent } from './pages/company/company-edit/company-edit.component';
import { CompanyListComponent } from './pages/company/company-list/company-list.component';
import { CompanyViewComponent } from './pages/company/company-view/company-view.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'company', component: CompanyListComponent},
  {path: 'company/edit', component: CompanyEditComponent},
  {path: 'company/edit/:id', component: CompanyEditComponent},
  {path: 'company/view/:id', component: CompanyViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
