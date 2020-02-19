import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listof-category',
  templateUrl: './listof-category.component.html',
  styleUrls: ['./listof-category.component.scss']
})
export class ListofCategoryComponent implements OnInit {
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
