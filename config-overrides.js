module.exports = {
    webpack: (config) => {
      config.module.rules.find(k => k.oneOf !== undefined).oneOf.unshift(
        {
          test: /\.wasm$/,
          type: "javascript/auto",
          loader: "file-loader",
          options: {
            name: "static/js/[name].[contenthash:8].[ext]",
          },
        }
      );
      return config;
    },
  };