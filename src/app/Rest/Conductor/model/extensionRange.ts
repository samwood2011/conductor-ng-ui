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
import { ExtensionRangeOptions } from './extensionRangeOptions';
import { ExtensionRangeOptionsOrBuilder } from './extensionRangeOptionsOrBuilder';
import { ParserExtensionRange } from './parserExtensionRange';
import { UnknownFieldSet } from './unknownFieldSet';

export interface ExtensionRange { 
    unknownFields?: UnknownFieldSet;
    initialized?: boolean;
    options?: ExtensionRangeOptions;
    start?: number;
    end?: number;
    serializedSize?: number;
    parserForType?: ParserExtensionRange;
    defaultInstanceForType?: ExtensionRange;
    optionsOrBuilder?: ExtensionRangeOptionsOrBuilder;
    initializationErrorString?: string;
    allFields?: { [key: string]: any; };
    descriptorForType?: Descriptor;
    memoizedSerializedSize?: number;
}