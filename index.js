const superagent = require('superagent');

const GTD = {

  getData: function (access_token, cb) {

    return new Promise((resolve, reject) => {

      if (!access_token) {
        const err = "You need to provide Google Access token";
        if (cb) return cb(err);
        reject(err);
      }

      superagent
        .get('https://www.googleapis.com/oauth2/v1/userinfo')
        .query({
          access_token,
          alt: 'json'
        })
        .end((err, response) => {
          if (err) {
            if (cb) return cb(err);
            reject(err);
          }

          if (cb) return cb(null, response.body);
          resolve(response.body);

        });

    });

  }

}

module.exports = GTD;