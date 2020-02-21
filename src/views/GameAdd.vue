<template>
    <div>
        <v-container fluid>
            <v-row justify="center" style="color: #2e313a">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <h1 style="font-weight: 300; margin-top: 10px"><router-link :to="{path: '/team', query: {team: team}}" style="text-decoration: none"><v-btn style="background-color: transparent; color: #2e313a;" fab x-small depressed><v-icon>fa-angle-left</v-icon></v-btn></router-link> Add Match</h1>
                </div>
            </v-row>
        </v-container>

        <v-container fluid>
            <v-row justify="center">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <v-card tile style="border-radius: 5px; background-color: #FFF; color: #2d3039;">
                        <v-card-title style="font-size: 17px; font-weight: 400; border-bottom: 2px solid #d5d8dd">
                            <span style="margin-left: 10px; margin-bottom: -5px">{{ currentTitle }}</span>
                        </v-card-title>

                        <v-window v-model="step">
                            <v-window-item :value="1">
                                <v-card-text>
                                    <h3>Type de jeu</h3>
                                    <v-radio-group v-model="configPlay" row>
                                        <v-radio class="labelColor" color="#69697f" label="QuickPlay" value="QuickPlay"></v-radio>
                                        <v-radio class="labelColor" label="Ranked" color="#69697f" value="Ranked"></v-radio>
                                    </v-radio-group>
                                    <hr style="background-color: #69697f">
                                    <br>
                                    <h3>Type de carte</h3>
                                    <v-radio-group v-model="configMap" row>
                                        <v-radio color="#69697f" disabled label="KOTH" value="KOTH"></v-radio>
                                        <v-radio class="labelColor" color="#69697f" label="Escorte" value="Escorte"></v-radio>
                                        <v-radio class="labelColor" color="#69697f" label="Hybride" value="Hybride"></v-radio>
                                        <v-radio class="labelColor" color="#69697f" label="2CP" value="2CP"></v-radio>
                                    </v-radio-group>
                                    <span class="caption grey--text text--darken-1">
            Veuillez sélectionner les deux paramètres avant de pouvoir continuer
          </span>
                                </v-card-text>
                            </v-window-item>

                            <v-window-item :value="2">
                                <v-card-text v-if="configMap === 'Escorte'">
                                    <h3>Choisir la carte joué pour {{ configMap }}</h3>
                                    <v-radio-group v-model="configModel">
                                        <v-row>
                                            <div class="col-sm-6 col-lg-4 col-md-4">
                                                <v-radio color="#69697f" value="Dorado" style="height: 100px">
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
                                                <v-radio color="#69697f" value="La Havane" style="height: 100px">
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
                                                <v-radio color="#69697f" value="Junkertown" style="height: 100px">
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
                                                <v-radio color="#69697f" value="Rialto" style="height: 100px">
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
                                                <v-radio color="#69697f" value="Route 66" style="height: 100px">
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
                                                <v-radio color="#69697f" value="Gibraltar" style="height: 100px">
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
                                                            <v-card-title>Gibraltar</v-card-title>
                                                        </v-img>
                                                    </v-card>
                                                </v-radio>
                                            </div>
                                        </v-row>
                                    </v-radio-group>
                                    <hr>
                                    <br>
                                    <h3>Côté commencé</h3>
                                    <v-radio-group v-model="configStatus" row>
                                        <v-radio color="#69697f" class="labelColor" label="Attaque" value="Attaque"></v-radio>
                                        <v-radio color="#69697f" class="labelColor" label="Défense" value="Défense"></v-radio>
                                    </v-radio-group>
                                    <span class="caption grey--text text--darken-1">
            Veuillez choisir une carte de jeu
          </span>
                                </v-card-text>

                                <v-card-text v-if="configMap === 'Hybride'">
                                    <h3>Choisir la carte joué pour {{ configMap }}</h3>
                                    <v-radio-group v-model="configModel">
                                        <v-row>
                                            <div class="col-sm-6 col-lg-4 col-md-4">
                                                <v-radio class="labelColor" color="#69697f" value="Blizzard World" style="height: 100px">
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
                                                <v-radio class="labelColor" color="#69697f" value="Eichenwald" style="height: 100px">
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
                                                <v-radio class="labelColor" color="#69697f" value="Hollywood" style="height: 100px">
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
                                                <v-radio class="labelColor" color="#69697f" value="King's Row" style="height: 100px">
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
                                                <v-radio class="labelColor" color="#69697f" value="Numbani" style="height: 100px">
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
                                    <h3>Côté commencé</h3>
                                    <v-radio-group v-model="configStatus" row>
                                        <v-radio class="labelColor" color="#69697f" label="Attaque" value="Attaque"></v-radio>
                                        <v-radio class="labelColor" color="#69697f" label="Défense" value="Défense"></v-radio>
                                    </v-radio-group>
                                    <span class="caption grey--text text--darken-1">
            Veuillez choisir une carte de jeu
          </span>
                                </v-card-text>

                                <v-card-text v-if="configMap === '2CP'">
                                    <h3>Choisir la carte joué pour {{ configMap }}</h3>
                                    <v-radio-group v-model="configModel">
                                        <v-row>
                                            <div class="col-sm-6 col-lg-4 col-md-4">
                                                <v-radio class="labelColor" color="#69697f" value="Hanamura" style="height: 100px">
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
                                                <v-radio class="labelColor" color="#69697f" value="Horizon" style="height: 100px">
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
                                                            <v-card-title>Horizon</v-card-title>
                                                        </v-img>
                                                    </v-card>
                                                </v-radio>
                                            </div>
                                            <div class="col-sm-6 col-lg-4 col-md-4">
                                                <v-radio class="labelColor" color="#69697f" value="Paris" style="height: 100px">
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
                                                <v-radio class="labelColor" color="#69697f" value="Anubis" style="height: 100px">
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
                                                <v-radio class="labelColor" color="#69697f" value="Volskaya" style="height: 100px">
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
                                    <h3>Côté commencé</h3>
                                    <v-radio-group v-model="configStatus" row>
                                        <v-radio class="labelColor" color="#69697f" label="Attaque" value="Attaque"></v-radio>
                                        <v-radio class="labelColor" color="#69697f" label="Défense" value="Défense"></v-radio>
                                    </v-radio-group>
                                    <span class="caption grey--text text--darken-1">
            Veuillez choisir une carte de jeu
          </span>
                                </v-card-text>
                            </v-window-item>

                            <v-window-item :value="3">
                                <v-card-text v-if="configStatus === 'Attaque'">
                                    <h3>Choix des DPS - Attaque</h3>
                                    <v-row>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configDpsOne"
                                                    :items="dps"
                                                    :label="teamValue.Players.mainDps"
                                            ></v-select>
                                        </v-col>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configDpsTwo"
                                                    :items="dps"
                                                    :label="teamValue.Players.offDps"
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                    <h3>Choix des TANKS</h3>
                                    <v-row>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configTankOne"
                                                    :items="tank"
                                                    :label="teamValue.Players.mainTank"
                                            ></v-select>
                                        </v-col>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configTankTwo"
                                                    :items="tank"
                                                    :label="teamValue.Players.offTank"
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                    <h3>Choix des HEALS</h3>
                                    <v-row>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configHealOne"
                                                    :items="heal"
                                                    :label="teamValue.Players.mainHeal"
                                            ></v-select>
                                        </v-col>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configHealTwo"
                                                    :items="heal"
                                                    :label="teamValue.Players.offHeal"
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                    <hr>
                                    <br>
                                    <h3>Changement en cours de partie <v-btn style="background-color: transparent; color: #69697f" x-small depressed fab @click="resetSwitchOne"><v-icon>mdi-reload</v-icon></v-btn></h3>
                                    <v-radio-group multiple v-model="configSwitchOne" row>
                                        <v-radio class="labelColor" color="#69697f" label="TANKS" value="TANK"></v-radio>
                                        <v-radio class="labelColor" color="#69697f" label="DPS" value="DPS"></v-radio>
                                        <v-radio class="labelColor" color="#69697f" label="HEAL" value="HEAL"></v-radio>
                                        <v-radio class="labelColor" color="#69697f" label="AUCUN" value="AUCUN"></v-radio>
                                    </v-radio-group>
                                </v-card-text>

                                <v-card-text v-if="configStatus === 'Défense'">
                                    <h3>Choix des DPS - Défense</h3>
                                    <v-row>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configDpsOne"
                                                    :items="dps"
                                                    :label="teamValue.Players.mainDps"
                                            ></v-select>
                                        </v-col>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configDpsTwo"
                                                    :items="dps"
                                                    :label="teamValue.Players.offDps"
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                    <h3>Choix des TANKS</h3>
                                    <v-row>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configTankOne"
                                                    :items="tank"
                                                    :label="teamValue.Players.mainTank"
                                            ></v-select>
                                        </v-col>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configTankTwo"
                                                    :items="tank"
                                                    :label="teamValue.Players.offTank"
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                    <h3>Choix des HEALS</h3>
                                    <v-row>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configHealOne"
                                                    :items="heal"
                                                    :label="teamValue.Players.mainHeal"
                                            ></v-select>
                                        </v-col>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configHealTwo"
                                                    :items="heal"
                                                    :label="teamValue.Players.offHeal"
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                    <hr>
                                    <br>
                                    <h3>Changement en cours de partie <v-btn style="background-color: transparent; color: #69697f" x-small depressed fab @click="resetSwitchOne"><v-icon>mdi-reload</v-icon></v-btn></h3>
                                    <v-radio-group multiple v-model="configSwitchOne" row>
                                        <v-radio class="labelColor" color="#69697f" label="TANKS" value="TANK"></v-radio>
                                        <v-radio class="labelColor" color="#69697f" label="DPS" value="DPS"></v-radio>
                                        <v-radio class="labelColor" color="#69697f" label="HEAL" value="HEAL"></v-radio>
                                        <v-radio class="labelColor" color="#69697f" label="AUCUN" value="AUCUN"></v-radio>
                                    </v-radio-group>
                                </v-card-text>
                            </v-window-item>

                            <v-window-item :value="4">
                                <v-card-text v-if="configStatus === 'Attaque'">
                                    <h3>Choix des Héros - Défense</h3>
                                    <v-row>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configDpsOneD"
                                                    :items="dps"
                                                    :label="teamValue.Players.mainDps"
                                            ></v-select>
                                        </v-col>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configDpsTwoD"
                                                    :items="dps"
                                                    :label="teamValue.Players.offDps"
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                    <h3>Choix des TANKS</h3>
                                    <v-row>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configTankOneD"
                                                    :items="tank"
                                                    :label="teamValue.Players.mainTank"
                                            ></v-select>
                                        </v-col>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configTankTwoD"
                                                    :items="tank"
                                                    :label="teamValue.Players.offTank"
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                    <h3>Choix des HEALS</h3>
                                    <v-row>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configHealOneD"
                                                    :items="heal"
                                                    :label="teamValue.Players.mainHeal"
                                            ></v-select>
                                        </v-col>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configHealTwoD"
                                                    :items="heal"
                                                    :label="teamValue.Players.offHeal"
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                    <hr>
                                    <br>
                                    <h3>Changement en cours de partie <v-btn style="background-color: transparent; color: #69697f;" x-small depressed fab @click="resetSwitchTwo"><v-icon>mdi-reload</v-icon></v-btn></h3>
                                    <v-radio-group multiple v-model="configSwitchTwo" row>
                                        <v-radio class="labelColor" color="#69697f" label="TANKS" value="TANK"></v-radio>
                                        <v-radio class="labelColor" color="#69697f" label="DPS" value="DPS"></v-radio>
                                        <v-radio class="labelColor" color="#69697f" label="HEAL" value="HEAL"></v-radio>
                                        <v-radio class="labelColor" color="#69697f" label="AUCUN" value="AUCUN"></v-radio>
                                    </v-radio-group>
                                </v-card-text>

                                <v-card-text v-if="configStatus === 'Défense'">
                                    <h3>Choix des Héros - Attaque</h3>
                                    <v-row>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configDpsOneD"
                                                    :items="dps"
                                                    :label="teamValue.Players.mainDps"
                                            ></v-select>
                                        </v-col>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configDpsTwoD"
                                                    :items="dps"
                                                    :label="teamValue.Players.offDps"
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                    <h3>Choix des TANKS</h3>
                                    <v-row>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configTankOneD"
                                                    :items="tank"
                                                    :label="teamValue.Players.mainTank"
                                            ></v-select>
                                        </v-col>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configTankTwoD"
                                                    :items="tank"
                                                    :label="teamValue.Players.offTank"
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                    <h3>Choix des HEALS</h3>
                                    <v-row>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configHealOneD"
                                                    :items="heal"
                                                    :label="teamValue.Players.mainHeal"
                                            ></v-select>
                                        </v-col>
                                        <v-col class="d-flex" cols="6">
                                            <v-select
                                                    color="#69697f"
                                                    v-model="configHealTwoD"
                                                    :items="heal"
                                                    :label="teamValue.Players.offHeal"
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                    <hr>
                                    <br>
                                    <h3>Changement en cours de partie <v-btn style="background-color: transparent; color: #69697f" x-small depressed fab @click="resetSwitchTwo"><v-icon>mdi-reload</v-icon></v-btn></h3>
                                    <v-radio-group multiple v-model="configSwitchTwo" row>
                                        <v-radio class="labelColor" color="#69697f" label="TANKS" value="TANK"></v-radio>
                                        <v-radio class="labelColor" color="#69697f" label="DPS" value="DPS"></v-radio>
                                        <v-radio class="labelColor" color="#69697f" label="HEAL" value="HEAL"></v-radio>
                                        <v-radio class="labelColor" color="#69697f" label="AUCUN" value="AUCUN"></v-radio>
                                    </v-radio-group>
                                </v-card-text>

                            </v-window-item>

                            <v-window-item :value="5">
                                <div class="pa-4">
                                    <h3>Score</h3>
                                    <v-row>
                                        <v-col cols="6" sm="6">
                                            <v-text-field color="#69697f" type="number" label="Votre équipe" v-model="configScoreOne"></v-text-field>
                                        </v-col>
                                        <v-col cols="6" sm="6">
                                            <v-text-field color="#69697f" type="number" label="Equipe adverse" v-model="configScoreTwo"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <hr>
                                    <br>
                                    <h3>Commentaire (falcultatif)</h3>
                                    <v-row>
                                        <v-col cols="12" sm="12">
                                            <v-text-field color="#69697f" label="Commentaire du match" v-model="configCommentaire"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <!--                        <v-img-->
                                    <!--                                class="mb-4"-->
                                    <!--                                contain-->
                                    <!--                                height="128"-->
                                    <!--                                src="https://cdn.vuetifyjs.com/images/logos/v.svg"-->
                                    <!--                        ></v-img>-->
                                    <h3>Pour valider le match, veuillez cliquer sur ajouter</h3>
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
                                    color="#69697f"
                                    @click="step--"
                            >
                                <v-icon>fa-angle-left</v-icon>
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                    :disabled="configMap === 'KOTH' || step === 2 && configStatus === null || step === 5 || step === 3 && configDpsOne === null || step === 3 && configDpsTwo === null || step === 3 && configTankOne === null || step === 3 &&  configTankTwo === null || step === 3 && configHealOne === null || step === 3 && configHealTwo === null || step === 3 && configSwitchOne === null || step === 4 && configSwitchTwo === null || step === 4 && configDpsOneD === null || step === 4 && configDpsTwoD === null || step === 4 && configTankOneD === null || step === 4 &&  configTankTwoD === null || step === 4 && configHealOneD === null || step === 4 && configHealTwoD === null || step === 2 && configModel === null || configMap === null || configPlay === null"
                                    color="#45cd8a"
                                    depressed
                                    icon
                                    @click="step++"
                            >
                                <v-icon>fa-angle-right</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </v-row>
        </v-container>

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

                countOne: 0,
                countTwo: 0,

                randomIdCompoSide1: null,
                randomIdCompoSide2: null,
            }
        },
        methods: {
            resetSwitchOne: function () {
              this.configSwitchOne = null;
            },
            sendMatch: function () {
                this.sendM = true;

                let side1 = {mainDps: this.configDpsOne, offDps: this.configDpsTwo, mainTank: this.configTankOne, offTank: this.configTankTwo, mainHeal: this.configHealOne, offHeal: this.configHealTwo};
                // let side2 = {mainDps: "Ashe", offDps: "Ashe", mainTank: "Dva", offTank: "Dva", mainHeal: "Ana", offHeal: "Ana"};
                let side2 = {mainDps: this.configDpsOneD, offDps: this.configDpsTwoD, mainTank: this.configTankOneD, offTank: this.configTankTwoD, mainHeal: this.configHealOneD, offHeal: this.configHealTwoD};
                this.randomIdCompoSide1 = this.randomID();
                this.randomIdCompoSide2 = this.randomID();

                let compo = this.teamValue.compo;
                if (compo) {
                    Object.keys(compo || {}).forEach(id => {
                        const comp = compo[id];
                        if (this.isEquivalent(side1, comp.Compo)) {
                            // this.rand1 = id;
                            this.randomIdCompoSide1 = id;
                            this.countOne += 1;
                        }
                        if (this.isEquivalent(side2, comp.Compo)) {
                            this.randomIdCompoSide2 = id;
                            this.countTwo += 1;
                        }
                    })

                    if (this.configDpsOne == this.configDpsOneD && this.configDpsTwo == this.configDpsTwoD && this.configTankOne == this.configTankOneD && this.configTankTwo == this.configTankTwoD && this.configHealOne == this.configHealOneD && this.configHealTwo == this.configHealTwoD && this.countOne == 0) {
                        this.randomIdCompoSide2 = this.randomIdCompoSide1;
                        firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/compo/' + this.randomIdCompoSide1).update({
                            Name: this.randomIdCompoSide1,
                            isFav: false,
                            isNew: true,
                            CpmpoDate: new Date().toLocaleString(),
                            Compo: {
                                mainDps: this.configDpsOne,
                                offDps: this.configDpsTwo,
                                mainTank: this.configTankOne,
                                offTank: this.configTankTwo,
                                mainHeal: this.configHealOne,
                                offHeal: this.configHealTwo,
                            }
                        })
                    } else {
                        if (this.countOne == 0) { //Le side1 n'existe pas, il faut donc le créer
                            this.rand2 = this.randomIdCompoSide1;
                            firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/compo/' + this.randomIdCompoSide1).update({
                                Name: this.randomIdCompoSide1,
                                isFav: false,
                                isNew: true,
                                CompoDate: new Date().toLocaleString(),
                                Compo: {
                                    mainDps: this.configDpsOne,
                                    offDps: this.configDpsTwo,
                                    mainTank: this.configTankOne,
                                    offTank: this.configTankTwo,
                                    mainHeal: this.configHealOne,
                                    offHeal: this.configHealTwo,
                                }
                            })
                        }

                        if (this.countTwo == 0) {
                            this.rand1 = this.randomIdCompoSide2;
                            firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/compo/' + this.randomIdCompoSide2).update({
                                Name: this.randomIdCompoSide2,
                                isFav: false,
                                isNew: true,
                                CompoDate: new Date().toLocaleString(),
                                Compo: {
                                    mainDps: this.configDpsOneD,
                                    offDps: this.configDpsTwoD,
                                    mainTank: this.configTankOneD,
                                    offTank: this.configTankTwoD,
                                    mainHeal: this.configHealOneD,
                                    offHeal: this.configHealTwoD,
                                }
                            })
                        }
                    }
                } else {
                    this.rand1 = 'Compo existe pas';
                    return;
                }

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
                    GameCompositionSide1: this.randomIdCompoSide1,
                    GameCompositionSide2: this.randomIdCompoSide2,
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
            isEquivalent: function (a, b) {
                let aP = Object.getOwnPropertyNames(a);
                let bP = Object.getOwnPropertyNames(b);

                if (aP.length == bP.length) {
                    return true;
                }
                for (let i = 0; i < aP.length; i++) {
                    const pN = aP[i];

                    if (a[pN] !== b[pN]) {
                        return false;
                    }
                }
                return true;
            }
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
    h3 {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 14px;
        color: #292936;
    }
    .labelColor /deep/ label {
        color: #69697f;
    }
</style>
