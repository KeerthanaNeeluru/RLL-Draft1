import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './componets/cart/cart.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { HomeComponent } from './componets/home/home.component';
import { LoginComponent } from './componets/login/login.component';
import { ProductComponent } from './componets/product/product.component';
import { ResetComponent } from './componets/reset/reset.component';
import { SignupComponent } from './componets/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { AboutUsComponent } from './componets/about-us/about-us.component';
import { ProductAdminComponent } from './componets/product-admin/product-admin.component';
import { UserDetailsComponent } from './componets/user-details/user-details.component';
import { UserOrdersComponent } from './componets/user-orders/user-orders.component';
import { OrdersComponent } from './componets/orders/orders.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'reset', component: ResetComponent },
  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  {path : 'about', component: AboutUsComponent},
{path:'product-admin', component: ProductAdminComponent},
{path:'user-details',component: UserDetailsComponent},
{path:'user-orders',component: UserOrdersComponent},
{path:'orders',component: OrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

 
})
export class AppRoutingModule { }
