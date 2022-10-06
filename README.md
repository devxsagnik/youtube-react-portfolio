# Portfolio for All
This is a personal portfolio website made using <b>React.js</b> & <b>tailwind CSS.</b>
If you want to edit this. Clone this project and edit the files in `/src/components`.<br />
To run this on localhost
type `npm run dev` and when u are done coding type `npm run build` to build your app.

_NOTE: if you have yarn just replace `npm start` and `npm run build` with `yarn start` and `yarn build`._

• If you like this, please consider forking and leave a star to the repository..  

### How to enable contact form email forwarding

- Create a account in [emailjs](https://www.emailjs.com/) create also new Outlook or Gmail account to be able
  to send email.
- Create a new service, select and log in to your newly created outlook or gmail account on EmailJS.
- Go back to the dashboard and get the Service ID copy it.
- Create a .env file in your root folder and put it

```
EMAILJS_USER_ID = 'YOUR_USER_ID'
EMAILJS_TEMPLATE_ID = 'template_blablabla'
EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
```

into it. Replace \*your user id, template Id and your service ID with the values provided from emailjs.

## This project was made using Vite! Vite provides more faster experience than creat-react-app.<br />
Read More [Here.](vitejs.dev)

## Some Basic Commands -

### `npm run dev`

Runs the app in the development mode.\
Open the link provided to you in the terminal to view it in the browser.

The page will reload if you make edits.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributiors who wants to make this website better can make contribution,which will be **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Added some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request