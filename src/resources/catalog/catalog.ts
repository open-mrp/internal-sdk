// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProductLinesAPI from './product-lines';
import {
  ListProductLine,
  ProductLine,
  ProductLineDeleteResponse,
  ProductLineProductLinesParams,
  ProductLineRetrieveParams,
  ProductLineRetrieveProductLinesParams,
  ProductLineUpdateParams,
  ProductLines,
} from './product-lines';
import * as ProductTypesAPI from './product-types';
import {
  ProductType,
  ProductTypeDeleteResponse,
  ProductTypeProductTypesParams,
  ProductTypeRetrieveProductTypesParams,
  ProductTypeRetrieveProductTypesResponse,
  ProductTypeUpdateParams,
  ProductTypes,
} from './product-types';
import * as CatalogAPI from './catalog_/catalog_';
import { Catalog as CatalogAPICatalog } from './catalog_/catalog_';
import * as ItemCategoriesAPI from './item-categories/item-categories';
import {
  ItemCategories,
  ItemCategory,
  ItemCategoryDeleteResponse,
  ItemCategoryItemCategoriesParams,
  ItemCategoryRetrieveItemCategoriesParams,
  ItemCategoryRetrieveParams,
  ItemCategoryUpdateParams,
  ListItemCategory,
  Owner,
} from './item-categories/item-categories';
import * as ItemsAPI from './items/items';
import {
  Item,
  ItemListParams,
  ItemListResponse,
  ItemRetrieveCostsResponse,
  ItemRetrieveParams,
  ItemRetrieveTrendsParams,
  ItemRetrieveTrendsResponse,
  ItemUpdateParams,
  Items,
} from './items/items';
import * as MaterialsAPI from './materials/materials';
import {
  Material,
  MaterialCreateParams,
  MaterialListParams,
  MaterialListResponse,
  MaterialRetrieveParams,
  MaterialUpdateParams,
  Materials,
  QuantityInputRequest,
  RateInput,
} from './materials/materials';
import * as PartsAPI from './parts/parts';
import {
  Part,
  PartCreateParams,
  PartListParams,
  PartListResponse,
  PartRetrieveParams,
  PartUpdateParams,
  Parts,
} from './parts/parts';
import * as ProductsAPI from './products/products';
import {
  Product,
  ProductCreateParams,
  ProductDeleteParams,
  ProductListParams,
  ProductListResponse,
  ProductRetrieveParams,
  ProductUpdateParams,
  Products,
} from './products/products';
import * as PropertiesAPI from './properties/properties';
import {
  ListProperty,
  Properties,
  Property,
  PropertyCreateParams,
  PropertyDeleteResponse,
  PropertyListParams,
  PropertyRetrieveParams,
  PropertyUpdateParams,
} from './properties/properties';
import * as UnitGroupsAPI from './unit-groups/unit-groups';
import {
  CreateUnitGroupUnitParam,
  UnitGroup,
  UnitGroupDeleteResponse,
  UnitGroupRetrieveParams,
  UnitGroupRetrieveUnitGroupsParams,
  UnitGroupRetrieveUnitGroupsResponse,
  UnitGroupUnitGroupsParams,
  UnitGroupUpdateParams,
  UnitGroups,
} from './unit-groups/unit-groups';
import * as UnitsAPI from './units/units';
import {
  ListUnit,
  Unit,
  UnitCreateParams,
  UnitDeleteResponse,
  UnitListParams,
  UnitRetrieveParams,
  UnitUpdateParams,
  Units,
} from './units/units';

export class Catalog extends APIResource {
  catalog: CatalogAPI.Catalog = new CatalogAPI.Catalog(this._client);
  itemCategories: ItemCategoriesAPI.ItemCategories = new ItemCategoriesAPI.ItemCategories(this._client);
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);
  materials: MaterialsAPI.Materials = new MaterialsAPI.Materials(this._client);
  parts: PartsAPI.Parts = new PartsAPI.Parts(this._client);
  productLines: ProductLinesAPI.ProductLines = new ProductLinesAPI.ProductLines(this._client);
  productTypes: ProductTypesAPI.ProductTypes = new ProductTypesAPI.ProductTypes(this._client);
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);
  unitGroups: UnitGroupsAPI.UnitGroups = new UnitGroupsAPI.UnitGroups(this._client);
  units: UnitsAPI.Units = new UnitsAPI.Units(this._client);
}

Catalog.Catalog = CatalogAPICatalog;
Catalog.ItemCategories = ItemCategories;
Catalog.Items = Items;
Catalog.Materials = Materials;
Catalog.Parts = Parts;
Catalog.ProductLines = ProductLines;
Catalog.ProductTypes = ProductTypes;
Catalog.Products = Products;
Catalog.Properties = Properties;
Catalog.UnitGroups = UnitGroups;
Catalog.Units = Units;

