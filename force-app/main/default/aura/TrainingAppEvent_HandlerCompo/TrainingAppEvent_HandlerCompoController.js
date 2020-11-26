({
	handleApplicationEvent : function(component, event) {
        var varMessage=event.getParam("BusinessData");
        component.set("v.messageFromEvent",varMessage);
        var varNumEventsHandled=parseInt(component.get("v.numOfEventsCalled"))+1;
        component.set("v.numOfEventsCalled", varNumEventsHandled);
		
	}
})