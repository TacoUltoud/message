function getHomepage(req,res){
  res.render("message");
} 

function send(req,res){
  var tmp = req.body;
  if(!check_email(tmp.email)) tmp.email = "wrong email format"; 
  if(!check_message(tmp.message)) tmp.message = "improper message"
  res.send(tmp);
}

function check_email(email){
  const rule = /[a-zA-Z0-9]+@[a-zA-Z0-9.]+/;
  return rule.test(email);
}

function check_message(message){
  const rule = /^((?!fuck|shit).)*$/;
  return rule.test(message);
}

module.exports = {
  getHomepage,
  send,
  check_email,
  check_message
}