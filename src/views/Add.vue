<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1><router-link to="/" style="text-decoration: none"><v-btn fab x-small depressed><v-icon x-small>fa-arrow-left</v-icon></v-btn></router-link> Ajouter une équipe</h1>
                <p>Créer une équipe</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h2>Progression</h2>
                <v-card tile style="border-radius: 5px">
                    <v-container>
                        Nom d'équipe
                        <v-text-field type="text" label="Adresse mail" prepend-icon="mdi-mail" v-model="teamName"/>
                        <v-card-actions>
                            <v-spacer/>
                            <v-btn @click="addTeam" text>
                                Ajouter <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-container>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "Add",
        data() {
            return {
                teamName: null,
            }
        },
        methods: {
            addCloud: function () {
                if (this.teamName != null || this.teamName != '') {
                    alert('Valide')
                    const teams = {
                        TeamName: this.teamName
                    }
                    firebase.firestore().collection('teams' + '/' + firebase.auth().currentUser.uid + '/' + this.randomID()).add(teams).then(() => {
                        alert('ajouté')
                    },
                        (err) => {
                        alert(err.message);
                        })
                }
            },
            addTeam: function () {
                if (this.teamName != null || this.teamName != '') {
                    firebase.database().ref('teams' + '/' + firebase.auth().currentUser.uid + '/' + this.randomID()).set({
                        TeamName: this.teamName
                    }).then(() => {
                        this.$router.push('home');
                    })
                }
            },
            randomID: function makeid() {
                var result           = '';
                var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for ( var i = 0; i < 8; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            }
        }
    }
</script>

<style scoped>

</style>