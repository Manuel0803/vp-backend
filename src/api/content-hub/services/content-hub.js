'use strict';

/**
 * content-hub service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::content-hub.content-hub');
