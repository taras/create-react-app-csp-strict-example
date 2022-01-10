/* eslint-disable no-restricted-globals */
import { CmsConfig } from 'netlify-cms-core';
import { CMSRole } from './config-interface';

const cmsCollectionFolder = (folderName: string): string => {
  return `cms/${folderName}/${process.env.NODE_ENV === 'development' ? 'dev' : process.env.NODE_ENV}`;
};

export const getCMSConfig = (cmsRole: CMSRole): CmsConfig => {
  const config: CmsConfig = {
    load_config_file: false,
    backend: {
      name: 'github',
      repo: 'taras/create-react-app-csp-strict-example',
      open_authoring: false,
      auth_scope: 'repo',
      branch: 'main',
      api_root: 'https://api.github.com',
      site_domain: location.hostname,
      base_url: location.origin,
      auth_endpoint: 'auth',
    },
    site_url: location.origin,
    show_preview_links: false,
    editor: {
      preview: false,
    },
    publish_mode: 'editorial_workflow',
    media_library: {
      name: 'disabled',
    },

    collections: [
      {
        label: 'Events & Recordings',
        name: 'event',
        folder: cmsCollectionFolder('event'),
        create: cmsRole.canCreate,
        delete: cmsRole.canDelete,
        extension: 'json',
        slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
        fields: [
          {
            label: 'Title',
            name: 'title',
            widget: 'string',
            pattern: ['.{5,}', 'Must have at least 5 characters'],
          },
          {
            label: 'Place',
            name: 'place',
            widget: 'select',
            options: [
              { label: 'Virtual', value: 'Virtual' },
              { label: 'Local', value: 'Local' },
            ],
          },
          { label: 'Day', name: 'day', widget: 'datetime', date_format: 'DD', default: 'DD', time_format: false },
          { label: 'Link', name: 'link', widget: 'string' },
        ],
      },
      {
        label: 'Resources',
        name: 'resource',
        folder: cmsCollectionFolder('resource'),
        create: cmsRole.canCreate,
        delete: cmsRole.canDelete,
        extension: 'json',
        slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
        fields: [
          {
            label: 'Type',
            name: 'type',
            widget: 'select',
            options: [
              { label: 'Standards', value: 'Standards' },
              { label: 'Tutorials', value: 'Tutorials' },
              { label: 'Training', value: 'Training' },
            ],
          },
          {
            label: 'Title',
            name: 'title',
            widget: 'string',
            pattern: ['.{5,}', 'Must have at least 5 characters'],
          },
          { label: 'LINK', name: 'link', widget: 'string' },
          { label: 'Text', name: 'text', widget: 'markdown' },
        ],
      },
      {
        label: 'FAQ',
        name: 'faq',
        folder: cmsCollectionFolder('faq'),
        create: cmsRole.canCreate,
        delete: cmsRole.canDelete,
        extension: 'json',
        slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
        fields: [
          {
            label: 'Title',
            name: 'title',
            widget: 'string',
            pattern: ['.{5,}', 'Must have at least 5 characters'],
          },
          { label: 'Text', name: 'text', widget: 'markdown' },
        ],
      },
      {
        label: 'Release notes',
        name: 'release_note',
        folder: cmsCollectionFolder('release_note'),
        create: cmsRole.canCreate,
        delete: cmsRole.canDelete,
        extension: 'json',
        slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
        fields: [
          {
            label: 'Title',
            name: 'title',
            widget: 'string',
            pattern: ['.{5,}', 'Must have at least 5 characters'],
          },
          {
            label: 'Area',
            name: 'area',
            widget: 'select',
            options: [
              { label: 'Release note', value: 'release_note' },
              { label: 'Feature Announcement', value: 'feature_announcement' },
              { label: 'Catalog and partners', value: 'catalog_partners' },
            ],
          },
          { label: 'Date', name: 'date', widget: 'datetime', date_format: 'DD.MM.YYYY', time_format: false },
          { label: 'Body', name: 'body', widget: 'markdown' },
        ],
      },
    ],
  };
  return config;
};
