import { LightningElement, track } from 'lwc';

export default class CustomValidation extends LightningElement {
   
    validateInfo() {
        //taking reference of component in HTML
        let searchCmp = this.template.querySelector(".nameCmp");
        let dateCmp = this.template.querySelector(".dateCmp");
        
        //fetching values
        let searchValue = searchCmp.value;
        let dtValue = dateCmp.value;

        //Check if name is blank
        if(!searchValue) {
            searchCmp.setCustomValidity("Name value is required ...");
        } else {
            searchCmp.setCustomValidity(""); //clear previous value 
        }
        searchCmp.reportValiity();    
        
        //Check if date is blank
        if(!dtValue) {
            dateCmp.setCustomValidity("Date value is required ...");
        } else {
            dateCmp.setCustomValidity(""); //clear previous value 
        }
        dateCmp.reportValiity();    
    }      
}