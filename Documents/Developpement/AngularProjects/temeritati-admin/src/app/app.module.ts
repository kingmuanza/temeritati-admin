import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

import { ProfilComponent } from './pages/profil/profil.component';
import { LoginComponent } from './pages/login/login.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FooterComponent } from './_composants/footer/footer.component';
import { MenuHautComponent } from './_composants/menu-haut/menu-haut.component';
import { Login2Component } from './pages/login2/login2.component';
import { CraComponent } from './pages/cra/cra.component';
import { CraDetailComponent } from './pages/cra-detail/cra-detail.component';
import { MoisComponent } from './_composants/mois/mois.component';
import { EvaluationsComponent } from './pages/evaluations/evaluations.component';
import { EvaluationsResumeComponent } from './pages/evaluations-resume/evaluations-resume.component';
import { EvaluationsNouveauComponent } from './pages/evaluations-nouveau/evaluations-nouveau.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ClientsDetailComponent } from './pages/clients-detail/clients-detail.component';
import { MissionsComponent } from './pages/missions/missions.component';
import { ConsultantsComponent } from './pages/consultants/consultants.component';
import { MissionDisplayComponent } from './_composants/mission-display/mission-display.component';
import { MissionsDetailComponent } from './pages/missions-detail/missions-detail.component';
import { ConsultantsDetailComponent } from './pages/consultants-detail/consultants-detail.component';
import { FacturesComponent } from './pages/factures/factures.component';
import { CongesComponent } from './pages/conges/conges.component';
import { FacturesDetailComponent } from './pages/factures-detail/factures-detail.component';
import { CongesDetailComponent } from './pages/conges-detail/conges-detail.component';
import { AjouterCommentaireComponent } from './_composants/ajouter-commentaire/ajouter-commentaire.component';

registerLocaleData(fr);

const ngZorroConfig: NzConfig = {
  theme: {
    primaryColor: '#550000'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    LoginComponent,
    FooterComponent,
    MenuHautComponent,
    Login2Component,
    CraComponent,
    CraDetailComponent,
    MoisComponent,
    EvaluationsComponent,
    EvaluationsResumeComponent,
    EvaluationsNouveauComponent,
    AccueilComponent,
    ClientsComponent,
    ClientsDetailComponent,
    MissionsComponent,
    ConsultantsComponent,
    MissionDisplayComponent,
    MissionsDetailComponent,
    ConsultantsDetailComponent,
    FacturesComponent,
    CongesComponent,
    FacturesDetailComponent,
    CongesDetailComponent,
    AjouterCommentaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    NzPageHeaderModule,
    NzMenuModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzGridModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzTableModule,
    NzStepsModule,
    NzSliderModule,
    NzCollapseModule,
    NzTagModule,
    NzSwitchModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR },
    { provide: NZ_CONFIG, useValue:  ngZorroConfig  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
