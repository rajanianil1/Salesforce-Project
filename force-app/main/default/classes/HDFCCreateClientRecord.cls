public with sharing class HDFCCreateClientRecord {
@AuraEnabled
    public static void createRecord(New_HDFC_Customer_Detail__c client){
        
        try{
            system.debug('HDFCCreateClientRecord:client' +client);
            if(client!=null){
                insert client;
                            }
           
        } catch (Exception ex){
            //Any code related to error
        }
     }
}