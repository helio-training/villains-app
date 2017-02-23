import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './villain-delete-page.component.html',
  styleUrls: ['./villain-delete-page.component.scss']
})
export class VillainDeletePageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    if(!id) {
      this.router.navigate(['/404'])
    }
  }

}
