/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/workfront-apis/',
  siteMetadata: {
    pages: [
      {
        title: 'Workfront APIs',
        path: '/'
      },
      {
        title: 'General Guides',
        path: '/guides/'
      },
      {
        title: 'API Reference',
        menu: [
          {
            title: 'Accessing Workfront APIs',
            description: 'Accessing Workfront APIs',
            path: '/api/index.md'
          },
          {
            title: 'Cat Reference v1.4',
            description: 'Cat API Spec',
            path: '/api/1.4.md'
          }
        ]
      }
    ],
    subPages: [
      {
        title: 'General Guides',
        path: '/guides/',
        pages: [
          {
            title: 'Creating API Credentials',
            path: '/guides/gaining_access/'
          },
          {
            title: 'Workfront API Domains',
            path: 'https://experienceleague.adobe.com/en/docs/workfront/using/adobe-workfront-api/tips-troubleshooting-apis/locate-domain-for-api'
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`]
};
