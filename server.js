const app = require("./app");
const config = require("./app/config");

const port = config.app.port;
app.listen(PORT, () => {
    console.log('Server is running at port ${PORT}.');
});