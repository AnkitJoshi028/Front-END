//index.js  
function sendnewEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "ownerjobinsights@gmail.com",
	Password : "0114cs131012",
	To : 'ownerjobinsights@gmail.com',
	From : "ownerjobinsights@gmail.com",
	Subject : "New FeedBack From The User",
	Body : "ankitjoshinew",
	}).then(
		message => alert("mail sent successfully")
	);
}
