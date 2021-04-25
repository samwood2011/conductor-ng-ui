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
import { Descriptor } from './descriptor';
import { FileDescriptor } from './fileDescriptor';
import { MethodDescriptorProto } from './methodDescriptorProto';
import { MethodOptions } from './methodOptions';
import { ServiceDescriptor } from './serviceDescriptor';

export interface MethodDescriptor { 
    index?: number;
    proto?: MethodDescriptorProto;
    fullName?: string;
    file?: FileDescriptor;
    service?: ServiceDescriptor;
    inputType?: Descriptor;
    outputType?: Descriptor;
    options?: MethodOptions;
    name?: string;
    clientStreaming?: boolean;
    serverStreaming?: boolean;
}