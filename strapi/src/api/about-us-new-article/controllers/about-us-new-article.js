"use strict";

/**
 * about-us-new-article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::about-us-new-article.about-us-new-article",
  // ({ strapi }) => ({
  //   async findOne(ctx) {
  //     const { customUrl } = ctx.params;
  //     const entity = await strapi.db
  //       .query("api::about-us-new-article.about-us-new-article")
  //       .findOne({
  //         where: { slug: customUrl },
  //         populate: true,
  //       });

  //     if (!entity) {
  //       return ctx.notFound();
  //     }

  //     return entity;
  //   },
  // })
);
