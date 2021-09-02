module.exports = function override(config, env) {
    const wasmExtensionRegExp = /\.wasm$/;
    config.module.rules.push({
        test: wasmExtensionRegExp,
        type: "javascript/auto",
        loader: "file-loader",
    });

    return config;
};