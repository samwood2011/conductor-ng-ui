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
import { Action } from './action';


export interface EventHandler {
    name?: string;
    event?: string;
    condition?: string;
    actions: Array<Action>;
    active?: boolean;
}
