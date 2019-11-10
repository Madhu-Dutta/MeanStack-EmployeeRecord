
import { Component, OnInit } from '@angular/core';
//import employee service class
import { EmployeeService } from '../shared/employee.service';
//import NgForm for using that in resetForms
import {NgForm} from '@angular/forms';
//use materialize toast prompt
declare var M: any;
import { Employee } from './../shared/employee.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  // Inject the service class using Provider
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  //Add constructor parameter for employee service
  constructor(private employeeService : EmployeeService) { }

  //lifecycle hook. Methods are required to be called inside it 
  ngOnInit() {
    this.resetForm();
    this.refreshEmployeeList();
  }
  
  resetForm(form?: NgForm){
    if(form)
      form.reset();
      this.employeeService.selectedEmployee = {
        _id: "",
        name: "",
        position: "",
        office: "",
        salary: null
      }
  }

  onSubmit(form: NgForm){
    if(form.value._id == ""){
      // use the service form employeeService class and pass it user input value from the UIform
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        M.toast({html: 'saved successfully', classes: 'rounded'})
      })
    } else{
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        M.toast({html: 'updated successfully', classes: 'rounded'})
      })
    }
  }


  refreshEmployeeList(){
    this.employeeService.getEmployeeList().subscribe((res) => {
      // Casting required for res as Employee[]
      this.employeeService.employees = res as Employee[];

    })
  }

  onEdit(emp: Employee){
    this.employeeService.selectedEmployee = emp;
  }

  onDelete(_id: String, form: NgForm){
    if(confirm('Are you sure you want to delete this record')){
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        this.resetForm(form);
        M.toast({html: 'Deleted successfully', classes: 'rounded'})
      });
    }
  }

}
