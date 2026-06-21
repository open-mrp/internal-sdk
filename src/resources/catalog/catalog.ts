// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProductLinesAPI from './product-lines';
import {
  CreateProductLineRequest,
  ProductLineCreateParams,
  ProductLineDeleteResponse,
  ProductLineListParams,
  ProductLineRetrieveParams,
  ProductLineUpdateParams,
  ProductLines,
  UpdateProductLineRequest,
} from './product-lines';
import * as ProductTypesAPI from './product-types';
import {
  CreateProductTypeRequest,
  ListProductType,
  ProductType,
  ProductTypeCreateParams,
  ProductTypeDeleteResponse,
  ProductTypeListParams,
  ProductTypeUpdateParams,
  ProductTypes,
  UpdateProductTypeRequest,
} from './product-types';
import * as CatalogAPI from './catalog_/catalog_';
import { Catalog as CatalogAPICatalog } from './catalog_/catalog_';
import * as ItemCategoriesAPI from './item-categories/item-categories';
import {
  CreateItemCategoryRequest,
  ItemCategories,
  ItemCategoryChangeUnitGroupParams,
  ItemCategoryChangeUnitGroupResponse,
  ItemCategoryCreateParams,
  ItemCategoryDeleteResponse,
  ItemCategoryListParams,
  ItemCategoryRetrieveParams,
  ItemCategoryUpdateParams,
  UpdateItemCategoryRequest,
} from './item-categories/item-categories';
import * as ItemsAPI from './items/items';
import {
  ItemChangeCategoryParams,
  ItemCosts,
  ItemListParams,
  ItemRetrieveParams,
  ItemRetrieveTrendsParams,
  ItemTrendPoint,
  ItemTrends,
  Items,
  ListItem,
  ListItemTrendPoint,
} from './items/items';
import * as MaterialsAPI from './materials/materials';
import {
  CreateMaterialRequest,
  ListMaterial,
  Material,
  MaterialCreateParams,
  MaterialListParams,
  MaterialRetrieveParams,
  MaterialUpdateParams,
  Materials,
  QuantityInputRequest,
  UpdateMaterialRequest,
} from './materials/materials';
import * as PartsAPI from './parts/parts';
import {
  CreatePartRequest,
  ListPart,
  Part,
  PartCreateParams,
  PartListParams,
  PartRetrieveParams,
  PartUpdateParams,
  Parts,
  UpdatePartRequest,
} from './parts/parts';
import * as ProductsAPI from './products/products';
import {
  CreateProductRequest,
  ListProduct,
  ProductChangeProductLineParams,
  ProductCreateParams,
  ProductDeleteParams,
  ProductListParams,
  ProductRetrieveParams,
  ProductUpdateParams,
  Products,
  UpdateProductRequest,
} from './products/products';
import * as PropertiesAPI from './properties/properties';
import {
  CreatePropertyRequest,
  Properties,
  PropertyCreateParams,
  PropertyDeleteResponse,
  PropertyListParams,
  PropertyRetrieveParams,
  PropertyUpdateParams,
  UpdatePropertyRequest,
} from './properties/properties';
import * as UnitGroupsAPI from './unit-groups/unit-groups';
import {
  CreateUnitGroupRequest,
  CreateUnitGroupUnitParam,
  ListUnitGroup,
  UnitGroupCreateParams,
  UnitGroupDeleteResponse,
  UnitGroupListParams,
  UnitGroupRetrieveParams,
  UnitGroupUpdateParams,
  UnitGroups,
  UpdateUnitGroupRequest,
} from './unit-groups/unit-groups';
import * as UnitsAPI from './units/units';
import {
  CreateUnitRequest,
  UnitCreateParams,
  UnitDeleteResponse,
  UnitListParams,
  UnitRetrieveParams,
  UnitUpdateParams,
  Units,
  UpdateUnitRequest,
} from './units/units';

export class Catalog extends APIResource {
  units: UnitsAPI.Units = new UnitsAPI.Units(this._client);
  unitGroups: UnitGroupsAPI.UnitGroups = new UnitGroupsAPI.UnitGroups(this._client);
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);
  itemCategories: ItemCategoriesAPI.ItemCategories = new ItemCategoriesAPI.ItemCategories(this._client);
  materials: MaterialsAPI.Materials = new MaterialsAPI.Materials(this._client);
  parts: PartsAPI.Parts = new PartsAPI.Parts(this._client);
  productLines: ProductLinesAPI.ProductLines = new ProductLinesAPI.ProductLines(this._client);
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
  productTypes: ProductTypesAPI.ProductTypes = new ProductTypesAPI.ProductTypes(this._client);
  catalog: CatalogAPI.Catalog = new CatalogAPI.Catalog(this._client);
}

Catalog.Units = Units;
Catalog.UnitGroups = UnitGroups;
Catalog.Properties = Properties;
Catalog.Items = Items;
Catalog.ItemCategories = ItemCategories;
Catalog.Materials = Materials;
Catalog.Parts = Parts;
Catalog.ProductLines = ProductLines;
Catalog.Products = Products;
Catalog.ProductTypes = ProductTypes;
Catalog.Catalog = CatalogAPICatalog;

