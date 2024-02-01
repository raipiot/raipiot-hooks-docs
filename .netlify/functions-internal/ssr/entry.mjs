import { renderers } from './renderers.mjs';
import { manifest } from './manifest_fcUqulH9.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic__PiE2QRb.mjs');
const _page1 = () => import('./chunks/index_u50VYkuc.mjs');
const _page2 = () => import('./chunks/_name__us7E5McA.mjs');
const _page3 = () => import('./chunks/index_KRgPD02_.mjs');
const _page4 = () => import('./chunks/index_QYdYR5pj.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.2.6_sass@1.70.0_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about/index.md", _page1],
    ["src/pages/api/hookIntro/[name].json.ts", _page2],
    ["src/pages/index.astro", _page3],
    ["src/pages/mdx/index.mdx", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = undefined;
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
serverEntrypointModule.start?.(_manifest, _args);

export { __astrojsSsrVirtualEntry as default, pageMap };
