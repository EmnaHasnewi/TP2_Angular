import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  error: string | null = null;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  get email() {
    return this.authForm.get('email');
  }

  get password() {
    return this.authForm.get('password');
  }

  submit() {
    if (this.authForm.valid) {
      // handle successful submission
      console.log('Form submitted:', this.authForm.value);
      this.error = null; // Clear any previous error
    } else {
      this.error = 'Please fill in the form correctly.';
    }
  }
}
