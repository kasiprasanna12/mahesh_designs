// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { ProductDetailsComponent } from './product-details/product-details.component';
// import { ProductListComponent } from './product-list/product-list.component';

// const routes: Routes = [
//   {path:'',component:ProductListComponent},
//   {path:'view',component:ProductDetailsComponent},
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { EntryComponent } from './entry/entry.component';
import { VSIListComponent } from './vsi-list/vsi-list.component';
import { MainContainerComponent } from './main-container/main-container.component';


const routes: Routes = [
  { path: '', redirectTo: '/entry', pathMatch: 'full' },
  { path: 'entry', component: EntryComponent }
  // {
  //   path: 'main', component: MainContainerComponent, children: [
  //     { path: '', redirectTo: 'vsi-list', pathMatch: 'prefix' },
  //     { path: 'entry', component: EntryComponent },
  //     { path: 'vsi-list', component: VSIListComponent },
      
  //   ]
  // },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
