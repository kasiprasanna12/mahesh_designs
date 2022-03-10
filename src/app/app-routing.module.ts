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
import { SelectionTableComponent } from './selection-table/selection-table.component';


const routes: Routes = [
  { path: '', redirectTo: '/vsi-list', pathMatch: 'full' },
  // { path: 'entry', component: EntryComponent },
  { path: 'vsi-list', component: VSIListComponent },
  { path: 'entry', component: EntryComponent,children:[
    { path: '', redirectTo: 'main/:id', pathMatch: 'full' },
    { path: 'main/:id/:index',component:MainContainerComponent},
    { path: 'selection',component:SelectionTableComponent}
  ] },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
