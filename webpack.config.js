module.exports = {
    mode: "development",
    context: __dirname + "/src",
    entry: {
        app: "./main.js"
    },
    output: {
        path: __dirname + '/dist', // 번들 파일 폴더
        filename: 'noble.bundle.js', // 번들 파일 폴더
        library: {
            type: 'umd',
            name: 'Noble',
        },
        globalObject: 'this', // prevent error: `Uncaught ReferenceError: self is not define`
    }
}