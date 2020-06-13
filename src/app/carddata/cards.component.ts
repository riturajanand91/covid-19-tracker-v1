import { ApiserviceService } from '../apiservice.service';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardComponent implements OnInit {
  countrydata;
  districtdata ;
  constructor(
    private apiservice: ApiserviceService,
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.apiservice.getAthenaData().subscribe((data)=>{
      // console.log(data);
      this.countrydata = data['statewise'];
      // console.log(this.countrydata['12'].statecode);
      // console.log(this.countrydata);
      // console.log(this.countrydata[2].active);
      // console.log(this.countrydata[2].state);
      // console.log(this.countrydata[2].active.statecode);
      // console.log(this.countrydata[1]+ "Hello");
      // console.log(this.countrydata);
    });

    this.apiservice.getDistrictwise().subscribe(
      data => {
          let res = data;
          // here setting data['statewise'] gets into the node statewise so keeping it like data; fetches all nodes at a time
          this.districtdata = res; //now getting inside distrcit and node
          // console.log(this.districtdata['Uttar Pradesh']['districtData']['Ghaziabad']['confirmed']);//fetching data from statewise node number [0] with node name active
          // console.log(res);
      }

  );
  }


}
