({
	getEligibility : function(component) {
        var vAge = component.find("Age").get("v.value");
        if(vAge>=18)
            component.set("v.EligibleOrNot",true);
        else
            component.set("v.EligibleOrNot",false);
        	
	}
})