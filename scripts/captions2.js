window.CAPTION_LANGUAGE = "en";

window.Captions = {

	// English
	"en": {
		label: "English",
		captions: {
			"intro0": "On a shared network like the Internet, we have some servers that are going to send information to some users. Each connection can transport a certain amount of information per second and then it becomes saturated. Thick connections can transport more info per second.",
            "intro1": "Since some links are shared, like the one above, how fast should we send data to each person? We want to do it *fairly*. This means that we want:",
			"intro2": "(1) Who you are shouldn't matter! No privileges! (2) If we can give more speed without anyone losing any speed, we give more. (3) how we share the network should not depend on whether we measure the speed in Mb/s, or in nibbles per femtocenturies or in any other way! (or °C vs °F if we worked with temperature) (4) If we have some options and take one option as fair, then we still select that one as fair if we are presented with a scenario with strictly fewer options (if we can).",
			"intro3": "So let's see how it works.",
			"during1": "Use the sliders on the right to make everyone happy by giving them the maximum amount of information they can take.",
			"conclusion1": "In this case users don't have to argue on how to share the common link, the network is saturated outside of the common link. Things start to get complex and interesting when common connections cannot deal with everything. You have to share! And it's better to do it fairly.\n\nYou can play with the sliders some more if you want and when you are ready, click on the main screen to move to a more interesting example.",
			"during2": "Now make everyone happy by giving them what is fair! :D\n\nCan I receive more because my path isn't saturated? I'M NOT HAPPY! ¬¬ \nI'm getting less than what is fair? I'M NOT HAPPY! ¬¬ \n\nGimme more by decreasing what others have! The total amount of information per second that is received by users will decrease though, as shown by the bar on the left.",
			"conclusion2": "You found the *only* way to satisfy the 4 fairness properties!\n\nRed uses more critical resources, so it receives less. Actually all other things being equal, if red uses twice as many critical resources then it receives half of what the others receive. This is a consequence of our 4 properties.\n\nObserve that indeed we pay a price and the total amount of information delivered has now decreased, as indicated by the left bar. This is the price of fairness.",
			"during3": "By the way, there are other notions of fairness! For instance, we could try to give the most to the person that receives the least. But in general this does not satisfy our 4 properties and it is a fairness notion that is too extreme and drags everyone. In this similar example, the initial configuration represents such an assignment. Find the fair solution that satisfies the 4 properties and *see how the total amount of information received per second increases*.\n\nNow not all the links are equal, so the fair solution is not as simple as giving red one third of what the others receive.",
			"conclusion3": "You see? The total information per second delivered has increased with respect to where we started. This is still lower than the unfair utilitarian solution, which is reached when the bar on the left is full (can you find it?).\n\nComputing these solutions gets harder and harder the more complex the network is.",
			"during4": "In our research, we studied how to find these solutions automatically in any network and how to solve more general problems very quickly!\n\nThings get complex very fast. Here is the last challenge, can you find the fair solution in this network? Now we are delivering as much as we can, but unfairly.",
			"conclusion4": "Congratulations! You solved the hardest level! The price of fairness in this case is not that bad isn't it? I hope you learned something about fairness and that you had fun. Tell your friends to play the game as well and compare your strategies to solve the challenge!",
			"screensaver": "Click to continue",
		}
	},
	// German
	"de": {
		label: "Deutsch",
		captions: {
			"intro0":       "German coming soon.",
			"intro1":       "German coming soon. The translation of nibble should still be nibble. It refers to this https://de.wikipedia.org/wiki/Nibble",
			"intro2":       "German coming soon.",
			"intro3":       "German coming soon.",
			"during1":      "German coming soon",
			"conclusion1":  "German coming soon",
			"during2":      "German coming soon",
			"conclusion2":  "German coming soon",
			"during3":      "German coming soon",
			"conclusion3":  "German coming soon",
			"during4":      "German coming soon",
			"conclusion4":  "German coming soon",
			"screensaver":  "German coming soon",
		}
	}

};
