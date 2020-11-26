import { LightningElement } from 'lwc';

export default class HtmlToJavaScript extends LightningElement {

    letterHandler(event) {
        var varValueGotFromHtml = event.target.value;
        alert('The letter you entered is = ' + varValueGotFromHtml);

    }
}