export declare namespace Catalog {
  export { CatalogAPICatalog as Catalog };

  export {
    ItemCategories as ItemCategories,
    type ItemCategory as ItemCategory,
    type ListItemCategory as ListItemCategory,
    type Owner as Owner,
    type ItemCategoryDeleteResponse as ItemCategoryDeleteResponse,
    type ItemCategoryRetrieveParams as ItemCategoryRetrieveParams,
    type ItemCategoryUpdateParams as ItemCategoryUpdateParams,
    type ItemCategoryItemCategoriesParams as ItemCategoryItemCategoriesParams,
    type ItemCategoryRetrieveItemCategoriesParams as ItemCategoryRetrieveItemCategoriesParams,
  };

  export {
    Items as Items,
    type Item as Item,
    type ItemListResponse as ItemListResponse,
    type ItemRetrieveCostsResponse as ItemRetrieveCostsResponse,
    type ItemRetrieveTrendsResponse as ItemRetrieveTrendsResponse,
    type ItemRetrieveParams as ItemRetrieveParams,
    type ItemUpdateParams as ItemUpdateParams,
    type ItemListParams as ItemListParams,
    type ItemRetrieveTrendsParams as ItemRetrieveTrendsParams,
  };

  export {
    Materials as Materials,
    type Material as Material,
    type QuantityInputRequest as QuantityInputRequest,
    type RateInput as RateInput,
    type MaterialListResponse as MaterialListResponse,
    type MaterialCreateParams as MaterialCreateParams,
    type MaterialRetrieveParams as MaterialRetrieveParams,
    type MaterialUpdateParams as MaterialUpdateParams,
    type MaterialListParams as MaterialListParams,
  };

  export {
    Parts as Parts,
    type Part as Part,
    type PartListResponse as PartListResponse,
    type PartCreateParams as PartCreateParams,
    type PartRetrieveParams as PartRetrieveParams,
    type PartUpdateParams as PartUpdateParams,
    type PartListParams as PartListParams,
  };

  export {
    ProductLines as ProductLines,
    type ListProductLine as ListProductLine,
    type ProductLine as ProductLine,
    type ProductLineDeleteResponse as ProductLineDeleteResponse,
    type ProductLineRetrieveParams as ProductLineRetrieveParams,
    type ProductLineUpdateParams as ProductLineUpdateParams,
    type ProductLineProductLinesParams as ProductLineProductLinesParams,
    type ProductLineRetrieveProductLinesParams as ProductLineRetrieveProductLinesParams,
  };

  export {
    ProductTypes as ProductTypes,
    type ProductType as ProductType,
    type ProductTypeDeleteResponse as ProductTypeDeleteResponse,
    type ProductTypeRetrieveProductTypesResponse as ProductTypeRetrieveProductTypesResponse,
    type ProductTypeUpdateParams as ProductTypeUpdateParams,
    type ProductTypeProductTypesParams as ProductTypeProductTypesParams,
    type ProductTypeRetrieveProductTypesParams as ProductTypeRetrieveProductTypesParams,
  };

  export {
    Products as Products,
    type Product as Product,
    type ProductListResponse as ProductListResponse,
    type ProductCreateParams as ProductCreateParams,
    type ProductRetrieveParams as ProductRetrieveParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
    type ProductDeleteParams as ProductDeleteParams,
  };

  export {
    Properties as Properties,
    type ListProperty as ListProperty,
    type Property as Property,
    type PropertyDeleteResponse as PropertyDeleteResponse,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyRetrieveParams as PropertyRetrieveParams,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyListParams as PropertyListParams,
  };

  export {
    UnitGroups as UnitGroups,
    type CreateUnitGroupUnitParam as CreateUnitGroupUnitParam,
    type UnitGroup as UnitGroup,
    type UnitGroupDeleteResponse as UnitGroupDeleteResponse,
    type UnitGroupRetrieveUnitGroupsResponse as UnitGroupRetrieveUnitGroupsResponse,
    type UnitGroupRetrieveParams as UnitGroupRetrieveParams,
    type UnitGroupUpdateParams as UnitGroupUpdateParams,
    type UnitGroupRetrieveUnitGroupsParams as UnitGroupRetrieveUnitGroupsParams,
    type UnitGroupUnitGroupsParams as UnitGroupUnitGroupsParams,
  };

  export {
    Units as Units,
    type ListUnit as ListUnit,
    type Unit as Unit,
    type UnitDeleteResponse as UnitDeleteResponse,
    type UnitCreateParams as UnitCreateParams,
    type UnitRetrieveParams as UnitRetrieveParams,
    type UnitUpdateParams as UnitUpdateParams,
    type UnitListParams as UnitListParams,
  };
}
