import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  // apiUrl : string = "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise";
  apiUrl: string = "https://api.covid19india.org/data.json";
  districtiwseUrl: string = "https://api.covid19india.org/state_district_wise.json";
  postUrl: string = "https://avanij.in/wp-json/wp/v2/posts";
  constructor(
    private http: HttpClient
  ) { }

  getAthenaData() {
    return this.http.get('https://api.covid19india.org/data.json');
  }

  getDistrictwise() {
    return this.http.get(this.districtiwseUrl);

  }

  getData() {
    return this.http.get(this.apiUrl);
  }

  getPostData() {
    return this.http.get(this.postUrl);
  }
}
