import { Component, OnInit } from '@angular/core';
import { GithubRequestService } from '../github-http/github-request.service';
import { ReposServiceService } from '../repos-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user:any;
  displayUser:any;
  shiwUse:any;
  showUserName(){
    this.service.showUser(this.user).subscribe(about => {
      console.log(about)
      return this.displayUser = about;
    });
  }
  showUse(){
    this.newserve.getRepo(this.user).subscribe(description => {
      console.log(description)
      return this.showUse = description;
    });
  }
  constructor( private service:GithubRequestService, private newserve:ReposServiceService ) {  }

  ngOnInit(): void {
    this.user = "Kimutaiamos"
    this.showUserName();
    this.showUse();
  }

}
