import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute, j as renderHead, k as renderComponent, l as renderSlot } from '../astro_VbLzIqJi.mjs';
import { C as CSS } from '../index.6fa913a4_T04t-8tY.mjs';

const $$Astro$5 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.url;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-between sm:p-8 p-4 sm:px-12"> <div class="flex flex-col gap-1 items-center"> <h1 class="text-3xl font-bold animate-rotate-x">Raipiot</h1> <p class="text-sm opacity-70 hover:opacity-100 transition-opacity">React Hooks Doc</p> </div> <nav${addAttribute(`${CSS.header_nav} flex gap-4`, "class")}> <div class="relative"> <a${addAttribute(pathname === "/" ? "!text-sky-500" : "hover:text-sky-400", "class")} href="/">Home</a> </div> <div class="relative"> <a${addAttribute(pathname === "/github" ? "!text-sky-500" : "hover:text-sky-400", "class")} href="/mdx">Docs</a> </div> <div class="relative"> <a${addAttribute(pathname === "/contact" ? "!text-sky-500" : "hover:text-sky-400", "class")} href="/github">GitHub</a> </div> </nav> </div>`;
}, "/Users/aaron/repos/raipiot/raipiot-hooks/src/components/Header/Header.astro", void 0);

const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Raipiot team: react hooks examples"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/aaron/repos/raipiot/raipiot-hooks/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$ScrollItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ScrollItem;
  const items = [
    "useClickAway",
    "useQuery",
    "useOnce",
    "useMap",
    "useDefault",
    "useFavicon",
    "useTool",
    "useTitle",
    "useToggle",
    "useTimeout",
    "useThrottle",
    "useThousand",
    "useThousand",
    "useThousand",
    "useTheme",
    "useThrottleFn",
    "useThousand",
    "useThousand",
    "useThousand",
    "useThousand",
    "useThousand",
    "useClickAway",
    "useQuery",
    "useOnce",
    "useMap",
    "useDefault",
    "useFavicon",
    "useTool",
    "useTitle",
    "useToggle",
    "useTimeout",
    "useThrottle",
    "useThousand",
    "useThousand",
    "useThousand",
    "useTheme",
    "useThrottleFn",
    "useThousand",
    "useThousand",
    "useThousand",
    "useThousand",
    "useThousand"
  ];
  return renderTemplate`${maybeRenderHead()}<div class="px-4 py-16 max-w-[1220px] mx-auto flex flex-col gap-8" id="scroll-items"> <div class="w-full overflow-hidden flex flex-unwrap"> <ul class="flex items-center gap-4 animate-scrollLoop hover:animate-pause"> ${items.filter((_, i) => i % 2 !== 0).map((item) => renderTemplate`<li class="cursor-pointer inline-block p-1 px-2 rounded-md bg-sky-700 border-b-4 border-sky-400"> <a${addAttribute(`/hooks/${item}`, "href")}>${item}</a> </li>`)} </ul> <ul class="flex items-center w-full overflow-hidden gap-4 animate-scrollLoop"> ${items.filter((_, i) => i % 2 !== 0).map((item) => renderTemplate`<li class="cursor-pointer inline-block p-1 px-2 rounded-md bg-sky-700 border-b-4 border-sky-400"> <a${addAttribute(`/hooks/${item}`, "href")}>${item}</a> </li>`)} </ul> </div> <div class="w-full overflow-hidden flex flex-unwrap"> <ul class="flex items-center gap-4 animate-scrollLoop animate-reverse hover:animate-pause"> ${items.reverse().filter((_, i) => i % 2 === 0).map((item) => renderTemplate`<li class="cursor-pointer inline-block p-1 px-2 rounded-md bg-sky-700 border-b-4 border-sky-400"> <a${addAttribute(`/hooks/${item}`, "href")}>${item}</a> </li>`)} </ul> <ul class="flex items-center w-full overflow-hidden gap-4 animate-reverse animate-scrollLoop"> ${items.reverse().filter((_, i) => i % 2 === 0).map((item) => renderTemplate`<li class="cursor-pointer inline-block p-1 px-2 rounded-md bg-sky-700 border-b-4 border-sky-400"> <a${addAttribute(`/hooks/${item}`, "href")}>${item}</a> </li>`)} </ul> </div> </div> `;
}, "/Users/aaron/repos/raipiot/raipiot-hooks/src/components/Homepage/ScrollItem/ScrollItem.astro", void 0);

