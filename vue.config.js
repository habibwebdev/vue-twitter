module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "@/styles/base.scss";'
            }
        }
    }
}

// In order to work above configrations for base.scss file, restart your server and it will take effect in the next run.