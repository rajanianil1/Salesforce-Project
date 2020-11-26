({
	callJSCode : function(component, event, helper) {
		var varButtonId = event.getSource().getLocalId();
        var varButtonName = event.getSource().get("v.name");
        
        alert('The Button ID=' +varButtonId);
        alert('The Button Name=' +varButtonName);
        
        component.set("v.whichbuttonpressed_ID", varButtonId);
        component.set("v.whichbuttonpressed_Name", varButtonName);
	}
})