const CodeGay = new Proxy({"src":"/_astro/code-gay.-P-rAhDF.svg","width":850.53801,"height":740.82953,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aaron/repos/raipiot/raipiot-hooks/src/assets/images/code-gay.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$Introduction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Introduction;
  return renderTemplate`${maybeRenderHead()}<div class="px-4 py-16 max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[450px_auto]"> <div class="px-4 sm:px-8"> <div class="text-5xl mb-8">
Make React development easier with common <span class="text-sky-500 font-bold">react hooks</span> </div> <div class="text-gray-200">
Continuously refine reusable React hooks code and extract common logic,
      making it easier for developers to write React Hooks
</div> <div class="my-12 flex justify-center sm:float-end group relative overflow-hidden"> <div class="text-white rounded-tl-[18px] border-b-[3px] border-b-transparent flex items-center gap-2 rounded-br-xl text-md bg-sky-500 p-2.5 md:px-4 text-[var(--r-theme)] hover:scale-100 transition-all"> <span class="text-gray-100 zpix font-bold">$</span> <span class="sm:pr-4">pnpm install @raipiot/reactHooks</span> ${renderComponent($$result, "CopyIcon", null, { "client:only": "react", "copyString": "pnpm install @raipiot/reactHooks", "holdTime": 1233, "client:component-hydration": "only", "client:component-path": "~/components/CopyIcon/CopyIcon.tsx", "client:component-export": "default" })} </div> <div class="block rounded-br-xl group-hover:inline-block w-[99%] h-1 absolute bottom-0 left-0 group-hover:h-2 group-hover:w-full transition-all bg-sky-700"></div> </div> </div> <div class="flex items-center justify-center my-8 sm:my-0"> <img${addAttribute(CodeGay.src, "src")} alt="a code gay" class="w-[300px] md:w-[320px] lg:w-[400px] animate-verticalLoop hover:animate-pause"> </div> </div>`;
}, "/Users/aaron/repos/raipiot/raipiot-hooks/src/components/Homepage/Introduction/Introduction.astro", void 0);

const $$Astro$1 = createAstro();
const $$Hooks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hooks;
  const items = [
    "useClickAway",
    "useQuery",
    "useOnce",
    "useMap",
    "useDefault",
    "useFavicon",
    "useTool",
    "useTitle",
    "useToggle",
    "useTimeout",
    "useThrottle",
    "useThousand",
    "useThousand",
    "useThousand",
    "useTheme",
    "useThrottleFn",
    "useThousand",
    "useThousand",
    "useThousand",
    "useThousand",
    "useThousand",
    "useClickAway",
    "useQuery",
    "useOnce",
    "useMap",
    "useDefault",
    "useFavicon",
    "useTool",
    "useTitle",
    "useToggle",
    "useTimeout",
    "useThrottle",
    "useThousand",
    "useThousand",
    "useThousand",
    "useTheme",
    "useThrottleFn",
    "useThousand",
    "useThousand",
    "useThousand",
    "useThousand",
    "useThousand"
  ];
  return renderTemplate`${maybeRenderHead()}<div class="p-4 max-w-[1200px] mx-auto waterfall-container"> ${items.map((item) => renderTemplate`<div${addAttribute(`flex flex-col text-[var(--r-theme)] bg-gray-100 rounded-lg p-4 mb-8`, "class")}> <div class="mg-6">${item}</div> <div> ${`Track and manage the visibility of your DOM elements within the viewport with
          uselntersectionObserver.`.slice(0, Math.random() * 100)} </div> </div>`)} </div> `;
}, "/Users/aaron/repos/raipiot/raipiot-hooks/src/components/Homepage/Hooks/Hooks.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Raipiot React hooks doc center." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Introduction", $$Introduction, {})} ${renderComponent($$result2, "ScrollItems", $$ScrollItem, {})} ${renderComponent($$result2, "Hooks", $$Hooks, {})} ` })}`;
}, "/Users/aaron/repos/raipiot/raipiot-hooks/src/pages/index.astro", void 0);

const $$file = "/Users/aaron/repos/raipiot/raipiot-hooks/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, index as i };
