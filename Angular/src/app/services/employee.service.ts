import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  private BASE_URL : string = "http://localhost:3000/employees";

  constructor(
    private httpClient : HttpClient
  ) { }

  create(employee:Employee){
    return this.httpClient.post(this.BASE_URL  , employee);
  }

  getEmployeeList() {
    return this.httpClient.get(this.BASE_URL);
  }
  
  deleteEmployee(_id: string) { 
    return this.httpClient.delete(this.BASE_URL + `/${_id}`);
  }

  putEmployee(emp: Employee) {
    return this.httpClient.put(this.BASE_URL + `/${emp._id}`, emp);
  }
}

