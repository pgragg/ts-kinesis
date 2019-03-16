"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = (app) => {
    const oidc = app.locals.oidc;
    // define a route handler for the default home page
    app.get("/", (req, res) => {
        const user = req.userContext ? req.userContext.userInfo : null;
        res.render("index", { isAuthenticated: req.isAuthenticated(), user });
    });
    // define a secure route handler for the login page
    app.get("/login", oidc.ensureAuthenticated(), (req, res) => {
        res.redirect("/guitars");
    });
    // define a route to handle logout
    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });
    // define a secure route handler for the guitars page
    app.get("/guitars", oidc.ensureAuthenticated(), (req, res) => {
        const user = req.userContext ? req.userContext.userInfo : null;
        res.render("guitars", { isAuthenticated: req.isAuthenticated(), user });
    });
};
//# sourceMappingURL=index.js.map