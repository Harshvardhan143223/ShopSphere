const passport = require('passport');

exports.isAuth = () => {
  return passport.authenticate('jwt', { session: false });
};

exports.sanitizeUser = (user)=>{
    return {id:user.id, role:user.role}
}

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTlhMGQ2ZmI4ODc2OGVjNWVjYjE4YiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzU1OTQ3NDU1fQ.EBqDlY7F_Mh52Tpa9P_0pBidcZO0b5mKVr0hUsG5HAE';
  return token;
}