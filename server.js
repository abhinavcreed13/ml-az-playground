const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5000;

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* Use cors and fileUpload*/
app.use(cors());
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/api/upload', (req, res, next) => {
    console.log(req);
    let imageFile = req.files.file;

    imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
        if (err) {
            return res.status(500).send(err);
        }

        res.json({file: `public/${req.body.filename}.jpg`});
    });

});

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;