import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath( import.meta.url );
const __dirname = dirname( __filename );
const isDevMode = true;

export default {
  entry: {
    home: './src/components/Home/home.ts',
    article: './src/components/Article/article.ts',
  },
  output: {
    // The [contenthash] substitution will add a unique hash based on the content of an asset. When the asset's content changes, [contenthash] will change as well.
    filename: '[name].[contenthash].js',
    path: path.resolve( __dirname, './dist' ),
    // You primarily need publicPath: '/something/' when your compiled assets are served from a different base URL than your main index.html (or other HTML).
    // publicPath: '/static/',
    clean: true,
  },
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve( __dirname, './dist' )
    },
    devMiddleware: {
      index: 'home.html',
      // Webpack DevServer writes in-memory by default. You'll need to enable writeToDisk in order for http-server to be able to serve files from ./dist directory.
      // Without enabling writeToDisk you'll still see the project running but nothing will be served in the dist folder. 
      // writeToDisk: true,
    },
    // To enable Hot Module Replacement without page refresh as a fallback in case of build failures.
    hot: 'only',
    // Tells dev-server to open the browser after server had been started. 
    open: true,
  },
  plugins: [
    // EJS will be considered by default, but the extention '.html' might trigger other loaders, such as 'html-loader', which is why if you are using a template with options
    // (title, meta tags, ...) you might need to comment the rule on 'html-loader'. 
    // Please check out https://github.com/jantimon/html-webpack-plugin/blob/main/docs/template-option.md
    new HtmlWebpackPlugin( {
      filename: 'home.html',
      template: 'src/index.html',
      title: 'Webpack 5 Course',
      chunks: [ 'home' ]
    } ),
    // You can create multiple pages with HtmlWebpackPlugin and include specific chunks.
    // You can get these chunks from the entry points, so here we have 'home' and 'article' chunks, include whatever chunk you need.
    new HtmlWebpackPlugin( {
      filename: 'article.html',
      template: 'src/index.html',
      title: 'Webpack 5 Course | Article',
      chunks: [ 'article' ]
    } ),
  ].concat( isDevMode ? [] : [ new MiniCssExtractPlugin( { filename: '[name].[contenthash].css' } ) ] ),
  module: {
    rules: [
      /*{
        test: /\.html$/i,
        use: "html-loader",
        exclude: /node_modules/,
      },*/
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader"
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // If isDevMode creates `style` nodes from JS strings
          isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  optimization: {
    minimize: true,
    minimizer: [ new TerserPlugin(), new CssMinimizerPlugin() ],
    splitChunks: {
      chunks: 'all',
      minSize: 15000
    }
  },
  mode: isDevMode ? 'development' : 'production',
  // You can set watch mode here as well as in a package command.
  // Check out https://webpack.js.org/api/cli/
  // Un-comment the next line if you care to use watch mode from webpack.config.mjs and use the command 'npm run build' instead of 'npm run dev' to start in watch mode
  // watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: [ '**/node_modules', 'tsconfig.json', 'package.json', 'package-lock.json', '.env' ],
  },
};
