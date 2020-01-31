<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>Paramètres</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <h2>Pseudo actuel : {{ currentPseudo.Pseudo }}</h2>
                <v-card tile style="border-radius: 5px">
                    <v-container>
                        <v-text-field type="text" label="Pseudo" prepend-icon="mdi-account" v-model="pseudo"/>
                        <v-card-actions>
                            <v-spacer/>
                            <v-btn @click="changePseudo" text>
                                Modifier <v-icon>mdi-reload</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-container>
                </v-card>
            </div>
            <div class="col-sm-6">
                <h2>Description</h2>
                <v-card tile style="border-radius: 5px">
                    <v-container>
                        <v-text-field :rules="rules" counter="25" type="text" label="Description" prepend-icon="fa-grip-lines" v-model="description"/>
                        <v-card-actions>
                            <v-spacer/>
                            <v-btn @click="changeDescr" text>
                                Modifier <v-icon>mdi-reload</v-icon>
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
        name: "Settings",
        data() {
            return {
                pseudo: null,
                description: null,

                currentPseudo: null,

                rules: [v => v.length <= 25 || 'Max 25 characters'],
            }
        },
        methods: {
            changePseudo: function () {
                if (this.pseudo != null) {
                    firebase.database().ref('users/' + firebase.auth().currentUser.uid).update({
                        Pseudo: this.pseudo
                    }).then(() => {
                        alert('Modifié')
                    })
                } else {
                    alert('Veuillez remplir le champ pseudo')
                }
            },
            changeDescr: function () {
                if (this.description != null) {
                    firebase.database().ref('users/' + firebase.auth().currentUser.uid).update({
                        Description: this.description
                    }).then(() => {
                        alert('Modifié')
                    })
                } else {
                    alert('Veuillez remplir le champ description')
                }
            }
        },
        created() {
            firebase.database().ref('users/' + firebase.auth().currentUser.uid).once('value').then((snapshot) => {
                this.currentPseudo = snapshot.val()
            })
        }
    }
</script>

<style scoped>

</style>