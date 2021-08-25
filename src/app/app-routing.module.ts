import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EverythingComponent } from './everything/everything.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent},   //home Top Heading
  {path:'everything',component:EverythingComponent}    //Everything
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
