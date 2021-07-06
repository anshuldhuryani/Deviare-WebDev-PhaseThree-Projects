import { HttpClient } from '@angular/common/http';
import { Customer } from './../models/customer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(private _httpClient: HttpClient,
    private _router: Router) { }

  ngOnInit(): void {
  }

  addCustomer() {
    this._httpClient.post('http://localhost:3000/customers', this.customer).subscribe(result => {
      alert('Customer Added Successfully.');
      console.log(result);
      this._router.navigate(['/customers']);
    }, (error) => {
      console.log(error);
    })

  }

}
