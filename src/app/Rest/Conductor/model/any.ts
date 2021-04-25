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
import { ParserAny } from './parserAny';
import { UnknownFieldSet } from './unknownFieldSet';

export interface Any { 
    unknownFields?: UnknownFieldSet;
    initialized?: boolean;
    value?: ByteString;
    typeUrl?: string;
    typeUrlBytes?: ByteString;
    serializedSize?: number;
    parserForType?: ParserAny;
    defaultInstanceForType?: Any;
    initializationErrorString?: string;
    allFields?: { [key: string]: any; };
    descriptorForType?: Descriptor;
    memoizedSerializedSize?: number;
}