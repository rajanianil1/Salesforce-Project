({
	helperMethodCreate : function(component) {
	//Calling Apex Function
	var varClient=component.get("v.Attrclient");
	var action=component.get("c.createRecord");
      console.log('In helper method');    
    //Setting the Apex Parameters
        action.setParams({
            client:varClient
        });
        
    //setting the callback
        action.setCallback(this,function(response){
         //get the response state
           console.log('In helper setcallback method');
           var state = response.getState();
         //Check If result is successful
            if(state=="SUCCESS"){
              //Reset Form
                var newEmptyClientRecord={'sObjectType': 'New_HDFC_Customer_Detail__c',
                            'First_Name__c': '',
                            'Last_Name__c': '',
                            'E_mail__c': '',
                            'Monthly_Salary__c': ''}; 
                
              //Resetting values in the form
                component.set("v.Attrclient",newEmptyClientRecord);
                alert('Record is created Successfully');
            } else if (state=="ERROR"){
                alert('Error in calling server side action');
                var ErrorDetails = response.getError();
                alert('Reason Of Error=' +ErrorDetails);
            }    
            });
            
        //adds the server side action to the queue
        $A.enqueueAction(action);
	},
       helperMethodDelete : function(component) {
	//Calling Apex Function
	var varClient=component.get("v.Attrclient");
	var action=component.get("c.deleteRecord");
      console.log('In Delete Helper method');    
    //Setting the Apex Parameters
        action.setParams({
            client:varClient
        });
        
    //setting the callback
        action.setCallback(this,function(response){
         //get the response state
           console.log('In helper delete setcallback method');
           var state = response.getState();
         //Check If result is successful
            if(state=="SUCCESS"){
              //Reset Form
                var newEmptyClientRecord={'sObjectType': 'New_HDFC_Customer_Detail__c',
                            'First_Name__c': '',
                            'Last_Name__c': '',
                            'E_mail__c': '',
                            'Monthly_Salary__c': ''}; 
                
              //Resetting values in the form
                component.set("v.Attrclient",newEmptyClientRecord);
                alert('Record is deleted Successfully');
            } else if (state=="ERROR"){
                alert('Error in calling server side action');
                var ErrorDetails = response.getError();
                alert('Reason Of Error=' +ErrorDetails);
            }    
            });
            
        //adds the server side action to the queue
        $A.enqueueAction(action);
	},
    
    helperMethodUpdate : function(component) {
	//Calling Apex Function
	var varClient=component.get("v.Attrclient");
	var action=component.get("c.createRecord");
      console.log('In Update helper method');    
    //Setting the Apex Parameters
        action.setParams({
            client:varClient
        });
        
    //setting the callback
        action.setCallback(this,function(response){
         //get the response state
           console.log('In helper update setcallback method');
           var state = response.getState();
         //Check If result is successful
            if(state=="SUCCESS"){
              //Reset Form
                var newEmptyClientRecord={'sObjectType': 'New_HDFC_Customer_Detail__c',
                            'First_Name__c': '',
                            'Last_Name__c': '',
                            'E_mail__c': '',
                            'Monthly_Salary__c': ''}; 
                
              //Resetting values in the form
                component.set("v.Attrclient",newEmptyClientRecord);
                alert('Record is updated Successfully');
            } else if (state=="ERROR"){
                alert('Error in calling server side action');
                var ErrorDetails = response.getError();
                alert('Reason Of Error=' +ErrorDetails);
            }    
            });
            
        //adds the server side action to the queue
        $A.enqueueAction(action);
	}
    
      })