import { Injectable } from '@angular/core';
import {environment} from '../../.././environments/environment';
import { Observable } from 'rxjs';
const API_URL = `${environment.apiUrl}`;
import { HttpClient } from '@angular/common/http';
import {Staff} from ".././defines/staff"
@Injectable({
  providedIn: 'root'
})
export class StaffService {

  staffs:Staff[] =[]
  constructor(
    private http: HttpClient
  ) { }
  getAll():Observable<Staff[]> {
  
    return this.http.get<Staff[]>(API_URL + '/staffs');
  }

  //lay 1 item theo id
  find( id:any ):Observable<Staff> {
    return this.http.get<Staff>(`${API_URL}/staffs/${id}`);
  }

  //store
  store( staff:Staff ): Observable<Staff>{
    return this.http.post<Staff>(API_URL + '/staffs', staff);
  }

  //update
  update( id:number, staff:Staff ): Observable<Staff>{
    console.log(staff);
    return this.http.put<Staff>(`${API_URL}/staffs/${id}`, staff);
  }

  //destroy
  destroy(id: number): Observable<Staff> {
    return this.http.delete<Staff>(`${API_URL}/staffs/${id}`);
  }

  //search
  search( q:any ):Staff[] {
   this.getAll().subscribe(staffs => {
      this.staffs = staffs;
    });
    // console.log( this.staffs);
    
    let results:Staff[] = this.staffs;
    // console.log(results);
    return results;
  }
}
