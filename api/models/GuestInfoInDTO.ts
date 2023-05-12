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
import type { GuestEntryOutDTO } from './GuestEntryOutDTO';
import {
    GuestEntryOutDTOFromJSON,
    GuestEntryOutDTOFromJSONTyped,
    GuestEntryOutDTOToJSON,
} from './GuestEntryOutDTO';

/**
 * 
 * @export
 * @interface GuestInfoInDTO
 */
export interface GuestInfoInDTO {
    /**
     * 
     * @type {Array<GuestEntryOutDTO>}
     * @memberof GuestInfoInDTO
     */
    registeredGuests: Array<GuestEntryOutDTO>;
}

/**
 * Check if a given object implements the GuestInfoInDTO interface.
 */
export function instanceOfGuestInfoInDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "registeredGuests" in value;

    return isInstance;
}

export function GuestInfoInDTOFromJSON(json: any): GuestInfoInDTO {
    return GuestInfoInDTOFromJSONTyped(json, false);
}

export function GuestInfoInDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestInfoInDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'registeredGuests': ((json['registeredGuests'] as Array<any>).map(GuestEntryOutDTOFromJSON)),
    };
}

export function GuestInfoInDTOToJSON(value?: GuestInfoInDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'registeredGuests': ((value.registeredGuests as Array<any>).map(GuestEntryOutDTOToJSON)),
    };
}
