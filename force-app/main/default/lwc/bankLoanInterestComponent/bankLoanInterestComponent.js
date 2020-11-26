import { LightningElement } from 'lwc';

export default class BankLoanInterestComponent extends LightningElement {
    loanResult;
    principle;
    rateOfInterest;
    noOfYears;
    principleChangeHandler(event){
        this.principle = parseInt(event.target.value);
    }
    durationChangeHandler(event){
        this.noOfYears = parseInt(event.target.value);
    }
    rateChangeHandler(event){
        this.rateOfInterest =parseInt(event.target.value);
    }
    calculateLoanAmountHandler(){
        this.loanResult = ' The loan interest is = ' +(this.principle * this.rateOfInterest * this.noOfYears);
    }
}