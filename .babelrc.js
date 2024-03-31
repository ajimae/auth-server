// {
//   "presets": [
//     "@babel/preset-env"
//   ],
//   "plugins": [
//     [
//       "@babel/transform-runtime"
//     ]
//   ]
// }
const plugins = () => {
  const defaultPlugins = [
    [
      "@babel/plugin-transform-runtime",
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false,
        version: "7.0.0-beta.0",
      },
    ],
    [
      "module-resolver",
      {
        cwd: "babelrc",
        alias: {
          // test: "./src/test",
          // app: "./src/app",
          // base: "./src/base",
          // domain: "./src/domain",
          // infra: "./src/infra",
          // config: "./src/config",
          // interfaces: "./src/interfaces",
          // script: "./src/script",
          // views: "./src/app",
          // validators: "./src/interfaces/http/validators",
          // routes: "./src/interfaces/http/routes",
          src: "./src",
        },
      },
    ],
  ];

  if (process.env.NODE_ENV !== "development") {
    defaultPlugins.push(["transform-remove-console"]);
  }

  return defaultPlugins;
};

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "12.18.3",
        },
      },
    ],
  ],
  plugins: plugins(),
};
