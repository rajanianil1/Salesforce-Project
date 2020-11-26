public class LearningAuraController {
	@AuraEnabled
    public static Map<string, List<string>> getMap(){
        Map<string,List<string>> MapOfData= new Map<string,list<string>>();
        List<string> fruits=new List<string>{'Apple','Orange','Banana','Grapes'};
        List<string> vegetables=new List<string>{'Cabbage','Carrot','Potato','Tomato'};
        List<string> groceries=new List<string>{'Milk','Bread','Eggs','Cheese'};

		MapOfData.put('fruits',fruits);
        MapOfData.put('vegetables',vegetables);
        MapOfData.put('groceries',groceries);
		return MapOfData;       
    }
}