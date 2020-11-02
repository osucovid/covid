const path = require("path");

module.exports = {
  pages: {
    index: {
      entry: "src/pages/home/main.js", //entry for the public page
      template: "public/index.html", //source template
      title: "Home", //when using the title option, template title
      //needs to be <title><%= htmlWebpackPlugin.options.title %>
      filename: "index.html", //output as dist/index.html
      chunks: ["chunk-vendors", "chunk-common", "index"], //chunks to include
      //on this page, by default includes extracted common chunks and vendor chunks
    },
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // output filename is inferred to be `subpage.html`.
    subpage: "src/pages/subpage/main.js",
    about: {
      entry: "src/pages/about/main.js",
      template: "public/about.html",
      title: "About",
      filename: "signin.html",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    signin: {
      entry: "src/pages/signin/main.js",
      template: "public/signin.html",
      filename: "signin.html",
    },
  },
  outputDir: path.resolve(__dirname, "../server/public"),
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
    historyApiFallback: {
      rewrites: [
        { from: /\/index/, to: "/index.html" },
        { from: /\/signin/, to: "/signin.html" },
      ],
    },
  },
};
