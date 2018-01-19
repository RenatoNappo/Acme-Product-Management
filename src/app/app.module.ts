import { ProductGuardService } from './shared/RouteGuards/product-guard.service';
import { ProductService } from './shared/Services/product.service';
import { WelcomeComponent } from './home/welcome.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacesPipe } from './shared/Pipes/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: 'products', component: ProductListComponent},
        {path: 'products/:id', canActivate: [ProductGuardService] , component: ProductDetailComponent},
        {path: 'welcome', component: WelcomeComponent},
        {path: '', redirectTo: 'welcome', pathMatch: 'full'},
        {path: '**', component: PageNotFoundComponent}
      ]
      // , {useHash : true}
    )
  ],
  providers: [
    ProductService,
    ProductGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
