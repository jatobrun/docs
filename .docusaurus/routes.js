
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page','dbb'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/','bc7'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/','2bf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/aws/cloud-developer',
        component: ComponentCreator('/docs/aws/cloud-developer','8cd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/aws/cloud-practitioner',
        component: ComponentCreator('/docs/aws/cloud-practitioner','cc5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/db/data-architect',
        component: ComponentCreator('/docs/db/data-architect','506'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/db/data-lakes',
        component: ComponentCreator('/docs/db/data-lakes','d8b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/db/data-warehouse',
        component: ComponentCreator('/docs/db/data-warehouse','565'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/db/databases',
        component: ComponentCreator('/docs/db/databases','a7c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/db/sql',
        component: ComponentCreator('/docs/db/sql','92b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/gcp/cloud-digital-leader',
        component: ComponentCreator('/docs/gcp/cloud-digital-leader','c63'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/gcp/cloud-engineer',
        component: ComponentCreator('/docs/gcp/cloud-engineer','b5e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/herramientas/DDD',
        component: ComponentCreator('/docs/herramientas/DDD','ace'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/herramientas/docker',
        component: ComponentCreator('/docs/herramientas/docker','cfc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/herramientas/git',
        component: ComponentCreator('/docs/herramientas/git','88e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/herramientas/jira',
        component: ComponentCreator('/docs/herramientas/jira','4ba'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/herramientas/kubernetes',
        component: ComponentCreator('/docs/herramientas/kubernetes','02a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/herramientas/terraform',
        component: ComponentCreator('/docs/herramientas/terraform','18d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/herramientas/ux',
        component: ComponentCreator('/docs/herramientas/ux','4e4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/lenguajes/dart',
        component: ComponentCreator('/docs/lenguajes/dart','f3c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/lenguajes/flutter',
        component: ComponentCreator('/docs/lenguajes/flutter','c55'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/lenguajes/go',
        component: ComponentCreator('/docs/lenguajes/go','0de'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/lenguajes/js',
        component: ComponentCreator('/docs/lenguajes/js','c27'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
