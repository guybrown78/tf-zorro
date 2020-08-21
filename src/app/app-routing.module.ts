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
	{ path: 'modals', component: TwoComponent },
	{ path: 'inputs', component: OneComponent },
	{ path: 'file-select', component: TwoComponent },
	{ path: 'form-elements', component: TwoComponent },
	{ path: 'login', component: TwoComponent },
	{ path: 'decoupled-login', component: TwoComponent },
	{ path: 'reactive-login', component: TwoComponent },
	{ path: 'header', component: TwoComponent },
	{ path: 'title-breadcrumbs', component: TwoComponent },
	{ path: 'buttons', component: TwoComponent },
	{ path: 'icons', component: TwoComponent },
	{ path: 'stats', component: TwoComponent },
	{ path: 'dropdowns', component: TwoComponent },
	{ path: 'statuses', component: TwoComponent },
	{ path: 'search', component: TwoComponent },
	{ path: 'modals', component: TwoComponent },
	{ path: 'alerts', component: TwoComponent },
	{ path: 'layouts', component: TwoComponent },
	{ path: 'cards', component: TwoComponent },
	{ path: 'nodes', component: TwoComponent },
	{ path: 'node-flex', component: TwoComponent },
	{ path: 'node-row', component: TwoComponent },
	{ path: 'lists', component: TwoComponent },
	{ path: 'tables', component: TwoComponent },
	{ path: 'example-one', component: TwoComponent },
	{ path: 'example-two', component: TwoComponent },
	{ path: 'example-three', component: TwoComponent },
	{ path: 'example-four', component: TwoComponent },
	{ path: 'product-hub', component: TwoComponent },
	{ path: 'ngform', component: TwoComponent },
	{ path: 'reactive-form', component: TwoComponent },
	{ path: 'typography', component: TwoComponent },
	{ path: 'colour-pallete', component: TwoComponent },
	{ path: 'product-logos', component: TwoComponent },
	{ path: 'browser-icons', component: TwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
