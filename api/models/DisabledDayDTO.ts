/* tslint:disable */
/* eslint-disable */
/**
 * IndividualStartup API documentation
 * fileContent
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DisabledDayDTO
 */
export interface DisabledDayDTO {
    /**
     * 
     * @type {Date}
     * @memberof DisabledDayDTO
     */
    disabledDate: Date;
}

/**
 * Check if a given object implements the DisabledDayDTO interface.
 */
export function instanceOfDisabledDayDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "disabledDate" in value;

    return isInstance;
}

export function DisabledDayDTOFromJSON(json: any): DisabledDayDTO {
    return DisabledDayDTOFromJSONTyped(json, false);
}

export function DisabledDayDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): DisabledDayDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'disabledDate': (new Date(json['disabledDate'])),
    };
}

export function DisabledDayDTOToJSON(value?: DisabledDayDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'disabledDate': (value.disabledDate.toISOString().substr(0,10)),
    };
}

