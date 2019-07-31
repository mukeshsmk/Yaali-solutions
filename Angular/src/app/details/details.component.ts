import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../services/employee.model';

import { Router }  from '@angular/router';  

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private employeeService: EmployeeService,private _router: Router) { }

  ngOnInit() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
      console.log("Deleted Successfully")
      });
    }
  }

onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = emp;
  }

}
