const Dotenv = require('dotenv-webpack')

;(module.exports = {
  plugins: [new Dotenv()],
}),
  {
    test: /\.(png|jp(e*)g|svg|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'images/[hash]-[name].[ext]',
        },
      },
    ],
  }
