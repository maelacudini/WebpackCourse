import '../../css/globals.css';
import './home.scss';

function renderHome(): void {
  const container = document.getElementById('content');
  if (!container) {
    // eslint-disable-next-line no-console
    console.error('Container #content not found');
    return;
  }

  container.innerHTML = `
    <section class="section">
      <h2 class="font-xl">Notes</h2>
      <p>Please keep in mind that the following notes were taken from <a
          href="https://webpack.js.org/concepts/"
          target="_blank"
          rel="noopener noreferrer"
        >Concepts</a> section on Webpack's official website.</p>
      <p>For more accurate information please check out <a
          href="https://webpack.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >Webpack</a>'s official website.</p>
    </section>

    <section class="section">
      <h3 class="font-lg">Entry</h3>
      <p>
        An entry point indicates which module webpack should use to begin building out its internal 
        dependency graph. Webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).
        By default its value is ./src/index.js, but you can specify a different (or multiple) entry points by setting an entry property in the webpack configuration.
      </p>
      <code>
        module.exports = {
          entry: './path/to/my/entry/file.js',
        };
      </code>
      <a
        href="https://webpack.js.org/concepts/entry-points"
        target="_blank"
        rel="noopener noreferrer"
      >Learn more about the entry property.</a>
    </section>

    <section class="section">
      <h3 class="font-lg">Output</h3>
      <p>
        The output property tells webpack where to emit the bundles it creates and how to name these files. 
        It defaults to ./dist/main.js for the main output file and to the ./dist folder for any other generated file.
        You can configure this part of the process by specifying an output field in your configuration:
      </p>
      <code>
        output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'my-first-webpack.bundle.js',
        },
      </code>
      <p>
        In the example above, we use the output.filename and the output.path properties to tell webpack the name of our bundle and where we want it to be emitted to. 
        In case you're wondering about the path module being imported at the top, it is a core Node.js module that gets used to manipulate file paths.
      </p>
      <a
        href="https://webpack.js.org/concepts/output"
        target="_blank"
        rel="noopener noreferrer"
      >Learn more about the output property.</a>
    </section>

    <section class="section">
      <h3 class="font-lg">Loaders</h3>
      <p>
        A Loader allows Webpack to process other types of files and convert them into modules that can be included in your application 
        and added to the dependency graph. From the perspective of the program, the loader itself is a 
        JavaScript function, and different loaders are functions that can process different types of files.
        For example, if we want to process .css files, we can use style-loader and css-loader to handle it. 
        Through these two loaders, let Webpack, which only understands JavaScript and JSON, also handle css, so that the .css file can be bundled into the final file.
        Out of the box, webpack only understands JavaScript and JSON files. 
        Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.
        At a high level, loaders have two properties in your webpack configuration: 
        the test property identifies which file or files should be transformed, and the use property indicates which loader should be used to do the transforming.
      </p>
      <code>
        module: {
          rules: [{ test: /.txt$/, use: 'raw-loader' }],
        },
      </code>
      <a
        href="https://webpack.js.org/concepts/loaders"
        target="_blank"
        rel="noopener noreferrer"
      >Learn more about Loaders.</a>
    </section>

    <section class="section">
      <h3 class="font-lg">Plugins</h3>
      <p>
        A Webpack loader is used to convert resources into modules that Webpack can understand, and Webpack plugin is used to extend the functionality of Webpack.
        While loaders are used to transform certain types of modules, 
        plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.
        In order to use a plugin, you need to require() it (or import it on top of the file) 
        and add it to the plugins array. Most plugins are customizable through options. 
        Since you can use a plugin multiple times in a configuration for different purposes, you need to create an instance of it by calling it with the new operator.
        This is an example:
      </p>
      <code>
        plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
      </code>
      <a
        href="https://webpack.js.org/plugins"
        target="_blank"
        rel="noopener noreferrer"
      >List of plugins available.</a>
      <a
        href="https://webpack.js.org/concepts/plugins"
        target="_blank"
        rel="noopener noreferrer"
      >Learn more about Plugins.</a>
    </section>

    <section class="section">
      <h3 class="font-lg">Mode</h3>
      <p>
        By setting the mode parameter to either development, production or none, you can enable webpack's built-in optimizations that correspond to each environment. The default value is production.
      </p>
      <code>
        module.exports = {
          mode: 'production',
        };
      </code>
      <a
        href="https://webpack.js.org/configuration/mode"
        target="_blank"
        rel="noopener noreferrer"
      >Learn more about Mode.</a>
    </section>
  `;
}

export default renderHome;

renderHome();