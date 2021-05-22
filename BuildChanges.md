# Changes to make before building!

1. Change paths in the .tsx files of the models, *located in /components/presentational/tsxModels*
2. Add  ```"homepage": "https://project.cmi.hro.nl/2020_2021/cmgt_tle34_t3/",``` to package.json
3. Move .cert/ directory to public/
4. Change to "start" in package.json to ```"start": "set HTTPS=true SSL_CRT_FILE=.cert/cert.pem SSL_KEY_FILE=.cert/key.pem&&react-scripts start"```
5. When opening the website make sure you open **https://** and not **http://** or the AR won't work