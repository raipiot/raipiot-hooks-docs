import type { APIRoute } from "astro";
import { faker } from "@faker-js/faker";

const hooks = [
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
  "useThousand",
];

export const GET: APIRoute = ({ params }) => {
  const { name } = params;
  return new Response(
    JSON.stringify({
      description: `This is ${name} hook.${faker.word.words(
        Math.floor(Math.random() * 20)
      )}`,
    })
  );
};

export function getStaticPaths() {
  // return [
  //   { params: { id: "0" } },
  //   { params: { id: "1" } },
  //   { params: { id: "2" } },
  // ];
  return hooks.map((hook) => ({ params: { name: hook } }));
}
