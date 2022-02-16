import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

/* Components */
import { EntryComponent } from './entry/entry.component';
import { HeaderComponent } from './pages/header/header.component';
import { HeaderSubNavComponent } from './pages/header/sub-nav/sub-nav.component';
import { TopBandComponent } from './pages/header/top-band/top-band.component';
import { NavUnclassifiedComponent } from './pages/header/nav-unclassified/nav-unclassified.component';
import { TopSearchComponent } from './pages/top-search/top-search.component';
import { CompareResultsComponent } from './pages/compare-results/compare-results.component';
import { SelectBoxComponent } from './pages/select-box/select-box.component';
import { TableComponent } from './pages/table/table.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CustomerService } from './pages/table/customerservice';

// import { ProductListComponent } from './product-list/product-list.component';
// import { ProductDetailsComponent } from './product-details/product-details.component';

/*PrimeNG */
import { DropdownModule} from 'primeng/dropdown';
import { TableModule} from 'primeng/table';
import { InputTextModule} from 'primeng/inputtext';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VSIListComponent } from './vsi-list/vsi-list.component';
import { MainContainerComponent } from './main-container/main-container.component';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSubNavComponent,
    EntryComponent,
    TopBandComponent,
    NavUnclassifiedComponent,
    TopSearchComponent,
    CompareResultsComponent,
    SelectBoxComponent,
    TableComponent,
    FooterComponent,
    VSIListComponent,
    MainContainerComponent
    // ProductListComponent,
    // ProductDetailsComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatButtonModule,
    DropdownModule,
    InputTextModule,
    TableModule,
    DialogModule,
    ButtonModule,
    NgbModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
