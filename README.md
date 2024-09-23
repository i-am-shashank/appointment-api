## Steps to run locally
1. Node version: 22.5.1 or later
2. clone repo and run command `npm i`
3. create a .env file and add the values to following secret variables

set up dummy email and password for admin portal login:  
`ADMIN_EMAIL = "admin@example.com"
ADMIN_PASSWORD = "password"`

#### MongoDB Setup ( required )
MONGODB_URI = "<url_goes_here>"

#### Cloudinary Setup ( required )
CLOUDINARY_NAME = "<cloud_name>"
CLOUDINARY_API_KEY = "<your_API-key>"
CLOUDINARY_SECRET_KEY = "<cloudinary_secret>"

4. run command `npm run server`
5. You are good to go if you see below message on your terminal
 - Server started on PORT:4000
 - Database Connected
