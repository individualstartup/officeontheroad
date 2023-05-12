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
import type { ResourceReservationInDTO } from './ResourceReservationInDTO';
import {
    ResourceReservationInDTOFromJSON,
    ResourceReservationInDTOFromJSONTyped,
    ResourceReservationInDTOToJSON,
} from './ResourceReservationInDTO';

/**
 * 
 * @export
 * @interface ContractInInDTO
 */
export interface ContractInInDTO {
    /**
     * 
     * @type {Date}
     * @memberof ContractInInDTO
     */
    contractSince: Date;
    /**
     * 
     * @type {Date}
     * @memberof ContractInInDTO
     */
    contractTill: Date;
    /**
     * 
     * @type {Array<ResourceReservationInDTO>}
     * @memberof ContractInInDTO
     */
    resources: Array<ResourceReservationInDTO>;
}

/**
 * Check if a given object implements the ContractInInDTO interface.
 */
export function instanceOfContractInInDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "contractSince" in value;
    isInstance = isInstance && "contractTill" in value;
    isInstance = isInstance && "resources" in value;

    return isInstance;
}

export function ContractInInDTOFromJSON(json: any): ContractInInDTO {
    return ContractInInDTOFromJSONTyped(json, false);
}

export function ContractInInDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContractInInDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contractSince': (new Date(json['contractSince'])),
        'contractTill': (new Date(json['contractTill'])),
        'resources': ((json['resources'] as Array<any>).map(ResourceReservationInDTOFromJSON)),
    };
}

export function ContractInInDTOToJSON(value?: ContractInInDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contractSince': (value.contractSince.toISOString().substr(0,10)),
        'contractTill': (value.contractTill.toISOString().substr(0,10)),
        'resources': ((value.resources as Array<any>).map(ResourceReservationInDTOToJSON)),
    };
}
