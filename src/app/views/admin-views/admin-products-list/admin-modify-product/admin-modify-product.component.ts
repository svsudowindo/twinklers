import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonRequestService } from 'src/app/shared/services/http/common-request.service';
import { RequestEnums } from 'src/app/shared/constants/request-enums';
import { HttpHeaders } from '@angular/common/http';
import Utils from 'src/app/shared/services/common/utils';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({
  selector: 'app-admin-modify-product',
  templateUrl: './admin-modify-product.component.html',
  styleUrls: ['./admin-modify-product.component.scss']
})
export class AdminModifyProductComponent implements OnInit {

  public productForm:FormGroup;
  public selectedFile:any;
  public productImg="assets/images/icons/camera.png";
  categories: any[] = [];
  public imageNotif = false;
  public serverErr = false;
  public product_id = null;

  constructor(public fb:FormBuilder, 
    private router:Router,
    private commonRequestService: CommonRequestService, 
    public actroute:ActivatedRoute,
    private commonService: CommonService) { 
    this.product_id = this.actroute.snapshot.params.id;
  }

  ngOnInit() { 
   this.initProductForm(); 
  }

   getImageGroup(){
    return this.fb.group({
      url:[""]
    })
  }

  initProductForm(){
    this.productForm = this.fb.group({
      id :['PROD_27', [Validators.required]],
      name: ['', [Validators.required]],
      mrp: ['',[Validators.required]],
      discountPrice: ['',[Validators.required]],
      discountPricepercentage: "",
      availableStock: ['',[Validators.required]],
      cost: ['',[Validators.required]],
      isStockAvailable:[true, [Validators.required]],
      description:  ['',[Validators.required]],
      categoryID:  [null], 
      images: this.fb.array([this.getImageGroup()]),
      rating: 0,
      active:true 
    });
    this.getCategoryList();
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

        if(this.product_id!=null){
          this.getProductDetils();
        }
      }
    });
  }

  private getProductDetils() {
    RequestEnums.PRODUCT_DETAILS.path = '/common/get-product-by-id/'+this.product_id;
    this.commonRequestService.request(RequestEnums.PRODUCT_DETAILS).subscribe(res => {
   
      if (res.errors.length > 0) {
        // error
        return;
      } else if (res.status !== 200 || !Utils.isValidInput(res.data)) {
        // error
        return;
      } else {
        
        this.productForm.patchValue(res.data);
        this.productImg = res.data.images[0].url
      }
    });
  }


  closeAlert(type){
    if(type=='image'){ this.imageNotif = false;}
    if(type=='server'){ this.serverErr = false;}
    
  }
  createProduct(){ 
    const userInfo = this.commonService.getUserInfo(); 
    RequestEnums.CREATE_PRODUCT.path = '/admin/create-product/'+userInfo._id
    this.commonRequestService.request(RequestEnums.CREATE_PRODUCT,this.productForm.value).subscribe(data=>{ 
      if(data.errors.length > 0){
        this.serverErr = data.message;
      }else{
        this.serverErr = false;
        this.router.navigate(['/admin/products-list']);
      }
     
    },
    err=>{console.log(err)})
  }

  isStockAvailableChange(status){ 
    this.productForm.get("isStockAvailable").setValue(status);
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
      const formData = new FormData();
      const files = ev.target.files as Array<File>;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i], files[i].name);
      }
      const headers = new HttpHeaders({'Content-Type':'multipart/form-data'});
      this.commonRequestService.request(RequestEnums.UPLOAD_IMAGE_GET_URL, formData, null, headers).subscribe(res => { 
        if (res.errors.length > 0) {
          // error
          return;
        } else if (res.status !== 200 || !Utils.isValidInput(res.data)) {
          // error
          return;
        } else {
          // success
          // alert('Updated Successfully'); 
          this.imageNotif = true; 
          (this.productForm.get("images") as FormArray).controls[0].patchValue({url:res.data.fileUrl});
          this.productImg = res.data.fileUrl; 
        }
      });
    }
 

}
