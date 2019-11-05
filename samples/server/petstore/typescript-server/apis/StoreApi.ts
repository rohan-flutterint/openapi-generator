// tslint:disable
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI } from '../runtime';
import {
    ,
} from '../models';

export interface DeleteOrderRequest {
    orderId: string;
}

export interface GetOrderByIdRequest {
    orderId: number;
}

export interface PlaceOrderRequest {
    body: Order;
}

/**
 * no description
 */
export class StoreApi extends BaseAPI {

    /**
     * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     * Delete purchase order by ID
     */
    deleteOrder = (requestParameters: DeleteOrderRequest): Observable<void> => {
        throwIfRequired(requestParameters, 'orderId', 'deleteOrder');

        return this.request<void>({
            path: '/store/order/{orderId}'.replace('{orderId}', encodeURI(requestParameters.orderId)),
            method: 'DELETE',
        });
    };

    /**
     * Returns a map of status codes to quantities
     * Returns pet inventories by status
     */
    getInventory = (): Observable<{ [key: string]: number; }> => {
        return this.request<{ [key: string]: number; }>({
            path: '/store/inventory',
            method: 'GET',
        });
    };

    /**
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
     * Find purchase order by ID
     */
    getOrderById = (requestParameters: GetOrderByIdRequest): Observable<Order> => {
        throwIfRequired(requestParameters, 'orderId', 'getOrderById');

        return this.request<Order>({
            path: '/store/order/{orderId}'.replace('{orderId}', encodeURI(requestParameters.orderId)),
            method: 'GET',
        });
    };

    /**
     * Place an order for a pet
     */
    placeOrder = (requestParameters: PlaceOrderRequest): Observable<Order> => {
        throwIfRequired(requestParameters, 'body', 'placeOrder');

        return this.request<Order>({
            path: '/store/order',
            method: 'POST',
            body: requestParameters.body,
        });
    };

}
