
import lodash from 'lodash'
import gql from 'graphql-tag'

export const state = () => ({
    store: {},
    order: {},
    count:0,
    selectedState: '',
    selectedArea: '',
    loginWithGmail: true,
    gmailErrorMessage: '',
    storesInLocation: {},
    cartItems: [],
    menuExtras: [],
    FoodOption: {},
    fudap: {},
    fullOrder:{},
    localGovt: [],
    StatesArea:
        [
            {
                "state": {
                    "name": "Ekiti State",
                    "id": 13,
                    "geocode": {
                        lng: 5.219980834,
                        lat: 7.630372741
                    },

                    "locals": [
                        {
                            "name": "Efon",
                            "id": 1,
                            "geocode": {
                                lng: 7.691381,
                                lat: 4.930965
                            },
                        },
                        {
                            "name": "Ekiti East",
                            "id": 2,
                            "geocode": {
                                lng: 7.763610,
                                lat: 5.730723
                            },
                        },
                        {
                            "name": "Ekiti South-West",
                            "id": 3,
                            "geocode": {
                                lng: 7.614315,
                                lat: 5.129657
                            },
                        },
                        {
                            "name": "Ekiti West",
                            "id": 4,
                            "geocode": {
                                lng: 7.657723,
                                lat: 5.223709
                            },
                        },

                        {
                            "name": "Emure",
                            "id": 5,
                            "geocode": {
                                lng: 7.440700,
                                lat: 5.475630
                            },
                        },
                        {
                            "name": "Gbonyin",
                            "id": 6,
                            "geocode": {
                                lng: 7.691381,
                                lat: 4.930965
                            },
                        },
                        {
                            "name": "Ido Osi",
                            "id": 7,
                            "geocode": {
                                lng: 7.857936,
                                lat: 5.175492
                            },
                        },
                        {
                            "name": "Ijero",
                            "id": 8,
                            "geocode": {
                                lng: 7.811684,
                                lat: 5.072886
                            },
                        },

                        {
                            "name": "Ikere",
                            "id": 9,
                            "geocode": {
                                lng: 7.510958,
                                lat: 5.225016
                            },
                        },
                        {
                            "name": "Ikole",
                            "id": 10,
                            "geocode": {
                                lng: 7.798290,
                                lat: 5.508770
                            },
                        },
                        {
                            "name": "Ilejemeje",
                            "id": 11,
                            "geocode": {
                                lng: 7.950349,
                                lat: 5.237798
                            },
                        },
                        {
                            "name": "Irepodun\/Ifelodun",
                            "id": 12,
                            "geocode": {
                                lng: 7.708593,
                                lat: 5.261015
                            },
                        },
                        {
                            "name": "Ise\/Orun",
                            "id": 13,
                            "geocode": {
                                lng: 7.464316,
                                lat: 5.434206
                            },
                        },
                        {
                            "name": "Moba",
                            "id": 14,
                            "geocode": {
                                lng: 7.987501,
                                lat: 5.121339
                            },
                        },
                        {
                            "name": "Oye",
                            "id": 15,
                            "geocode": {
                                lng: 7.800833,
                                lat: 5.340446
                            }
                        },
                    ]
                },
            },

            {
                "state": {
                    "name": "Enugu State",
                    "id": 14,
                    "geocode": {
                        lng: 7.383362995,
                        lat: 6.867034321
                    },

                    "locals": [
                        {
                            "name": "Awgu",
                            "id": 1,
                            "geocode": {
                                lng: 6.083275,
                                lat: 7.475121
                            },
                        },
                        {
                            "name": "Enugu East",
                            "id": 2,
                            "geocode": {
                                lng: 6.515008,
                                lat: 7.511961
                            },
                        },
                        {
                            "name": "Enugu North",
                            "id": 3,
                            "geocode": {
                                lng: 7.383362995,
                                lat: 6.867034321
                            },
                        },
                        {
                            "name": "Enugu South",
                            "id": 4,
                            "geocode": {
                                lng: 6.425892,
                                lat: 7.493089
                            },
                        },
                        {
                            "name": "Ezeagu",
                            "id": 5,
                            "geocode": {
                                lng: 6.385730,
                                lat: 7.292959
                            },
                        },
                        {
                            "name": "Igbo Etiti",
                            "id": 6,
                            "geocode": {
                                lng: 6.700250,
                                lat: 7.417904
                            },
                        },
                        {
                            "name": "Igbo Eze North",
                            "id": 7,
                            "geocode": {
                                lng: 6.983816,
                                lat: 7.456455
                            },
                        },
                        {
                            "name": "Igbo Eze South",
                            "id": 8,
                            "geocode": {
                                lng: 6.926185,
                                lat: 7.403951
                            },
                        },
                        {
                            "name": "Isi Uzo",
                            "id": 9,
                            "geocode": {
                                lng: 6.769744,
                                lat: 7.702424
                            },
                        },
                        {
                            "name": "Nkanu East",
                            "id": 10,
                            "geocode": {
                                lng: 6.330828,
                                lat: 7.651327
                            },
                        },
                        {
                            "name": "Nkanu West",
                            "id": 11,
                            "geocode": {
                                lng: 6.318858,
                                lat: 7.557440
                            },
                        },
                        {
                            "name": "Nsukka",
                            "id": 12,
                            "geocode": {
                                lng: 6.858759,
                                lat: 7.391811
                            },
                        },
                        {
                            "name": "Oji River",
                            "id": 13,
                            "geocode": {
                                lng: 6.243255,
                                lat: 7.279341
                            },
                        },
                        {
                            "name": "Udenu",
                            "id": 14,
                            "geocode": {
                                lng: 6.900436,
                                lat: 7.501533
                            },
                        },
                        {
                            "name": "Udi",
                            "id": 15,
                            "geocode": {
                                lng: 6.323520,
                                lat: 7.395301
                            },
                        },
                        {
                            "name": "Uzo Uwani",
                            "id": 16,
                            "geocode": {
                                lng: 6.519763,
                                lat: 7.107171
                            },
                        },
                    ]
                },
            },

            {
                "state": {
                    "name": "FCT",
                    "id": 15,
                    "geocode": {
                        lng: 8.955089,
                        lat: 7.083231
                    },

                    "locals": [
                        {
                            "name": "Bwari",
                            "id": 1,
                            "geocode": {
                                lng: 7.533328002,
                                lat: 9.083333149
                            },
                        },
                        {
                            "name": "Gwagwalada",
                            "id": 2,
                            "geocode": {
                                lng: 8.955089,
                                lat: 7.083231
                            },
                        },
                        {
                            "name": "Kuje",
                            "id": 3,
                            "geocode": {
                                lng: 8.884063,
                                lat: 7.229858
                            },
                        },
                        {
                            "name": "Kwali",
                            "id": 4,
                            "geocode": {
                                lng: 8.847458,
                                lat: 7.060346
                            },
                        },

                        {
                            "name": "Municipal Area Council",
                            "id": 5,
                            "geocode": {
                                lng: 9.061513,
                                lat: 7.422291
                            },
                        },
                    ]

                },
            },

            {
                "state": {
                    "name": "Kwara State",
                    "id": 24,
                    "geocode": {
                        lng: 4.549995889,
                        lat: 8.490010192
                    },
                    "locals": [
                        {
                            "name": "Baruten",
                            "id": 1,
                            "geocode": {
                                lng: 9.238228,
                                lat: 3.543780
                            },
                        },
                        {
                            "name": "Edu",
                            "id": 2,
                            "geocode": {
                                lng: 8.848309,
                                lat: 5.406057
                            },
                        },
                        {
                            "name": "Ekiti",
                            "id": 3,
                            "geocode": {
                                lng: 8.140831,
                                lat: 5.368181
                            },
                        },
                        {
                            "name": "Ifelodun",
                            "id": 4,
                            "geocode": {
                                lng: 8.831751,
                                lat: 4.939109
                            },
                        },
                        {
                            "name": "Ilorin East",
                            "id": 5,
                            "geocode": {
                                lng: 8.573245,
                                lat: 4.703608
                            },
                        },
                        {
                            "name": "Ilorin South",
                            "id": 6,
                            "geocode": {
                                lng: 8.498699,
                                lat: 4.562747
                            },
                        },
                        {
                            "name": "Ilorin West",
                            "id": 7,
                            "geocode": {
                                lng: 8.462659,
                                lat: 4.489148
                            },
                        },
                        {
                            "name": "Irepodun",
                            "id": 8,
                            "geocode": {
                                lng: 8.233254,
                                lat: 4.884182
                            },
                        },
                        {
                            "name": "Isin",
                            "id": 9,
                            "geocode": {
                                lng: 8.285428,
                                lat: 5.029274
                            },
                        },
                        {
                            "name": "Kaiama",
                            "id": 10,
                            "geocode": {
                                lng: 9.600325,
                                lat: 3.937642
                            },
                        },
                        {
                            "name": "Moro",
                            "id": 11,
                            "geocode": {
                                lng: 8.941847,
                                lat: 4.778229
                            },
                        },
                        {
                            "name": "Offa",
                            "id": 12,
                            "geocode": {
                                lng: 8.151079,
                                lat: 4.704364
                            },
                        },
                        {
                            "name": "Oke Ero",
                            "id": 13,
                            "geocode": {
                                lng: 8.093636,
                                lat: 5.145781
                            },
                        },
                        {
                            "name": "Oyun",
                            "id": 14,
                            "geocode": {
                                lng: 8.139630,
                                lat: 4.718438
                            },
                        },
                        {
                            "name": "Pategi",
                            "id": 15,
                            "geocode": {
                                lng: 8.713824,
                                lat: 5.757888
                            },
                        },
                    ]
                }
            },
            {
                "state": {
                    "name": "Lagos State",
                    "id": 25,
                    "geocode": {
                        lng: 3.391531071,
                        lat: 6.443261653
                    },
                    "locals": [
                        {
                            "name": "Ajeromi-Ifelodun",
                            "id": 1,
                            "geocode": {
                                lng: 6.455688,
                                lat: 3.337215
                            },
                        },
                        {
                            "name": "Alimosho",
                            "id": 2,
                            "geocode": {
                                lng: 6.552886,
                                lat: 3.269424
                            },
                        },
                        {
                            "name": "Amuwo-Odofin",
                            "id": 3,
                            "geocode": {
                                lng: 6.453307,
                                lat: 3.296373
                            },
                        },
                        {
                            "name": "Apapa",
                            "id": 4,
                            "geocode": {
                                lng: 6.437549,
                                lat: 3.367653
                            },
                        },
                        {
                            "name": "Badagry",
                            "id": 5,
                            "geocode": {
                                lng: 6.429656,
                                lat: 2.892060
                            },
                        },
                        {
                            "name": "Epe",
                            "id": 6,
                            "geocode": {
                                lng: 6.593165,
                                lat: 3.984891
                            },
                        },
                        {
                            "name": "Eti Osa",
                            "id": 7,
                            "geocode": {
                                lng: 6.438564,
                                lat: 3.525110
                            },
                        },
                        {
                            "name": "Ibeju-Lekki",
                            "id": 8,
                            "geocode": {
                                lng: 6.471103,
                                lat: 3.807952
                            },
                        },
                        {
                            "name": "Ifako-Ijaiye",
                            "id": 9,
                            "geocode": {
                                lng: 6.638979,
                                lat: 3.339902
                            },
                        },
                        {
                            "name": "Ikeja",
                            "id": 10,
                            "geocode": {
                                lng: 6.595937,
                                lat: 3.336389
                            },
                        },
                        {
                            "name": "Ikorodu",
                            "id": 11,
                            "geocode": {
                                lng: 6.609471,
                                lat: 3.497573
                            },
                        },
                        {
                            "name": "Kosofe",
                            "id": 12,
                            "geocode": {
                                lng: 6.583331,
                                lat: 3.375452
                            },
                        },
                        {
                            "name": "Lagos Island",
                            "id": 13,
                            "geocode": {
                                lng: 6.456885,
                                lat: 3.399819
                            },
                        },
                        {
                            "name": "Lagos Mainland",
                            "id": 14,
                            "geocode": {
                                lng: 6.483858,
                                lat: 3.380201
                            },
                        },
                        {
                            "name": "Mushin",
                            "id": 15,
                            "geocode": {
                                lng: 6.531800,
                                lat: 3.345678
                            },
                        },
                        {
                            "name": "Ojo",
                            "id": 16,
                            "geocode": {
                                lng: 6.458420,
                                lat: 3.201906
                            },
                        },
                        {
                            "name": "Oshodi-Isolo",
                            "id": 17,
                            "geocode": {
                                lng: 6.562912,
                                lat: 3.344444
                            },
                        },
                        {
                            "name": "Shomolu",
                            "id": 18,
                            "geocode": {
                                lng: 6.536132,
                                lat: 3.372513
                            },
                        },
                        {
                            "name": "Surulere",
                            "id": 19,
                            "geocode": {
                                lng: 6.504673,
                                lat: 3.353777
                            },
                        },
                    ]
                }
            },

            {
                "state": {
                    "name": "Ogun State",
                    "id": 28,
                    "geocode": {
                        lng: 3.350017455,
                        lat: 7.160427265
                    },
                    "locals": [
                        {
                            "name": "Abeokuta South",
                            "id": 1,
                            "geocode": {
                                lng: 7.163745,
                                lat: 3.355090
                            },
                        },
                        {
                            "name": "Ado-Odo\/Ota",
                            "id": 2,
                            "geocode": {
                                lng: 6.693054,
                                lat: 3.236475
                            },
                        },
                        {
                            "name": "Egbado North",
                            "id": 3,
                            "geocode": {
                                lng: 6.906616,
                                lat: 2.792357
                            },
                        },
                        {
                            "name": "Egbado South",
                            "id": 4,
                            "geocode": {
                                lng: 6.896131,
                                lat: 3.021696
                            },
                        },
                        {
                            "name": "Ewekoro",
                            "id": 5,
                            "geocode": {
                                lng: 6.935988,
                                lat: 3.222719
                            },
                        },
                        {
                            "name": "Ifo",
                            "id": 6,
                            "geocode": {
                                lng: 6.833690,
                                lat: 3.193043
                            },
                        },
                        {
                            "name": "Ijebu East",
                            "id": 7,
                            "geocode": {
                                lng: 6.738594,
                                lat: 4.165787
                            },
                        },
                        {
                            "name": "Ijebu North",
                            "id": 8,
                            "geocode": {
                                lng: 6.896787,
                                lat: 4.009129
                            },
                        },
                        {
                            "name": "Ijebu North East",
                            "id": 9,
                            "geocode": {
                                lng: 6.896819,
                                lat: 4.009129
                            },
                        },
                        {
                            "name": "Ijebu Ode",
                            "id": 10,
                            "geocode": {
                                lng: 6.821546,
                                lat: 3.915303
                            },
                        },
                        {
                            "name": "Ikenne",
                            "id": 11,
                            "geocode": {
                                lng: 6.927896,
                                lat: 3.702159
                            },
                        },
                        {
                            "name": "Imeko Afon",
                            "id": 12,
                            "geocode": {
                                lng: 7.647464,
                                lat: 2.851488
                            },
                        },
                        {
                            "name": "Ipokia",
                            "id": 13,
                            "geocode": {
                                lng: 6.536897,
                                lat: 2.835865
                            },
                        },
                        {
                            "name": "Obafemi Owode",
                            "id": 14,
                            "geocode": {
                                lng: 6.953870,
                                lat: 3.505348
                            },
                        },
                        {
                            "name": "Odeda",
                            "id": 15,
                            "geocode": {
                                lng: 7.234632,
                                lat: 3.528868
                            },
                        },
                        {
                            "name": "Odogbolu",
                            "id": 16,
                            "geocode": {
                                lng: 6.895897,
                                lat: 3.900847
                            },
                        },
                        {
                            "name": "Ogun Waterside",
                            "id": 17,
                            "geocode": {
                                lng: 6.489333,
                                lat: 4.394161
                            },
                        },
                        {
                            "name": "Remo North",
                            "id": 18,
                            "geocode": {
                                lng: 6.973042,
                                lat: 3.671867
                            },
                        },
                        {
                            "name": "Shagamu",
                            "id": 19,
                            "geocode": {
                                lng: 6.833697,
                                lat: 3.661736
                            },
                        },
                    ]
                }
            },
            {
                "state": {
                    "name": "Ondo State",
                    "id": 29,
                    "geocode": {
                        lng: 5.199982054,
                        lat: 7.250395934
                    },
                    "locals": [
                        {
                            "name": "Akoko North-West",
                            "id": 1,
                            "geocode": {
                                lng: 7.636346,
                                lat: 5.761035
                            },
                        },
                        {
                            "name": "Akoko South-West",
                            "id": 2,
                            "geocode": {
                                lng: 7.457576,
                                lat: 5.791798
                            },
                        },
                        {
                            "name": "Akoko South-East",
                            "id": 3,
                            "geocode": {
                                lng: 7.447380,
                                lat: 5.907705
                            },
                        },

                        {
                            "name": "Akure North",
                            "id": 4,
                            "geocode": {
                                lng: 7.274726,
                                lat: 5.298323
                            },
                        },
                        {
                            "name": "Akure South",
                            "id": 5,
                            "geocode": {
                                lng: 7.279901,
                                lat: 5.162556
                            },
                        },
                        {
                            "name": "Ese Odo",
                            "id": 6,
                            "geocode": {
                                lng: 6.229918,
                                lat: 4.967875
                            },
                        },
                        {
                            "name": "Idanre",
                            "id": 7,
                            "geocode": {
                                lng: 7.109809,
                                lat: 5.108849
                            },
                        },
                        {
                            "name": "Ifedore",
                            "id": 8,
                            "geocode": {
                                lng: 7.343308,
                                lat: 5.108291
                            },
                        },
                        {
                            "name": "Ilaje",
                            "id": 9,
                            "geocode": {
                                lng: 6.355825,
                                lat: 4.803193
                            },
                        },
                        {
                            "name": "Ile Oluji\/Okeigbo",
                            "id": 10,
                            "geocode": {
                                lng: 7.264392,
                                lat: 4.968185
                            },
                        },
                        {
                            "name": "Irele",
                            "id": 11,
                            "geocode": {
                                lng: 6.488661,
                                lat: 4.869518
                            },
                        },
                        {
                            "name": "Odigbo",
                            "id": 12,
                            "geocode": {
                                lng: 6.781455,
                                lat: 4.872951
                            },
                        },
                        {
                            "name": "Okitipupa",
                            "id": 13,
                            "geocode": {
                                lng: 6.500949,
                                lat: 4.771504
                            },
                        },
                        {
                            "name": "Ondo East",
                            "id": 14,
                            "geocode": {
                                lng: 7.083831,
                                lat: 4.955390
                            },
                        },
                        {
                            "name": "Ondo West",
                            "id": 15,
                            "geocode": {
                                lng: 7.113542,
                                lat: 4.805644
                            },
                        },
                        {
                            "name": "Ose",
                            "id": 16,
                            "geocode": {
                                lng: 6.922061,
                                lat: 5.754204
                            },
                        },
                        {
                            "name": "Owo",
                            "id": 17,
                            "geocode": {
                                lng: 7.198274,
                                lat: 5.592040
                            },
                        },
                    ]
                }
            },
            {
                "state": {
                    "name": "Osun State",
                    "id": 30,
                    "geocode": {
                        lng: 4.179992634,
                        lat: 7.629959329
                    },
                           
                    "locals": [
                        {
                            "id_customer_address_city":"1018",
                            "name":"ARAKEJI",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"75",
                            "name":"EDE",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1015",
                            "name":"EJIGBO (Osun)",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1020",
                            "name":"ESAOKE",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1019",
                            "name":"IJEBU-JESA",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"129",
                            "name":"IKIRE",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1014",
                            "name":"IKIRUN",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1017",
                            "name":"ILA",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"140",
                            "name":"ILA-ORANGUN",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1732",
                            "name":"ILE-IFE - Adesanmi",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1733",
                            "name":"ILE-IFE - Ajebamidele",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1735",
                            "name":"ILE-IFE - AKARABATA",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1736",
                            "name":"ILE-IFE - AP",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1737",
                            "name":"ILE-IFE - Aserifa",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1738",
                            "name":"ILE-IFE - Awoyeku",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1739",
                            "name":"ILE-IFE - Ede Road",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1741",
                            "name":"ILE-IFE - Eleyele",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1742",
                            "name":"ILE-IFE - Ilesa garage\/OAUTH",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1743",
                            "name":"ILE-IFE - Iremo",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1744",
                            "name":"ILE-IFE - Lagere",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1746",
                            "name":"ILE-IFE - Mayfair",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1747",
                            "name":"ILE-IFE - Modomo",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1748",
                            "name":"ILE-IFE - Mokuro",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1740",
                            "name":"ILE-IFE - Moro\/Edunabon\/Ipetumodu",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1749",
                            "name":"ILE-IFE - NTA",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1750",
                            "name":"ILE-IFE - OAU Community",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1751",
                            "name":"ILE-IFE - Oduduwa University",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1752",
                            "name":"ILE-IFE - Oke D.O",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                            
                        },
                        {
                            "id_customer_address_city":"1753",
                            "name":"ILE-IFE - Omole",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1754",
                            "name":"ILE-IFE - Opa",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1755",
                            "name":"ILE-IFE - Our Ladies Modakeke",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1756",
                            "name":"ILE-IFE - Parakin",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1757",
                            "name":"ILE-IFE - Post Office\/Sabo",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"142",
                            "name":"ILESHA",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"144",
                            "name":"ILOKO",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"149",
                            "name":"IREE",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1734",
                            "name":"Iwo",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1012",
                            "name":"IWO (Osun)",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1016",
                            "name":"OKUKU",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"266",
                            "name":"OSHOGBO-CENTRAL LOCATIONS",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"267",
                            "name":"OSOGBO",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1697",
                            "name":"OSOGBO - Abere",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1697",
                            "name":"OSOGBO - Aregbe",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                       
                        {
                            "id_customer_address_city":"1725",
                            "name":"OSOGBO - Agunbelewo",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1698",
                            "name":"OSOGBO - Dada Estate",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1698",
                            "name":"OSOGBO - Fakunle",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1699",
                            "name":"OSOGBO - Igbona",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1711",
                            "name":"OSOGBO - Iludun",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1726",
                            "name":"OSOGBO - Kobo",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1713",
                            "name":"OSOGBO - Ofatedo",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1709",
                            "name":"OSOGBO - Ogo-Oluwa",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1700",
                            "name":"OSOGBO - Oke-Baale",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1702",
                            "name":"OSOGBO - Oke-Fia",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1724",
                            "name":"OSOGBO - Okinni",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1727",
                            "name":"OSOGBO - Old Garage",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1728",
                            "name":"OSOGBO - Olaiya",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1728",
                            "name":"OSOGBO - Olosan",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1729",
                            "name":"OSOGBO - Orisunmibare",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1730",
                            "name":"OSOGBO - Orita Gbemu",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1710",
                            "name":"OSOGBO - Ota-Efun",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1731",
                            "name":"OSOGBO - Powerline",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1717",
                            "name":"OSOGBO - Ring Road",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        },
                        {
                            "id_customer_address_city":"1717",
                            "name":"OWODE EDE",
                            "geocode": {
                                "lng": 7.469840,
                                "lat": 4.674361
                            }
                        }
                       
                    ]
                }
            },
            {
                "state": {
                    "name": "Oyo State",
                    "id": 31,
                    "geocode": {
                        lng: 3.590002806,
                        lat: 7.970016092
                    },
                    "locals": [
                        {
                            "name": "Akinyele",
                            "id": 1,
                            "geocode": {
                                lng: 7.531144,
                                lat: 3.910961
                            },
                        },
                        {
                            "name": "Atiba",
                            "id": 2,
                            "geocode": {
                                lng: 7.980093,
                                lat: 4.085313
                            },
                        },
                        {
                            "name": "Atisbo",
                            "id": 3,
                            "geocode": {
                                lng: 8.544571,
                                lat: 3.440964
                            },
                        },
                        {
                            "name": "Egbeda",
                            "id": 4,
                            "geocode": {
                                lng: 7.379452,
                                lat: 4.045449
                            },
                        },
                        {
                            "name": "Ibadan North",
                            "id": 5,
                            "geocode": {
                                lng: 7.398221,
                                lat: 3.918051
                            },
                        },
                        {
                            "name": "Ibadan North-East",
                            "id": 6,
                            "geocode": {
                                lng: 7.404162,
                                lat: 3.933601
                            },
                        },
                        {
                            "name": "Ibadan North-West",
                            "id": 7,
                            "geocode": {
                                lng: 7.393156,
                                lat: 3.879674
                            },
                        },
                        {
                            "name": "Ibadan South-East",
                            "id": 8,
                            "geocode": {
                                lng: 7.375858,
                                lat: 3.897588
                            },
                        },
                        {
                            "name": "Ibadan South-West",
                            "id": 9,
                            "geocode": {
                                lng: 7.369692,
                                lat: 3.859650
                            },
                        },
                        {
                            "name": "Ibarapa Central",
                            "id": 10,
                            "geocode": {
                                lng: 7.448672,
                                lat: 3.274992
                            },
                        },
                        {
                            "name": "Ibarapa East",
                            "id": 11,
                            "geocode": {
                                lng: 7.532456,
                                lat: 3.427192
                            },
                        },
                        {
                            "name": "Ibarapa North",
                            "id": 12,
                            "geocode": {
                                lng: 7.680439,
                                lat: 3.188265
                            },
                        },
                        {
                            "name": "Ido",
                            "id": 13,
                            "geocode": {
                                lng: 7.474770,
                                lat: 3.763265
                            },
                        },
                        {
                            "name": "Irepo",
                            "id": 14,
                            "geocode": {
                                lng: 9.073573,
                                lat: 3.847316
                            },
                        },
                        {
                            "name": "Iseyin",
                            "id": 15,
                            "geocode": {
                                lng: 7.978103,
                                lat: 3.587507
                            },
                        },
                        {
                            "name": "Itesiwaju",
                            "id": 16,
                            "geocode": {
                                lng: 8.210804,
                                lat: 3.409405
                            },
                        },
                        {
                            "name": "Iwajowa",
                            "id": 17,
                            "geocode": {
                                lng: 7.980192,
                                lat: 3.058100
                            },
                        },
                        {
                            "name": "Kajola",
                            "id": 18,
                            "geocode": {
                                lng: 8.047739,
                                lat: 3.377391
                            },
                        },
                        {
                            "name": "Lagelu",
                            "id": 19,
                            "geocode": {
                                lng: 7.499592,
                                lat: 4.081462
                            },
                        },
                        {
                            "name": "Ogbomosho North",
                            "id": 20,
                            "geocode": {
                                lng: 8.122336,
                                lat: 4.251460
                            },
                        },
                        {
                            "name": "Ogbomosho South",
                            "id": 21,
                            "geocode": {
                                lng: 8.114613,
                                lat: 4.235592
                            },
                        },
                        {
                            "name": "Ogo Oluwa",
                            "id": 22,
                            "geocode": {
                                lng: 7.928811,
                                lat: 4.132187
                            },
                        },
                        {
                            "name": "Olorunsogo",
                            "id": 23,
                            "geocode": {
                                lng: 8.728157,
                                lat: 4.160675
                            },
                        },
                        {
                            "name": "Oluyole",
                            "id": 24,
                            "geocode": {
                                lng: 7.233572,
                                lat: 3.859143
                            },
                        },
                        {
                            "name": "Ona Ara",
                            "id": 25,
                            "geocode": {
                                lng: 7.221529,
                                lat: 4.026200
                            },
                        },
                        {
                            "name": "Orelope",
                            "id": 26,
                            "geocode": {
                                lng: 8.825327,
                                lat: 3.757738
                            },
                        },
                        {
                            "name": "Ori Ire",
                            "id": 27,
                            "geocode": {
                                lng: 8.235530,
                                lat: 4.175770
                            },
                        },
                        {
                            "name": "Oyo",
                            "id": 28,
                            "geocode": {
                                lng: 7.809670,
                                lat: 3.914896
                            },
                        },
                        {
                            "name": "Oyo East",
                            "id": 29,
                            "geocode": {
                                lng: 7.838030,
                                lat: 3.941198
                            },
                        },
                        {
                            "name": "Saki East",
                            "id": 30,
                            "geocode": {
                                lng: 8.631005,
                                lat: 3.633977
                            }
                        },
                        {
                            "name": "Saki West",
                            "id": 31,
                            "geocode": {
                                lng: 8.664754,
                                lat: 3.398834
                            },
                        },
                        {
                            "name": "Surulere",
                            "id": 32,
                            "geocode": {
                                lng: 8.086948,
                                lat: 4.423314
                            },
                        },
                    ]
                },
            }
        ]


})



export const mutations = {
    SIGNUP_WITH_GMAIL(state) {
        state.loginWithGmail = false
    },
    GMAIL_ERROR(state, err) {
        state.gmailErrorMessage = err
    },
    SELECTED_STORE(state, store) {
        state.store = store;
    },

    INCREASE_COUNT(state) {
        state.count++;
    },

    SET_ORDER(state, order) {
        state.order = order;
    },
    CLEAR_ORDER(state) {
        state.order = {};
    },

    
    SET_FULL_ORDER(state,fullorder) {
        state.fullOrder = fullorder;
    },
    CLEAR_FULL_ORDER(state) {
        state.fullOrder = {};
    },


    UPDATE_STORES_IN_LOCATION(state, stores) {


        state.storesInLocation = stores;
    },
    SELECT_STATE(state, selectedstate) {
        state.selectedState = selectedstate;
    },

    SELECT_AREA(state, selectedarea) {
        state.selectedArea = selectedarea;
    },


    UPDATE_MENU_EXTRAS(state, newMenuExtra) {

        state.menuExtras = newMenuExtra;
    },

    GET_FOOD_OPTION(state, optionId) {
        state.FoodOption = lodash.find(state.menuExtras.options, { 'id': optionId })
    },

    GET_LOCAL_GOVT(state, stateName) {

        state.localGovt = []
        const stateAreaObj = JSON.parse(JSON.stringify(state.StatesArea))


        const selectlocalGovt = stateAreaObj.find(states => states.state.name === stateName);
        state.localGovt = selectlocalGovt.state.locals;
    },

    ADD_CART_ITEM(state, newCartItem,repeat) {
        // state.cartItems.push = cartItem

        // const freshCartItem = { id: req.body.id, title: req.body.title, description: req.body.description, price: req.body.price, quantity: 1 };

        let cartItemExists = false;
        

        state.cartItems.map((cartItem, index) => {



            if (cartItem.id === newCartItem.id) {

                cartItem.quantity++;
                cartItemExists = true;

                // if (newCartItem.hasOptions&&repeat) {
                //     // console.log(`cartindex:${index}`);
                //     cartItem.price = newCartItem.price
                //     cartItem.quantity = newCartItem.quantity
                //     cartItemExists = true;

                // }

                // else {
                //     cartItem.quantity++;
                //     cartItemExists = true;
                // }

            }
        });




        if (!cartItemExists) {


            newCartItem.quantity = 1;
            state.cartItems.push(JSON.parse(JSON.stringify(newCartItem)));

        }




    },


    ADD_NEW_CART_ITEM_OPT(state, newCartItem) {
        state.cartItems.push(JSON.parse(JSON.stringify(newCartItem)));
    },

    ADD_CART_ITEM_OPT_QTY(state,newCartItem){
       let item =  lodash.findLast(state.cartItems, ['id', newCartItem.id]);
       item.quantity ++;
    },

    ADD_CART_ITEM_OPT(state, newCartItem) {
        // state.cartItems.push = cartItem

        // const freshCartItem = { id: req.body.id, title: req.body.title, description: req.body.description, price: req.body.price, quantity: 1 };

        let cartItemExists = false;

        state.cartItems.map((cartItem, index) => {



            if (cartItem.id === newCartItem.id) {



                cartItem.quantity++;
                cartItemExists = true;


            }
        });


    },

    REDUCE_CART_ITEM(state, payload) {
        state.cartItems.map((cartItem) => {
            if (cartItem.id === payload.id && payload.quantity > 1) {
                cartItem.quantity--;

            } else if (cartItem.id === payload.id && payload.quantity === 1) {
                const cartIndexToRemove = state.cartItems.findIndex(cartItem => cartItem.id === payload.id);
                state.cartItems.splice(cartIndexToRemove, 1);
            }
        });
    },

    REDUCE_CART_ITEM_OPT(state, payload) {
        state.cartItems.map((cartItem) => {
            if (cartItem.id === payload.id && payload.quantity > 1) {
                cartItem.quantity--;

            } else if (cartItem.id === payload.id && payload.quantity === 1) {
                const cartIndexToRemove = state.cartItems.findIndex(cartItem => cartItem.id === payload.id);
                state.cartItems.splice(cartIndexToRemove, 1);
            }
        });
    },

    REMOVE_CART_ITEM(state, payload) {
        state.cartItems.map((cartItem) => {
            if (cartItem.id === payload.id) {
                const cartIndexToRemove = state.cartItems.findIndex(cartItem => cartItem.id === payload.id);
                state.cartItems.splice(cartIndexToRemove, 1);

            }
        });
    },


    CLEAR_CART_ITEM(state) {
        state.cartItems = []
    }
}

export const actions = {
    updatedSelectedStore({ commit }, data) {
        commit('SELECTED_STORE', data);
    },

    addCartItem({ commit }, data) {
        commit('ADD_CART_ITEM', data)
    },

    getFoodOptions({ commit }, optionId) {
        commit('GET_FOOD_OPTION', optionId)
    },

    getLocalGovt({ commit }, stateName) {
        commit('GET_LOCAL_GOVT', stateName)
    },


    reduceCartItems({ commit }, payload) {

        commit('REDUCE_CART_ITEM', payload)

    },



    updateMenuExtras({ commit }, payload) {
        commit('UPDATE_MENU_EXTRAS', payload)
    },

}

export const getters = {
    vendor: state => state.store,

    statesArea: state => state.StatesArea,

    cartTotal: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return (cartItem.quantity * cartItem.price) + acc
        }, 0).toFixed(2)
    },

    cartQuantity: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return cartItem.quantity + acc
        }, 0)

    },

    containerQuantity: state => {

        return state.cartItems.reduce((acc, cartItem, ) => {

            // console.log(cartItem.hasContainer);

            // return  cartItem.hasContainer?cartItem.quantity + acc:0

            return cartItem.hasContainer ? acc : 0;

            //   if(cartItem.hasContainer){
            //         console.log("i have a container");
            //         console.log(cartItem.quantity+acc);

            //        return cartItem.quantity+acc
            //     }



        }, 0)

    },

    cartItemQuantity: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return cartItem.quantity + acc
        }, 0)

    },

    getFoodOptions: state => state.FoodOption,

    allMenuExtras: state => state.menuExtras,




}