let mix = require("laravel-mix");

// Compile modern JavaScript and copy index.html / assets
mix.js("src/index.js", "index.js").react().setPublicPath("dist");
mix.copy("index.html", "dist/index.html");
mix.copy("src/assets/images", "dist/images");

// Disable success notifications
mix.disableSuccessNotifications();
