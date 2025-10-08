import { defineType, defineArrayMember } from 'sanity';

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
                initialValue: true,
              },
            ],
          },
        ],
      },
    }),
    // Images
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    }),
    // Tables
    defineArrayMember({
      type: 'object',
      name: 'table',
      title: 'Table',
      fields: [
        {
          name: 'rows',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'cells',
                  type: 'array',
                  of: [{ type: 'string' }],
                },
              ],
            },
          ],
        },
      ],
    }),
    // Callout Box
    defineArrayMember({
      type: 'object',
      name: 'callout',
      title: 'Callout Box',
      fields: [
        {
          name: 'type',
          type: 'string',
          options: {
            list: [
              { title: 'Info', value: 'info' },
              { title: 'Warning', value: 'warning' },
              { title: 'Tip', value: 'tip' },
              { title: 'Important', value: 'important' },
            ],
          },
        },
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'content',
          type: 'text',
          title: 'Content',
        },
      ],
      preview: {
        select: {
          title: 'title',
          type: 'type',
        },
        prepare({ title, type }) {
          return {
            title: title || 'Callout',
            subtitle: type,
          };
        },
      },
    }),
    // Code Block
    defineArrayMember({
      type: 'code',
      options: {
        language: 'javascript',
        withFilename: true,
      },
    }),
  ],
});
