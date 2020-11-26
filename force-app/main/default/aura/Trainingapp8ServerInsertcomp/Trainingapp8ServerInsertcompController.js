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
        console.log('Before entering Helper');
        helper.helperMethodCreate(component);
        }
})