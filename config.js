var handlebars = require("handlebars")
module.exports = {
	admins: [
		"zacharywade@gmail.com",
		"matthew.damon.savage@gmail.com",
		"dhlanm@gmail.com",
		"ellisstsung@gmail.com",
		"bzhang.2003@gmail.com",
		"lee123456771@gmail.com",
		"kyle.w.herndon@gmail.com",
		"dhussain101@gmail.com",
	],
	rssInfo: {
		title: "Down to the Wire",
		description: "Technology and design only as serious as it needs to be",
		site_url: "http://jsby.design",
		feed_url: "http://jsby.design/rss",
		language: "en",
	},
	paths: {
		posts: "posts",
		client: "client",
		render: "render"
	},
	adminInfo: {
		"ben": {
			name: "Ben Zhang",
			handle: "ben",
			bio: (new handlebars.SafeString("<b>Ben</b> has failed to submit a bio")),
			gid: "none",
		},
		"danial": {
			name: "Danial Hussain",
			image: "danial.jpg",
			handle: "danial",
			bio: (new handlebars.SafeString("<b>Danial</b> is a self-proclaimed superhero guru who is training to become Batman. Currently studying computer science and biomedical engineering at the University of Virginia, Danial does applied medical research and organizes volunteer programs with Madison House. In his free time, he reads comics, jams to rap music, and is working through iMDB’s top 250 movies of all time.")),
			gid: "none",
		},
		"david": {
			name: "David Lanman",
			handle: "david",
			gid: "116292267178665003696",
			bio: (new handlebars.SafeString("Once upon a time, David was called upon from on high to write a bio. having no ideas, he wrote this instead. Being that he'll probably be too lazy to write anything ever, this was not widely regarded as an issue.")),
		},
		"ellis": {
			name: "Ellis Tsung",
			handle: "ellis",
			image: "ellis.png",
			bio: (new handlebars.SafeString("<b>Ellis</b> has failed to submit a bio")),
			gid: "103641117311445875167",
		},
		"kyle": {
			name: "Kyle Herndon",
			handle: "kyle",
			image: "kyle.jpg",
			bio: (new handlebars.SafeString("<b>Kyle</b> is a Computer Science and Physics double major at University of Illinois at Urbana-Champaign. He enjoys almost everything related computer science and physics, but especially quantum computing and computational physics. In his spare time, he plays video games, swing dances, and plans his quest to take over the world.")),
			gid: "116891590650962784089",
		},
		"lucas": {
			name: "Lucas Lin",
			handle: "lucas",
			image: "lucas.jpg",
			bio: (new handlebars.SafeString("<b>Lucas</b> has failed to submit a bio")),
			gid: "none",
		},
		"matt": {
			name: "Matthew Savage",
			handle: "matt",
			bio: (new handlebars.SafeString("<b>Matt</b> has failed to submit a bio")),
			gid: "118101641190455409267",
		},
		"thomas": {
			name: "Thomas Lee",
			handle: "thomas",
			bio: (new handlebars.SafeString("<b>Thomas</b> has failed to submit a bio")),
			gid: "111319522899190823570"
		},
		"zach": {
			name: "Zach Wade",
			image: "zach.jpg",
			handle: "zach",
			bio: (new handlebars.SafeString("<b>Zach</b> is a student of Computer Science at Carnegie Mellon University. He likes hacking, game development, and has an unhealthy love for javascript. He loves competitions, and frequently participates in hackathons and ctfs. ")),
			gid: "109335746170550705996",
		}
	},
	sidebar: [{
		title: (new handlebars.SafeString("<a href='/about'>About</a>")),
		content: "Down to the Wire is a blog about the everything new in tech."
	}],
}
