'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4fc831fb5d35df1bc76a67d8a3540f00",
"assets/AssetManifest.bin.json": "d0ddfad7378f7ccc5dd2418074419756",
"assets/AssetManifest.json": "d27f9a0eb54d50baada39a28351e9ddb",
"assets/assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/icons/apple.svg": "0c0e528a1980d271f2eeeb9cda281d09",
"assets/assets/icons/back.svg": "e888ceb0d7b4b5adbcb08ddc3427788d",
"assets/assets/icons/bag.svg": "826f837ccbc7c8c1ca090f83bee4d97a",
"assets/assets/icons/bag_filled.svg": "46cdacbb0a78dd3cb7a36c3b31a2cd60",
"assets/assets/icons/bell.svg": "fa9f40930706b9bcb81a47e5470fb804",
"assets/assets/icons/cap.svg": "e8ebca8c3ff2b7a170beab01928bc803",
"assets/assets/icons/card.svg": "46d770a0ce3fe9b447e6a14970be6221",
"assets/assets/icons/chat.svg": "4277732e4126458371bfe7817987410d",
"assets/assets/icons/customer_service.svg": "605cdb74059a541487c1a2fc060a6437",
"assets/assets/icons/dark_mode.svg": "95b4462e9819ca2be5fdda845fc8e79b",
"assets/assets/icons/delete_account.svg": "6c6237210bc8cd4543f3897392c36d20",
"assets/assets/icons/delivered.svg": "bf52a4ff012ae402b420b592df3d23f0",
"assets/assets/icons/dress.svg": "9f667d7c36bbef5640e1d79105d60ee8",
"assets/assets/icons/dress2.svg": "92c98aff0b162d77986d6f7f87e585a2",
"assets/assets/icons/facebook.svg": "b16d4798a9c0f65ff3a7b12270cd7f7d",
"assets/assets/icons/facebook_contact.svg": "eea4bfcb09a5cd2dc9d69ad68f80175a",
"assets/assets/icons/filter.svg": "f888311624e03b475e2a1fc896be0502",
"assets/assets/icons/flash.svg": "29b24171e1277b7e6e88fbbe28bb6b1a",
"assets/assets/icons/google.svg": "af89e162738e95f20e41f175cf1e930e",
"assets/assets/icons/heart.svg": "81c67083a4971760e0cf2cad541265ca",
"assets/assets/icons/heart_filled.svg": "da67b094fa6d9bcb7a869a72fe9afb80",
"assets/assets/icons/heart_red_filled.svg": "939b397245d418c206c674e075976295",
"assets/assets/icons/help.svg": "152171be4296748bb8c3347e8b930575",
"assets/assets/icons/home.svg": "4a2933c46acf4620eb8977bc34feb166",
"assets/assets/icons/images.jpeg": "67eefd5128381a9c1e58b92a23f7c5b1",
"assets/assets/icons/images.png": "f2334c064efe7935441e551e93e451c0",
"assets/assets/icons/instagram.svg": "5a6cc875ea4415107ba391cadaca835e",
"assets/assets/icons/invite.svg": "57d9e0e6095cc6fdb3f4d4f3e401ad32",
"assets/assets/icons/jacket.svg": "df7e72797ff73bb4d73c472effaa6b70",
"assets/assets/icons/jeans.svg": "284953b4315ac5521e8e2c2d2ac7d5dd",
"assets/assets/icons/location.svg": "3721a8e05425234f7e3190b7145c50a4",
"assets/assets/icons/logout.svg": "c40e9b71f3e0dcdd9df4df03aac6e37d",
"assets/assets/icons/moniepoint.svg": "fd35dbde327d95898508fd9831be29b5",
"assets/assets/icons/notification.svg": "28e82d95139d0ba6fb134d7198546165",
"assets/assets/icons/numbers-sequence-verification-symbol-svgrepo-com.svg": "a868088d5605cf6481a13c010bd9cc2f",
"assets/assets/icons/numbers.svg": "a868088d5605cf6481a13c010bd9cc2f",
"assets/assets/icons/opay.svg": "9ddf959c01cda4a241a2c112ad50bcc8",
"assets/assets/icons/order.svg": "1daba79ac01cb88cbef12f80a14d4384",
"assets/assets/icons/password.svg": "1fd72c105f6f62f737af2621d3a6655e",
"assets/assets/icons/paypal.svg": "94c06084c61b1404ec89de9d6eac64d5",
"assets/assets/icons/privacy.svg": "a39a3741ee77eb002b3f1cf8fbccb3e3",
"assets/assets/icons/profile.svg": "9b004e9b9676c6d193cd66119c4c1540",
"assets/assets/icons/progress.svg": "5663be662a7c3f4b03a8d344eabcd3be",
"assets/assets/icons/search.svg": "cfa277af675a53673f31608017f879ec",
"assets/assets/icons/seed.svg": "f0722cc584b77f34f8f179832891056b",
"assets/assets/icons/settings.svg": "cde9463c5008a6273825a91d149fd3d8",
"assets/assets/icons/shipped.svg": "b832863ca346f12b94d29f8175dfa030",
"assets/assets/icons/shirt.svg": "54ba742c8256e5d7d108b576a6462910",
"assets/assets/icons/shoe.svg": "bd48161a2f6c20fdd55a6b0fcee8c329",
"assets/assets/icons/stanbic.svg": "4c0c477baa5c3231fe76044a0f2ea84b",
"assets/assets/icons/star.svg": "66784388e414fe76ef88e127cf6bfe69",
"assets/assets/icons/website.svg": "6aafdbdb0895d085053901a8ec2c5015",
"assets/assets/icons/whatsapp.svg": "17eaf2ff846018390118da447ed51f82",
"assets/assets/icons/x.svg": "487b96d315089fbc2b32d21923d8ef14",
"assets/assets/icons/your_profile.svg": "fbce8d3909d28583e83f1bacd3196dcf",
"assets/assets/images/lady_w_coat.jpeg": "9d49766fb439b85e9eeb8aa135dbe250",
"assets/assets/images/logo.png": "19199d8b32467936897445ef102db9ae",
"assets/assets/images/logo_foreground.png": "a1b4f801877363382ac755028b3e1b2c",
"assets/assets/images/man.jpeg": "d6e94261786d491d23327814e6226823",
"assets/assets/images/man_w_coat.jpeg": "9ba76c930ca87df46400c60ffb69aff4",
"assets/assets/images/profilepic.jpeg": "c83ddb4ff185e4454de893f04facbe04",
"assets/FontManifest.json": "3481b4726dd36eef346cf6b9da30880d",
"assets/fonts/MaterialIcons-Regular.otf": "8cef55c58703dd1cf59bf14d766e41d3",
"assets/NOTICES": "32e9629267dc658b1e01a64c517aa782",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a7a57cd1f61d236970f6adf5cf508855",
"/": "a7a57cd1f61d236970f6adf5cf508855",
"main.dart.js": "86f7a114cadb665a2506bdf043bacb99",
"manifest.json": "f0e7e00af39469032dc2c49bdadec8b2",
"version.json": "8af0e22fd9d37417376f3bacba4cce4b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
