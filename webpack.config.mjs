import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath( import.meta.url );
const __dirname = dirname( __filename );

export default {
  entry: {
    main: './src/scripts/main.ts',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve( __dirname, 'dist' ),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: "html-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [ "style-loader", "css-loader" ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
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
  plugins: [
    new HtmlWebpackPlugin( {
      template: 'src/index.html'
    } ),
  ],
  mode: 'development',
  // You can set watch mode here as well as in a package command.
  // Check out https://webpack.js.org/api/cli/
  // Un-comment the next line if you care to use watch mode from webpack.config.mjs and use the command 'npm run build' instead of 'npm run dev' to start in watch mode
  // watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: [ '**/node_modules', 'tsconfig.json', 'package.json', 'package-lock.json' ],
  },
};
