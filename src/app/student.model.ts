import { Degree } from './degree.model';
import { Permission } from './permission.model';

export interface Student {
        degrees: Degree[];
        docType: string;
        idNumber: string;
        name: string;
        permissions: Permission[];
        surname: string;

}
