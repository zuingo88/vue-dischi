// Attraverso una chiamata ajax all'API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.

function initVue() {
  new Vue({
    el: "#app",
    data: {
      albums: [],
      genres: [],
      authors: [],
      genSel: "",
      autSel: "",
      filters: ["Author", "Genre", "Both"],
      filter: "",
    },
    mounted() {
      //prelevo dati dal server
      axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((response) => {
          //metto i dati nella mia variabile 'albums'
          this.albums = response.data.response;
          //metto, nella mia variabile 'genre', i generi musicali degli album, che ottengo tramite ciclo for
          for (let i = 0; i < this.albums.length; i++) {
            const album = this.albums[i];
            const genre = album.genre;
            const author = album.author;
            if (!this.genres.includes(genre)) {
              this.genres.push(genre);
            }
            if (!this.authors.includes(author)) {
              this.authors.push(author);
            }
          }
        })
        .catch(() => console.log("error"));
    },
    methods: {
      genFilter: function () {
          this.genSel = '';
        this.albums.filter((album) => {
          album.genre.includes(this.genSel);
        });
      },
      autFilter: function () {
          this.autSel = '';
        this.albums.filter((album) => {
          album.author.includes(this.autSel);
        });
      },
    },
  });
}

initVue();

document.addEventListener("DOMContentLoaded", initVue);
