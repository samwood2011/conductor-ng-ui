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
import { ByteString } from './byteString';
import { Descriptor } from './descriptor';
import { Message } from './message';
import { MethodDescriptorProto } from './methodDescriptorProto';
import { MethodDescriptorProtoOrBuilder } from './methodDescriptorProtoOrBuilder';
import { ServiceOptions } from './serviceOptions';
import { ServiceOptionsOrBuilder } from './serviceOptionsOrBuilder';
import { UnknownFieldSet } from './unknownFieldSet';

export interface ServiceDescriptorProtoOrBuilder { 
    options?: ServiceOptions;
    name?: string;
    nameBytes?: ByteString;
    methodCount?: number;
    optionsOrBuilder?: ServiceOptionsOrBuilder;
    methodList?: Array<MethodDescriptorProto>;
    methodOrBuilderList?: Array<MethodDescriptorProtoOrBuilder>;
    initializationErrorString?: string;
    allFields?: { [key: string]: any; };
    descriptorForType?: Descriptor;
    unknownFields?: UnknownFieldSet;
    defaultInstanceForType?: Message;
    initialized?: boolean;
}