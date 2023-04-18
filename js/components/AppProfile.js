app.component('app-profile', {
    props: ['result', 'isFavorite'],
    methods: {
        addFavorite(){
            this.$emit('add-favorite');
        },

        removeFavorite(){
            this.$emit('remove-favorite');
        }
    },
    template: 
    /* html */ `
        <div class="result">
            <a href="#" class="result__toggle-favorite" v-if="isFavorite" @click="removeFavorite">Remove Favorite ⭐️</a>
            <a href="#" class="result__toggle-favorite" v-else @click="addFavorite">Add Favorite ⭐️</a>
            <h2 class="result__name">{{ result.name }}</h2>
            <img v-bind:src="result.avatar_url" :alt="result.name" class="result__avatar">
            <p class="result__bio">{{ result.bio }}
                <br>
                <a v-bind:href="result.blog" class="result__blog">{{ result.blog }}</a>
            </p>
        </div>
    `
})