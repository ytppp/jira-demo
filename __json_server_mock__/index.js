const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get("/echo", (req, res) => {
  res.jsonp(req.query);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "jack" && req.body.password === "123456") {
      return res.status(200).jsonp({
        errno: 0,
        errmsg: "登录成功",
        data: {
          token: "xxx",
          userinfo: {
            username: req.body.username,
          },
        },
      });
    } else {
      return res.status(400).jsonp({
        errno: 400,
        errmsg: "用户名或密码错误",
      });
    }
  }
  next();
});

// Use default router
server.use(router);
server.listen(3001, () => {
  console.log("JSON Server is running");
});
