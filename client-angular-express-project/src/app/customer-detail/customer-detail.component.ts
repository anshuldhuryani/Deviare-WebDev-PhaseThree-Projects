import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  id: any;
  customer: any;

  constructor(private _route: ActivatedRoute,
    private _httpClient: HttpClient,
    private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._httpClient.get('http://localhost:3000/customers/' + this.id)
      .subscribe(result => {
        this.customer = result;
        console.log(this.customer);
      }, (error) => {
        console.log(error);
      });
  }

  deleteCustomer() {
    this._httpClient.delete('http://localhost:3000/customers/' + this.id).subscribe(result => {
      alert('Customer Deleted Successfully.');
      console.log(result);
      this._router.navigate(['/customers']);
    }, (error) => {
      console.log(error);
    });
  }

}
