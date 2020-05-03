import { POPUP_RESPONSE } from './../../../shared/constants/gloabal-variable-enums';
import { RequestEnums } from './../../../shared/constants/request-enums';
import { CommonRequestService } from './../../../shared/services/http/common-request.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from '../category/category.component';
import Utils from 'src/app/shared/services/common/utils';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: any[] = [];
  constructor(
    private modalService: NgbModal,
    private commonRequestService: CommonRequestService) { }
  ngOnInit() {
    this.getCategoryList();
  }
  open(category?: any) {
    const modalRef = this.modalService.open(CategoryComponent, {
      centered: true,
      keyboard: false,
      backdrop: 'static'
    });
    if (Utils.isValidInput(category)) {
      modalRef.componentInstance.categoryDetails = category;
    }
    modalRef.result.then(res => {
      if (res === POPUP_RESPONSE.SUCCESS) {
        this.getCategoryList();
      }
    });
  }

  private getCategoryList() {
    this.commonRequestService.request(RequestEnums.GET_CATEGORY_LIST).subscribe(res => {
      if (res.errors.length > 0) {
        // error
        return;
      } else if (res.status !== 200 || !Utils.isValidInput(res.data)) {
        // error
        return;
      } else {
        // success
        this.categories = res.data;
      }
    });
  }
}
