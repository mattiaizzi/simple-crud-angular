import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  selectedId: number | undefined;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(
      (params) => (this.selectedId = Number(params.get('id')))
    );
  }

  ngOnInit(): void {}
}
