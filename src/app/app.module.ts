import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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
import { NavTabComponent } from './pages/nav-tab/nav-tab.component';
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
import { DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button'
import { CheckboxModule } from 'primeng/checkbox';
import { SidebarModule} from 'primeng/sidebar';
import { DatePipe } from '@angular/common';
import { UploadVsiComponent } from './pages/upload-vsi/upload-vsi.component';
import { MatrixDialogComponent } from './matrix-dialog/matrix-dialog.component';
import { SelectionTableComponent } from './selection-table/selection-table.component';
import { FileDropDirective } from './pages/upload-vsi/file-drop.directive';
import { FilterPipe } from './pages/compare-results/filter.pipe';
// import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { ConstantPipe } from './constant.pipe';
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
    MainContainerComponent,
    NavTabComponent,
    UploadVsiComponent,
    MatrixDialogComponent,
    SelectionTableComponent,
    FileDropDirective,
    FilterPipe,
    ConstantPipe,
    // ProductListComponent,
    // ProductDetailsComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatButtonModule,
    SidebarModule,
    DropdownModule,
    InputTextModule,
    CheckboxModule,
    TableModule,
    DialogModule,
    ButtonModule,
    NgbModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    // NgxUsefulSwiperModule,
    SwiperModule
  ],
  providers: [CustomerService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
