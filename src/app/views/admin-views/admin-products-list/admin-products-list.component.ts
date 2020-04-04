import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products-list',
  templateUrl: './admin-products-list.component.html',
  styleUrls: ['./admin-products-list.component.scss']
})

export class AdminProductsListComponent implements OnInit {

  constructor() { }
  ngOnInit(){}
  
  products: any[] = [
    { id: '1', productName: 'chacobar', category: 'geneeral', updatedBy: 'balaji', updatedOn: '19/02/2020' },
    { id: '2', productName: 'five star', category: 'birthday', updatedBy: 'balaji', updatedOn: '21/02/2020' },
    { id: '3', productName: 'dairy milk', category: 'new year', updatedBy: 'balaji', updatedOn: '01/01/2020' },
    { id: '4', productName: 'kit kat', category: 'geneeral', updatedBy: 'balaji', updatedOn: '12/02/2020' },
    { id: '5', productName: 'Ferrero Rocher', category: 'event', updatedBy: 'balaji', updatedOn: '12/02/2020' },
    { id: '6', productName: 'Lindt & Sprüngli', category: 'geneeral', updatedBy: 'balaji', updatedOn: '16/02/2020' },
    { id: '7', productName: 'Ghirardelli', category: 'occasion', updatedBy: 'balaji', updatedOn: '11/01/2020' },
    { id: '8', productName: 'Hersheys', category: 'geneeral', updatedBy: 'balaji', updatedOn: '12/02/2020' },
    { id: '9', productName: 'Toblerone', category: 'birthday', updatedBy: 'balaji', updatedOn: '11/02/2020' },
    { id: '10', productName: 'Guylian', category: 'occasion', updatedBy: 'balaji', updatedOn: '09/01/2020' },
    { id: '11', productName: 'Patchi', category: 'geneeral', updatedBy: 'balaji', updatedOn: '12/01/2020' },
    { id: '12', productName: 'Godiva', category: 'occasion ', updatedBy: 'balaji', updatedOn: '14/01/2020' },
    { id: '13', productName: 'Nestlé', category: 'valentine  ', updatedBy: 'balaji', updatedOn: '14/02/2020' }

  ]


}
