import path from 'path'

export function routeSwitch(filePath) {
  return (req, res, next) => {
    if (req.path.startsWith('/api')) {
      next()
      return
    }

    return res.sendFile(path.join(filePath, 'dist', 'index.html'))
  }
}