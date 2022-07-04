import { createStore } from 'vuex'

export default createStore({
  state: {
      showNav:false,
      mobileView:false,
      tabSandwich:[{id:1,title:"Döner Kebab Poulet",prix: 5,url: "no-image.png",description:"description"},
                      {id:2,title:"Döner Kebab Boeuf",prix: 5,url: "no-image.png",description:"description"},
                      {id:3,title:"Döner Kebab Mixte",prix: 5,url: "no-image.png",description:"description"},
                      {id:4,title:"Maxi Poulet ou Boeuf",prix: 10,url: "no-image.png",description:"description"},
                      {id:5,title:"Maxi Mixte",prix: 10,url: "no-image.png",description:"description"},
                      {id:6,title:"Merguez",prix: 6,url: "no-image.png",description:"description"},
                      {id:7,title:"Köfte",prix: 6,url: "no-image.png",description:"description"},
                      {id:8,title:"Escalope",prix: 6,url: "no-image.png",description:"description"},
                      {id:9,title:"Americain",prix: 6.5,url: "no-image.png",description:"description"},
                      {id:10,title:"Tunisien",prix: 6.5,url: "no-image.png",description:"description"},
                      {id:11,title:"Yufka Poulet",prix: 5.5,url: "no-image.png",description:"description"},
                      {id:12,title:"Yufka Boeuf",prix: 5.5,url: "no-image.png",description:"description"},
                      {id:13,title:"Yufka Mixte",prix: 5.5,url: "no-image.png",description:"description"},
                      {id:14,title:"Yufka Vegetarien",prix: 5,url: "no-image.png",description:"description"},
                      {id:15,title:"Yufka Köfte",prix: 6.5,url: "no-image.png",description:"description"},
                      {id:16,title:"Yufka Adana",prix: 6.5,url: "no-image.png",description:"description"},
                      {id:17,title:"Yufka Escalope",prix: 6.5,url: "no-image.png",description:"description"},
                      ],
      tabPizza:[{id:1,title:"Marguerita",prix: 8,url: "no-image.png",description:"description"},
                      {id:2,title:"Alsacienne",prix: 9,url: "no-image.png",description:"description"},
                      {id:3,title:"3 Fromages",prix: 9,url: "no-image.png",description:"description"},
                      {id:4,title:"Reine",prix: 9,url: "PizzaReine.jpg",description:"description"},
                      {id:5,title:"Paysanne",prix: 9,url: "no-image.png",description:"description"},
                      {id:6,title:"Forestière",prix: 9.5,url: "PizzaForestiere.jpg",description:"description"},
                      {id:7,title:"Thon",prix: 10,url: "no-image.png",description:"description"},
                      {id:8,title:"Végétarienne",prix: 9,url: "no-image.png",description:"description"},
                      {id:9,title:"4 Fromages",prix: 10,url: "Pizza4Fromages.jpg",description:"description"},
                      {id:10,title:"Napolitaine",prix: 10.5,url: "no-image.png",description:"description"},
                      {id:11,title:"4 Saisons",prix: 9.5,url: "no-image.png",description:"description"},
                      {id:12,title:"Cabri",prix: 10.5,url: "PizzaCabri.jpg",description:"description"},
                      {id:13,title:"Fruit de Mer",prix: 10.5,url: "no-image.png",description:"description"},
                      {id:14,title:"Mexicaine",prix: 9.5,url: "PizzaMexicaine.jpg",description:"description"},
                      {id:15,title:"Merguez",prix: 10,url: "PizzaMerguez.jpg",description:"description"},
                      {id:16,title:"Bolognaise",prix: 10,url: "no-image.png",description:"description"},
                      {id:17,title:"Chicken",prix: 11,url: "PizzaChicken.jpg",description:"description"},
                      {id:18,title:"Exotique",prix: 10.5,url: "no-image.png",description:"description"},
                      {id:19,title:"Pizza Kebab",prix: 11,url: "no-image.png",description:"description"},
                      {id:20,title:"Pizza du Chef",prix: 11,url: "PizzaChef.jpg",description:"description"},
                      {id:21,title:"Pide Kasarli",prix: 8,url: "PideKasarli.jpg",description:"description"},
                      {id:22,title:"Pide Sucuk",prix: 9,url: "no-image.png",description:"description"},
                      {id:23,title:"Pide Sebzeli",prix: 9,url: "PideSebzeli.jpg",description:"description"},
                      {id:24,title:"Pide Epinard",prix: 9.5,url: "PideEpinard.jpg",description:"description"},
                      {id:25,title:"Pide Kiymali",prix: 9.5,url: "no-image.png",description:"description"},
                      {id:26,title:"Pide Epinard",prix: 10,url: "no-image.png",description:"description"},
                      {id:27,title:"Pide Karisik",prix: 11,url: "no-image.png",description:"description"},
                      {id:28,title:"Börek Sucuk",prix: 9,url: "no-image.png",description:"description"},
                      {id:29,title:"Börek Epinard",prix: 10,url: "no-image.png",description:"description"},
                      {id:30,title:"Börek Kasarli",prix: 8,url: "no-image.png",description:"description"},
                      {id:31,title:"Börek Sebzeli",prix: 9,url: "no-image.png",description:"description"},
                      {id:32,title:"Börek Kiymali",prix: 9.5,url: "no-image.png",description:"description"},
                      ],
      tabAssiette:[{id:1,title:"Assiètte Végétarienne",prix: 8,url: "AssietteVegetarienne.jpg",description:"description"},
                      {id:2,title:"Assiètte Kebab Poulet",prix: 10,url: "AssiettePoulet.jpg",description:"description"},
                      {id:3,title:"Assiètte Kebab Boeuf",prix: 10,url: "AssietteBoeuf.jpg",description:"description"},
                      {id:4,title:"Assiètte Kebab Mixte",prix: 11,url: "no-image.png",description:"description"},
                      {id:5,title:"Assiètte Merguez",prix: 11,url: "AssietteMerguez.jpg",description:"description"},
                      {id:6,title:"Assiètte Steack Haché",prix: 10,url: "no-image.png",description:"description"},
                      {id:7,title:"Assiètte Köfte",prix: 11,url: "AssietteKofte.jpg",description:"description"},
                      {id:8,title:"Assiètte Adana",prix: 12,url: "Adana.jpg",description:"description"},
                      {id:9,title:"Assiètte Escalope",prix: 11,url: "no-image.png",description:"description"},
                      {id:10,title:"Assiètte Escalope à la crème",prix: 14,url: "AssietteEscalopeCreme.jpg",description:"description"},
                      {id:11,title:"Assiètte Royale",prix: 16,url: "AssietteRoyale.jpg",description:"description"},
                      {id:12,title:"Assiètte côtelette",prix: 16,url: "cotelette.jpg",description:"description"},
                      {id:13,title:"Assiètte Faux-filet",prix: 16,url: "no-image.png",description:"description"},
                      {id:14,title:"Assiètte Filet de Boeuf",prix: 23,url: "AssietteFiletBoeufCreme.jpg",description:"description"},
                      ],
      tabAccomp:[{id:1,title:"Portion de Frites",prix: 2.5,url: "no-image.png",description:"description"},
                      {id:2,title:"Grande Portion de Frites",prix: 5,url: "no-image.png",description:"description"},
                      {id:3,title:"Assiète de Frites",prix: 6,url: "no-image.png",description:"description"},
                      {id:5,title:"Nuggets x5",prix: 5,url: "no-image.png",description:"description"},
                      {id:6,title:"Nuggets x10",prix: 7,url: "no-image.png",description:"description"},
                      {id:7,title:"Box Kebab Poulet Frites",prix: 6,url: "no-image.png",description:"description"},
                      {id:8,title:"Box Kebab Boeuf Frites",prix: 6,url: "no-image.png",description:"description"},
                      {id:9,title:"Box Kebab Mixte Frites",prix: 6.5,url: "no-image.png",description:"description"},
                      {id:5,title:"Box Frites Nuggets x5",prix: 6,url: "no-image.png",description:"description"},
                      {id:6,title:"Box Frites Nuggets x10",prix: 8,url: "no-image.png",description:"description"},
                      {id:10,title:"Box Kebab Poulet Semoule",prix: 6.5,url: "no-image.png",description:"description"},
                      {id:10,title:"Box Kebab Boeuf Semoule",prix: 6.5,url: "no-image.png",description:"description"},
                      {id:10,title:"Box Kebab Mixte Semoule",prix: 7,url: "no-image.png",description:"description"},
                      {id:11,title:"Box Nuggets x5 Semoule",prix: 6.5,url: "no-image.png",description:"description"},
                      {id:12,title:"Box Nuggets x9 Semoule",prix: 9,url: "no-image.png",description:"description"},
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
    COMMUT_SHOWNAV(state){
      state.showNav = !state.showNav
    },
    COMMUT_MOBILEVIEW(state){
      state.mobileView = !state.mobileView
    }
  },
  actions: {
  },
  modules: {
  }
})
