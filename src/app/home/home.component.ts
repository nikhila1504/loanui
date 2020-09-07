import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loanNumber : number;
  user : any;

  constructor(private service : SearchService) { }

  ngOnInit() {
  }

  public findByLoanNumber(){
    let response = this.service.getLoanDetails(this.loanNumber);
    response.subscribe(data => this.user = data);
  }


}
