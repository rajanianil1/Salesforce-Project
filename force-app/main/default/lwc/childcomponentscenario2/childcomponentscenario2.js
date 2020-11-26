import { LightningElement, api } from 'lwc';

export default class Childcomponentscenario2 extends LightningElement {
    @api childcompname='Intelogik child component';
    @api childcompdetails='This component will give discount';

    handlebuttonclick(){
        const evt=new CustomEvent('mycustomevent',{
            detail:
            {
                childcompname:this.childcompname,
                childcompdetails:this.childcompdetails
            }
        });
        this.dispatchEvent(evt);

    }


}