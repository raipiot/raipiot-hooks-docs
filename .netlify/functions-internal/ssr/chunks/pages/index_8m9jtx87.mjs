import { _ as __astro_tag_component__, F as Fragment, n as createVNode } from '../astro_VbLzIqJi.mjs';
import { $ as $$Image } from './generic_DFz1bVKz.mjs';

const frontmatter = {
  "title": "Hello, World"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "hi-there",
    "text": "Hi there!"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "hi-there",
      children: "Hi there!"
    }), "\n", createVNode(_components.p, {
      children: ["This Markdown file creates a page at ", createVNode(_components.code, {
        children: "your-domain.com/page-1/"
      })]
    }), "\n", createVNode(_components.p, {
      children: "It probably isn\u2019t styled much, but Markdown does support:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "bold"
        }), " and ", createVNode(_components.em, {
          children: "italics."
        })]
      }), "\n", createVNode(_components.li, {
        children: "lists"
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://astro.build",
          children: "links"
        })
      }), "\n", createVNode(_components.li, {
        children: "and more!"
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/mdx";
const file = "/Users/aaron/repos/raipiot/raipiot-hooks/src/pages/mdx/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aaron/repos/raipiot/raipiot-hooks/src/pages/mdx/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
