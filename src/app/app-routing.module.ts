import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudComponent } from './addstud/addstud.component';
import { ViewAllstudsComponent } from './view-allstuds/view-allstuds.component';
import { OnestudComponent } from './onestud/onestud.component';
import { ModifyComponent } from './modify/modify.component';
import { Login1Component } from './login1/login1.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"login1", component:Login1Component},
  {path:"login1 ", component:Login1Component},
  {path:"addstud", component:AddstudComponent},
  {path:"viewall", component:ViewAllstudsComponent},
  {path:"onestud/:sno", component:OnestudComponent},
  {path:"modify/:sno", component:ModifyComponent},
  {path:"welcome", component:WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
