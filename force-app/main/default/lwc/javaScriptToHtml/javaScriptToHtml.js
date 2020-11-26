import { LightningElement } from 'lwc';

export default class JavaScriptToHtml extends LightningElement {

fullname = 'Rajani Punugoti';

changenamehandler(event) {
    this.fullname = 'Harry Potter';
}
}