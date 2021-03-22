/**
 * 
 * 
 *
 * 
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Descriptor } from './descriptor';
import { FieldDescriptor } from './fieldDescriptor';
import { FileDescriptor } from './fileDescriptor';
import { OneofOptions } from './oneofOptions';


export interface OneofDescriptor {
    index?: number;
    fullName?: string;
    file?: FileDescriptor;
    containingType?: Descriptor;
    fieldCount?: number;
    fields?: Array<FieldDescriptor>;
    options?: OneofOptions;
    name?: string;
}