<template>
    <div>
        <div id="home">
            <img alt="Logo" src="../assets/logo.png"><button>START</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'main',
    props: ['data'],
    data(){
        return{     
        }
    }

}
</script>

<style>
    button{
        position: absolute;
        top: 50%; 
        left: 50%; 
        background-color: #23374D;
        color: white;
        border: 2px solid black;
        padding: 16px 32px;
        border-radius: 12px; 
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
    }
    button:hover {
        background-color: #1089FF;
        color: white;
    }
</style>