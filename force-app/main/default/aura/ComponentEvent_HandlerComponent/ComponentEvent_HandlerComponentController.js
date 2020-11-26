({
	handleComponentEvent : function(component, event, helper) {
        var varMessage=event.getParam("message");
        component.set("v.messageFromEvent",varMessage);
        var varNumEventsHandled=parseInt(component.get("v.numOfEventsCalled"))+1;
        component.set("v.numOfEventsCalled", varNumEventsHandled);
		
	}
})