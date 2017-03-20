# google-token-decode
Get Google access_token and return user details

### Why?
You might find this useful when user gets authenticated on other device and all you need to do is just get his email and name, ie. user logs in on mobile, you need to register local account on server.

### Install
```
npm i google-token-decode
```

### Usage
```
const gtd = require('google-token-decode');

gtd.getData("yourToken", (err, data) => {
  // your logic here
  if(err) {
    console.error(err); return false;
  }
  
  console.log(data);
});

// or with promise

gtd.getData("youtToken")
  .then((data) => { console.log(data); })
  .catch((err) => { console.error(err); });
```
