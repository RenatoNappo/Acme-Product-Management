import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { WelcomeComponent } from './../home/welcome.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        {path: 'welcome', component: WelcomeComponent},
        {path: '', redirectTo: 'welcome', pathMatch: 'full'},
        {path: '**', component: PageNotFoundComponent}
      ]
    ),
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
