const http = require("http");
const fs = require("fs");
const URL = require("url");
const HandleBars = require("handlebars");

const html = {
    render(path, res) {
        fs.readFile(path, (err, data) => {
            res.write(data);
            res.end();
        });
    },
};

const Router = {
    handleRoutes(req, res) {
        const{pathname, search} = URL.parse(req.url);
        const query = new URLSearchParams(search);
        switch (url) {
            case "/users":
                html.render("index.html", res);
                break;
            default:
                html.render("./404.html", res);
                break;
        }
    }
}
const server = http.createServer(Router.handleRoutes)
server.listen(8000);
