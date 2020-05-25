import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStorageService } from '../common/data-storage.service';
import { User } from '../common/types';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  userForm: FormGroup | undefined;
  constructor(private readonly fb: FormBuilder, private readonly router: Router, private readonly dataStorage: DataStorageService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    this.dataStorage.saveUser(this.userForm.value as User);
    this.router.navigate(['userDetails']);
  }

  private initForm(): void {
    this.userForm = this.fb.group({
      name: this.fb.control('', [Validators.required, this.letterValidator]),
      surname: this.fb.control('', [Validators.required, this.letterValidator]),
      age: this.fb.control('', [Validators.required, this.numberValidator])
    });
  }

  get letterValidator(): ValidatorFn { return Validators.pattern(/^[A-Za-z]+$/); }
  get numberValidator(): ValidatorFn { return Validators.pattern(/^[1-9]+[0-9]*$/); }

  get name(): string { return this.userForm.value.name; }
  get surname(): string { return this.userForm.value.surname; }
}
