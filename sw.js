/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
importScripts('workbox-sw.dev.v2.0.0.js');

const workboxSW = new WorkboxSW();
workboxSW.precache([
  {
    "url": "css/icomoon.css",
    "revision": "9cc9809bea21e099ba0fa36fc98f424d"
  },
  {
    "url": "css/normalize.css",
    "revision": "26daf76033e24def81e77c4b26ec2dde"
  },
  {
    "url": "css/style.css",
    "revision": "f88545d04aaf9b5e0880c268c5379ef9"
  },
  {
    "url": "fonts/icomoon/icomoon/demo-files/demo.css",
    "revision": "ec96206e55d893bc8b2caabe78062d86"
  },
  {
    "url": "fonts/icomoon/icomoon/style.css",
    "revision": "4a9c1038b46673ded57388cd0ab1e4ac"
  },
  {
    "url": "index.html",
    "revision": "73c10108171e8a866d040718a90d8dd9"
  },
  {
    "url": "pages/404.html",
    "revision": "5036e9103bad2bfbcb003f08098dd3d2"
  },
  {
    "url": "pages/offline.html",
    "revision": "02ae85ef0122eddce8f46f001948bfd2"
  },
  {
    "url": "/",
    "revision": "7d72e7220b52d9cbd032eec1b3363d33"
  }
]);

workboxSW.router.registerRoute('https://fonts.googleapis.com/(.*)',
  workboxSW.strategies.cacheFirst({
    cacheName: 'googleapis',
    cacheExpiration: {
      maxEntries: 20
    },
    cacheableResponse: {statuses: [0, 200]}
  })
);

workboxSW.router.registerRoute(/\.(?:png|gif|jpg)$/,
  workboxSW.strategies.cacheFirst({
    cacheName: 'images-cache',
    cacheExpiration: {
      maxEntries: 50
    }
  })
);