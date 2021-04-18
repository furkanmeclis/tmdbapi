<template>
  <div class="container"><center>
    <h1>Filmler</h1>
    <label class="form-label">Türü Değiştir</label>
    <select class="form-control" @change="degistir($event)">
      <option selected value="popular">Popüler Filmler</option>
      <option value="top_rated">TMDB'de Beğenilen Filmler</option>
    </select>
    <hr>
    <div class="alert alert-info">Toplamda {{posts.results.length}} Tane Kayıt Listelendi</div>
    <div class="row">
    <div v-for="film in posts.results" :key="film.id" class="col-sm-3">
    <div class="card" style="width: 370px;height: 350px">

      <img :src="'https://www.themoviedb.org/t/p/original'+ film.backdrop_path" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{film.title}}</h5>
        <p class="card-text">Film Puanı : {{ film.vote_average}}<br>Çıkış Yılı : {{film.release_date}}</p>
        <router-link :to="'/detay/'+film.id" class="btn btn-warning">Daha Fazla ...</router-link>
      </div>

    </div>

    </div>
    </div>
</center>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created() {
    this.post();
  },
  name: 'filmler',
  data() {
    return {
      posts: [],
      errors: []
    };
  },
  methods:{
    degistir(event){
      this.post(event.target.value)
    },
    post(tur='popular'){
      axios
          .get("https://api.themoviedb.org/3/movie/"+tur+"?api_key=23941ab06d7a44542b5b3628e201d106&language=tr-TR")
          .then(response => (this.posts = response.data))
          .catch(error => {
            this.errors.push(error);
          });
    }
  }
}
</script>
