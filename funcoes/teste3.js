import axios from 'axios'
import LineChart from '../../../charts/lineChart/lineChart'

export default {
    name: 'manutencaoAdminRelComp',
    components:{ LineChart },
    props:[
        'rotagetchartdadoscomp'
    ],
    data(){
        return{
            meses: '',
            datasets:[],
            gradient: null
        }
    },
    methods: {
        loadDados(){
            axios.get(this.rotagetchartdadoscomp, this.meses).then(res => {
                let dados = res.data

                let re = {
                    label: '',
                    borderColor: '',
                    pointBackgroundColor: "white",
                    borderWidth: 1,
                    pointBorderColor: "white",
                    fill: false,
                    backgroundColor: '',
                    data: ''
                }

                for(let i = 0; i < dados.length; i++){
                    let cor = '#'+Math.random().toString(16).substr(-6)

                    if(this.datasets.length == 0 || !this.datasets[i].label == dados[i.peca]){
                        re = {
                            label: dados[i].peca,
                            borderColor: cor,
                            backgroundColor: cor,
                            data: dados[i].vlTot
                        }
                        console.log(res)
                        //this.datasets.push(re)
                    }

                    /* for(let d = 0; d < this.datasets.length; d++){
                        console.log(this.datasets.length)
                        if(this.datasets.length == 0 || !this.datasets[i].label == dados[i.peca]){
                            re = {
                                label: dados[i].peca,
                                borderColor: cor,
                                backgroundColor: cor,
                                data: dados[i].vlTot
                            }
                            console.log(dados)
                            //this.datasets.push(re)
                        }
                    } */


                    /* if(!this.datasets.label === dados[i].peca){
                        this.datasets.borderColor = cor
                        this.datasets.label = dados[i].peca
                        this.datasets.data = dados[i].vlTot
                    } else {
                        this.datasets.data.push(dados[i].vltot)
                    } */
                }

                /* for(let i = 0; i < dados.length; i++){

                    let cor = '#'+Math.random().toString(16).substr(-6)

                    const re = {
                        label: dados[i].peca,
                        borderColor: cor,
                        pointBackgroundColor: "white",
                        borderWidth: 1,
                        pointBorderColor: "white",
                        fill: false,
                        //backgroundColor: this.gradient,
                        backgroundColor: cor,
                        data: dados[i].vlTot
                    }
                    this.datasets.push(re)
                }
                //console.log(this.datasets) */
                
                const getMes = item => item.mes
                this.meses = dados.map(getMes)
            })
        }
        
    },
    computed: {
        
    },
    mounted() {
        this.loadDados()
        
        /* this.gradient = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(this.cor)

        gradient.addColorStop(0, this.cor)
        gradient.addColorStop(0.5, this.cor)
        gradient.addColorStop(1, this.cor) */

        /* this.gradient = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 450)
        this.gradient2 = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 450)

        this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)")
        this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)")
        this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)")

        this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)")
        this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)")
        this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)") */
    }

}