export declare namespace Catalog {
  export {
    Units as Units,
    type CreateUnitRequest as CreateUnitRequest,
    type UpdateUnitRequest as UpdateUnitRequest,
    type UnitDeleteResponse as UnitDeleteResponse,
    type UnitCreateParams as UnitCreateParams,
    type UnitRetrieveParams as UnitRetrieveParams,
    type UnitUpdateParams as UnitUpdateParams,
    type UnitListParams as UnitListParams,
  };

  export {
    UnitGroups as UnitGroups,
    type CreateUnitGroupRequest as CreateUnitGroupRequest,
    type CreateUnitGroupUnitParam as CreateUnitGroupUnitParam,
    type ListUnitGroup as ListUnitGroup,
    type UpdateUnitGroupRequest as UpdateUnitGroupRequest,
    type UnitGroupDeleteResponse as UnitGroupDeleteResponse,
    type UnitGroupCreateParams as UnitGroupCreateParams,
    type UnitGroupRetrieveParams as UnitGroupRetrieveParams,
    type UnitGroupUpdateParams as UnitGroupUpdateParams,
    type UnitGroupListParams as UnitGroupListParams,
  };

  export {
    Properties as Properties,
    type CreatePropertyRequest as CreatePropertyRequest,
    type UpdatePropertyRequest as UpdatePropertyRequest,
    type PropertyDeleteResponse as PropertyDeleteResponse,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyRetrieveParams as PropertyRetrieveParams,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyListParams as PropertyListParams,
  };

  export {
    Items as Items,
    type ItemCosts as ItemCosts,
    type ItemTrendPoint as ItemTrendPoint,
    type ItemTrends as ItemTrends,
    type ListItem as ListItem,
    type ListItemTrendPoint as ListItemTrendPoint,
    type ItemRetrieveParams as ItemRetrieveParams,
    type ItemListParams as ItemListParams,
    type ItemChangeCategoryParams as ItemChangeCategoryParams,
    type ItemRetrieveTrendsParams as ItemRetrieveTrendsParams,
  };

  export {
    ItemCategories as ItemCategories,
    type CreateItemCategoryRequest as CreateItemCategoryRequest,
    type UpdateItemCategoryRequest as UpdateItemCategoryRequest,
    type ItemCategoryDeleteResponse as ItemCategoryDeleteResponse,
    type ItemCategoryChangeUnitGroupResponse as ItemCategoryChangeUnitGroupResponse,
    type ItemCategoryCreateParams as ItemCategoryCreateParams,
    type ItemCategoryRetrieveParams as ItemCategoryRetrieveParams,
    type ItemCategoryUpdateParams as ItemCategoryUpdateParams,
    type ItemCategoryListParams as ItemCategoryListParams,
    type ItemCategoryChangeUnitGroupParams as ItemCategoryChangeUnitGroupParams,
  };

  export {
    Materials as Materials,
    type CreateMaterialRequest as CreateMaterialRequest,
    type ListMaterial as ListMaterial,
    type Material as Material,
    type QuantityInputRequest as QuantityInputRequest,
    type UpdateMaterialRequest as UpdateMaterialRequest,
    type MaterialCreateParams as MaterialCreateParams,
    type MaterialRetrieveParams as MaterialRetrieveParams,
    type MaterialUpdateParams as MaterialUpdateParams,
    type MaterialListParams as MaterialListParams,
  };

  export {
    Parts as Parts,
    type CreatePartRequest as CreatePartRequest,
    type ListPart as ListPart,
    type Part as Part,
    type UpdatePartRequest as UpdatePartRequest,
    type PartCreateParams as PartCreateParams,
    type PartRetrieveParams as PartRetrieveParams,
    type PartUpdateParams as PartUpdateParams,
    type PartListParams as PartListParams,
  };

  export {
    ProductLines as ProductLines,
    type CreateProductLineRequest as CreateProductLineRequest,
    type UpdateProductLineRequest as UpdateProductLineRequest,
    type ProductLineDeleteResponse as ProductLineDeleteResponse,
    type ProductLineCreateParams as ProductLineCreateParams,
    type ProductLineRetrieveParams as ProductLineRetrieveParams,
    type ProductLineUpdateParams as ProductLineUpdateParams,
    type ProductLineListParams as ProductLineListParams,
  };

  export {
    Products as Products,
    type CreateProductRequest as CreateProductRequest,
    type ListProduct as ListProduct,
    type UpdateProductRequest as UpdateProductRequest,
    type ProductCreateParams as ProductCreateParams,
    type ProductRetrieveParams as ProductRetrieveParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
    type ProductDeleteParams as ProductDeleteParams,
    type ProductChangeProductLineParams as ProductChangeProductLineParams,
  };

  export {
    ProductTypes as ProductTypes,
    type CreateProductTypeRequest as CreateProductTypeRequest,
    type ListProductType as ListProductType,
    type ProductType as ProductType,
    type UpdateProductTypeRequest as UpdateProductTypeRequest,
    type ProductTypeDeleteResponse as ProductTypeDeleteResponse,
    type ProductTypeCreateParams as ProductTypeCreateParams,
    type ProductTypeUpdateParams as ProductTypeUpdateParams,
    type ProductTypeListParams as ProductTypeListParams,
  };

  export { CatalogAPICatalog as Catalog };
}
