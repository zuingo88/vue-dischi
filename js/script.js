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
      search: "",
    },
    mounted() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((response) => {
          this.albums = response.data.response;
          console.log(this.albums);
        })
        .catch(() => console.log("error"));
    },
  });
}

initVue();

document.addEventListener("DOMContentLoaded", initVue);
