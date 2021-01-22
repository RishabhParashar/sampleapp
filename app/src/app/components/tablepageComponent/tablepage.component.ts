/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-tablepage',
    templateUrl: './tablepage.template.html'
})

export class tablepageComponent extends NBaseComponent implements OnInit {

    datasource = [
        {"name":"Rishabh","email":"rishabh@gmail.com","contact":"9724783389"},
        {"name":"Rishabh","email":"rishabh@gmail.com","contact":"9724783389"},
        {"name":"Rishabh","email":"rishabh@gmail.com","contact":"9724783389"},
        {"name":"Rishabh","email":"rishabh@gmail.com","contact":"9724783389"}
    ]
    constructor() {
        super();
    }

    ngOnInit() {

    }
}
