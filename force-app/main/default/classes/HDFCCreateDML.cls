public with sharing class HDFCCreateDML{
@AuraEnabled
    public static void createRecord(New_HDFC_Customer_Detail__c client){
        
        try{
            system.debug('HDFCCreateClientRecord:client' +client);
            if(client!=null){
                insert client;
                            }
           
        } catch (Exception ex){
            //Any code related to error
            system.debug('###CreateError:' +ex.getMessage());
        }
     }
    
    @AuraEnabled
    public static void deleteRecord(New_HDFC_Customer_Detail__c client){
        
        try{
           
            if(client!=null){
                New_HDFC_Customer_Detail__c Record= [select id from New_HDFC_Customer_Detail__c where E_mail__c=:client.E_mail__c];
                delete record;
                            }
           
        } catch (Exception ex){
            //Any code related to error
            system.debug('###DeleteError:' +ex.getMessage());
        }
     }
    
    @AuraEnabled
    public static void updateRecord(New_HDFC_Customer_Detail__c client){
        
        try{
            
            if(client!=null){
			New_HDFC_Customer_Detail__c Record= [select id from New_HDFC_Customer_Detail__c where E_mail__c=:client.E_mail__c];
               
            if(client.First_Name__c!=null){
				record.First_Name__c=client.First_Name__c;
               }
            if(client.Last_Name__C!=null){
				record.Last_Name__c=client.Last_Name__c;
               }
            if(client.E_mail__c!=null){
				record.E_mail__c=client.E_mail__c;
               }
           update Record;
            }
        } catch (Exception ex){
            //Any code related to error
          system.debug('###UpdateError:' +ex.getMessage());

        }
     }
}