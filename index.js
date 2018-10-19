module.exports = function ({ types: t }, options) {
  const include = options.include || []

  return {
    visitor: {
      ArrowFunctionExpression (path) {
        const body = path.node.body
        if (body.type === 'CallExpression' && body.callee.type === 'Import') {
          const value = path.node.body.arguments[0].value

          let isInclude = false

          include.forEach(v => value.indexOf(v) >= 0 && (isInclude = true))

          !isInclude && path.replaceWithSourceString(`{ template: '<h1 id="replace-vue-async-router-babel-plugin">Replace Async Router Module: ${value}</h1>' }`)
        }
      }
    }
  }
}
