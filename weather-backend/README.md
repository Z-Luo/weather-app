# Description

Backend API for weather app folder structure

app(application)

- config
- controller (handle req and res)
- middleware (filter req and res and return status code)
- routes (entry point of application)
- services (business)
- validation (validate request)
- model

loaders(init the application)

- express.js
- index.js
- mongoose.js

.gitignore(file do not commit to git)
index.js(entry)
package.json(manage packages)

---

# flow of app

init workflow
index.js -> loaders/index.js -> express.js -> mongoose.js

api
routes -> middleware -> validation -> controller -> service -> model
