import { ApiserviceService } from './../apiservice.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  apidata;

  constructor(
    private apiservice: ApiserviceService,
    private http: HttpClient,

  ) { }

  ngOnInit() {
    this.apiservice.getAthenaData().subscribe((data) => {
      this.apidata = data['statewise'];
    });
  }

}
