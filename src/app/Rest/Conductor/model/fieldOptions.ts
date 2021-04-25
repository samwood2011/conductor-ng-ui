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
import { ParserFieldOptions } from './parserFieldOptions';
import { UninterpretedOption } from './uninterpretedOption';
import { UninterpretedOptionOrBuilder } from './uninterpretedOptionOrBuilder';
import { UnknownFieldSet } from './unknownFieldSet';

export interface FieldOptions { 
    unknownFields?: UnknownFieldSet;
    initialized?: boolean;
    deprecated?: boolean;
    serializedSize?: number;
    parserForType?: ParserFieldOptions;
    defaultInstanceForType?: FieldOptions;
    packed?: boolean;
    uninterpretedOptionList?: Array<UninterpretedOption>;
    uninterpretedOptionOrBuilderList?: Array<UninterpretedOptionOrBuilder>;
    uninterpretedOptionCount?: number;
    ctype?: FieldOptions.CtypeEnum;
    jstype?: FieldOptions.JstypeEnum;
    lazy?: boolean;
    weak?: boolean;
    initializationErrorString?: string;
    allFields?: { [key: string]: any; };
    descriptorForType?: Descriptor;
    allFieldsRaw?: { [key: string]: any; };
    memoizedSerializedSize?: number;
}
export namespace FieldOptions {
    export type CtypeEnum = 'STRING' | 'CORD' | 'STRING_PIECE';
    export const CtypeEnum = {
        STRING: 'STRING' as CtypeEnum,
        CORD: 'CORD' as CtypeEnum,
        STRINGPIECE: 'STRING_PIECE' as CtypeEnum
    };
    export type JstypeEnum = 'JS_NORMAL' | 'JS_STRING' | 'JS_NUMBER';
    export const JstypeEnum = {
        NORMAL: 'JS_NORMAL' as JstypeEnum,
        STRING: 'JS_STRING' as JstypeEnum,
        NUMBER: 'JS_NUMBER' as JstypeEnum
    };
}