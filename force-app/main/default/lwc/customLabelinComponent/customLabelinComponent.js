import { LightningElement } from 'lwc';
// Importing custom labels from Salesfrce org
import WelcomeLabel from '@salesforce/label/c.WelcomeLabel';
import HomePageLabel from '@salesforce/label/c.HomePageLabel';
import NewClientLabel from '@salesforce/label/c.NewClientLabel';
export default class JavaScriptToHtml extends LightningElement {


    labellist = {WelcomeLabel,HomePageLabel,NewClientLabel};
    
    NewClientHandler(){
        alert('entry done!');
    }
}