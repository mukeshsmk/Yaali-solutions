import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  myForm: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private emplayeeService : EmployeeService
  ) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      _id:['', Validators.required],
      name:['', Validators.required],
      position : ['', Validators.required],
      office : ['', Validators.required],
      salary : ['', Validators.required],
      
    })
  }

  // resetForm(form?: myForm) {
  //   this.myForm = this.formBuilder.group({
  //     _id: "",
  //     name: "",
  //     position: "",
  //     office: "",
  //     salary: null
  //   }
  // }


  save(event:any){
    this.emplayeeService.create(this.myForm.value).toPromise().then(
      res =>{
        alert('success');
        this.myForm = this.formBuilder.group({
          _id:"",
          name:"",
          position : "",
          office : "",
          salary : "",
          
        })
       
      },
      error =>{
        console.log("error",error)
      }
    )
  }
}
