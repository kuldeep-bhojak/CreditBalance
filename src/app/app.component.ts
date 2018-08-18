import { Component } from '@angular/core';
import { BalancesService } from '../services/balances.service';

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrls: ['./app.component.css'],
  providers:[BalancesService]
})
export class AppComponent {
  balancesData:any;
  constructor(private balancesService : BalancesService){}
  ngOnInit(){
    this.balancesService.getBalances().subscribe((data)=>{
      this.balancesData = data;
    });
  }
  viewLessHandler(acmeChild: any){
    acmeChild.showDetails = !acmeChild.showDetails;
  }
}