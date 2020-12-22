new Vue({

    el:"#myapp",
    data:{
        getentries:[{api:'Cat Facts', description:'Daily cat facts', auth:'No', https:'Yes', cors:'No', 
        category:'animal', website:'https://alexwohlbruck.github.io/cat-facts/'},
            {api:'Cats', description:'Pictures of cats from Tumblr', auth:'apikey', https:'Yes', cors:'Unkown',
            category:'animal', website:'https://docs.thecatapi.com/'},
            {api:'Dogs', description:'Based on the Stanford Dogs Dataset', auth:'No', https:'Yes', cors:'yes', 
            category:'animal', website:'https://dog.ceo/dog-api/'},
            {api:'HTTPCat', description:'Cat for every HTTP Status', auth:'No', https:'Yes', cors:'Unknown',
             category:'animal', website:'https://http.cat/'},
            {api:'British National Bibliography', description:'	Books', auth:'No', https:'Yes', cors:'Unknown', 
            category:'animal', website:'https://bnb.data.bl.uk/'},
            {api:'Charity Search', description:'Random pictures of dogs', auth:'No', https:'Yes', cors:'Yes', 
            category:'animal', website:'http://charityapi.orghunter.com/'},
            {api:'Rijksmuseum', description:'Art', auth:'apikey', https:'Yes', cors:'Unknown', 
            category:'Art & Design', website:'https://www.rijksmuseum.nl/en/research/conduct-research/data'},
            {api:'Bhagvad Gita', description:'Bhagavad Gita text', auth:'OAuth', https:'Yes', cors:'Yes',
             category:'Books', website:'https://bhagavadgita.io/api/'},
            {api:'Google Books', description:'Books', auth:'apiKey', https:'Yes', cors:'Unknown', 
            category:'Books', website:'https://developers.google.com/books/'},
            {api:'Open Library', description:'Books, book covers and related data', auth:'No', https:'Yes',
             cors:'No', category:'Books', website:'https://openlibrary.org/developers/api'}
                 

    ],
    getrandom:'',
    getanotherrandom:''
    },
    methods:{
        sortBy(prop){
            this.getentries.sort((a,b)=> a[prop]< b[prop] ? -1: 1)
        }
    },
    
    computed:{
        sortBydesc(prop){
            this.getentries.sort((a,b)=> a[prop]> b[prop] ? 1: -1)
        }
        
    },
    created(){
      const idx = Math.floor(Math.random() * this.getentries.length);
        this.getrandom = this.getentries[idx];
        const idx1=Math.floor(Math.random() * this.getentries.length);
        this.getanotherrandom=this.getentries[idx1];
    }
      

});