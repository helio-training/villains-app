import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggerService } from '../../../services/common/logger.service';

@Component({
  templateUrl: './villain-delete-page.component.html',
  styleUrls: ['./villain-delete-page.component.scss']
})
export class VillainDeletePageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private loggerService: LoggerService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.loggerService.info(id);


    if(!id) {
      this.router.navigateByUrl('/not-found');
    }
  }

}
