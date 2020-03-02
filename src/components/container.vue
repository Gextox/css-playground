<template>
    <div id="container">    <!-- Grid container -->
                <div id="info">     <!-- Left / Bottom container -->
                    <div id="infoDiv" class="bg-danger">
                        <!-- info component -->
                    </div>
                    <div id="inputDiv" class="d-flex align-items-center justify-content-center bg-success">
                        <component :is="view" v-on:eraseStyleInput="restartStyle" v-on:pullStyleInput="updateStyle"></component>
                    </div>
                </div>
                <div id="playground" class="d-flex align-items-center justify-content-center bg-info" >   <!-- Playground container -->
                    <Object :code="inputCode"></Object>
                </div>
    </div>
</template>

<script>

import Input from './input'
import Object from './object'

export default {
    name: 'container',
    components:{
        Input,
        Object
    },
    data(){
        return{
            view: "Input",
            inputCode: ''
        }
    },
    methods:{
        updateStyle(stylecode){
            this.inputCode += (stylecode + ";")
        },
        restartStyle(event){
            this.inputCode = event;
        }
    }
}

</script>

<style>

    *{
        margin: 0;
        padding: 0;
    }

    #container{
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
            "playground playground"
            "info info";
    }

    #info{
        background-color:black;
        grid-area: info;
    }

    #playground{
        /* background-color: green; */
        grid-area: playground
    }
    
    #infoDiv{
        height: 50%
    }

    #inputDiv{
        height: 50%
    }

    @media (orientation:landscape){
        #container{
            grid-template-areas:
            "info playground"
            "info playground";
        }
    }

    @media (orientation:portrait){
        #container{
            grid-template-rows: 1fr 2fr;
        }
    }

</style>