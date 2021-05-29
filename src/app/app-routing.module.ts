import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { MaskComponent } from './mask/mask.component';
import { SocdistComponent } from './socdist/socdist.component';
import { VaccineComponent } from './vaccine/vaccine.component';
import { WashComponent } from './wash/wash.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'list', component:ListComponent},
  {path:'mask', component:MaskComponent},
  {path:'wash', component:WashComponent},
  {path:'socdist', component:SocdistComponent},
  {path:'vaccine', component:VaccineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
