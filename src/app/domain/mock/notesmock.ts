import {Note} from '../model/note';

export class NotesMock implements Note {

    id= '1';
    customerNumber= '1';
    customerName= null;
    title= '111 Sample customer note';
    content= '333 The customer sent to us the soft copy as a proof of payment.';
    application= 'DMS';
    category= 'CUSTOMER';
    source= 'DMS';
    topic= 'DMS_TOPIC';
    subtopic= 'DMS_SUBTOPIC';
    author= {
        'id': 'sdobrovo',
        'firstName': 'Sergiu',
        'lastName': 'Dobrovolschi',
        'email': 'sdobrovo@revenue.ie'
    };
    lastModifiedBy= null;
    dateCreated = new Date(1510825551052);
    dateModified= null;
    status= 'ACTIVE';
    dateExpiration= null;
    attachments= null;

}
