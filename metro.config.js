/**
* Metro configuration for React Native, with Svg support.
*
* @see https://facebook.github.io/metro/docs/configuration
*/

const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
const {
resolver: { assetExts, sourceExts },
} = await getDefaultConfig();

return {
resetCache: true,
resolver: {
assetExts: assetExts.filter(ext => ext !== 'svg'),
sourceExts: [...sourceExts, 'svg'],
},
transformer: {
babelTransformerPath: require.resolve('react-native-svg-transformer'),
getTransformOptions: async () => ({
transform: {
experimentalImportSupport: false,
inlineRequires: true,
},
}),
},
};
})();