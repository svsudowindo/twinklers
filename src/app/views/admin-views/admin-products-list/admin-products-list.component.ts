import { Component, OnInit } from '@angular/core';
import { CommonRequestService } from 'src/app/shared/services/http/common-request.service';
import { RequestEnums } from 'src/app/shared/constants/request-enums';
import Utils from 'src/app/shared/services/common/utils';
import { PAGINATION_ARRAY } from 'src/app/shared/constants/app-properties';

@Component({
  selector: 'app-admin-products-list',
  templateUrl: './admin-products-list.component.html',
  styleUrls: ['./admin-products-list.component.scss']
})

export class AdminProductsListComponent implements OnInit {

  page = 1;
  pageSize =10;
  paginationArray =  PAGINATION_ARRAY;
  constructor(private commonRequestService: CommonRequestService) { }
  ngOnInit(){
    this.getProductsList();
  }
  
  products: any[] = [  ];


  private getProductsList() {
    this.commonRequestService.request(RequestEnums.PRODUCTS_LIST).subscribe(res => {
      console.log(res)
      if (res.errors.length > 0) {
        // error
        return;
      } else if (res.status !== 200 || !Utils.isValidInput(res.data)) {
        // error
        return;
      } else {
        // success 
        this.products = res.data;
      }
    });
  }

  deleteProduct(id){
    console.log(id)
  }
 


}
