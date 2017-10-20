function getHomepage(req,res){
  res.render("message");
} 

function send(req,res){
  var tmp = req.body;
  if(!check_email(tmp.email)){
    tmp.email = "wrong email format"; 
    res.send(tmp);
  }
  else res.send(tmp);
}

function check_email(email){
  const rule = /[a-zA-Z0-9]+@[a-zA-Z0-9.]+/;
  return rule.test(email);
}

module.exports = {
  getHomepage,
  send,
  check_email
}