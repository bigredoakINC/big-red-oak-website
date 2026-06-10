import { defineType, defineField, defineArrayMember } from 'sanity';

/* Big Red Oak content model. Mirrors src/data/content.ts in the website repo so the
   website can swap from local content to Sanity with no structural change. */

const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', initialValue: 'Big Red Oak' }),
    defineField({ name: 'tagline', type: 'string' }),
    defineField({ name: 'email', type: 'string' }),
    defineField({ name: 'url', type: 'url' }),
    defineField({ name: 'bookingUrl', title: 'Roam booking URL', type: 'url' }),
    defineField({ name: 'linkedin', type: 'url' }),
    defineField({ name: 'ctaLabel', type: 'string' }),
    defineField({ name: 'memberships', type: 'array', of: [defineArrayMember({ type: 'string' })] }),
  ],
});

const post = defineType({
  name: 'post',
  title: 'Blog post (Clean Currents)',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'coverImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'author', type: 'string', initialValue: 'Big Red Oak' }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
    defineField({ name: 'tags', type: 'array', of: [defineArrayMember({ type: 'string' })] }),
    defineField({ name: 'featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'body', type: 'array', of: [defineArrayMember({ type: 'block' }), defineArrayMember({ type: 'image' })] }),
  ],
});

const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case study (Our Work)',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'client', type: 'string' }),
    defineField({ name: 'summary', type: 'text', rows: 3 }),
    defineField({ name: 'coverImage', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'metrics', type: 'array', of: [defineArrayMember({
        type: 'object', fields: [
          defineField({ name: 'label', type: 'string' }),
          defineField({ name: 'value', type: 'string' }),
        ],
      })],
    }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
    defineField({ name: 'featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'body', type: 'array', of: [defineArrayMember({ type: 'block' }), defineArrayMember({ type: 'image' })] }),
  ],
});

const teamMember = defineType({
  name: 'teamMember',
  title: 'Team member',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string' }),
    defineField({ name: 'role', type: 'string' }),
    defineField({ name: 'bio', type: 'text', rows: 3 }),
    defineField({ name: 'headshot', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', type: 'number' }),
  ],
});

const partner = defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string' }),
    defineField({ name: 'logo', type: 'image' }),
    defineField({ name: 'url', type: 'url' }),
    defineField({ name: 'order', type: 'number' }),
  ],
});

const serviceCapability = defineType({
  name: 'serviceCapability',
  title: 'Service capability',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'description', type: 'text', rows: 2 }),
    defineField({ name: 'order', type: 'number' }),
  ],
});

const faqItem = defineType({
  name: 'faqItem',
  title: 'FAQ item',
  type: 'document',
  fields: [
    defineField({ name: 'question', type: 'string' }),
    defineField({ name: 'answer', type: 'text', rows: 3 }),
    defineField({ name: 'order', type: 'number' }),
  ],
});

const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', type: 'text', rows: 3 }),
    defineField({ name: 'attributionName', type: 'string' }),
    defineField({ name: 'attributionRole', type: 'string' }),
  ],
});

export const schemaTypes = [
  siteSettings, post, caseStudy, teamMember, partner, serviceCapability, faqItem, testimonial,
];
