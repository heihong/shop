import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';


import { HomeComponent } from './home/home.component';
import { BookCardComponent } from './book-card/book-card.component';
import {HttpClientModule} from "@angular/common/http";
import {BookListService} from "./services/book-list.service";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryBookListService} from "./dataMemory/in-memory-book-list.service";
import { CartComponent } from './cart/cart.component';
import { PopinAddToCartComponent } from './popin-add-to-cart/popin-add-to-cart.component';
import {CartService} from "./services/cart.service";
import { CartCardComponent } from './cart-card/cart-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    BookCardComponent,
    CartComponent,
    PopinAddToCartComponent,
    CartCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryBookListService, { dataEncapsulation: false },
    )
  ],
  entryComponents: [PopinAddToCartComponent],
  providers: [BookListService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
