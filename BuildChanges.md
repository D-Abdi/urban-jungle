# Changes to make before building!

1. Change ```<base href="/">``` to href="/2020_2021/cmgt_tle34_t3/" in public/index.html 
2. Change paths in the .tsx files of the models, *located in /components/presentational/tsxModels*
3. Add  ```"homepage": "https://project.cmi.hro.nl/2020_2021/cmgt_tle34_t3/",``` to package.json
4. Move .cert/ directory to public/
5. Change to "start" in package.json to ```"start": "set HTTPS=true SSL_CRT_FILE=.cert/cert.pem SSL_KEY_FILE=.cert/key.pem&&react-scripts start"```
6. When opening the website make sure you open **https://** and not **http://** or the AR won't work