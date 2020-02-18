import { Component, OnInit } from '@angular/core';
import { TopbarService } from './topbar.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  totalCartCount = 0;
  constructor(
    private topbarService: TopbarService
  ) {
    this.topbarService.cartCountSubject.subscribe(res => {
      this.totalCartCount = res;
    });
  }

  ngOnInit() {
  }

}
