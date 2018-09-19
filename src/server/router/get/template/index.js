import config from '../../../config/global'
import {
  version
} from '../../../../../package.json'

let cssFile = ''
const useWebpackDevServer = config.devAssets

if (!useWebpackDevServer) {
  cssFile = `<link media="all" rel="stylesheet" href="${config.assetPath}/app.${version}.bundle.css" />`
}
export default function renderHtml(helmet, reactApp, state) {
  return (`
    <!DOCTYPE html>
        <html style='height:100%'>
        <head>
            ${cssFile}
           ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
            <link rel="stylesheet" href="/bootstrap/dist/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">
        </head>
        <body style='height:100%'>
            <div id="app" style='height:100%'>${reactApp}</div>
            <script>
              window.clientState = {
                  state: ${JSON.stringify(state)}
              }
            </script>
              <script>
                if(!window.Promise || !window.Symbol) {
                  document.write('<script src="${config.assetPath}/polyfills.${version}.bundle.js"><\\/script>')
                }
              </script>
              <script src="${config.assetPath}/app.${version}.bundle.js" defer></script>
            </body>
        </html>
        `)
}
