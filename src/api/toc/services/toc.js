'use strict';

/**
 * toc service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::toc.toc');
