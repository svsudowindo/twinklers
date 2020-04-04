import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: any[] = [
    { id: '1',  category: 'geneeral',createdby:'bharath',updatedby:'vinode', CreatedDate: '21/02/2020', UpdatedDate: '19/02/2020',status:'Active' },
    { id: '2',  category: 'birthday',createdby:'vipul',updatedby:'babu', CreatedDate: '12/02/2020', UpdatedDate: '21/02/2020',status:'Inactive' },
    { id: '3', category: 'new year',createdby:'sai',updatedby:'balaji', CreatedDate: '19/02/2020', UpdatedDate: '01/01/2020' ,status:'Inactive'},
    { id: '4', category: 'coupples',createdby:'vinod',updatedby:'vicky', CreatedDate: '01/01/2020', UpdatedDate: '12/02/2020',status:'Active' },
  ]
  constructor(private modalService: NgbModal) { }
  ngOnInit() {
  }
  open() {
    const modalRef = this.modalService.open(CategoryComponent, {
      centered: true,
      keyboard: false,
      backdrop: 'static'
    });
    modalRef.componentInstance.name = 'World';
  }
  

  
  

}
