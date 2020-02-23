module.exports = {
    presets: [
        '@babel/preset-flow',
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 12,
                },
                useBuiltIns: 'usage',
                corejs: 3,
            },
        ],
    ],
};
