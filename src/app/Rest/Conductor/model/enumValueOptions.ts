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
import { ParserEnumValueOptions } from './parserEnumValueOptions';
import { UninterpretedOption } from './uninterpretedOption';
import { UninterpretedOptionOrBuilder } from './uninterpretedOptionOrBuilder';
import { UnknownFieldSet } from './unknownFieldSet';


export interface EnumValueOptions {
    unknownFields?: UnknownFieldSet;
    uninterpretedOptionList?: Array<UninterpretedOption>;
    uninterpretedOptionOrBuilderList?: Array<UninterpretedOptionOrBuilder>;
    uninterpretedOptionCount?: number;
    initialized?: boolean;
    deprecated?: boolean;
    serializedSize?: number;
    parserForType?: ParserEnumValueOptions;
    defaultInstanceForType?: EnumValueOptions;
    allFields?: { [key: string]: any; };
    initializationErrorString?: string;
    descriptorForType?: Descriptor;
    allFieldsRaw?: { [key: string]: any; };
}
