import { Component, OnInit } from '@angular/core';
import {  NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


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
