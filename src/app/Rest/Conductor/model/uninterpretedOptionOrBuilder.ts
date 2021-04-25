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
import { NamePart } from './namePart';
import { NamePartOrBuilder } from './namePartOrBuilder';
import { UnknownFieldSet } from './unknownFieldSet';

export interface UninterpretedOptionOrBuilder { 
    doubleValue?: number;
    nameCount?: number;
    stringValue?: ByteString;
    nameList?: Array<NamePart>;
    nameOrBuilderList?: Array<NamePartOrBuilder>;
    identifierValue?: string;
    identifierValueBytes?: ByteString;
    positiveIntValue?: number;
    negativeIntValue?: number;
    aggregateValue?: string;
    aggregateValueBytes?: ByteString;
    initializationErrorString?: string;
    allFields?: { [key: string]: any; };
    descriptorForType?: Descriptor;
    unknownFields?: UnknownFieldSet;
    defaultInstanceForType?: Message;
    initialized?: boolean;
}