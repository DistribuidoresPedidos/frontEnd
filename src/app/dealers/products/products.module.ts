// Angular Modules
import { NgModule } from '@angular/core';

// Shared Module
import { SharedModule } from '../../shared/shared.module';

// Routing Module
import { ProductsRoutingModule } from './products-routing.module';

//Components
import {ProductsComponent} from './products.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductCreateComponent } from './product-create/product-create.component';

//resolvers
import { FilterOfferedProductsNamePipe } from './pipes/filter-offered-products-name.pipe';
import { FilteredOfferedProductsCategoryPipe } from './pipes/filtered-offered-products-category.pipe';
import { FilterOfferedProductsPricePipe } from './pipes/filter-offered-products-price.pipe';

import { ProductListResolver } from './resolvers/products-list.resolver';
import { ProductDetailResolver } from './resolvers/product-detail.resolver';
import { ProductCreateResolver } from './resolvers/products-create.resolver';
import { ProductCoordinateResolver } from './resolvers/product-coordinates.resolver';
import { UserResolver} from './resolvers/user.resolver'
import { RetailerCoordinateResolver} from './resolvers/retailer-coordinate.resolver'
import { ProductProcessingResolver} from './resolvers/product-processing.resolver'
import { ProductDepartedResolver} from './resolvers/product-departed.resolver'

import { Ng2SelectModule } from 'ng2-material-select';
import {ImageUploadModule} from "angular2-image-upload";

import { ProductdRetailerComponent } from './productd-retailer/productd-retailer.component';
import { ProductdDistributorComponent } from './productd-distributor/productd-distributor.component';
import { NguiMapModule} from '@ngui/map';
import {DirectionsRenderer} from '@ngui/map'
import { ChartsModule } from 'ng2-charts';

import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule,
    ImageUploadModule.forRoot(),
    Ng2SelectModule,
    ChartsModule,
    NgxPaginationModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyB5TTHJw5Az7pooIb25JXoh6Dyw48zfuDM'})

  ],
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent,

    FilterOfferedProductsPricePipe,
    FilteredOfferedProductsCategoryPipe,
    FilterOfferedProductsNamePipe,

    ProductCreateComponent,
    ProductdRetailerComponent,
    ProductdDistributorComponent

  ],
  providers: [
    ProductListResolver,
    ProductDetailResolver,
    ProductCreateResolver,
    ProductCoordinateResolver,
    UserResolver,
    RetailerCoordinateResolver,
    ProductDepartedResolver,
    ProductProcessingResolver,
    DirectionsRenderer

  ]
})
export class ProductsModule { }
