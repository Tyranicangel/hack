import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
	{
		path:'',
		component:HomeComponent,
		children:[
			{ path:'',component:MainComponent },
			{ path:'area',component:WorkspaceComponent },
			{ path:'**', redirectTo:'', pathMatch:'full' }
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
