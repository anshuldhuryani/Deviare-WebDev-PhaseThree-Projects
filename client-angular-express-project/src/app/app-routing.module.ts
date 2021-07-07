import { RegistrationReactiveComponent } from './registration-reactive/registration-reactive.component';
import { RegistrationComponent } from './registration/registration.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customer-detail/:id', component: CustomerDetailComponent },
  { path: 'customer-add', component: CustomerAddComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'registration-reactive', component: RegistrationReactiveComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
