import type { APIRoute } from "astro";

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

export const GET: APIRoute = ({ params, request }) => {
  const { name } = params;
  return new Response(
    JSON.stringify({
      description: `This is the description for ${name}`,
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
