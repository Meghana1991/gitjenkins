module.exports = {
    "default": {
        "require" : ["steps/**/*.js"],
            "format" : [
                "progress",
                "json:reports/cucumber_report.json",
                "html:reports/cucumber_report.html"
            ],
                "paths": ["features/**/*.feature"],
                    
                "publishQuiet": true
    }
}