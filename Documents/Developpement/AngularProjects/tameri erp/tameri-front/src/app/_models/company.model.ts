import { Community } from "./community.model";
import { Owner } from "./owner.model";

export class Company {
    id: string = 'COMPANY' + new Date().getTime();
    name: string = '';
    type: string = '';
    address: string = '';
    contact: string = '';
    geolocation: string = '';
    owner = new Owner();
    
    community = new Community();

}