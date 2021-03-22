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
import { ParserMethodOptions } from './parserMethodOptions';
import { UninterpretedOption } from './uninterpretedOption';
import { UninterpretedOptionOrBuilder } from './uninterpretedOptionOrBuilder';
import { UnknownFieldSet } from './unknownFieldSet';


export interface MethodOptions {
    unknownFields?: UnknownFieldSet;
    uninterpretedOptionList?: Array<UninterpretedOption>;
    uninterpretedOptionOrBuilderList?: Array<UninterpretedOptionOrBuilder>;
    uninterpretedOptionCount?: number;
    idempotencyLevel?: MethodOptions.IdempotencyLevelEnum;
    initialized?: boolean;
    deprecated?: boolean;
    serializedSize?: number;
    parserForType?: ParserMethodOptions;
    defaultInstanceForType?: MethodOptions;
    allFields?: { [key: string]: any; };
    initializationErrorString?: string;
    descriptorForType?: Descriptor;
    allFieldsRaw?: { [key: string]: any; };
}
export namespace MethodOptions {
    export type IdempotencyLevelEnum = 'IDEMPOTENCY_UNKNOWN' | 'NO_SIDE_EFFECTS' | 'IDEMPOTENT';
    export const IdempotencyLevelEnum = {
        IDEMPOTENCYUNKNOWN: 'IDEMPOTENCY_UNKNOWN' as IdempotencyLevelEnum,
        NOSIDEEFFECTS: 'NO_SIDE_EFFECTS' as IdempotencyLevelEnum,
        IDEMPOTENT: 'IDEMPOTENT' as IdempotencyLevelEnum
    }
}
