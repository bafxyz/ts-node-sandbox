const path = require('path')
const { resolve, join } = path
const fs = require('fs')
const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => resolve(appDirectory, relativePath)
const appSrc = resolveApp('src')
const appBuild = resolveApp('dist')
const appPublic = resolveApp('public')
const paths = {
    appDirectory,
    appSrc,
    appBuild,
    appPublic,
    appNodeModules: resolveApp('node_modules'),
    appHtml: join(appPublic, 'index.html'),
    appIndexJs: join(appSrc, 'index.tsx'),
    appFavicon: join(appPublic, 'favicon.ico')
}

module.exports = paths
