<template>
  <div class="container mb-5">

    <h1>{{post.title}} <router-link to="/" class="btn btn-warning ms-3">Anasayfa</router-link></h1><br>
    <img :src="'https://www.themoviedb.org/t/p/original'+ post.poster_path" class="rounded" :alt="post.title" style="width: 300px;"><br>

    <p>{{post.overview}}</p>
    <p><a v-if="post.homepage" class="btn btn-info" :href="post.homepage" target="_blank">Filmi İzle</a>

    </p>
    <p><a :href="'https://www.imdb.com/title/'+post.imdb_id" target="_blank" class="btn btn-primary">IMDB</a></p>
    <p>
      Çıkış Yılı : {{ post.release_date}}<br>
    Film Puanı : {{ post.vote_average}}
    </p>


  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    this.poster();
  },
  name: "Detay",
  data() {
    return {
      post: [],
      errors: []
    };
  },

  methods:{
    poster(){
      let ids = this.$route.params.id;
      axios
          .get("https://api.themoviedb.org/3/movie/"+ids+"?api_key=23941ab06d7a44542b5b3628e201d106&language=tr-TR")
          .then(response => (this.post = response.data))
          .catch(error => {
            this.errors.push(error);
          });
    }
  }
}
</script>
