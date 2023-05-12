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
 * @interface CheckReservationInDTO
 */
export interface CheckReservationInDTO {
    /**
     * 
     * @type {string}
     * @memberof CheckReservationInDTO
     */
    resourceGroupUUID: string;
    /**
     * 
     * @type {number}
     * @memberof CheckReservationInDTO
     */
    guests: number;
    /**
     * 
     * @type {Date}
     * @memberof CheckReservationInDTO
     */
    localDateSince: Date;
    /**
     * 
     * @type {Date}
     * @memberof CheckReservationInDTO
     */
    localDateTill: Date;
}

/**
 * Check if a given object implements the CheckReservationInDTO interface.
 */
export function instanceOfCheckReservationInDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "resourceGroupUUID" in value;
    isInstance = isInstance && "guests" in value;
    isInstance = isInstance && "localDateSince" in value;
    isInstance = isInstance && "localDateTill" in value;

    return isInstance;
}

export function CheckReservationInDTOFromJSON(json: any): CheckReservationInDTO {
    return CheckReservationInDTOFromJSONTyped(json, false);
}

export function CheckReservationInDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckReservationInDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resourceGroupUUID': json['resourceGroupUUID'],
        'guests': json['guests'],
        'localDateSince': (new Date(json['localDateSince'])),
        'localDateTill': (new Date(json['localDateTill'])),
    };
}

export function CheckReservationInDTOToJSON(value?: CheckReservationInDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resourceGroupUUID': value.resourceGroupUUID,
        'guests': value.guests,
        'localDateSince': (value.localDateSince.toISOString().substr(0,10)),
        'localDateTill': (value.localDateTill.toISOString().substr(0,10)),
    };
}
