import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { NoContentComponent } from './no-content/no-content.component';
import { CreationComponent } from './creation/creation.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BiographyComponent },
  { path: 'creation', component: CreationComponent},
  {path: '**', component: NoContentComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
