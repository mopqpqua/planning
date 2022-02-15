const webpackConfig = require('../webpack.config.js');

module.exports = {
    "core": {
        "builder": "webpack5",
    },
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials"
    ],
    "framework": "@storybook/vue3",
    "webpackFinal": async (config) => {
        return { ...config, resolve: webpackConfig.resolve, module: { rules: webpackConfig.module.rules } };
    },
}
