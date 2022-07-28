import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ClientsDetailComponent } from './pages/clients-detail/clients-detail.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { CongesDetailComponent } from './pages/conges-detail/conges-detail.component';
import { CongesComponent } from './pages/conges/conges.component';
import { ConsultantsDetailComponent } from './pages/consultants-detail/consultants-detail.component';
import { ConsultantsComponent } from './pages/consultants/consultants.component';
import { CraDetailComponent } from './pages/cra-detail/cra-detail.component';
import { CraComponent } from './pages/cra/cra.component';
import { EvaluationsNouveauComponent } from './pages/evaluations-nouveau/evaluations-nouveau.component';
import { EvaluationsResumeComponent } from './pages/evaluations-resume/evaluations-resume.component';
import { EvaluationsComponent } from './pages/evaluations/evaluations.component';
import { FacturesDetailComponent } from './pages/factures-detail/factures-detail.component';
import { FacturesComponent } from './pages/factures/factures.component';
import { LoginComponent } from './pages/login/login.component';
import { Login2Component } from './pages/login2/login2.component';
import { MissionsDetailComponent } from './pages/missions-detail/missions-detail.component';
import { MissionsComponent } from './pages/missions/missions.component';
import { ProfilComponent } from './pages/profil/profil.component';

const routes: Routes = [
  { path: '', component: CraComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/first', component: Login2Component },
  { path: 'profil', component: ProfilComponent },

  { path: 'factures', component: FacturesComponent },
  { path: 'factures/detail', component: FacturesDetailComponent },
  { path: 'factures/detail/:id', component: FacturesDetailComponent },
  
  { path: 'conges', component: CongesComponent },
  { path: 'conges/detail', component: CongesDetailComponent },
  { path: 'conges/detail/:id', component: CongesDetailComponent },

  { path: 'clients', component: ClientsComponent },
  { path: 'clients/detail', component: ClientsDetailComponent },
  { path: 'clients/detail/:id', component: ClientsDetailComponent },

  { path: 'missions', component: MissionsComponent },
  { path: 'missions/detail', component: MissionsDetailComponent },
  { path: 'missions/detail/:id', component: MissionsDetailComponent },

  { path: 'consultants', component: ConsultantsComponent },
  { path: 'consultants/detail', component: ConsultantsDetailComponent },
  { path: 'consultants/detail/:id', component: ConsultantsDetailComponent },

  { path: 'cra', component: CraComponent },
  { path: 'cra/detail', component: CraDetailComponent },
  { path: 'cra/detail/:id', component: CraComponent },
  { path: 'evaluations', component: EvaluationsComponent },
  { path: 'evaluations/nouveau', component: EvaluationsNouveauComponent },
  { path: 'evaluations/resume', component: EvaluationsResumeComponent },
  { path: '**', redirectTo: "cra" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
