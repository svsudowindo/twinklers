import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  items : any[] = [
    {
      id: '001',
      catagory:'general',
      currentdate: '25122019',
      updateddate: '15012020'
    },
    {
      id: '002',
      catagory:'general',
      currentdate:'19022020',
      updateddate: '25012020'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
