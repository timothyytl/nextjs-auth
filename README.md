This is my customized Nextjs 14 App Router boilerplate to build web applications with the following basic features:

- Navbar section
- Navbar links with active paths
- Login and Logout buttons
- Footer section

## Application Structure

This Nextjs boilerplate folder structure includes the src folder to house the app folder and its contents for better organization.

The reason for the src folder structure is because it makes better sense to allow the app folder to contain solely the routes/url paths and the src folder to contain all the other miscellaneous files and folders such as components, data, lib/utils folder, etc..

Special files:

- loading.jsx, not-found.jsx, and error.jsx are components that can be imported into any route folder to manage special rendering conditions.

- All the components' styling are managed mostly by their respective .module.css files
