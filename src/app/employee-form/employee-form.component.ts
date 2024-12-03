import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../employee.service';
import { ResourceLoader } from '@angular/compiler';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

  employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    position: ''
  }

  errorMessage = "";

constructor(private employeeService: EmployeeService, private router : Router)
{

}

  onSubmit(): void
  {
    console.log(this.employee);
    this.employeeService.createEmployee(this.employee).subscribe({
      next: (response) => {
        this.router.navigate(['/']);
      },
      error: (err) =>
      {
        console.error(err);
        this.errorMessage = `Error: ${err.status} - ${err.message}`;
      }
    });
  }
}
