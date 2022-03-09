/**
 * THIS FILE IS GENERATED, DO NOT MODIFY THEM...
 * contact @Miloslav Vlach
 */
import axios, { AxiosResponse } from 'axios';
import { GetIdTokenClaimsOptions, IdToken } from '@auth0/auth0-spa-js';

 export interface MessageResponseOutDTO {
    path: string;
    scope: ScopeEnum;
    type: TypeEnum;
    message: string;
}

export interface ResponseResult {
    success: boolean;
    errorType?: ErrorTypeEnum;
    messages: MessageResponseOutDTO[];
    payload?: any;
}

export interface ComputePriceOutDTO {
    totalPrice: number;
    since: string;
    till: string;
    prices: PriceElementOutDTO[];
}

export interface PriceElementOutDTO {
    name: string;
    amount: number;
    price: number;
}

export enum ScopeEnum { FIELD='FIELD',COMPONENT='COMPONENT',GLOBAL='GLOBAL' }
export enum TypeEnum { INFO='INFO',ERROR='ERROR',VALIDATION='VALIDATION',CONFLICT='CONFLICT',SUCCESS='SUCCESS' }
export enum ErrorTypeEnum { ERROR='ERROR',VALIDATION='VALIDATION',CONFLICT='CONFLICT' } 


 

export interface MicrositeApiType {
    computePrice: (resourceId: string,since: string,till: string, onSuccess: ((data : ComputePriceOutDTO)=>void), hashAuthentication?: string, callbacks?: Callbacks) => void;
  loading: string[];
}

const resolveQueryParams = (params: any[]) => {
    const retObject = {};
    params.forEach(item=>{
      Object.keys(item).forEach(key=>{
         retObject[key] = item[key];
      });
    });

    return retObject;
}

interface Error {
  message: string;
  name: string;
  stack: string;
  config: {
    url: string;
    method: string;
    data: string;
    headers: { [key: string]: string };
  };
}

interface Callbacks {
    onError?: (error: Error) => void;
    onConflict?: (conflictInfo: any) => void;
    onValidationFailed?: (originalResponse: any) => void;
    onEntityNotFound?: (originalResponse: any) => void;
    onAdditionalAction?: (additionalAction: any) => void;
}

const hasAdditionalAction = (response: AxiosResponse) => {
  if (response.status >= 200 && response.status < 300 && response.data.errorType === "ADDITIONAL_ACTION") {
    return true;
  }
  return false;
}

const isSuccess = (response: AxiosResponse) => {
return response.status >= 200 && response.status < 300 && response.data.errorType === null
}

const isConflict = (response: AxiosResponse) => {
if (response.status >= 200 && response.status < 300 && response.data.errorType === "CONFLICT") {
return true;
}
return false;
}

const entityNotFound = (response: AxiosResponse) => {
    if (response.status == 204) {
    return true;
    }
    return false;
}

const validationFailed = (response: AxiosResponse) => {
    if (response.status == 200 && response.data.errorType === "VALIDATION") {
    return true;
    }
    return false;
}

export const micrositeApiGenerator = (
backendUrl: string,
setLoading: (value: any[]) => void,
loading: any[],
i18n: any,
handleError: (error: Error, payload?) => any,
getIdTokenClaims: (options?: GetIdTokenClaimsOptions) => Promise<IdToken>,
    router : any,
    ): MicrositeApiType => {

  const apiMethods = {
        computePrice: (resourceId: string,since: string,till: string, onSuccess: ((data : ComputePriceOutDTO)=>void), hashAuthentication: string = null, callbacks: Callbacks ={}):void => {
        const slugs = router.query["slugs"];

            console.log(`Sending get -> ${backendUrl}/public-api/${resourceId}/compute-price, with data: ${JSON.stringify({})}`);
            setLoading([...loading, "computePrice"]);
            axios
                .get(`${backendUrl}/public-api/${resourceId}/compute-price`,  {
                    headers: {
                    'Accept-Language': i18n.language,
        
                    },
                    params: resolveQueryParams([{since}, {till}]),
                })
                .then((response) => {
                    if (isSuccess(response)) {
                        // @ts-ignore
                        onSuccess(response.data.payload);
                        }
                    if (hasAdditionalAction(response)) {
                        if (typeof callbacks.onAdditionalAction === 'function') {
                            callbacks.onAdditionalAction(response.data.payload);
                        }
                    }

                    if (isConflict(response)) {
                        if (typeof callbacks.onConflict === 'function') {
                            callbacks.onConflict(response.data.payload.entity);
                        }
                    }
                    if (validationFailed(response)) {
                        if (typeof callbacks.onValidationFailed === 'function') {
                         callbacks.onValidationFailed(response.data.messages);
                        }
                    }

                    if (entityNotFound(response)) {
                        if (typeof callbacks.onEntityNotFound === 'function') {
                            callbacks.onEntityNotFound(response.data.payload);
                        }
                    }
                    setLoading(loading.filter(t=>t!== "computePrice"));
                })
                .catch((error)=>{
                    if (typeof callbacks.onError === 'function') {
                        callbacks.onError(error);
                    } else
                    handleError(error, {});
                    setLoading(loading.filter(t=>t!== "computePrice"));
                })
        
        },
    loading
  };

    return apiMethods;

};
