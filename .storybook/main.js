const path = require('path')
const webpack = require('webpack')
const fs = require('fs')

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    /** Expose public folder to storybook as static */
    staticDirs: ['../public'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        {
            /**
             * Fix Storybook issue with PostCSS@8
             * https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
             */
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    core: {
        builder: 'webpack5',
    },
    webpackFinal: (config) => {
        /**
         * Add support for alias-imports
         * https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
         */
        config.resolve.alias = {
            ...config.resolve?.alias,
            '@': [
                path.resolve(__dirname, '../src/'),
                path.resolve(__dirname, '../'),
            ],
        }

        /**
         * Fixes font import with /
         * https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
         */
        config.resolve.roots = [
            path.resolve(__dirname, '../public'),
            'node_modules',
        ]

        // adding a way to easily get the collection of pages
        let arr = []
        let dirPath = path.resolve(__dirname, '../src/components/icons')
        fs.readdirSync(dirPath).forEach((file) => {
            const filePath = path.join(dirPath, file)
            const fileExtension = path.extname(filePath)
            const filename = path.basename(filePath, fileExtension)
            arr.push(filename)
        })

        config.plugins = [
            ...config.plugins.filter((plugin) => !plugin.definitions),

            new webpack.ProvidePlugin({
                process: 'process/browser',
            }),

            new webpack.DefinePlugin({
                _feConfigBreakpoints_: JSON.stringify(arr),
            }),
        ]

        return config
    },
}
