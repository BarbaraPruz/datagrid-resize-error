# Description
Sample app demonstrating ResizeObserver loop error

# Instructions
1. Install packages: ```npm i```
2. Run app: ```npm run start```
3. In browser notice the following:
    - resizing Project Status column generates error
    - resizing other columns does not generate error

# More info
- problem does not occur with production build
- in src/components/designTable, the DataGrid is rendered. Removing the prop