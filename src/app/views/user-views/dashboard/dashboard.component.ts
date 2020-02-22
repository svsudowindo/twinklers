import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  images = [
    { img: 'assets/images/Carousel/c-1.jpg', label: 'sample1' },
    { img: 'assets/images/Carousel/c-2.jpg', label: 'sample2' },
    { img: 'assets/images/Carousel/c-3.jpg', label: 'sample3' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
