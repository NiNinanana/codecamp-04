module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "nanana-1",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};
