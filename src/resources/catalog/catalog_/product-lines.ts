// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProductLinesAPI from './product-lines';
import * as AgentsAPI from '../../ai/agents';
import * as ItemsAPI from '../items/items';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Browse the product catalog.
 */
export class ProductLines extends APIResource {
  /**
   * Returns a paginated list of product lines available in the catalog. Customers
   * only see product lines they have access to.
   *
   * @example
   * ```ts
   * const response =
   *   await client.catalog.catalog.productLines.retrieveProductLines();
   * ```
   */
  retrieveProductLines(
    query: ProductLineRetrieveProductLinesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductLineRetrieveProductLinesResponse> {
    return this._client.get('/v1/catalog/catalog/product-lines', { query, ...options });
  }

  /**
   * Returns a paginated list of products in a specific product line, grouped by item
   * category.
   *
   * @example
   * ```ts
   * const response =
   *   await client.catalog.catalog.productLines.retrieveProducts(
   *     'pl_01jm4r6700f8nwq3v5hx2d9ktp',
   *   );
   * ```
   */
  retrieveProducts(
    id: string,
    query: ProductLineRetrieveProductsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductLineRetrieveProductsResponse> {
    return this._client.get(path`/v1/catalog/catalog/product-lines/${id}/products`, { query, ...options });
  }
}

/**
 * Property associated with an item category.
 */
export interface CatalogProperty {
  /**
   * Property ID.
   */
  id: string;

  /**
   * Name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'catalog_property';
}

/**
 * List represents a paginated list of resources.
 */
export interface ProductLineRetrieveProductLinesResponse {
  /**
   * Resources in this page.
   */
  data: Array<ProductLineRetrieveProductLinesResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace ProductLineRetrieveProductLinesResponse {
  /**
   * Product line available in the catalog.
   */
  export interface Data {
    /**
     * Product line ID.
     */
    id: string;

    /**
     * Name.
     */
    name: string;

    /**
     * Resource type identifier.
     */
    object: 'catalog_product_line';
  }
}

/**
 * List represents a paginated list of resources.
 */
export interface ProductLineRetrieveProductsResponse {
  /**
   * Resources in this page.
   */
  data: Array<ProductLineRetrieveProductsResponse.Data>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: AgentsAPI.PageInfo;
}

export namespace ProductLineRetrieveProductsResponse {
  /**
   * Category of products in the catalog.
   */
  export interface Data {
    /**
     * Item category ID.
     */
    id: string;

    /**
     * Name.
     */
    name: string;

    /**
     * Resource type identifier.
     */
    object: 'catalog_category';

    /**
     * List represents a paginated list of resources.
     */
    products: Data.Products | null;

    /**
     * List represents a paginated list of resources.
     */
    properties: Data.Properties | null;
  }

  export namespace Data {
    /**
     * List represents a paginated list of resources.
     */
    export interface Products {
      /**
       * Resources in this page.
       */
      data: Array<Products.Data>;

      /**
       * Resource type identifier.
       */
      object: 'list';

      /**
       * PageInfo contains URL-based pagination metadata.
       */
      page_info: AgentsAPI.PageInfo;
    }

    export namespace Products {
      /**
       * Product in the catalog.
       */
      export interface Data {
        /**
         * List represents a paginated list of resources.
         */
        attributes: Data.Attributes | null;

        /**
         * Description.
         */
        description: string;

        /**
         * Item is an inventory item (product, material, or part).
         */
        item: ItemsAPI.Item | null;

        /**
         * Resource type identifier.
         */
        object: 'catalog_product';
      }

      export namespace Data {
        /**
         * List represents a paginated list of resources.
         */
        export interface Attributes {
          /**
           * Resources in this page.
           */
          data: Array<Attributes.Data>;

          /**
           * Resource type identifier.
           */
          object: 'list';

          /**
           * PageInfo contains URL-based pagination metadata.
           */
          page_info: AgentsAPI.PageInfo;
        }

        export namespace Attributes {
          /**
           * Attribute of a product in the catalog.
           */
          export interface Data {
            /**
             * Attribute ID.
             */
            id: string;

            /**
             * Attribute value.
             */
            name: string;

            /**
             * Resource type identifier.
             */
            object: 'catalog_attribute';

            /**
             * Property associated with an item category.
             */
            property: ProductLinesAPI.CatalogProperty | null;
          }
        }
      }
    }

    /**
     * List represents a paginated list of resources.
     */
    export interface Properties {
      /**
       * Resources in this page.
       */
      data: Array<ProductLinesAPI.CatalogProperty>;

      /**
       * Resource type identifier.
       */
      object: 'list';

      /**
       * PageInfo contains URL-based pagination metadata.
       */
      page_info: AgentsAPI.PageInfo;
    }
  }
}

export interface ProductLineRetrieveProductLinesParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export interface ProductLineRetrieveProductsParams {
  /**
   * Cursor token used to retrieve the next or previous page of results.
   */
  cursor?: string;

  /**
   * Maximum number of results per page (default: 100, max: 1000).
   */
  limit?: number;

  /**
   * Search query used to filter results.
   */
  q?: string;
}

export declare namespace ProductLines {
  export {
    type CatalogProperty as CatalogProperty,
    type ProductLineRetrieveProductLinesResponse as ProductLineRetrieveProductLinesResponse,
    type ProductLineRetrieveProductsResponse as ProductLineRetrieveProductsResponse,
    type ProductLineRetrieveProductLinesParams as ProductLineRetrieveProductLinesParams,
    type ProductLineRetrieveProductsParams as ProductLineRetrieveProductsParams,
  };
}
