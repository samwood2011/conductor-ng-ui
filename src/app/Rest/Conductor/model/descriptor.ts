/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { DescriptorProto } from './descriptorProto';
import { EnumDescriptor } from './enumDescriptor';
import { FieldDescriptor } from './fieldDescriptor';
import { FileDescriptor } from './fileDescriptor';
import { MessageOptions } from './messageOptions';
import { OneofDescriptor } from './oneofDescriptor';

export interface Descriptor { 
    index?: number;
    proto?: DescriptorProto;
    fullName?: string;
    file?: FileDescriptor;
    containingType?: Descriptor;
    nestedTypes?: Array<Descriptor>;
    enumTypes?: Array<EnumDescriptor>;
    fields?: Array<FieldDescriptor>;
    extensions?: Array<FieldDescriptor>;
    oneofs?: Array<OneofDescriptor>;
    options?: MessageOptions;
    name?: string;
    realOneofs?: Array<OneofDescriptor>;
    extendable?: boolean;
}