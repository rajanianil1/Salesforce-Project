import { LightningElement } from 'lwc';

export default class ForEachComponent extends LightningElement {
    CEOList;
    showlisthandler(){
        this.CEOList = [
            {
                id: 1,
                name: 'Mark Benlof',
                title: 'CEO of Salesforce',
            },
            {
                id: 2,
                name: 'Sundar Pichai',
                title: 'CEO of Google',
            },
             {
                id: 3,
                name: 'MArk Jukerberg',
                title: 'CEO of Facebook',
            },
             {
                id: 4,
                name: 'JArk Dorsey',
                title: 'CEO of Twitter',
            },
            {
                id: 5,
                name: 'JEff Bezos',
                title: 'CEO of Amazon',
            }
        ];
        
    }
}