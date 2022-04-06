import { createStore } from 'vuex'

export default createStore({
  state: {
      tabSandwich:[{id:1,title:"Döner Kebab Poulet",prix: 4.5,url: "image",description:"description"},
                      {id:2,title:"Döner Kebab Boeuf",prix: 4.5,url: "image",description:"description"},
                      {id:3,title:"Yufka Poulet",prix: 4.5,url: "image",description:"description"},
                      {id:4,title:"Döner Kebab Mixte",prix: 4.5,url: "image",description:"description"},
                      {id:5,title:"Entier Poulet ou Boeuf",prix: 9,url: "image",description:"description"},
                      {id:6,title:"Merguez",prix: 5,url: "image",description:"description"},
                      {id:7,title:"Köfte",prix: 5,url: "image",description:"description"},
                      {id:8,title:"Escalope",prix: 5.5,url: "image",description:"description"},
                      {id:9,title:"Americain",prix: 5,url: "image",description:"description"},
                      {id:10,title:"Yufka Boeuf",prix: 4.5,url: "image",description:"description"},
                      {id:11,title:"Yufka Mixte",prix: 4.5,url: "image",description:"description"},
                      {id:12,title:"Entier Mixte",prix: 9,url: "image",description:"description"},
                      {id:13,title:"Tunisien",prix: 5.5,url: "image",description:"description"},
                      {id:14,title:"Yufka Köfte",prix: 5,url: "image",description:"description"},
                      {id:15,title:"Yufka Vegetarien",prix: 4.5,url: "image",description:"description"},
                      {id:16,title:"Yufka Adana",prix: 5.5,url: "image",description:"description"}
                      ],
      tabPizza:[{id:1,title:"Marguerite",prix: 6,url: "image",description:"description"},
                      {id:2,title:"Alsacienne",prix: 7,url: "image",description:"description"},
                      {id:3,title:"3 Fromages",prix: 7,url: "image",description:"description"},
                      {id:4,title:"Reine",prix: 7.5,url: "image",description:"description"},
                      {id:5,title:"Paysanne",prix: 7.5,url: "image",description:"description"},
                      {id:6,title:"Forestière",prix: 8,url: "image",description:"description"},
                      {id:7,title:"Thon",prix: 8,url: "image",description:"description"},
                      {id:8,title:"Végétarienne",prix: 8,url: "image",description:"description"},
                      {id:9,title:"4 Fromages",prix: 8,url: "image",description:"description"},
                      {id:10,title:"Napolitaine",prix: 8.5,url: "image",description:"description"},
                      {id:11,title:"4 Saisons",prix: 8.5,url: "image",description:"description"},
                      {id:12,title:"Cabri",prix: 8.5,url: "image",description:"description"},
                      {id:13,title:"Fruit de Mer",prix: 8.5,url: "image",description:"description"},
                      {id:14,title:"Mexicaine",prix: 8.5,url: "image",description:"description"},
                      {id:15,title:"Merguez",prix: 8.5,url: "image",description:"description"},
                      {id:16,title:"Bolognaise",prix: 8.5,url: "image",description:"description"},
                      {id:17,title:"Chicken",prix: 9.5,url: "image",description:"description"},
                      {id:18,title:"Exotique",prix: 9.5,url: "image",description:"description"},
                      {id:19,title:"Pizza Kebab",prix: 9.5,url: "image",description:"description"},
                      {id:20,title:"Pizza du Chef",prix: 9.5,url: "image",description:"description"},
                      {id:21,title:"Pide Kasarli",prix: 6.5,url: "image",description:"description"},
                      {id:22,title:"Pide Sucuk",prix: 8,url: "image",description:"description"},
                      {id:23,title:"Pide Sebzeli",prix: 8.5,url: "image",description:"description"},
                      {id:24,title:"Pide Epinard",prix: 8.5,url: "image",description:"description"},
                      {id:25,title:"Pide Kiymali",prix: 8,url: "image",description:"description"},
                      {id:26,title:"Pide Kasarli",prix: 9,url: "image",description:"description"}
                      ],
      tabAssiette:[{id:1,title:"Assiètte Végétarienne",prix: 6,url: "assietteKebab.jpeg",description:"description"},
                      {id:2,title:"Assiètte Kebab Poulet",prix: 9,url: "assietteKebab.jpeg",description:"description"},
                      {id:3,title:"Assiètte Kebab Boeuf",prix: 9,url: "assietteKebab.jpeg",description:"description"},
                      {id:4,title:"Assiètte Kebab Mixte",prix: 9.5,url: "assietteKebab.jpeg",description:"description"},
                      {id:5,title:"Assiètte Merguez",prix: 9,url: "assietteKebab.jpeg",description:"description"},
                      {id:6,title:"Assiètte Steack Haché",prix: 9,url: "assietteKebab.jpeg",description:"description"},
                      {id:7,title:"Assiètte Köfte",prix: 10,url: "assietteKebab.jpeg",description:"description"},
                      {id:8,title:"Assiètte Adana",prix: 10,url: "assietteKebab.jpeg",description:"description"},
                      {id:9,title:"Assiètte Escalope",prix: 9,url: "assietteKebab.jpeg",description:"description"},
                      {id:10,title:"Assiètte Escalope à la crème",prix: 12,url: "assietteKebab.jpeg",description:"description"},
                      {id:11,title:"Assiètte Royale",prix: 14,url: "assietteKebab.jpeg",description:"description"},
                      {id:12,title:"Assiètte côtelette",prix: 15,url: "assietteKebab.jpeg",description:"description"},
                      {id:13,title:"Assiètte Faux-fillet",prix: 15,url: "assietteKebab.jpeg",description:"description"},
                      ],
      tabAccomp:[{id:1,title:"Portion de Frites",prix: 6,url: "image",description:"description"},
                      {id:2,title:"Grande Portion de Frites",prix: 4,url: "image",description:"description"},
                      {id:3,title:"Assiète de Frites",prix: 5,url: "image",description:"description"},
                      {id:5,title:"Nuggets x5",prix: 4,url: "image",description:"description"},
                      {id:6,title:"Nuggets x9",prix: 6,url: "image",description:"description"},
                      {id:7,title:"Box Kebab frites",prix: 5,url: "image",description:"description"},
                      {id:8,title:"Box Kebab bulgur",prix: 5.5,url: "image",description:"description"},
                      {id:9,title:"Box Nuggets x5",prix: 5,url: "image",description:"description"},
                      {id:10,title:"Box Nuggets x9",prix: 7,url: "image",description:"description"},
                     ]
  },
  getters: {
    getSandwichs(state){
      return state.tabSandwich;
    },
    getPizza(state){
      return state.tabPizza;
    },
    getAssiette(state){
      return state.tabAssiette;
    },
    getAccomp(state){
      return state.tabAccomp;
    }

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
