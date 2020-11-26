public with sharing class HDFCCustList{
@AuraEnabled
    public static List<New_HDFC_Customer_Detail__c> getAccountRecord(){
        List<New_HDFC_Customer_Detail__c> custLst=New List<New_HDFC_Customer_Detail__c>();
        custLst=[select id,First_Name__c,Last_Name__c,Mobile__c from New_HDFC_Customer_Detail__c LIMIT 5];
        return custLst;
        //return new List<Account>([select id,Name,Phone,Type from Account where Type != null LIMIT 1]);
        }
     }