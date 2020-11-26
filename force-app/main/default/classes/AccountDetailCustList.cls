public with sharing class AccountDetailCustList{
@AuraEnabled
    public static List<account> getAccountRecord(){
        List<Account> AccList=New List<account>();
        AccList=[select id,Name,Phone,Type from Account where type != null LIMIT 5];
        return AccList;
        //return new List<Account>([select id,Name,Phone,Type from Account where Type != null LIMIT 1]);
        }
     }