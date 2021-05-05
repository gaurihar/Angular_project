import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {ElkComponent}  from './component/elk/elk.component'
import {CreateTemplateComponent} from './component/create-template/create-template.component'
const routes: Routes = [
{path: 'elk', component: ElkComponent},
{path:'create',component:CreateTemplateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
