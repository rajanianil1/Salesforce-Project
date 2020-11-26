({
	getInfo : function(component) {
        var FirstName = component.find("FirstName").get("v.value");
        var LastName = component.find("LastName").get("v.value");
        var fullName = FirstName + ',' + LastName;
        var outputNameElement = component.find("NameToDisplay");
        outputNameElement.set("v.value",fullName);
		
	}
})