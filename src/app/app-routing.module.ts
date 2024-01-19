import { NgModule } from '@angular/core';
import { CanMatch, CanMatchFn, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { canActivateChildGuard, canActivateGuard, canDeactivateGuard, isAdminGuard, isUserGuard, resolveGuard } from './guards/guards';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full" },
  {path: "home", component: HomeComponent},
  {path: "home/:id", component: HomeComponent},
  {path: "about", component: AboutComponent, canActivate: [()=> {
    return false;
  }]},
  {path: "contact/a/b/c", component: ContactComponent},
  {path: "products", component: ProductsComponent,
  canActivate:[canActivateGuard],
  canActivateChild: [canActivateChildGuard],
  canDeactivate: [canDeactivateGuard],
  resolve: {data_photos: resolveGuard},
  children: [
    {path: "product-detail/:id", component: ProductDetailComponent},
  ]},
  {path: "dashboard", component: AdminComponent, canMatch: [isAdminGuard]},
  {path: "dashboard", component: UserComponent, canMatch: [isUserGuard]},
  


  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
