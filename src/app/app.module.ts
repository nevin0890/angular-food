import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardcarouselComponent } from './cardcarousel/cardcarousel.component';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';

const appRoutes: Routes = [
  { path: '', component: CardcarouselComponent },
  { path: 'orders', component: OrdersComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardcarouselComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
