import { object } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	},

			// ],
			characters: [],
			urlBase: "https://www.swapi.tech/api/",
			planets: [],
			character: {},
			fav: [],
			planet: {},

		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// },

			getCharacters: async () => {
				let store = getStore()
				try {
					let response = await fetch(`${store.urlBase}/people`)
					let data = await response.json()


					for (let person of data.results) {
						let responseTwo = await fetch(person.url)
						let dataTwo = await responseTwo.json()
						setStore({
							characters: [
								...store.characters, dataTwo.result
							]
						})
					}

				} catch (error) {
					console.log(error)
				}
			},

		getSingleCharacter: async (id) => {
			
			let store = getStore()
			try {
				let response = await fetch(`${store.urlBase}/people/`+id)
				let data = await response.json()
				console.log(data.result)
				setStore({character: data.result.properties}) 
			} catch (error) {
				console.log(error)
			}
		},


		getSinglePlanet: async (id) => {
			
			let store = getStore()
			try {
				let response = await fetch(`${store.urlBase}/planets/`+id)
				let data = await response.json()
				console.log(data.result)
				setStore({planet: data.result.properties}) 
			} catch (error) {
				console.log(error)
			}
		},

		getPlanets: async () => {
			let store = getStore()
			try {
				let response = await fetch(`${store.urlBase}/planets`)
				let data = await response.json()


				for (let planets of data.results) {
					let responseTwo = await fetch(planets.url)
					let dataTwo = await responseTwo.json()
					setStore({
						planets: [
							...store.planets, dataTwo.result
						]
					})
				}

			} catch (error) {
				console.log(error)
			}
		},

		favorites: (item) => {
			const store= getStore()
			if(store.fav.includes(item)){
				let deleteArray=[]
				deleteArray=store.fav.filter((element)=> element != item )
				setStore({fav:deleteArray})
			} else{
				setStore({fav:[...store.fav, item]})
			}

		},

	},
		//Define a function to get the data fetch

	};

	};


export default getState;
