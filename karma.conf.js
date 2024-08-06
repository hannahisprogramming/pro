module.exports = function (config) {
    config.set({
        basePath: "",
        frameworks: ["jasmine", "@angular-devkit/build-angular"],
        plugins: [
            require("karma-jasmine"),
            require("karma-chrome-launcher"),
            require("karma-jasmine-html-reporter"),
            require("@angular-devkit/build-angular/plugins/karma"),
        ],
        client: {
            jasmine: {
                // you can add configuration options for Jasmine here
            },
            clearContext: false, // leave Jasmine Spec Runner output visible in browser
        },
        jasmineHtmlReporter: {
            suppressAll: true, // removes the duplicated traces
        },
        coverageReporter: {
            dir: require("path").join(__dirname, "./coverage"),
            subdir: ".",
            reporters: [{ type: "html"}, { type: "lcov"}, { type: "text-summary"}],
            exclude: ["/**/*mock.js"],
        },
        reporters: ["progress", "kjhtml"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["Chrome"],
        singleRun: true,
        restartOnFileChange: true,
        files: ["src/config/config.js"],
    });
}