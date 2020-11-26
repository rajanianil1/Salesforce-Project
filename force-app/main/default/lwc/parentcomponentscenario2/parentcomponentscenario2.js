import { LightningElement } from 'lwc';

export default class Parentcomponentscenario2 extends LightningElement {
    handlechildevent(event){
        const varchildcompname=event.detail.childcompname;
        const varchildcompdetails=event.detail.childcompdetails;

        alert('Event handled in parent comp');
        alert('child comp name is:' +varchildcompname);
        alert('child comp description is:' +varchildcompdetails);
    }
}