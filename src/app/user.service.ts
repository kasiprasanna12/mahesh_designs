import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
// import { environment } from 'src/environments/environment.prod';
import { environment } from '../environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { subtract } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.serverUrl;
  subject: any = new Subject();
  vsiListData: any;
  selectedVsi: any;

  onchangeOfCarfamily = new Subject();
  $onchangeOfCarfamily = this.onchangeOfCarfamily.asObservable();

  onchangeSpecification = new Subject();
  $onchangeSpecification = this.onchangeSpecification.asObservable();
  selectedBuild: any;
  
  constructor(private http: HttpClient) { }

  sendLocalData(msg: any) {
    this.subject.next(msg)
  }

  getLocalData(): Observable<any> {
    return this.subject.asObservable()
  }
  // Get API

  getProducts() {
    return this.http.get<any>('assets/vsi.json');
  }

  getVSI() {
    return this.http.get(`${this.apiUrl}vsiList`, { headers: new HttpHeaders().set("x-api-key", "8wTrIOeUcK13w05Km1YdF2Z8s77lzcM48gSPZ2LB") })
  }

  getvsiVersion(query: any) {
    let params = new HttpParams().set('vsiVersion', query)
    return this.http.get(`${this.apiUrl}katashikiList`, { headers: new HttpHeaders().set("x-api-key", "8wTrIOeUcK13w05Km1YdF2Z8s77lzcM48gSPZ2LB"), params })
  }

  //Post API

  createCFC(formData: any) {
    return this.http.post(`${this.apiUrl}cfc`, formData, { headers: new HttpHeaders().set("x-api-key", "8wTrIOeUcK13w05Km1YdF2Z8s77lzcM48gSPZ2LB") })
  }

  uploadFile(file: any) {
    return this.http.post(`${this.apiUrl}upload`, file, { headers: new HttpHeaders().set("x-api-key", "8wTrIOeUcK13w05Km1YdF2Z8s77lzcM48gSPZ2LB") })
  }

  getvehicleConfigurationData(conf:any){
    return this.http.get(`${this.apiUrl}vehicleConfiguration`+'?vsiVersion='+conf.vsi_version+'&katashiki='+ conf.katashiki, { headers: new HttpHeaders().set("x-api-key", "8wTrIOeUcK13w05Km1YdF2Z8s77lzcM48gSPZ2LB") })
  }
}
