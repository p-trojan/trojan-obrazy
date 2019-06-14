import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { NoContentComponent } from './no-content/no-content.component';
import { CreationsComponent } from './creations/creations.component';

const routes: Routes = [
  {path: '', redirectTo: '/creations', pathMatch: 'full'},
  {path: 'biography', component: BiographyComponent },
  {path: 'creations', component: CreationsComponent},
  {path: '**', component: NoContentComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
