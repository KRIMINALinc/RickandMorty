const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const CopyWebpackPlugin = require ('copy-webpack-plugin')

module.exports={
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

resolve:{
    extensions:['.js']
},

module: {
    rules: [
        {
            test: /\.js?$/, //Reject
            exclude: /node_modules/, //Excluir la carpeta de node_modules
            use: { //indicar que se va a utilizar una configuracion prestablecida
                loader: 'babel-loader'
            }
        }
    ]
},

plugins: [
    new HtmlWebpackPlugin({ // se establece el template principal
        inject: true,
        template: './public/index.html',
        filename: './index.html',
    }
    ),
    
    new CopyWebpackPlugin([
        {
            from: './src/styles/styles.css',
            to: ''
        }
    ]),
    new CopyWebpackPlugin([
        {
            from: './src/images',
            to: 'src/images/'
        }
    ]),
]
    



}

