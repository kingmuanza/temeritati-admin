import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import { IgxStepperModule } from 'igniteui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { AppbarComponent } from './_components/appbar/appbar.component';
import { CompanyListComponent } from './pages/company/company-list/company-list.component';
import { CompanyEditComponent } from './pages/company/company-edit/company-edit.component';
import { CompanyViewComponent } from './pages/company/company-view/company-view.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommunityEditComponent } from './pages/community/community-edit/community-edit.component';
import { CommunityListComponent } from './pages/community/community-list/community-list.component';
import { CommunityViewComponent } from './pages/community/community-view/community-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppbarComponent,
    CompanyListComponent,
    CompanyEditComponent,
    CompanyViewComponent,
    CommunityEditComponent,
    CommunityListComponent,
    CommunityViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DataTablesModule,
    NgbModule,
    IgxStepperModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
