module.exports = function ({ types: t }, options) {
  const include = options.include || []

  return {
    visitor: {
      ArrowFunctionExpression (path) {
        if (path.node.id.name === 'component') {
          const value = path.node.body.arguments[0].value

          let isInclude = false

          include.forEach(v => value.indexOf(include) >= 0 && (isInclude = true))

          !isInclude && path.replaceWithSourceString(`{ template: '<p>Replace Async Router Module: ${value}</p>' }`)
        }
      }
    }
  }
}
