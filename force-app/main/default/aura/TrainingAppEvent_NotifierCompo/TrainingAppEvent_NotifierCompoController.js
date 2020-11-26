({
	fireApplicationEvent : function(component, event) {
        var varAppEvent = $A.get("e.c:MyApplicationEvent");
        varAppEvent.setParams({
            "BusinessData": "This message is passed by Application event!"
        });
        varAppEvent.fire();
	}
})