import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { SignupComponent } from './componets/signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { NgToastModule } from 'ng-angular-popup';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { FormsModule } from '@angular/forms';
import { ResetComponent } from './componets/reset/reset.component';
import { ProductComponent } from './componets/product/product.component';
import { CartComponent } from './componets/cart/cart.component';
import { CartService } from './services/cart.service';
import { HomeComponent } from './componets/home/home.component';
import { FeedbackViewComponent } from './componets/feedback-view/feedback-view.component';
import { FeedbackAddComponent } from './componets/feedback-add/feedback-add.component';
import { AboutUsComponent } from './componets/about-us/about-us.component';
import { ProductAdminComponent } from './componets/product-admin/product-admin.component';
import { ProdEditComponent } from './componets/prod-edit/prod-edit.component';
import { UserDetailsComponent } from './componets/user-details/user-details.component';
import { UserEditComponent } from './componets/user-edit/user-edit.component';
import { UserOrdersComponent } from './componets/user-orders/user-orders.component';
import { OrdersComponent } from './componets/orders/orders.component';
import { FilterPipe } from './pipes/filter.pipe';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ResetComponent,
    ProductComponent,
    CartComponent,
    HomeComponent,
    FeedbackViewComponent,
    FeedbackAddComponent,
    AboutUsComponent,
    ProductAdminComponent,
    ProdEditComponent,
    UserDetailsComponent,
    UserEditComponent,
    UserOrdersComponent,
    OrdersComponent,
    FilterPipe
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    FormsModule


  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,

  },
    CartService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
