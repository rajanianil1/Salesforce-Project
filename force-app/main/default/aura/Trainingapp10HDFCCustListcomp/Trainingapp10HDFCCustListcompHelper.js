({
	getAccountRecord : function(component) {
	//Calling Apex Function 'getAccountRecord' method
	
	var action=component.get("c.getAccountRecord");
   
    action.setCallback(this,function(response){
                var state = response.getState();
        		        	   
        if(component.isValid()&&state=="SUCCESS")
            component.set("v.custLst",response.getReturnValue());
       });           
      //adds the server side action to the queue
      $A.enqueueAction(action);
        
    }
})