import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({
  selector: 'app-modify-address',
  templateUrl: './modify-address.component.html',
  styleUrls: ['./modify-address.component.scss']
})
export class ModifyAddressComponent implements OnInit, OnChanges {
  addressType = 'HOME';
  public addressForm:FormGroup;
  constructor(public fb:FormBuilder, private modal:NgbActiveModal, private commonServices:CommonService) { }
  public countriesList = [];
  public stateList = [];
  public cityList = [];
  @Input('addresses') addresses;
  @Output() emitAddress: EventEmitter<any> = new EventEmitter();

  ngOnInit() {  
    console.log(this.addresses)
    this.addressForm = this.fb.group({
      type :['HOME', [Validators.required]],
      country: ['India', [Validators.required]],
      state: ['',[Validators.required]],
      city: ['',[Validators.required]],
      street:  ['',[Validators.required]],
      landmark: ['',[Validators.required]],
      pincode: ['',[Validators.required]] 
    });
    this.addressForm.patchValue(this.addresses);
    this.countries();
    this.getState()
  }
  ngOnChanges(){
   
    
  }

  addAddress(){ 
    this.emitAddress.emit(this.addressForm.value);
    this.modal.dismiss('Cross click');
    
  }
  countries(){
    this.commonServices.getCountries().subscribe(data=>{ 
      this.countriesList = data;
    });
  }

  getState(){ 
    this.commonServices.getStates('India').subscribe(data=>{  
      this.stateList = data;
      
    });
  }

  getCity(){
    this.commonServices.getCities(this.addressForm.value.state).subscribe(data=>{  
      this.cityList = data;
      this.addressForm.patchValue(this.addresses);
    });
  }

}
