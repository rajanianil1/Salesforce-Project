import { LightningElement } from 'lwc';
import roseimagelogo from '@salesforce/resourceUrl/Roselogo';

export default class StaticResourceComp extends LightningElement {
    logo = roseimagelogo;
}