import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StuDetailsComponent } from '../app/stu-details/stu-details.component';
import { StuTableComponent } from './stu-table/stu-table.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';


const routes: Routes = [
  {path: '', component: StuTableComponent},
  {path : 'details', component : StuDetailsComponent},
  {path : 'edit-details', component : EditDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }