import { f as createComponent, r as renderTemplate, k as renderComponent, u as unescapeHTML } from '../astro_VbLzIqJi.mjs';
import { $ as $$Layout } from './index_MQmfzpzd.mjs';

const html = "<h2 id=\"introduction\">Introduction</h2>\n<p>I can link internally to <a href=\"#conclusion\">my conclusion</a> on the same page when writing Markdown.</p>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>I can use the URL <code>https://example.com/page-1/#introduction</code> to navigate directly to my Introduction on the page.</p>";

				const frontmatter = {"title":"My page of content","layout":"~/layouts/Layout.astro"};
				const file = "/Users/aaron/repos/raipiot/raipiot-hooks/src/pages/about/index.md";
				const url = "/about";
				function rawContent() {
					return "## Introduction\n\nI can link internally to [my conclusion](#conclusion) on the same page when writing Markdown.\n\n\n## Conclusion\n\nI can use the URL `https://example.com/page-1/#introduction` to navigate directly to my Introduction on the page.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"introduction","text":"Introduction"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Layout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
