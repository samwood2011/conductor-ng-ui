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
import { EnumDescriptor } from './enumDescriptor';
import { FieldOptions } from './fieldOptions';
import { FileDescriptor } from './fileDescriptor';
import { OneofDescriptor } from './oneofDescriptor';


export interface FieldDescriptor {
    index?: number;
    fullName?: string;
    jsonName?: string;
    file?: FileDescriptor;
    extensionScope?: Descriptor;
    type?: FieldDescriptor.TypeEnum;
    containingType?: Descriptor;
    messageType?: Descriptor;
    containingOneof?: OneofDescriptor;
    enumType?: EnumDescriptor;
    defaultValue?: any;
    required?: boolean;
    javaType?: FieldDescriptor.JavaTypeEnum;
    options?: FieldOptions;
    optional?: boolean;
    packed?: boolean;
    extension?: boolean;
    mapField?: boolean;
    packable?: boolean;
    repeated?: boolean;
    liteJavaType?: FieldDescriptor.LiteJavaTypeEnum;
    liteType?: FieldDescriptor.LiteTypeEnum;
    name?: string;
    number?: number;
}
export namespace FieldDescriptor {
    export type TypeEnum = 'DOUBLE' | 'FLOAT' | 'INT64' | 'UINT64' | 'INT32' | 'FIXED64' | 'FIXED32' | 'BOOL' | 'STRING' | 'GROUP' | 'MESSAGE' | 'BYTES' | 'UINT32' | 'ENUM' | 'SFIXED32' | 'SFIXED64' | 'SINT32' | 'SINT64';
    export const TypeEnum = {
        DOUBLE: 'DOUBLE' as TypeEnum,
        FLOAT: 'FLOAT' as TypeEnum,
        INT64: 'INT64' as TypeEnum,
        UINT64: 'UINT64' as TypeEnum,
        INT32: 'INT32' as TypeEnum,
        FIXED64: 'FIXED64' as TypeEnum,
        FIXED32: 'FIXED32' as TypeEnum,
        BOOL: 'BOOL' as TypeEnum,
        STRING: 'STRING' as TypeEnum,
        GROUP: 'GROUP' as TypeEnum,
        MESSAGE: 'MESSAGE' as TypeEnum,
        BYTES: 'BYTES' as TypeEnum,
        UINT32: 'UINT32' as TypeEnum,
        ENUM: 'ENUM' as TypeEnum,
        SFIXED32: 'SFIXED32' as TypeEnum,
        SFIXED64: 'SFIXED64' as TypeEnum,
        SINT32: 'SINT32' as TypeEnum,
        SINT64: 'SINT64' as TypeEnum
    }
    export type JavaTypeEnum = 'INT' | 'LONG' | 'FLOAT' | 'DOUBLE' | 'BOOLEAN' | 'STRING' | 'BYTE_STRING' | 'ENUM' | 'MESSAGE';
    export const JavaTypeEnum = {
        INT: 'INT' as JavaTypeEnum,
        LONG: 'LONG' as JavaTypeEnum,
        FLOAT: 'FLOAT' as JavaTypeEnum,
        DOUBLE: 'DOUBLE' as JavaTypeEnum,
        BOOLEAN: 'BOOLEAN' as JavaTypeEnum,
        STRING: 'STRING' as JavaTypeEnum,
        BYTESTRING: 'BYTE_STRING' as JavaTypeEnum,
        ENUM: 'ENUM' as JavaTypeEnum,
        MESSAGE: 'MESSAGE' as JavaTypeEnum
    }
    export type LiteJavaTypeEnum = 'INT' | 'LONG' | 'FLOAT' | 'DOUBLE' | 'BOOLEAN' | 'STRING' | 'BYTE_STRING' | 'ENUM' | 'MESSAGE';
    export const LiteJavaTypeEnum = {
        INT: 'INT' as LiteJavaTypeEnum,
        LONG: 'LONG' as LiteJavaTypeEnum,
        FLOAT: 'FLOAT' as LiteJavaTypeEnum,
        DOUBLE: 'DOUBLE' as LiteJavaTypeEnum,
        BOOLEAN: 'BOOLEAN' as LiteJavaTypeEnum,
        STRING: 'STRING' as LiteJavaTypeEnum,
        BYTESTRING: 'BYTE_STRING' as LiteJavaTypeEnum,
        ENUM: 'ENUM' as LiteJavaTypeEnum,
        MESSAGE: 'MESSAGE' as LiteJavaTypeEnum
    }
    export type LiteTypeEnum = 'DOUBLE' | 'FLOAT' | 'INT64' | 'UINT64' | 'INT32' | 'FIXED64' | 'FIXED32' | 'BOOL' | 'STRING' | 'GROUP' | 'MESSAGE' | 'BYTES' | 'UINT32' | 'ENUM' | 'SFIXED32' | 'SFIXED64' | 'SINT32' | 'SINT64';
    export const LiteTypeEnum = {
        DOUBLE: 'DOUBLE' as LiteTypeEnum,
        FLOAT: 'FLOAT' as LiteTypeEnum,
        INT64: 'INT64' as LiteTypeEnum,
        UINT64: 'UINT64' as LiteTypeEnum,
        INT32: 'INT32' as LiteTypeEnum,
        FIXED64: 'FIXED64' as LiteTypeEnum,
        FIXED32: 'FIXED32' as LiteTypeEnum,
        BOOL: 'BOOL' as LiteTypeEnum,
        STRING: 'STRING' as LiteTypeEnum,
        GROUP: 'GROUP' as LiteTypeEnum,
        MESSAGE: 'MESSAGE' as LiteTypeEnum,
        BYTES: 'BYTES' as LiteTypeEnum,
        UINT32: 'UINT32' as LiteTypeEnum,
        ENUM: 'ENUM' as LiteTypeEnum,
        SFIXED32: 'SFIXED32' as LiteTypeEnum,
        SFIXED64: 'SFIXED64' as LiteTypeEnum,
        SINT32: 'SINT32' as LiteTypeEnum,
        SINT64: 'SINT64' as LiteTypeEnum
    }
}
