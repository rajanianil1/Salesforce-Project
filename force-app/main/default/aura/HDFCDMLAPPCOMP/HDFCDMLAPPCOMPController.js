({
	CreateClient : function(component, event, helper) {
	//for logs
		console.log('Create record');
    
    //getting the candidate information
	var varClient=component.get("v.Attrclient");
    
    //Validation
        if($A.util.isEmpty(varClient.First_Name__c) || $A.util.isUndefined(varClient.First_Name__c)){
           alert('First Name is Required');
        return;
        }
         if($A.util.isEmpty(varClient.Last_Name__c) || $A.util.isUndefined(varClient.Last_Name__c)){
           alert('Last Name is Required');
        return;
        }
         if($A.util.isEmpty(varClient.E_mail__c) || $A.util.isUndefined(varClient.E_mail__c)){
           alert('E_mail__c is Required');
        return;
        }
        console.log('Before entering Helper');
        helper.helperMethodCreate(component);
        },
    
    DeleteClient : function(component, event, helper) {
	//for logs
		console.log('Delete record');
    
    //getting the candidate information
	var varClient=component.get("v.Attrclient");
    
    //Validation
        if($A.util.isEmpty(varClient.E_mail__c) || $A.util.isUndefined(varClient.E_mail__c)){
           alert('E_mail__c is Required');
        return;
        }
        console.log('Before entering Helper');
        helper.helperMethodDelete(component);
        },
    
    UpdateClient : function(component, event, helper) {
	//for logs
		console.log('Update record');
    
    //getting the candidate information
	var varClient=component.get("v.Attrclient");
        var a,b,c;
    
    //Validation
        if($A.util.isEmpty(varClient.First_Name__c) || $A.util.isUndefined(varClient.First_Name__c)){
           a=true;
        }
        if($A.util.isEmpty(varClient.Last_Name__c) || $A.util.isUndefined(varClient.Last_Name__c)){
           b=true;
        }
        if($A.util.isEmpty(varClient.Monthly_Salary__c) || $A.util.isUndefined(varClient.Monthly_Salary__c)){
           c=true;
        }      
        if(a == true && b == true && c == true){
           alert('Enter something to update');
        return;
        }
         if($A.util.isEmpty(varClient.E_mail__c) || $A.util.isUndefined(varClient.E_mail__c)){
           alert('E_mail__c is Required');
        return;
        }
        
        console.log('Before entering Helper');
        helper.helperMethodUpdate(component);
        }
})