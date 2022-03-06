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
        "@storybook/addon-essentials",
        "@storybook/addon-actions",
    ],
    "framework": "@storybook/vue3",
    "staticDirs": [
        { from: "../src/assets/images", to: '/assets' },
        { from: "../src/assets/icons", to: '/assets' },
        { from: "../src/assets/fonts", to: '/assets' },
    ],
    "webpackFinal": async (config) => {
        return { ...config, resolve: webpackConfig.resolve, module: { rules: webpackConfig.module.rules } };
    },
}
