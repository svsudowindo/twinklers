import { RequestEnums } from './../../../shared/constants/request-enums';
import { CommonRequestService } from './../../../shared/services/http/common-request.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  STATUS } from './../../../shared/constants/gloabal-variable-enums';
import { Component, OnInit } from '@angular/core';
import {  NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseClass } from 'src/app/shared/services/common/baseClass';
import Utils from 'src/app/shared/services/common/utils';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent extends BaseClass implements OnInit {
  statusList = STATUS;
  categoryForm: FormGroup;
  validationMessages = {
    id: [
      {type: 'required', message: 'Category id is required'}
    ],
    name: [
      {type: 'required', message: 'Category Name is required'}
    ],
    active: [
      {type: 'required', message: 'Category Status is required'}
    ]
  };
  constructor(
    private modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private commonRequestService: CommonRequestService) {
      super();
    }

  ngOnInit() {
    this.initCategoryGroup();
  }
  private initCategoryGroup() {
    this.categoryForm = this.formBuilder.group({
      id: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      active: ['', Validators.compose([Validators.required])],
      _id: [null]
    });
  }

  saveCategory() {
    const payload = this.categoryForm.value;
    if (!Utils.isValidInput(payload._id)) {
      delete payload._id;
    }
    this.commonRequestService.request(RequestEnums.CREATE_CATEGORY, payload).subscribe(res => {
      if (res.errors.length > 0) {
        // error
        return;
      } else if (res.status !== 200 || !Utils.isValidInput(res.data)) {
        // error
        return;
      } else {
        // success
        alert(res.message);
        this.modal.close('Saved Successfully');
      }
    });
  }
}
