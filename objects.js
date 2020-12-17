let articles = [
	{
		title: "My First Article.",
		description: "Bacon ipsum dolor amet beef ribs fatback ribeye tri-tip. Pork belly sirloin turkey ground round, tri-tip pork loin hamburger salami shankle ham hock t-bone. Frankfurter filet mignon strip steak pork chop chislic bacon jowl leberkas tongue ball tip bresaola turkey jerky shank landjaeger. Fatback spare ribs short ribs shankle ham hock pastrami.",
		views: 30,
	},
	{
		title: "My Second Article.",
		description: "Alcatra tail tenderloin andouille prosciutto, chuck salami frankfurter venison shoulder capicola tri-tip turducken corned beef. Jowl cow ball tip jerky, hamburger short loin turkey pig fatback ribeye landjaeger meatloaf. Salami alcatra sausage flank spare ribs pig fatback chicken cupim burgdoggen swine tenderloin chuck. Jowl bacon buffalo cupim venison shank spare ribs ground round corned beef frankfurter chuck chicken beef ribs. Ball tip drumstick corned beef filet mignon turkey kielbasa.",
		views: 30,
	},
	{
		title: "My 3th Article.",
		description: "Ham sausage short loin pork chop kevin beef ribs tail pig turducken andouille brisket buffalo spare ribs boudin. Sirloin andouille pork chop pancetta, bresaola ham shoulder leberkas fatback pork belly meatball chicken. Strip steak frankfurter venison beef pork belly boudin, drumstick landjaeger ham hock ball tip brisket. Bacon tail tongue landjaeger buffalo, flank andouille leberkas picanha kevin sausage.",
		views: 30,
	},
]

articles.forEach(article => {
	console.log(article.title);
	console.log(article.description);
	console.log("Views: " + article.views);
	console.log("----------------------------")
});