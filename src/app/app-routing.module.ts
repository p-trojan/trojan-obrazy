import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { NoContentComponent } from './no-content/no-content.component';
import { CreationsComponent } from './creations/creations.component';
import { CreationDialogComponent } from './creations/creation-dialog.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'biography', component: BiographyComponent },
  { path: 'creations', component: CreationsComponent},
  { path: 'selectedCreation/:id', component: CreationDialogComponent},
  {path: '**', component: NoContentComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
