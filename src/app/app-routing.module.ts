import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {ProductComponent} from './pages/product/product.component';
import {ProductDetailComponent} from './pages/product-detail/product-detail.component';


const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'products', component: ProductComponent},
  { path: 'product/:id', component: ProductDetailComponent}
];

@NgModule({
  // Registering the RouterModule.forRoot() in the AppModule imports makes the Router service available everywhere in the application.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
