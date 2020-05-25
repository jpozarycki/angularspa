import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../common/data-storage.service';
import { User } from '../common/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<User>;

  constructor(private readonly dataStorage: DataStorageService) {
  }

  ngOnInit(): void {
    this.user$ = this.dataStorage.getUser();
  }
}
