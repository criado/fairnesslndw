// Due to random accidents of history,
// English is the default.
window.CAPTION_LANGUAGE = "en";

window.Captions = {

	// English
	"en": {
		label: "English",
		captions: {
			"intro0": "We are going to assign internet speed in a shared network and we want to do it *fairly*. This means that we want: (1) who you are shouldn't matter! No privileges! (2) If we can get more without anyone losing, we get more, (3) how we share the network should not depend on whether we measure the speed in MB/s, or in nibbles per nanocenturies or in any other way! (or °C vs °F if we worked with temperature) (4) if among all the available options we select an assignment as fair, then we select the same if we have fewer options and we still can.",
			"intro1": "There are computers and serveral users that want information for servers. This isn't interesting because they are not connected. (rephrase) So let's add some connections",
			"during1": "Each of the connections can transport a certain amount of information per second and then it becomes saturated. Use the sliders on the right to make everyone happy by giving them the maximum amount of information they can take",
			"conclusion1": "First conclusion, everyone is happy, different edges are saturated, but the edges in common can transport enough information. Things start to get complex and intersting when common connections cannot deal with what everyone would want to receive. You have to share! And it's better to do it fairly.\n\nYou can play with the sliders some more if you want and when you are ready, click on the main screen to move to a more interesting example.",
			"during2": "Make everyone happy by giving them what is fair! :D\n\nCan I receive more because my path isn't saturated? I'M NOT HAPPY! ¬¬ \nI'm getting less than what is fair? I'M NOT HAPPY! ¬¬ \n\nGimme more by decreasing what others have!",
			"conclusion2": "You found the *only* way to satisfy the 4 fairness properties!\n\nRed uses more critical resources, so it receives less. Actually all other things being equal, if red uses twice as many critical resources it receives half of what the others receive. This is a consequence of our 4 properties.\n\nObserve that fairness has a price. Now the total amount of information per second that is received by users has decreased, as shown in the bar on the left.",
			"during3": "Now the links are not equal, so the fair solution is not as simple as giving red one third of what the others receive.\n\n By the way, there are other notions of fairness! For instance, we could try to give the most to the person that receives the least. But in general this does not satisfy our 4 properties and it is a fairness notion that is too extreme and drags everyone. In this similar example, the initial configuration represents such an assignment. Find the fair solution that satisfies the 4 properties and see how the total amount of information received per second increases.",
			"conclusion3": "You see? The total information per second delivered has increased. This is still lower than the utilitarian solution, which would be the case in which the bar on the left is full.\n\nAlso, one can observe that computing these solutions gets harder and harder the more complex the network is.",
			"during4": "TODO text lvl 4",
			"conclusion4": "TODO conclusion lvl 4",
			"during5": "Our research (see the poster) studies how to find these solutions automatically and how to solve more general problems very fast!\n\nNow, if you haven't had enough: can you find the fair solution of this level?",
			"conclusion5": "Congratulations! You solved the hardest level! I hope you learned something about fairness and you had fun. Tell your friends to play the game too!",
		}
	},
	// German
	"de": {
		label: "Deutsch",
		captions: {
			"conclusion1":"",
			"conclusion2": "Einige Schlussfolgerungen der zweiten Ebene",
			"conclusion3": "Das ist ein schöner Abschluss des dritten Levels",
			"conclusion4": "Oh mein Gott, du hast Level 4 gelöst. Jetzt ist Level 5 eine Herausforderung",
			"conclusion5": "Herzlichen Glückwunsch! Ich hoffe, du hast etwas über Fairness gelernt und hattest Spaß"
		}
	}

};
