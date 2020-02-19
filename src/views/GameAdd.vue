<template>
    <div>
        <v-card>
            <v-card-title class="cardTitle" style="font-weight: 300">
                <router-link :to="{path: '/team', query: {team: team}}" style="text-decoration: none"><v-btn style="background-color: transparent; color: white" fab x-small depressed><v-icon x-small>fa-arrow-left</v-icon></v-btn></router-link><span>{{ currentTitle }}</span>
            </v-card-title>

            <v-window v-model="step">
                <v-window-item :value="1">
                    <v-card-text>
                        <h3 class="title font-weight-light mb-2">Type de jeu</h3>
                        <v-radio-group v-model="configPlay" row>
                            <v-radio label="QuickPlay" value="QuickPlay"></v-radio>
                            <v-radio label="Ranked" value="Ranked"></v-radio>
                        </v-radio-group>
                        <hr>
                        <br>
                        <h3 class="title font-weight-light mb-2">Type de carte</h3>
                        <v-radio-group v-model="configMap" row>
                            <v-radio disabled label="KOTH" value="KOTH"></v-radio>
                            <v-radio label="Escorte" value="Escorte"></v-radio>
                            <v-radio label="Hybride" value="Hybride"></v-radio>
                            <v-radio label="2CP" value="2CP"></v-radio>
                        </v-radio-group>

