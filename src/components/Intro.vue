<template>
    <div id="main_div">
            <img alt="Logo" src="../assets/logo.png" >
            <button v-on:click="changeView('Welcome')">START</button>
    </div>
</template>

<script>
export default {
    methods:{
        changeView(String){
            this.$emit('changeCurrent', String)
        }
    }
}
</script>

<style scoped>
    *{
    font-family: Righteous;
}

    #main_div{
        background-color: lightskyblue;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    #main_div img{
        height: 200px;
        width: 350px;
        margin-bottom: 100px;
    }

    button{
        background-color: #EEEEEE;
        color: #23374D;
        border: 2px solid black;
        padding: 10px 25px;
        margin-top: 50px;
        border-radius: 12px; 
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 20px;
        cursor: pointer;
    }
    button:active {
        background-color: lightskyblue ;
        color: #23374D;
    }

    @media(min-width: 700px){
        #main_div img{
            height: 400px;
            width: 600px;
        }
        button{
            padding: 15px 30px;
            margin-top: 50px;
            border-radius: 12px; 
            font-size: 40px;
        }
    }

    @media(min-width: 1500px){
        #main_div img{
            height: 500px;
            width: 900px;
        }
        button{
            padding: 15px 30px;
            margin-top: 50px;
            border-radius: 12px; 
            font-size: 50px;
        }
    }

    @media(orientation: landscape){
        @media (min-width: 500px){
            #main_div img{
                height: 200px;
                width: 400px;
                margin-bottom: 0;
            }
            button{
                padding: 15px 30px;
                margin-top: 20px;
                border-radius: 12px; 
                font-size: 20px;
            } 
        }
        @media (min-width: 900px){    
        #main_div img{
            height: 500px;
            width: 900px;
            margin-bottom: 0;
        }
        button{
            padding: 15px 30px;
            margin-top: 20px;
            border-radius: 12px; 
            font-size: 50px;
        }
            
        }
        @media(min-width: 1500px){
            #main_div img{
                height: 500px;
                width: 900px;
            }
            button{
                padding: 15px 30px;
                margin-top: 50px;
                border-radius: 12px; 
                font-size: 50px;
            }
        }
    }
</style>