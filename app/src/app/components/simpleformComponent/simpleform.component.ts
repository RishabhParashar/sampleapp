/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-simpleform',
    templateUrl: './simpleform.template.html'
})

export class simpleformComponent extends NBaseComponent implements OnInit {
    simpleform;
    constructor(public fb:FormBuilder) {
        super();

    }

    ngOnInit() {
        this.simpleform = this.fb.group({
            firstname: ['',[Validators.required]],
            lastname: ['', [Validators.required]]
        })
    }

    submitform(){
        console.log("values:",this.simpleform.value)
    }
}
