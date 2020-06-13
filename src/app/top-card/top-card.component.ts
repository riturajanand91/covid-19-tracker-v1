import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from './../apiservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss']
})
export class TopCardComponent implements OnInit {
  apidata;
  constructor(
    public apiservice:ApiserviceService,
    public http:HttpClient
  ) { }

  ngOnInit() {
    this.apiservice.getAthenaData().subscribe((data) => {
      // console.log(data);
      this.apidata = data['statewise'];
      // console.log(this.apidata[3]);
      // console.log(this.apidata[3].active);
      // console.log(this.apidata[4].state);
      // console.log(this.apidata[5].statecode);
    });
  }
}
