<template>
    <div>
        <v-container fluid>
            <v-row justify="center" style="color: #2e313a">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <h1 style="font-weight: 300; margin-top: 10px"><router-link :to="{path: '/team', query: {team: team}}" style="text-decoration: none"><v-btn style="background-color: transparent; color: #2e313a;" fab x-small depressed><v-icon>fa-angle-left</v-icon></v-btn></router-link> Add Match</h1>
                </div>
            </v-row>
        </v-container>

<!--        <div v-for="(item, key) in mapList.KothZone[configModel]" :key="key">-->
<!--            <p>{{ item.name }}</p>-->
<!--            <p>{{ item.link}}</p>-->
<!--        </div>-->

        <v-container fluid>
            <v-row justify="center">
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <v-card tile style="border-radius: 5px; background-color: #FFF; color: #2d3039;">
                        <v-card-title v-if="configMap != 'KOTH' || step != 2" style="font-size: 17px; font-weight: 400; border-bottom: 2px solid #d5d8dd">
                            <span style="margin-left: 10px;">{{ currentTitle }}</span><span v-if="step != 1">| {{ configMap }}</span>
                        </v-card-title>
                        <v-card-title v-if="configMap === 'KOTH' && step === 2" style="font-size: 17px; font-weight: 400; border-bottom: 2px solid #d5d8dd">
                            <span style="margin-left: 10px;">{{ currentKoth }}</span><span v-if="step != 1">| {{ configMap }}</span>
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
                                        <v-radio color="#69697f" class="labelColor" label="KOTH" value="KOTH"></v-radio>
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
                                <v-card-text v-if="configMap === 'KOTH'">
                                    <v-window v-model="stepKoth">
                                        <v-window-item :value="1">
                                            <h3>Choisir la carte joué pour {{ configMap }}</h3>
                                            <v-radio-group v-model="configModel">
                                                <v-row>
                                                    <div class="col-sm-6 col-lg-4 col-md-4" v-for="(item, index) in mapList.KothMap" :key="index">
                                                        <v-radio color="#69697f" :value="item.name" style="height: 100px">
                                                            <v-card
                                                                    slot="label"
                                                                    max-width="400"
                                                            >
                                                                <v-img
                                                                        class="white--text align-end"
                                                                        height="100px"
                                                                        width="220px"
                                                                        :src="item.link"
                                                                >
                                                                    <v-card-title>{{ item.name }}</v-card-title>
                                                                </v-img>
                                                            </v-card>
                                                        </v-radio>
                                                    </div>
                                                </v-row>
                                            </v-radio-group>
                                            <span class="caption grey--text text--darken-1">
            Veuillez choisir une carte de jeu
          </span>
                                        </v-window-item>

                                        <v-window-item :value="2">
                                            <h3>Map pour {{ configModel }}</h3>
                                            <v-radio-group v-model="configModelKothOne">
                                                <v-row>
                                                    <div class="col-sm-6 col-lg-4 col-md-4" v-for="(item, index) in mapList.KothZone[configModel]" :key="index">
                                                        <v-radio color="#69697f" :value="item.name" style="height: 100px">
                                                            <v-card
                                                                    slot="label"
                                                                    max-width="400"
                                                            >
                                                                <v-img
                                                                        class="white--text align-end"
                                                                        height="100px"
                                                                        width="220px"
                                                                        :src="item.link"
                                                                >
                                                                    <v-card-title>{{ item.name }}</v-card-title>
                                                                </v-img>
                                                            </v-card>
                                                        </v-radio>
                                                    </div>
                                                </v-row>
                                            </v-radio-group>

                                            <span class="caption grey--text text--darken-1">
            Veuillez choisir une carte de jeu
          </span>
                                        </v-window-item>

                                        <v-window-item :value="3">
                                            <h3 v-if="favCompo.length > 0">Favorite Composition</h3>
                                            <v-row v-if="favCompo.length > 0">
                                                <div v-for="(item, index) in favCompo" :key="index">
                                                    <v-btn @click="addCompo(item.Compo.mainTank, item.Compo.offTank, item.Compo.mainDps, item.Compo.offDps, item.Compo.mainHeal, item.Compo.offHeal)" text style="padding: 2px 10px; background-color: #69697f; color: #FFF; border-radius: 20px; margin: 1px 5px; text-transform: initial">{{ item.Name }}</v-btn>
                                                </div>
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
                                            <h3>Choix des DPS</h3>
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
                                            <hr>
                                            <br>
                                            <h3>Status Round</h3>
                                            <v-radio-group v-model="kothOneScore" row>
                                                <v-radio class="labelColor" color="#69697f" label="WIN" :value="1"></v-radio>
                                                <v-radio class="labelColor" color="#69697f" label="LOSE" :value="3"></v-radio>
                                            </v-radio-group>
                                        </v-window-item>

                                        <v-window-item :value="4">
                                            <h3>Map pour {{ configModel }}</h3>
                                            <v-radio-group v-model="configModelKothTwo">
                                                <v-row>
                                                    <div v-for="(item, index) in mapList.KothZone[configModel]" :key="index">
                                                        <div class="col-sm-6 col-lg-4 col-md-4" v-if="configModelKothOne != item.name">
                                                            <v-radio color="#69697f" :value="item.name" style="height: 100px">
                                                                <v-card
                                                                        slot="label"
                                                                        max-width="400"
                                                                >
                                                                    <v-img
                                                                            class="white--text align-end"
                                                                            height="100px"
                                                                            width="220px"
                                                                            :src="item.link"
                                                                    >
                                                                        <v-card-title>{{ item.name }}</v-card-title>
                                                                    </v-img>
                                                                </v-card>
                                                            </v-radio>
                                                        </div>
                                                    </div>
                                                </v-row>
                                            </v-radio-group>

                                            <span class="caption grey--text text--darken-1">
            Veuillez choisir une carte de jeu
          </span>
                                        </v-window-item>

                                        <v-window-item :value="5">
                                            <h3 v-if="favCompo.length > 0">Favorite Composition</h3>
                                            <v-row v-if="favCompo.length > 0">
                                                <div v-for="(item, index) in favCompo" :key="index">
                                                    <v-btn @click="addCompo(item.Compo.mainTank, item.Compo.offTank, item.Compo.mainDps, item.Compo.offDps, item.Compo.mainHeal, item.Compo.offHeal)" text style="padding: 2px 10px; background-color: #69697f; color: #FFF; border-radius: 20px; margin: 1px 5px; text-transform: initial">{{ item.Name }}</v-btn>
                                                </div>
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
                                            <h3>Choix des DPS</h3>
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
                                            <hr>
                                            <br>
                                            <h3>Status Round</h3>
                                            <v-radio-group v-model="kothTwoScore" row>
                                                <v-radio class="labelColor" color="#69697f" label="WIN" :value="1"></v-radio>
                                                <v-radio class="labelColor" color="#69697f" label="LOSE" :value="3"></v-radio>
                                            </v-radio-group>
                                        </v-window-item>

                                        <v-window-item :value="6">
                                            <h3>Map pour {{ configModel }}</h3>
                                            <v-radio-group v-model="configModelKothThree">
                                                <v-row>
                                                    <div v-for="(item, index) in mapList.KothZone[configModel]" :key="index">
                                                        <div class="col-sm-6 col-lg-4 col-md-4" v-if="configModelKothOne != item.name && configModelKothTwo != item.name">
                                                            <v-radio color="#69697f" :value="item.name" style="height: 100px">
                                                                <v-card
                                                                        slot="label"
                                                                        max-width="400"
                                                                >
                                                                    <v-img
                                                                            class="white--text align-end"
                                                                            height="100px"
                                                                            width="220px"
                                                                            :src="item.link"
                                                                    >
                                                                        <v-card-title>{{ item.name }}</v-card-title>
                                                                    </v-img>
                                                                </v-card>
                                                            </v-radio>
                                                        </div>
                                                    </div>
                                                </v-row>
                                            </v-radio-group>

                                            <span class="caption grey--text text--darken-1">
            Veuillez choisir une carte de jeu
          </span>
                                        </v-window-item>

                                        <v-window-item :value="7">
                                            <h3 v-if="favCompo.length > 0">Favorite Composition</h3>
                                            <v-row v-if="favCompo.length > 0">
                                                <div v-for="(item, index) in favCompo" :key="index">
                                                    <v-btn @click="addCompo(item.Compo.mainTank, item.Compo.offTank, item.Compo.mainDps, item.Compo.offDps, item.Compo.mainHeal, item.Compo.offHeal)" text style="padding: 2px 10px; background-color: #69697f; color: #FFF; border-radius: 20px; margin: 1px 5px; text-transform: initial">{{ item.Name }}</v-btn>
                                                </div>
                                            </v-row>
                                            <h3>Choix des TANKS</h3>
                                            <v-row>
                                                <v-col class="d-flex" cols="6">
                                                    <v-select
                                                            color="#69697f"
                                                            v-model="configTankOneF"
                                                            :items="tank"
                                                            :label="teamValue.Players.mainTank"
                                                    ></v-select>
                                                </v-col>
                                                <v-col class="d-flex" cols="6">
                                                    <v-select
                                                            color="#69697f"
                                                            v-model="configTankTwoF"
                                                            :items="tank"
                                                            :label="teamValue.Players.offTank"
                                                    ></v-select>
                                                </v-col>
                                            </v-row>
                                            <h3>Choix des DPS</h3>
                                            <v-row>
                                                <v-col class="d-flex" cols="6">
                                                    <v-select
                                                            color="#69697f"
                                                            v-model="configDpsOneF"
                                                            :items="dps"
                                                            :label="teamValue.Players.mainDps"
                                                    ></v-select>
                                                </v-col>
                                                <v-col class="d-flex" cols="6">
                                                    <v-select
                                                            color="#69697f"
                                                            v-model="configDpsTwoF"
                                                            :items="dps"
                                                            :label="teamValue.Players.offDps"
                                                    ></v-select>
                                                </v-col>
                                            </v-row>
                                            <h3>Choix des HEALS</h3>
                                            <v-row>
                                                <v-col class="d-flex" cols="6">
                                                    <v-select
                                                            color="#69697f"
                                                            v-model="configHealOneF"
                                                            :items="heal"
                                                            :label="teamValue.Players.mainHeal"
                                                    ></v-select>
                                                </v-col>
                                                <v-col class="d-flex" cols="6">
                                                    <v-select
                                                            color="#69697f"
                                                            v-model="configHealTwoF"
                                                            :items="heal"
                                                            :label="teamValue.Players.offHeal"
                                                    ></v-select>
                                                </v-col>
                                            </v-row>
                                            <hr>
                                            <br>
                                            <h3>Changement en cours de partie <v-btn style="background-color: transparent; color: #69697f" x-small depressed fab @click="resetSwitchThree"><v-icon>mdi-reload</v-icon></v-btn></h3>
                                            <v-radio-group multiple v-model="configSwitchThree" row>
                                                <v-radio class="labelColor" color="#69697f" label="TANKS" value="TANK"></v-radio>
                                                <v-radio class="labelColor" color="#69697f" label="DPS" value="DPS"></v-radio>
                                                <v-radio class="labelColor" color="#69697f" label="HEAL" value="HEAL"></v-radio>
                                                <v-radio class="labelColor" color="#69697f" label="AUCUN" value="AUCUN"></v-radio>
                                            </v-radio-group>
                                            <hr>
                                            <br>
                                            <h3>Status Round</h3>
                                            <v-radio-group v-model="kothThreeScore" row>
                                                <v-radio class="labelColor" color="#69697f" label="WIN" :value="7"></v-radio>
                                                <v-radio class="labelColor" color="#69697f" label="LOSE" :value="8"></v-radio>
                                            </v-radio-group>
                                        </v-window-item>

                                    </v-window>
                                </v-card-text>

                                <v-card-text v-if="configMap === 'Escorte' || configMap === 'Hybride' || configMap === '2CP'">
                                    <h3>Choisir la carte joué pour {{ configMap }}</h3>
                                    <v-radio-group v-model="configModel">
                                        <v-row>
                                            <div v-for="(item, index) in mapList[configMap]" :key="index" class="col-sm-6 col-lg-4 col-md-4">
                                                <v-radio color="#69697f" :value="item.name" style="height: 100px">
                                                    <v-card
                                                            slot="label"
                                                            max-width="400"
                                                    >
                                                        <v-img
                                                                class="white--text align-end"
                                                                height="100px"
                                                                width="220px"
                                                                :src="item.link"
                                                        >
                                                            <v-card-title>{{ item.name }}</v-card-title>
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
                            </v-window-item>

                            <v-window-item :value="3">
                                <v-card-text v-if="configStatus === 'Attaque'">
                                    <h3 v-if="favCompo.length > 0">Favorite Composition</h3>
                                    <v-row v-if="favCompo.length > 0">
                                        <div v-for="(item, index) in favCompo" :key="index">
                                            <v-btn @click="addCompo(item.Compo.mainTank, item.Compo.offTank, item.Compo.mainDps, item.Compo.offDps, item.Compo.mainHeal, item.Compo.offHeal)" text style="padding: 2px 10px; background-color: #69697f; color: #FFF; border-radius: 20px; margin: 1px 5px; text-transform: initial">{{ item.Name }}</v-btn>
                                        </div>
                                    </v-row>
                                    <h3>Choix des TANKS - Attaque</h3>
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
                                    <h3>Choix des DPS</h3>
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
                                    <h3 v-if="favCompo.length > 0">Favorite Composition</h3>
                                    <v-row v-if="favCompo.length > 0">
                                        <div v-for="(item, index) in favCompo" :key="index">
                                            <v-btn @click="addCompo(item.Compo.mainTank, item.Compo.offTank, item.Compo.mainDps, item.Compo.offDps, item.Compo.mainHeal, item.Compo.offHeal)" text style="padding: 2px 10px; background-color: #69697f; color: #FFF; border-radius: 20px; margin: 1px 5px; text-transform: initial">{{ item.Name }}</v-btn>
                                        </div>
                                    </v-row>
                                    <h3>Choix des TANKS - Défense</h3>
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
                                    <h3>Choix des DPS</h3>
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
                                    <h3 v-if="favCompo.length > 0">Favorite Composition</h3>
                                    <v-row v-if="favCompo.length > 0">
                                        <div v-for="(item, index) in favCompo" :key="index">
                                            <v-btn @click="addCompo(item.Compo.mainTank, item.Compo.offTank, item.Compo.mainDps, item.Compo.offDps, item.Compo.mainHeal, item.Compo.offHeal)" text style="padding: 2px 10px; background-color: #69697f; color: #FFF; border-radius: 20px; margin: 1px 5px; text-transform: initial">{{ item.Name }}</v-btn>
                                        </div>
                                    </v-row>
                                    <h3>Choix des TANKS - Défense</h3>
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
                                    <h3>Choix des DPS</h3>
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
                                    <h3 v-if="favCompo.length > 0">Favorite Composition</h3>
                                    <v-row v-if="favCompo.length > 0">
                                        <div v-for="(item, index) in favCompo" :key="index">
                                            <v-btn @click="addCompo(item.Compo.mainTank, item.Compo.offTank, item.Compo.mainDps, item.Compo.offDps, item.Compo.mainHeal, item.Compo.offHeal)" text style="padding: 2px 10px; background-color: #69697f; color: #FFF; border-radius: 20px; margin: 1px 5px; text-transform: initial">{{ item.Name }}</v-btn>
                                        </div>
                                    </v-row>
                                    <h3>Choix des TANKS - Attaque</h3>
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
                                    <h3>Choix des DPS</h3>
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
                                <div class="pa-4" v-if="configPlay == 'Ranked'">
                                    <h3>Score</h3>
                                    <v-row>
                                        <v-col cols="6" sm="6">
                                            <v-text-field color="#69697f" type="number" label="Votre équipe" v-model="configScoreOne"></v-text-field>
                                        </v-col>
                                        <v-col cols="6" sm="6">
                                            <v-text-field color="#69697f" type="number" label="Equipe adverse" v-model="configScoreTwo"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div class="pa-4" v-else>
                                    <h3>Score</h3>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-radio-group v-model="quickScore" row>
                                                <v-radio class="labelColor" color="#69697f" label="Victoire" :value="2"></v-radio>
                                                <v-radio class="labelColor" label="Défaite" color="#69697f" :value="1"></v-radio>
                                            </v-radio-group>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-window-item>

                            <v-window-item :value="6">
                                <div class="pa-4">
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
                                    <h3 class="text-center">Valider le match</h3>
                                    <br>
                                    <div class="text-center">
                                        <v-btn
                                                width="150"
                                                height="35"
                                                style="border-radius: 20px"
                                                :loading="sendM"
                                                @click="sendMatch"
                                        >Valider</v-btn>
                                    </div>
                                </div>
                            </v-window-item>
                        </v-window>

                        <v-divider></v-divider>

                        <v-card-actions v-if="configMap === 'KOTH' && step === 2">
                            <v-btn
                                    v-if="stepKoth != 1"
                                    :disabled="stepKoth === 1"
                                    depressed
                                    icon
                                    color="#69697f"
                                    @click="stepKoth--"
                            >
                                <v-icon>fa-angle-left</v-icon>
                            </v-btn>
                            <v-btn
                                    v-if="stepKoth === 1"
                                    depressed
                                    icon
                                    color="#69697f"
                                    @click="step--"
                            >
                                <v-icon>fa-angle-left</v-icon>
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                    v-if="kothOneScore + kothTwoScore != 2 && kothOneScore + kothTwoScore != 6 && stepKoth != 7"
                                    :disabled="configModel === null || stepKoth === 2 && configModelKothOne === null ||stepKoth === 3 && configTankOne === null ||stepKoth === 3 && configTankTwo === null ||stepKoth === 3 && configDpsOne === null ||stepKoth === 3 && configDpsTwo === null ||stepKoth === 3 && configHealOne === null ||stepKoth === 3 && configHealTwo === null || stepKoth === 3 && configSwitchOne === null || stepKoth === 4 && configModelKothTwo === null || stepKoth === 5 && configTankOneD === null ||stepKoth === 5 && configTankTwoD === null ||stepKoth === 5 && configDpsOneD === null ||stepKoth === 5 && configDpsTwoD === null ||stepKoth === 5 && configHealOneD === null ||stepKoth === 5 && configHealTwoD === null || stepKoth === 5 && configSwitchTwo === null || stepKoth === 6 && configModelKothThree === null"
                                    color="#45cd8a"
                                    depressed
                                    icon
                                    @click="stepKoth++"
                            >
                                <v-icon>fa-angle-right</v-icon>
                            </v-btn>
                            <v-btn
                                    v-if="kothOneScore + kothTwoScore != 2 && kothOneScore + kothTwoScore != 6 && stepKoth === 7"
                                    :disabled="stepKoth === 7 && configTankOneF === null ||stepKoth === 7 && configTankTwoF === null ||stepKoth === 7 && configDpsOneF === null ||stepKoth === 7 && configDpsTwoF === null ||stepKoth === 7 && configHealOneF === null ||stepKoth === 7 && configHealTwoF === null || stepKoth === 7 && configSwitchThree === null ||stepKoth === 7 && kothThreeScore === null"
                                    color="#45cd8a"
                                    depressed
                                    icon
                                    @click="step = 6"
                            >
                                <v-icon>fa-angle-right</v-icon>
                            </v-btn>
                            <v-btn
                                    v-if="kothOneScore + kothTwoScore === 2 || kothOneScore + kothTwoScore === 6"
                                    :disabled="configModel === null || stepKoth === 2 && configModelKothOne === null ||stepKoth === 3 && configTankOne === null ||stepKoth === 3 && configTankTwo === null ||stepKoth === 3 && configDpsOne === null ||stepKoth === 3 && configDpsTwo === null ||stepKoth === 3 && configHealOne === null ||stepKoth === 3 && configHealTwo === null || stepKoth === 3 && configSwitchOne === null || stepKoth === 4 && configModelKothTwo === null || stepKoth === 5 && configTankOneD === null ||stepKoth === 5 && configTankTwoD === null ||stepKoth === 5 && configDpsOneD === null ||stepKoth === 5 && configDpsTwoD === null ||stepKoth === 5 && configHealOneD === null ||stepKoth === 5 && configHealTwoD === null || stepKoth === 5 && configSwitchTwo === null"
                                    color="#45cd8a"
                                    depressed
                                    icon
                                    @click="step = 6"
                            >
                                <v-icon>fa-angle-right</v-icon>
                            </v-btn>
                        </v-card-actions>

                        <v-card-actions v-if="configMap != 'KOTH' || step != 2">
                            <v-btn
                                    v-if="configMap != 'KOTH' && step != 5 || step === 5 && configPlay != 'QuickPlay' || step === 3 && configPlay != 'QuickPlay'"
                                    :disabled="step === 1"
                                    depressed
                                    icon
                                    color="#69697f"
                                    @click="step--"
                            >
                                <v-icon>fa-angle-left</v-icon>
                            </v-btn>
                            <v-btn
                                    v-if="configMap === 'KOTH'"
                                    :disabled="step === 1"
                                    depressed
                                    icon
                                    color="#69697f"
                                    @click="step = 2"
                            >
                                <v-icon>fa-angle-left</v-icon>
                            </v-btn>
                            <v-btn
                                    v-if="step === 5 && configPlay == 'QuickPlay'"
                                    color="#69697f"
                                    depressed
                                    icon
                                    @click="step = 3"
                            >
                                <v-icon>fa-angle-left</v-icon>
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                    v-if="step === 3 && configPlay == 'QuickPlay'"
                                    :disabled="step === 2 && configStatus === null || step === 6 || step === 5 && configScoreOne === null || step === 5 && configScoreTwo === null || step === 3 && configDpsOne === null || step === 3 && configDpsTwo === null || step === 3 && configTankOne === null || step === 3 &&  configTankTwo === null || step === 3 && configHealOne === null || step === 3 && configHealTwo === null || step === 3 && configSwitchOne === null || step === 4 && configSwitchTwo === null || step === 4 && configDpsOneD === null || step === 4 && configDpsTwoD === null || step === 4 && configTankOneD === null || step === 4 &&  configTankTwoD === null || step === 4 && configHealOneD === null || step === 4 && configHealTwoD === null || step === 2 && configModel === null || configMap === null || configPlay === null"
                                    color="#45cd8a"
                                    depressed
                                    icon
                                    @click="step = 5"
                            >
                                <v-icon>fa-angle-right</v-icon>
                            </v-btn>
                            <v-btn
                                    v-if="step === 5 && configPlay == 'QuickPlay'"
                                    :disabled="quickScore === null"
                                    color="#45cd8a"
                                    depressed
                                    icon
                                    @click="step++"
                            >
                                <v-icon>fa-angle-right</v-icon>
                            </v-btn>
                            <v-btn
                                    v-if="step === 1 || step === 2 || step === 3 && configPlay != 'QuickPlay' || step === 4 || step === 5 && configPlay != 'QuickPlay'"
                                    :disabled="step === 2 && configStatus === null || step === 6 || step === 5 && configScoreOne === null || step === 5 && configScoreTwo === null || step === 3 && configDpsOne === null || step === 3 && configDpsTwo === null || step === 3 && configTankOne === null || step === 3 &&  configTankTwo === null || step === 3 && configHealOne === null || step === 3 && configHealTwo === null || step === 3 && configSwitchOne === null || step === 4 && configSwitchTwo === null || step === 4 && configDpsOneD === null || step === 4 && configDpsTwoD === null || step === 4 && configTankOneD === null || step === 4 &&  configTankTwoD === null || step === 4 && configHealOneD === null || step === 4 && configHealTwoD === null || step === 2 && configModel === null || configMap === null || configPlay === null"
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
                quickScore: null,

                advanced: ["Attente"],

                dps: ['Ashe', 'Bastion', 'Dommfist', 'Genji', 'Hanzo', 'Junkrat', 'Mccree', 'Mei', 'Pharah', 'Reaper', 'Soldier 76', 'Sombra', 'Symmetra', 'Torbjorn', 'Tracer', 'Widowmaker'],
                tank: ['Dva', 'Orisa', 'Reinhardt', 'Roadhog', 'Sigma', 'Winston', 'Wrecking ball', 'Zarya'],
                heal: ['Ana', 'Baptiste', 'Brigitte', 'Lucio', 'Mercy', 'Moira', 'Zenyatta'],

                mapList: {
                    Escorte: {
                        Rialto: { link: 'https://subswapr.fr/img/overstats/rialto.jpg', name: 'Rialto' },
                        Gibraltar: { link: 'https://subswapr.fr/img/overstats/gibraltar.jpg', name: 'Gibraltar' },
                        Route: { link: 'https://subswapr.fr/img/overstats/route.jpg', name: 'Route 66' },
                        Dorado: { link: 'https://subswapr.fr/img/overstats/dorado.jpg', name: 'Dorado' },
                        Havane: { link: 'https://subswapr.fr/img/overstats/havane.jpg', name: 'La Havane' },
                        Junkertown: { link: 'https://subswapr.fr/img/overstats/junker.jpg', name: 'Junkertown' },
                    },
                    Hybride: {
                        BlizzardWorld: { link: 'https://subswapr.fr/img/overstats/world.jpg', name: 'Blizzard World' },
                        Eichenwald: { link: 'https://subswapr.fr/img/overstats/eichenvald.jpg', name: 'Eichenwald' },
                        KingRow: { link: 'https://subswapr.fr/img/overstats/row.jpg', name: 'King\'s Row' },
                        Hollywood: { link: 'https://subswapr.fr/img/overstats/hollywood.jpg', name: 'Hollywood' },
                        Numbani: { link: 'https://subswapr.fr/img/overstats/numbani.jpg', name: 'Numbani' },
                    },
                    '2CP': {
                        Hanamura: { link: 'https://subswapr.fr/img/overstats/hamanura.jpg', name: 'Hanamura' },
                        Horizon: { link: 'https://subswapr.fr/img/overstats/horizon.jpg', name: 'Horizon' },
                        Paris: { link: 'https://subswapr.fr/img/overstats/paris.jpg', name: 'Paris' },
                        Anubis: { link: 'https://subswapr.fr/img/overstats/anubis.jpg', name: 'Anubis' },
                        Volskaya: { link: 'https://subswapr.fr/img/overstats/usine.jpg', name: 'Volskaya' },
                    },
                    KothMap: {
                        Busan: { link: 'https://subswapr.fr/img/overstats/busan.jpg', name: 'Busan' },
                        Ilios: { link: 'https://subswapr.fr/img/overstats/ilios.jpg', name: 'Ilios' },
                        Lidjiang: { link: 'https://subswapr.fr/img/overstats/lidjiang.jpg', name: 'Lidjiang' },
                        Nepal: { link: 'https://subswapr.fr/img/overstats/nepal.jpg', name: 'Nepal' },
                        Oasis: { link: 'https://subswapr.fr/img/overstats/oasis.jpg', name: 'Oasis' },
                    },
                    KothZone: {
                        Busan: {
                            Centre: { link: 'https://subswapr.fr/img/overstats/center.jpg', name: 'Centre' },
                            Sanctuaire: { link: 'https://subswapr.fr/img/overstats/sanctu.jpg', name: 'Sanctuaire' },
                            Meka: { link: 'https://subswapr.fr/img/overstats/meka.jpg', name: 'Meka' },
                        },
                        Oasis: {
                            Centre: { link: 'https://subswapr.fr/img/overstats/ville.jpg', name: 'Centre' },
                            Jardin: { link: 'https://subswapr.fr/img/overstats/susp.jpg', name: 'Jardin' },
                            Universite: { link: 'https://subswapr.fr/img/overstats/univ.jpg', name: 'Universite' },
                        },
                        Ilios: {
                            Centre: { link: 'https://subswapr.fr/img/overstats/puit.jpg', name: 'Puit' },
                            Jardin: { link: 'https://subswapr.fr/img/overstats/phare.jpg', name: 'Phare' },
                            Universite: { link: 'https://subswapr.fr/img/overstats/ruine.jpg', name: 'Ruine' },
                        },
                        Nepal: {
                            Sanctuaire: { link: 'https://subswapr.fr/img/overstats/sanc.jpg', name: 'Sanctuaire' },
                            Autel: { link: 'https://subswapr.fr/img/overstats/autel.jpg', name: 'Autel' },
                            Village: { link: 'https://subswapr.fr/img/overstats/village.jpg', name: 'Village' },
                        },
                        Lidjiang: {
                            Marche: { link: 'https://subswapr.fr/img/overstats/marche.jpg', name: 'Marche' },
                            Jardin: { link: 'https://subswapr.fr/img/overstats/jardin.jpg', name: 'Jardin' },
                            Tour: { link: 'https://subswapr.fr/img/overstats/tour.jpg', name: 'Tour' },
                        },
                    }
                },

                teamValue: '',

                stepKoth: 1,
                step: 1,

                dialogMatch: false,
                dialogJoueur: false,

                favorite: false,
                favCompo: [],

                configModel: null,
                configModelKothOne: null,
                configModelKothTwo: null,
                configModelKothThree: null,

                kothOneScore: null,
                kothTwoScore: null,
                kothThreeScore: null,

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

                configDpsOneF: null,
                configDpsTwoF: null,
                configTankOneF: null,
                configTankTwoF: null,
                configHealOneF: null,
                configHealTwoF: null,

                configSwitchOne: null,
                configSwitchTwo: null,
                configSwitchThree: null,

                configCommentaire: '',

                sendM: false,
                snackbarAddVal: false,

                countOne: 0,
                countTwo: 0,
                countThree: 0,

                randomIdCompoSide1: null,
                randomIdCompoSide2: null,
                randomIdCompoSide3: null,
            }
        },
        methods: {
            addCompo: function (mainTank, offTank, mainDps, offDps, mainHeal, offHeal) {
                if (this.step === 3 || this.stepKoth === 3) {
                    this.configTankOne = mainTank;
                    this.configTankTwo = offTank;
                    this.configDpsOne = mainDps;
                    this.configDpsTwo = offDps;
                    this.configHealOne = mainHeal;
                    this.configHealTwo = offHeal;
                }
                if (this.stepKoth === 7) {
                    this.configTankOneF = mainTank;
                    this.configTankTwoF = offTank;
                    this.configDpsOneF = mainDps;
                    this.configDpsTwoF = offDps;
                    this.configHealOneF = mainHeal;
                    this.configHealTwoF = offHeal;
                }
                if (this.step === 4 || this.stepKoth === 5) {
                    this.configTankOneD = mainTank;
                    this.configTankTwoD = offTank;
                    this.configDpsOneD = mainDps;
                    this.configDpsTwoD = offDps;
                    this.configHealOneD = mainHeal;
                    this.configHealTwoD = offHeal;
                }
            },
            resetSwitchOne: function () {
              this.configSwitchOne = null;
            },
            resetSwitchTwo: function () {
                this.configSwitchTwo = null;
            },
            resetSwitchThree: function () {
                this.configSwitchThree = null;
            },
            sendMatch: function () {
                this.advanced = [];
                this.advanced.push('Send');
                this.sendM = true;

                var side1 = {mainDps: this.configDpsOne, offDps: this.configDpsTwo, mainTank: this.configTankOne, offTank: this.configTankTwo, mainHeal: this.configHealOne, offHeal: this.configHealTwo};
                // var side2 = {mainDps: "Ashe", offDps: "Ashe", mainTank: "Dva", offTank: "Dva", mainHeal: "Ana", offHeal: "Ana"};
                var side2 = {mainDps: this.configDpsOneD, offDps: this.configDpsTwoD, mainTank: this.configTankOneD, offTank: this.configTankTwoD, mainHeal: this.configHealOneD, offHeal: this.configHealTwoD};
                var side3 = {mainDps: this.configDpsOneF, offDps: this.configDpsTwoF, mainTank: this.configTankOneF, offTank: this.configTankTwoF, mainHeal: this.configHealOneF, offHeal: this.configHealTwoF};
                this.randomIdCompoSide1 = this.randomID();
                if (this.configTankOneD != null) {
                    this.randomIdCompoSide2 = this.randomID();
                } else {
                    this.randomIdCompoSide2 = null;
                }
                if (this.kothThreeScore != null) {
                    this.randomIdCompoSide3 = this.randomID();
                } else {
                    this.randomIdCompoSide3 = null;
                }

                if (this.teamValue.compo) {
                    this.advanced.push('Compo');
                    Object.keys(this.teamValue.compo || {}).forEach(id => {
                        const comp = this.teamValue.compo[id];
                        if (this.isEquivalent(side1, comp.Compo)) {
                            this.randomIdCompoSide1 = id;
                            this.countOne += 1;
                        }
                        if (this.isEquivalent(side2, comp.Compo)) {
                            this.randomIdCompoSide2 = id;
                            this.countTwo += 1;
                        }
                        if (this.isEquivalent(side3, comp.Compo)) {
                            this.randomIdCompoSide3 = id;
                            this.countThree += 1;
                        }
                    })

                    this.advanced.push('Comp / One ' + this.countOne + ' / Two ' + this.countTwo);

                    this.advanced.push('Compo 2');

                    var compoCreate12 = 0;
                    var compoCreate13 = 0;
                    var compoCreate23 = 0;
                    var compoCreate123 = 0;

                    if (this.isEquil(side1, side2) && this.isEquil(side1, side3) && this.isEquil(side2, side3) && this.randomIdCompoSide3 != null && this.randomIdCompoSide2 != null  && this.countOne == 0 && this.countTwo == 0 && this.countThree == 0) {
                        this.advanced.push('Compo All equal');
                        this.randomIdCompoSide2 = this.randomIdCompoSide1;
                        this.randomIdCompoSide3 = this.randomIdCompoSide1;
                        firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/compo/' + this.randomIdCompoSide1).update({
                            Name: this.randomIdCompoSide1,
                            isFav: false,
                            isNew: true,
                            CpmpoDate: new Date().toLocaleString("fr-FR"),
                            Compo: {
                                mainDps: this.configDpsOne,
                                offDps: this.configDpsTwo,
                                mainTank: this.configTankOne,
                                offTank: this.configTankTwo,
                                mainHeal: this.configHealOne,
                                offHeal: this.configHealTwo,
                            }
                        })
                        compoCreate123= 1;
                    }
                    if (this.isEquil(side2, side3) && !this.isEquil(side1, side3) && this.countTwo == 0 && this.countThree == 0 && this.randomIdCompoSide3 != null && this.randomIdCompoSide2 != null ) {
                        this.advanced.push('Compo side2 = side3');
                        this.randomIdCompoSide2 = this.randomIdCompoSide3;
                        firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/compo/' + this.randomIdCompoSide2).update({
                            Name: this.randomIdCompoSide2,
                            isFav: false,
                            isNew: true,
                            CpmpoDate: new Date().toLocaleString("fr-FR"),
                            Compo: {
                                mainDps: this.configDpsOne,
                                offDps: this.configDpsTwo,
                                mainTank: this.configTankOne,
                                offTank: this.configTankTwo,
                                mainHeal: this.configHealOne,
                                offHeal: this.configHealTwo,
                            }
                        })
                        compoCreate23 = 1;
                    }
                    if (this.isEquil(side1, side3) && !this.isEquil(side1, side2) && this.countThree == 0 && this.randomIdCompoSide3 != null && this.countOne == 0) {
                        this.advanced.push('Compo side 1 = side 3');
                        this.randomIdCompoSide3 = this.randomIdCompoSide1;
                        firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/compo/' + this.randomIdCompoSide1).update({
                            Name: this.randomIdCompoSide1,
                            isFav: false,
                            isNew: true,
                            CpmpoDate: new Date().toLocaleString("fr-FR"),
                            Compo: {
                                mainDps: this.configDpsOne,
                                offDps: this.configDpsTwo,
                                mainTank: this.configTankOne,
                                offTank: this.configTankTwo,
                                mainHeal: this.configHealOne,
                                offHeal: this.configHealTwo,
                            }
                        })
                        compoCreate13 = 1;
                    }
                    if (this.isEquil(side1, side2) && !this.isEquil(side1, side3) && this.countOne == 0 && this.countTwo == 0 && this.randomIdCompoSide2 != null ) {
                        this.advanced.push('Compo side 1 = side 2');
                        this.randomIdCompoSide2 = this.randomIdCompoSide1;
                        firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/compo/' + this.randomIdCompoSide1).update({
                            Name: this.randomIdCompoSide1,
                            isFav: false,
                            isNew: true,
                            CpmpoDate: new Date().toLocaleString("fr-FR"),
                            Compo: {
                                mainDps: this.configDpsOne,
                                offDps: this.configDpsTwo,
                                mainTank: this.configTankOne,
                                offTank: this.configTankTwo,
                                mainHeal: this.configHealOne,
                                offHeal: this.configHealTwo,
                            }
                        })
                        compoCreate12 = 1;
                    }
                        if (this.countOne == 0 && compoCreate12 != 1 && compoCreate13 != 1 && compoCreate123 != 1) { //Le side1 n'existe pas, il faut donc le créer
                            this.advanced.push('Side 1 create');
                            firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/compo/' + this.randomIdCompoSide1).update({
                                Name: this.randomIdCompoSide1,
                                isFav: false,
                                isNew: true,
                                CompoDate: new Date().toLocaleString("fr-FR"),
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

                        if (this.countTwo == 0 && this.randomIdCompoSide2 != null  && compoCreate12 != 1 && compoCreate23 != 1 && compoCreate123 != 1) { //Le side2 n'existe pas, il faut donc le créer
                            this.advanced.push('Side 2 create');
                            firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/compo/' + this.randomIdCompoSide2).update({
                                Name: this.randomIdCompoSide2,
                                isFav: false,
                                isNew: true,
                                CompoDate: new Date().toLocaleString("fr-FR"),
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

                        if (this.countThree == 0 && this.randomIdCompoSide3 != null && compoCreate13 != 1 && compoCreate23 != 1 && compoCreate123 != 1) { //Le side3 n'existe pas, il faut donc le créer
                            this.advanced.push('Side 3 create');
                            firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/compo/' + this.randomIdCompoSide3).update({
                                Name: this.randomIdCompoSide3,
                                isFav: false,
                                isNew: true,
                                CompoDate: new Date().toLocaleString("fr-FR"),
                                Compo: {
                                    mainDps: this.configDpsOneF,
                                    offDps: this.configDpsTwoF,
                                    mainTank: this.configTankOneF,
                                    offTank: this.configTankTwoF,
                                    mainHeal: this.configHealOneF,
                                    offHeal: this.configHealTwoF,
                                }
                            })
                        }
                } else {
                    this.rand1 = 'Compo existe pas';
                    return;
                }

                this.advanced.push('Score');

                if (this.kothOneScore + this.kothTwoScore === 2) {
                    this.configScoreOne = 2;
                    this.configScoreTwo = 0;
                }
                if (this.kothOneScore + this.kothTwoScore === 6) {
                    this.configScoreOne = 0;
                    this.configScoreTwo = 2;
                }
                if (this.kothThreeScore === 7) {
                    this.configScoreOne = 2;
                    this.configScoreTwo = 1;
                }
                if (this.kothThreeScore === 8) {
                    this.configScoreOne = 1;
                    this.configScoreTwo = 2;
                }

                if (this.quickScore === 2) {
                    this.configScoreOne = 3;
                    this.configScoreTwo = 0;
                }
                if (this.quickScore === 1) {
                    this.configScoreOne = 0;
                    this.configScoreTwo = 3;
                }

                firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team + '/matchs/' + this.randomID()).update({
                    GamePlay: this.configPlay,
                    GameType: this.configMap,
                    GameMap: this.configModel,
                    GameKothOne: this.configModelKothOne,
                    GameKothTwo: this.configModelKothTwo,
                    GameKothThree: this.configModelKothThree,
                    GameStatus: this.configStatus,
                    GameScoreA: this.configScoreOne,
                    GameScoreB: this.configScoreTwo,
                    GameSwitchOne: this.configSwitchOne,
                    GameSwicthTwo: this.configSwitchTwo,
                    GameSwitchThree: this.configSwitchThree,
                    GameComment: this.configCommentaire,
                    GameDate: new Date().toLocaleString("fr-FR"),
                    GameCompositionSide1: this.randomIdCompoSide1,
                    GameCompositionSide2: this.randomIdCompoSide2,
                    GameCompositionSide3: this.randomIdCompoSide3,
                }).then(() => {
                    this.sendM = false;
                    this.snackbarAddVal = true;

                    this.configModel = null;

                    this.configPlay = null;
                    this.configMap = null;
                    this.configStatus = null;
                    this.configScoreOne = null;
                    this.configScoreTwo = null;

                    this.kothOneScore = null;
                    this.kothTwoScore = null;
                    this.kothThreeScore = null;

                    this.configModelKothOne = null;
                    this.configModelKothTwo = null;
                    this.configModelKothThree = null;

                    this.configSwitchOne = null;
                    this.configSwitchTwo = null;
                    this.configSwitchThree = null;

                    this.configDpsOne = null;
                    this.configDpsTwo = null;
                    this.configTankOne = null;
                    this.configTankTwo =null;
                    this.configHealOne = null;
                    this.configHealTwo = null;

                    this.configDpsOneD = null;
                    this.configDpsTwoD = null;
                    this.configTankOneD = null;
                    this.configTankTwoD = null;
                    this.configHealOneD = null;
                    this.configHealTwoD = null;

                    this.configDpsOneF = null;
                    this.configDpsTwoF = null;
                    this.configTankOneF = null;
                    this.configTankTwoF =null;
                    this.configHealOneF = null;
                    this.configHealTwoF = null;

                    this.countOne = 0;
                    this.countTwo = 0;
                    this.countThree = 0;

                    this.configCommentaire = '';
                    this.step = 1;
                    this.stepKoth = 1;
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
            isEquil: function(a, b) {
                // Create arrays of property names
                var aProps = Object.getOwnPropertyNames(a);
                var bProps = Object.getOwnPropertyNames(b);

                // If number of properties is different,
                // objects are not equivalent
                if (aProps.length != bProps.length) {
                    return false;
                }

                for (var i = 0; i < aProps.length; i++) {
                    var propName = aProps[i];

                    // If values of same property are not equal,
                    // objects are not equivalent
                    if (a[propName] != b[propName]) {
                        return false;
                    }
                }

                // If we made it this far, objects
                // are considered equivalent
                return true;
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
                        return 'Score'
                    case 6:
                        return 'Validation'
                    default:
                        return 'Account created'
                }
            },
            currentKoth() {
                switch (this.stepKoth) {
                    case 1:
                        return 'Choix de la zone'
                    case 2:
                        return 'Choix de la map'
                    case 3:
                        return 'Sélection des héros'
                    case 4:
                        return 'Choix de la map'
                    case 5:
                        return 'Sélection des héros'
                    case 6:
                        return 'Choix de la map'
                    case 7:
                        return 'Sélection des héros'
                    default:
                        return 'Account created'
                }
            }
        },
        created() {
            firebase.database().ref('teams/' + firebase.auth().currentUser.uid + '/' + this.team).on('value', (snapshot) => {
                // alert(JSON.stringify(snapshot.val()))
                this.teamValue = snapshot.val()

                //Ajout favorite Compo
                var list = [];
                Object.keys(snapshot.val().compo || {}).forEach(id => {
                    const favComp = snapshot.val().compo[id];
                    if (favComp.isFav) {
                        list.push(snapshot.val().compo[id]);
                    }
                });
                this.favCompo = list;
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
