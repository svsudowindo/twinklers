import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonRequestService } from 'src/app/shared/services/http/common-request.service';
import { RequestEnums } from 'src/app/shared/constants/request-enums';
import { HttpHeaders } from '@angular/common/http';
import Utils from 'src/app/shared/services/common/utils';

@Component({
  selector: 'app-admin-modify-product',
  templateUrl: './admin-modify-product.component.html',
  styleUrls: ['./admin-modify-product.component.scss']
})
export class AdminModifyProductComponent implements OnInit {

  public productForm:FormGroup;
  public selectedFile:any;
  public productImg="assets/images/icons/camera.png";
  constructor(public fb:FormBuilder, private router:Router,private commonRequestService: CommonRequestService,) { }

  ngOnInit() {


    this.productForm = this.fb.group({
      id :['PROD_25'],
      name: ['', [Validators.required]],
      mrp: ['',[Validators.required]],
      discountPrice: ['',[Validators.required]],
      discountPricepercentage: "",
      availableStock: ['',[Validators.required]],
      cost: ['',[Validators.required]],
      isStockAvailable:['yes', [Validators.required]],
      description: "",
      images: [],
      rating: 0,
      active:true 
    });

  }


  createProduct(){
    console.log(this.productForm.value)
    RequestEnums.CREATE_PRODUCT.values = this.productForm.value;
    this.commonRequestService.request(RequestEnums.CREATE_PRODUCT).subscribe(data=>{
      console.log(data)
    },
    err=>{console.log(err)})
  }

  discountAmt(amtType){
    var form = this.productForm.value;
    if(amtType=="price"){
      if(form.mrp=="")return false; 
     let amt= parseInt(form.mrp) - parseInt(form.discountPrice); 
      this.productForm.patchValue({cost:amt});
    } 

    if(amtType=="mrp"){
      if(form.discountPrice==""){ 
        this.productForm.patchValue({cost:form.mrp});
        return false;
      } 
     let amt= parseInt(form.mrp) - parseInt(form.discountPrice); 
      this.productForm.patchValue({cost:amt});
    }

  }

  

    onSelectedFile(ev) {
      console.log(ev.target.files);
      const formData = new FormData();
      const files = ev.target.files as Array<File>;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i], files[i].name);
      }
      const headers = new HttpHeaders({'Content-Type':'multipart/form-data'});
      this.commonRequestService.request(RequestEnums.UPLOAD_IMAGE_GET_URL, formData, null, headers).subscribe(res => {
        console.log(res)
        if (res.errors.length > 0) {
          // error
          return;
        } else if (res.status !== 200 || !Utils.isValidInput(res.data)) {
          // error
          return;
        } else {
          // success
          alert('Updated Successfully'); 
         
          this.productForm.patchValue([{images: res.data.fileUrl}]);
          this.productImg = res.data.fileUrl; 
        }
      });
    }

  // {
  //   "id": "PROD_11",
  //   "name": "phant",
  //   "mrp": 200,
  //   "discountPrice": 100,
  //   "availableStock": 100,
  //   "isStockAvailable": true,
  //   "description": "Product description",
  //   "images": [],
  //   "rating": 0,
  //   "active": true
  // }

}
