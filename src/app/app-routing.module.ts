import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneComponent } from './example/one/one.component'; 
import { TwoComponent } from './example/two/two.component'; 
const routes: Routes = [
	{ 
		path: '', 
		component: OneComponent, 
		data: {} 
	},
	{ 
		path: 'one', 
		component: OneComponent, 
		data: {} 
	},
	{ 
		path: 'two', 
		component: TwoComponent, 
		data: {} 
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
