const express = require('express');

// Tells node that we are creating an "express" server
const app = express();

const PORT = process.env.PORT || 8080;
//handles form submissions
app.use(express.urlencoded({ extended: true }));
//Body Parser middleware, allows us to use raw json
app.use(express.json());
app.use(express.static("public"));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//starts up the server
app.listen(PORT, () =>  console.log(`App listening on PORT: ${PORT}`));