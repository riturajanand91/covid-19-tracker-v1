import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private apiservice: ApiserviceService,
    private http: HttpClient
  ) { }

  //////////////////////
  ngOnInit() {

  }
  ///////////////////////////////////////////


  // ngOnInit() 
  // {

  ////////////////////
  // this.apiservice.getAthenaData = JSON.parse(this.apidata);  
  // console.log("With Parsed JSON :" , this.apidata);  
  ///////////////////////////
  // this.apiservice.getAthenaData().subscribe((apidata)=> JSON.parse(this.apidata);
  // {
  //   console.warn("get api data",apidata)
  //   console.log("Getting data here =================" + this.apiservice);

  //   // this.title = apidata['name']
  // })
  // private apiUrl : string = "https://api.covid19india.org/data.json";
  // }

  //trial 2
  //   ngOnInit(){
  //     console.log("getting to ngonint");
  //       this.apiservice.getAthenaData()
  //       .subscribe(apidata =>{
  //          this.apidata = Array.of(this.apidata);

  //          console.log("coming to hre")
  //          console.log(this.apidata)
  //   });
  // }


  //////trial 3
  // ngOnInit () {
  //   this.apiservice.getAthenaData().subscribe(
  //     data => {
  //       this.arrBirds;	 // FILL THE ARRAY WITH DATA.
  //        console.log(this.arrBirds[0]);
  //     },
  //     (err: HttpErrorResponse) => {
  //       console.log (err.message);
  //     }
  //   );
  // }
}