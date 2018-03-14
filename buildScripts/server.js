import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';   

const port = 3000;
const app = express();
const compiler = webpack(config);

app.listen(port, function(error){
    if (error) {
        console.log(error);
    }else{
        // open("http://localhost:{port}");
    }
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));