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
  "useThousand"
];
const GET = ({ params }) => {
  const { name } = params;
  return new Response(
    JSON.stringify({
      description: `This is the description for ${name}`
    })
  );
};
function getStaticPaths() {
  return hooks.map((hook) => ({ params: { name: hook } }));
}

export { GET, getStaticPaths };
