import { Component, OnInit } from '@angular/core';
import { NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor( private modal: NgbActiveModal) { }

  ngOnInit() {
  }

}