<!--                        <hr>-->
<!--                        <br>-->
<!--                        <h3 class="title font-weight-light mb-2">Status du Match</h3>-->
<!--                        <v-radio-group v-model="configStatus" row>-->
<!--                            <v-radio label="Victoire" value="Victoire"></v-radio>-->
<!--                            <v-radio label="Défaite" value="Défaite"></v-radio>-->
<!--                            <v-radio label="Egalité" value="Egalité"></v-radio>-->
<!--                        </v-radio-group>-->
<!--                        <hr>-->
<!--                        <br>-->
<!--                        <h3 class="title font-weight-light mb-2">Score</h3>-->
<!--                        <v-row>-->
<!--                            <v-col cols="6" sm="6">-->
<!--                                <v-text-field type="number" label="Votre équipe" v-model="configScoreOne"></v-text-field>-->
<!--                            </v-col>-->
<!--                            <v-col cols="6" sm="6">-->
<!--                                <v-text-field type="number" label="Equipe adverse" v-model="configScoreTwo"></v-text-field>-->
<!--                            </v-col>-->
<!--                        </v-row>-->


                        <!--                        <v-text-field-->
                        <!--                                label="Email"-->
                        <!--                                value="john@vuetifyjs.com"-->
                        <!--                        ></v-text-field>-->
                        <span class="caption grey--text text--darken-1">
            Veuillez sélectionner les deux paramètres avant de pouvoir continuer
          </span>
                    </v-card-text>
                </v-window-item>

                <v-window-item :value="2">
                    <v-card-text v-if="configMap === 'Escorte'">
                        <h3 class="title font-weight-light mb-2">Choisir la carte joué pour {{ configMap }}</h3>
                        <v-radio-group v-model="configModel">
                            <v-row>
                                <div class="col-sm-6 col-lg-4 col-md-4">
                                    <v-radio value="Dorado" style="height: 100px">
                                        <v-card
                                                slot="label"
                                                max-width="400"
                                        >
                                            <v-img
                                                    class="white--text align-end"
                                                    height="100px"
                                                    width="220px"
                                                    src="https://subswapr.fr/img/overstats/dorado.jpg"
                                            >
                                                <v-card-title>Dorado</v-card-title>
                                            </v-img>
                                        </v-card>
                                    </v-radio>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <v-radio value="La Havane" style="height: 100px">
                                        <v-card
                                                slot="label"
                                                max-width="400"
                                        >
                                            <v-img
                                                    class="white--text align-end"
                                                    height="100px"
                                                    width="220px"
                                                    src="https://subswapr.fr/img/overstats/havane.jpg"
                                            >
                                                <v-card-title>La Havane</v-card-title>
                                            </v-img>
                                        </v-card>
                                    </v-radio>
                                </div>
                                <div class="col-sm-6 col-lg-4 col-md-4">
                                    <v-radio value="Junkertown" style="height: 100px">
                                        <v-card
                                                slot="label"
                                                max-width="400"
                                        >
                                            <v-img
                                                    class="white--text align-end"
                                                    height="100px"
                                                    width="220px"
                                                    src="https://subswapr.fr/img/overstats/junker.jpg"
                                            >
                                                <v-card-title>Junkertown</v-card-title>
                                            </v-img>
                                        </v-card>
                                    </v-radio>
                                </div>
                                <div class="col-sm-6 col-lg-4 col-md-4">
                                    <v-radio value="Rialto" style="height: 100px">
                                        <v-card
                                                slot="label"
                                                max-width="400"
                                        >
                                            <v-img
                                                    class="white--text align-end"
                                                    height="100px"
                                                    width="220px"
                                                    src="https://subswapr.fr/img/overstats/rialto.jpg"
                                            >
                                                <v-card-title>Rialto</v-card-title>
                                            </v-img>
                                        </v-card>
                                    </v-radio>
                                </div>
                                <div class="col-sm-6 col-lg-4 col-md-4">
                                    <v-radio value="Route 66" style="height: 100px">
                                        <v-card
                                                slot="label"
                                                max-width="400"
                                        >
                                            <v-img
                                                    class="white--text align-end"
                                                    height="100px"
                                                    width="220px"
                                                    src="https://subswapr.fr/img/overstats/route.jpg"
                                            >
                                                <v-card-title>Route 66</v-card-title>
                                            </v-img>
                                        </v-card>
                                    </v-radio>
                                </div>
                                <div class="col-sm-6 col-lg-4 col-md-4">
                                    <v-radio value="Observatoire - Gibraltar" style="height: 100px">
                                        <v-card
                                                slot="label"
                                                max-width="400"
                                        >
                                            <v-img
                                                    class="white--text align-end"
                                                    height="100px"
                                                    width="220px"
                                                    src="https://subswapr.fr/img/overstats/gibraltar.jpg"
                                            >
                                                <v-card-title>OBS - Gibraltar</v-card-title>
                                            </v-img>
                                        </v-card>
                                    </v-radio>
                                </div>
                            </v-row>
                        </v-radio-group>
                        <hr>
                        <br>
                        <h3 class="title font-weight-light mb-2">Côté commencé</h3>
                        <v-radio-group v-model="configStatus" row>
                            <v-radio label="Attaque" value="Attaque"></v-radio>
                            <v-radio label="Défense" value="Défense"></v-radio>
                        </v-radio-group>
                        <span class="caption grey--text text--darken-1">
            Veuillez choisir une carte de jeu
          </span>
                    </v-card-text>

                    <v-card-text v-if="configMap === 'Hybride'">
                        <h3 class="title font-weight-light mb-2">Choisir la carte joué pour {{ configMap }}</h3>
                        <v-radio-group v-model="configModel">
                            <v-row>
                                <div class="col-sm-6 col-lg-4 col-md-4">
                                    <v-radio value="Blizzard World" style="height: 100px">
                                        <v-card
                                                slot="label"
                                                max-width="400"
                                        >
                                            <v-img
                                                    class="white--text align-end"
                                                    height="100px"
                                                    width="220px"
                                                    src="https://subswapr.fr/img/overstats/world.jpg"
                                            >
                                                <v-card-title>Blizzard World</v-card-title>
                                            </v-img>
                                        </v-card>
                                    </v-radio>
                                </div>
                                <div class="col-sm-6 col-lg-4 col-md-4">
                                    <v-radio value="Eichenwald" style="height: 100px">
                                        <v-card
                                                slot="label"
                                                max-width="400"
                                        >
                                            <v-img
                                                    class="white--text align-end"
                                                    height="100px"
                                                    width="220px"
                                                    src="https://subswapr.fr/img/overstats/eichenvald.jpg"
                                            >
                                                <v-card-title>Eichenwald</v-card-title>
                                            </v-img>
                                        </v-card>
                                    </v-radio>
                                </div>
                                <div class="col-sm-6 col-lg-4 col-md-4">
                                    <v-radio value="Hollywood" style="height: 100px">
                                        <v-card
                                                slot="label"
                                                max-width="400"
                                        >
                                            <v-img
                                                    class="white--text align-end"
                                                    height="100px"
                                                    width="220px"
                                                    src="https://subswapr.fr/img/overstats/hollywood.jpg"
                                            >
                                                <v-card-title>Hollywood</v-card-title>
                                            </v-img>
                                        </v-card>
                                    </v-radio>
                                </div>
                                <div class="col-sm-6 col-lg-4 col-md-4">
                                    <v-radio value="King's Row" style="height: 100px">
                                        <v-card
                                                slot="label"
                                                max-width="400"
                                        >
                                            <v-img
                                                    class="white--text align-end"
                                                    height="100px"
                                                    width="220px"
                                                    src="https://subswapr.fr/img/overstats/row.jpg"
                                            >
                                                <v-card-title>King's Row</v-card-title>
                                            </v-img>
                                        </v-card>
                                    </v-radio>
                                </div>
                                <div class="col-sm-6 col-lg-4 col-md-4">
                                    <v-radio value="Numbani" style="height: 100px">
                                        <v-card
                                                slot="label"
                                                max-width="400"
                                        >
                                            <v-img
                                                    class="white--text align-end"
                                                    height="100px"
                                                    width="220px"
                                                    src="https://subswapr.fr/img/overstats/numbani.jpg"
                                            >
                                                <v-card-title>Numbani</v-card-title>
                                            </v-img>
                                        </v-card>
                                    </v-radio>
                                </div>
                            </v-row>
                        </v-radio-group>
                        <hr>
                        <br>
                        <h3 class="title font-weight-light mb-2">Côté commencé</h3>
                        <v-radio-group v-model="configStatus" row>
                            <v-radio label="Attaque" value="Attaque"></v-radio>
                            <v-radio label="Défense" value="Défense"></v-radio>
                        </v-radio-group>
                        <span class="caption grey--text text--darken-1">
            Veuillez choisir une carte de jeu
          </span>
                    </v-card-text>

                    <v-card-text v-if="configMap === '2CP'">
                        <h3 class="title font-weight-light mb-2">Choisir la carte joué pour {{ configMap }}</h3>
                        <v-radio-group v-model="configModel">
                            <v-row>
                                <div class="col-sm-6 col-lg-4 col-md-4">
                                    <v-radio value="Hanamura" style="height: 100px">
                                        <v-card
                                                slot="label"
                                                max-width="400"
                                        >
                                            <v-img
                                                    class="white--text align-end"
                                                    height="100px"
                                                    width="220px"
                                                    src="https://subswapr.fr/img/overstats/hamanura.jpg"
                                            >
                                                <v-card-title>Hanamura</v-card-title>
                                            </v-img>
                                        </v-card>
                                    </v-radio>
                                </div>
                                <div class="col-sm-6 col-lg-4 col-md-4">
                                    <v-radio value="Colonie lunaire horizon" style="height: 100px">
                                        <v-card
                                                slot="label"
                                                max-width="400"
                                        >
                                            <v-img
                                                    class="white--text align-end"
                                                    height="100px"
                                                    width="220px"
                                                    src="https://subswapr.fr/img/overstats/horizon.jpg"
                                            >
                                                <v-card-title>Colonie lunaire</v-card-title>
                                            </v-img>
                                        </v-card>
                                    </v-radio>
                                </div>
                                <div class="col-sm-6 col-lg-4 col-md-4">
                                    <v-radio value="Paris" style="height: 100px">
                                        <v-card
                                                slot="label"
                                                max-width="400"
                                        >
                                            <v-img
                                                    class="white--text align-end"
                                                    height="100px"
                                                    width="220px"
                                                    src="https://subswapr.fr/img/overstats/paris.jpg"
                                            >
                                                <v-card-title>Paris</v-card-title>
                                            </v-img>
                                        </v-card>
                                    </v-radio>
                                </div>
                                <div class="col-sm-6 col-lg-4 col-md-4">
                                    <v-radio value="Temple d'Anubis" style="height: 100px">
                                        <v-card
                                                slot="label"
                                                max-width="400"
                                        >
                                            <v-img
                                                    class="white--text align-end"
                                                    height="100px"
                                                    width="220px"
                                                    src="https://subswapr.fr/img/overstats/anubis.jpg"
                                            >
                                                <v-card-title>Temple d'Anubis</v-card-title>
                                            </v-img>
                                        </v-card>
                                    </v-radio>
                                </div>
                                <div class="col-sm-6 col-lg-4 col-md-4">
                                    <v-radio value="Usine Volskaya" style="height: 100px">
                                        <v-card
                                                slot="label"
                                                max-width="400"
                                        >
                                            <v-img
                                                    class="white--text align-end"
                                                    height="100px"
                                                    width="220px"
                                                    src="https://subswapr.fr/img/overstats/usine.jpg"
                                            >
                                                <v-card-title>Usine Volskaya</v-card-title>
                                            </v-img>
                                        </v-card>
                                    </v-radio>
                                </div>
                            </v-row>
                        </v-radio-group>
                        <hr>
                        <br>
                        <h3 class="title font-weight-light mb-2">Côté commencé</h3>
                        <v-radio-group v-model="configStatus" row>
                            <v-radio label="Attaque" value="Attaque"></v-radio>
                            <v-radio label="Défense" value="Défense"></v-radio>
                        </v-radio-group>
                        <span class="caption grey--text text--darken-1">
            Veuillez choisir une carte de jeu
          </span>
                    </v-card-text>
                </v-window-item>

                <v-window-item :value="3">
                    <v-card-text v-if="configStatus === 'Attaque'">
                        <h3 class="title font-weight-light mb-2">Choix des DPS - Attaque</h3>
                        <v-row>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configDpsOne"
                                        :items="dps"
                                        label="DPS #1"
                                ></v-select>
                            </v-col>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configDpsTwo"
                                        :items="dps"
                                        label="DPS #2"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <h3 class="title font-weight-light mb-2">Choix des TANKS</h3>
                        <v-row>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configTankOne"
                                        :items="tank"
                                        label="TANK #1"
                                ></v-select>
                            </v-col>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configTankTwo"
                                        :items="tank"
                                        label="TANK #2"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <h3 class="title font-weight-light mb-2">Choix des HEALS</h3>
                        <v-row>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configHealOne"
                                        :items="heal"
                                        label="HEAL #1"
                                ></v-select>
                            </v-col>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configHealTwo"
                                        :items="heal"
                                        label="HEAL #2"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <hr>
                        <br>
                        <h3 class="title font-weight-light mb-2">Changement en cours de partie <v-btn style="background-color: transparent" x-small depressed fab @click="resetSwitchOne"><v-icon>mdi-reload</v-icon></v-btn></h3>
                        <v-radio-group multiple v-model="configSwitchOne" row>
                            <v-radio label="TANKS" value="TANK"></v-radio>
                            <v-radio label="DPS" value="DPS"></v-radio>
                            <v-radio label="HEAL" value="HEAL"></v-radio>
                            <v-radio label="AUCUN" value="AUCUN"></v-radio>
                        </v-radio-group>
                    </v-card-text>

                    <v-card-text v-if="configStatus === 'Défense'">
                        <h3 class="title font-weight-light mb-2">Choix des DPS - Défense</h3>
                        <v-row>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configDpsOne"
                                        :items="dps"
                                        label="DPS #1"
                                ></v-select>
                            </v-col>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configDpsTwo"
                                        :items="dps"
                                        label="DPS #2"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <h3 class="title font-weight-light mb-2">Choix des TANKS</h3>
                        <v-row>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configTankOne"
                                        :items="tank"
                                        label="TANK #1"
                                ></v-select>
                            </v-col>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configTankTwo"
                                        :items="tank"
                                        label="TANK #2"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <h3 class="title font-weight-light mb-2">Choix des HEALS</h3>
                        <v-row>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configHealOne"
                                        :items="heal"
                                        label="HEAL #1"
                                ></v-select>
                            </v-col>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configHealTwo"
                                        :items="heal"
                                        label="HEAL #2"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <hr>
                        <br>
                        <h3 class="title font-weight-light mb-2">Changement en cours de partie <v-btn style="background-color: transparent" x-small depressed fab @click="resetSwitchOne"><v-icon>mdi-reload</v-icon></v-btn></h3>
                        <v-radio-group multiple v-model="configSwitchOne" row>
                            <v-radio label="TANKS" value="TANK"></v-radio>
                            <v-radio label="DPS" value="DPS"></v-radio>
                            <v-radio label="HEAL" value="HEAL"></v-radio>
                            <v-radio label="AUCUN" value="AUCUN"></v-radio>
                        </v-radio-group>
                    </v-card-text>
                </v-window-item>

                <v-window-item :value="4">
                    <v-card-text v-if="configStatus === 'Attaque'">
                        <h3 class="title font-weight-light mb-2">Choix des Héros - Défense</h3>
                        <v-row>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configDpsOneD"
                                        :items="dps"
                                        label="DPS #1"
                                ></v-select>
                            </v-col>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configDpsTwoD"
                                        :items="dps"
                                        label="DPS #2"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <h3 class="title font-weight-light mb-2">Choix des TANKS</h3>
                        <v-row>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configTankOneD"
                                        :items="tank"
                                        label="TANK #1"
                                ></v-select>
                            </v-col>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configTankTwoD"
                                        :items="tank"
                                        label="TANK #2"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <h3 class="title font-weight-light mb-2">Choix des HEALS</h3>
                        <v-row>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configHealOneD"
                                        :items="heal"
                                        label="HEAL #1"
                                ></v-select>
                            </v-col>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configHealTwoD"
                                        :items="heal"
                                        label="HEAL #2"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <hr>
                        <br>
                        <h3 class="title font-weight-light mb-2">Changement en cours de partie <v-btn style="background-color: transparent" x-small depressed fab @click="resetSwitchTwo"><v-icon>mdi-reload</v-icon></v-btn></h3>
                        <v-radio-group multiple v-model="configSwitchTwo" row>
                            <v-radio label="TANKS" value="TANK"></v-radio>
                            <v-radio label="DPS" value="DPS"></v-radio>
                            <v-radio label="HEAL" value="HEAL"></v-radio>
                            <v-radio label="AUCUN" value="AUCUN"></v-radio>
                        </v-radio-group>
                    </v-card-text>

                    <v-card-text v-if="configStatus === 'Défense'">
                        <h3 class="title font-weight-light mb-2">Choix des Héros - Attaque</h3>
                        <v-row>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configDpsOneD"
                                        :items="dps"
                                        label="DPS #1"
                                ></v-select>
                            </v-col>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configDpsTwoD"
                                        :items="dps"
                                        label="DPS #2"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <h3 class="title font-weight-light mb-2">Choix des TANKS</h3>
                        <v-row>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configTankOneD"
                                        :items="tank"
                                        label="TANK #1"
                                ></v-select>
                            </v-col>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configTankTwoD"
                                        :items="tank"
                                        label="TANK #2"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <h3 class="title font-weight-light mb-2">Choix des HEALS</h3>
                        <v-row>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configHealOneD"
                                        :items="heal"
                                        label="HEAL #1"
                                ></v-select>
                            </v-col>
                            <v-col class="d-flex" cols="6">
                                <v-select
                                        v-model="configHealTwoD"
                                        :items="heal"
                                        label="HEAL #2"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <hr>
                        <br>
                        <h3 class="title font-weight-light mb-2">Changement en cours de partie <v-btn style="background-color: transparent" x-small depressed fab @click="resetSwitchTwo"><v-icon>mdi-reload</v-icon></v-btn></h3>
                        <v-radio-group multiple v-model="configSwitchTwo" row>
                            <v-radio label="TANKS" value="TANK"></v-radio>
                            <v-radio label="DPS" value="DPS"></v-radio>
                            <v-radio label="HEAL" value="HEAL"></v-radio>
                            <v-radio label="AUCUN" value="AUCUN"></v-radio>
                        </v-radio-group>
                    </v-card-text>

                </v-window-item>

                <v-window-item :value="5">
                    <div class="pa-4">
                        <h3 class="title font-weight-light mb-2">Score</h3>
                        <v-row>
                            <v-col cols="6" sm="6">
                                <v-text-field type="number" label="Votre équipe" v-model="configScoreOne"></v-text-field>
                            </v-col>
                            <v-col cols="6" sm="6">
                                <v-text-field type="number" label="Equipe adverse" v-model="configScoreTwo"></v-text-field>
                            </v-col>
                        </v-row>
                        <hr>
                        <br>
                        <h3 class="title font-weight-light mb-2">Commentaire (falcultatif)</h3>
                        <v-row>
                            <v-col cols="12" sm="12">
                                <v-text-field label="Commentaire du match" v-model="configCommentaire"></v-text-field>
                            </v-col>
                        </v-row>
                        <!--                        <v-img-->
                        <!--                                class="mb-4"-->
                        <!--                                contain-->
                        <!--                                height="128"-->
                        <!--                                src="https://cdn.vuetifyjs.com/images/logos/v.svg"-->
                        <!--                        ></v-img>-->
                        <h3 class="title font-weight-light mb-2">Pour valider le match, veuillez cliquer sur ajouter</h3>
                        <v-btn
                                width="150"
                                height="35"
                                style="border-radius: 20px"
                                :loading="sendM"
                                @click="sendMatch"
                        >Valider</v-btn>
                    </div>
                </v-window-item>
            </v-window>

            <v-divider></v-divider>

            <v-card-actions>
                <v-btn
                        :disabled="step === 1"
                        depressed
                        icon
                        @click="step--"
                >
                    <v-icon>fa-angle-left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                        :disabled="configMap === 'KOTH' || step === 2 && configStatus === null || step === 5 || step === 3 && configDpsOne === null || step === 3 && configDpsTwo === null || step === 3 && configTankOne === null || step === 3 &&  configTankTwo === null || step === 3 && configHealOne === null || step === 3 && configHealTwo === null || step === 3 && configSwitchOne === null || step === 4 && configSwitchTwo === null || step === 4 && configDpsOneD === null || step === 4 && configDpsTwoD === null || step === 4 && configTankOneD === null || step === 4 &&  configTankTwoD === null || step === 4 && configHealOneD === null || step === 4 && configHealTwoD === null || step === 2 && configModel === null || configMap === null || configPlay === null"
                        color="primary"
                        depressed
                        icon
                        @click="step++"
                >
                    <v-icon>fa-angle-right</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>

        <v-snackbar v-model="snackbarAddVal" :timeout="3000" color="green">
            Match ajouté
            <v-btn
                    color="white"
                    text
                    icon
                    @click="snackbarAddVal = false"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
    import firebase from "firebase";

    export default {
        name: "GameAdd",
        props: ["team"],
        data() {
            return {
                dps: ['Ashe', 'Bastion', 'Dommfist', 'Genji', 'Hanzo', 'Junkrat', 'Mccree', 'Mei', 'Pharah', 'Reaper', 'Soldier 76', 'Sombra', 'Symmetra', 'Torbjorn', 'Tracer', 'Widowmaker'],
                tank: ['Dva', 'Orisa', 'Reinhardt', 'Roadhog', 'Sigma', 'Winston', 'Wrecking ball', 'Zarya'],
                heal: ['Ana', 'Baptiste', 'Brigitte', 'Lucio', 'Mercy', 'Moira', 'Zenyatta'],

                teamValue: '',

                step: 1,

                dialogMatch: false,
                dialogJoueur: false,

                favorite: false,


                configModel: null,

                configPlay: null,
                configMap: null,
                configStatus: null,
                configScoreOne: null,
                configScoreTwo: null,

                configDpsOne: null,
                configDpsTwo: null,
                configTankOne: null,
                configTankTwo: null,
                configHealOne: null,
                configHealTwo: null,

                configDpsOneD: null,
                configDpsTwoD: null,
                configTankOneD: null,
                configTankTwoD: null,
                configHealOneD: null,
                configHealTwoD: null,

                configSwitchOne: null,
                configSwitchTwo: null,

                configCommentaire: '',

                sendM: false,
                snackbarAddVal: false,
            }
        },
        methods: {
            resetSwitchOne: function () {
              this.configSwitchOne = null;
            },
            sendMatch: function () {
                this.sendM = true;
                firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/matchs/' + this.randomID()).update({
                    GamePlay: this.configPlay,
                    GameType: this.configMap,
                    GameMap: this.configModel,
                    GameStatus: this.configStatus,
                    GameScoreA: this.configScoreOne,
                    GameScoreB: this.configScoreTwo,
                    GameSwitchOne: this.configSwitchOne,
                    GameSwicthTwo: this.configSwitchTwo,
                    GameComment: this.configCommentaire,
                    GameDate: new Date().toLocaleString(),
                    Players: {
                        SideOne: {
                            PlayerDpsOne: this.configDpsOne,
                            PlayerDpsTwo: this.configDpsTwo,
                            PlayerTankOne: this.configTankOne,
                            PlayerTankTwo: this.configTankTwo,
                            PlayerHealOne: this.configHealOne,
                            PlayerHealTwo: this.configHealTwo,
                        },
                        SideTwo: {
                            PlayerDpsOne: this.configDpsOneD,
                            PlayerDpsTwo: this.configDpsTwoD,
                            PlayerTankOne: this.configTankOneD,
                            PlayerTankTwo: this.configTankTwoD,
                            PlayerHealOne: this.configHealOneD,
                            PlayerHealTwo: this.configHealTwoD,
                        }
                    }
                }).then(() => {
                    this.sendM = false
                    this.snackbarAddVal = true

                    this.configModel = null

                    this.configPlay = null
                    this.configMap = null
                    this.configStatus = null
                    this.configScoreOne = null
                    this.configScoreTwo = null

                    this.configSwitchOne = null
                    this.configSwitchTwo = null

                    this.configDpsOne = null
                    this.configDpsTwo = null
                    this.configTankOne = null
                    this.configTankTwo =null
                    this.configHealOne = null
                    this.configHealTwo = null

                    this.configDpsOneD = null
                    this.configDpsTwoD = null
                    this.configTankOneD = null
                    this.configTankTwoD = null
                    this.configHealOneD = null
                    this.configHealTwoD = null

                    this.configCommentaire = ''
                    this.step = 1
                })
            },
            randomID: function makeid() {
                var result           = '';
                var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for ( var i = 0; i < 12; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            },
        },
        computed: {
            currentTitle() {
                switch (this.step) {
                    case 1:
                        return 'Configuration Partie'
                    case 2:
                        return 'Choix de la map'
                    case 3:
                        return 'Sélection des héros'
                    case 4:
                        return 'Sélection des héros'
                    case 5:
                        return 'Validation'
                    default:
                        return 'Account created'
                }
            }
        },
        created() {
            firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team).on('value', (snapshot) => {
                // alert(JSON.stringify(snapshot.val()))
                this.teamValue = snapshot.val()
            })

            // firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team).on('value',  (snapshot) => {
            //
            //     // alert(JSON.stringify(snapshot.val()))
            //     this.teamName = snapshot.val();
            // })
        }
    }
</script>

<style scoped>

</style>
