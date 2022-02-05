const colors = require("tailwindcss/colors");
module.exports = {
	content: ["./**/*.html", "./**/*.razor"],
	theme: {
		extend: {
			height: {
				"5v": "5vh",
				"10v": "10vh",
				"15v": "15vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"45v": "45vh",
				"50v": "50vh",
				"60v": "60vh",
				"65v": "65vh",
				"70v": "70vh",
				"80v": "80vh",
				"85v": "85vh",
				"90v": "90vh",
				"95v": "95vh",
				"100v": "100vh",
				"200v": "200vh",
			},
			colors: {
				primary: "#00acc1",
				secondary: "#E0F7FA",
				terciary: "#ffd700",
			},
		},
	},
	plugins: [],
};
