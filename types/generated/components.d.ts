import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsTip extends Struct.ComponentSchema {
  collectionName: 'components_elements_tips';
  info: {
    displayName: 'Tip';
  };
  attributes: {
    description: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.tip': ElementsTip;
    }
  }
}
