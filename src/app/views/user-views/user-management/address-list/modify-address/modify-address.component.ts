import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modify-address',
  templateUrl: './modify-address.component.html',
  styleUrls: ['./modify-address.component.scss']
})
export class ModifyAddressComponent implements OnInit {
  addressType = 'HOME';
  constructor(private modal:NgbActiveModal) { }

  ngOnInit() { 
  }

}
