// Employee service class
import { Injectable } from '@angular/core';
// Import service packages an employee model class
import {HttpClient} from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import {Employee} from './employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // Selected employee to design a form
  selectedEmployee: Employee;
  //employees to store data from mongodb
  employees: Employee[]; 
  //BaseUrl for fetching employee info from server
  readonly baseUrl = "http://localhost:3000/employees"

  //Inject HttpClient in the constructor to consume is service
  constructor(private http: HttpClient) { }

  // Post service to the backend server
  postEmployee(emp: Employee){
    return this.http.post(this.baseUrl, emp);
  }
  //Get data from backend
  getEmployeeList(){
    return this.http.get(this.baseUrl);
  }
  //Put / edit employee details
  putEmployee(emp: Employee){
    return this.http.put(this.baseUrl + `/${emp._id}`, emp);
  }
  //Delete employee 
  deleteEmployee(_id: String){
    return this.http.delete(this.baseUrl + `/${_id}`);
  }

}
