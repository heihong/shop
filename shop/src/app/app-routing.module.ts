import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BookItemListComponent} from "./book-item-list/book-item-list.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'home/:idBookList', component: BookItemListComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
