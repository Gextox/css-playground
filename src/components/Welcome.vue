<template>
    <div id="main_div">
        <div id="texts_div">
            <div id="title">Welcome to CSS Playground!</div>
            <div class="paragraphs">Here you´ll learn the basics of CSS such as changing the colors, height and width of objects and styling fonts.</div> 
            <div class="paragraphs">Feel free to try anything. If something breaks just press the Reset button and you´ll be fine.</div>
            <div class="paragraphs">Almost every CSS property is coded first with its name and then the value you want to apply to it. So keep in mind this syntax for the next excercises.</div>
            <button v-on:click="changeView('Container')">Continue</button>
        </div>
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
    #main_div{
        background-color: lightskyblue;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    #texts_div{
        height: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }


    @media(min-width: 0px){
    #texts_div div{
        flex-grow: 0.2;
        text-align: center;
        padding: 10px;
        color: #23374D;
        font-family: 'Righteous';
        }

        .paragraphs{
            font-size:18px;
        }

        #title{
            font-size: 30px;
        }

        button{
            font-family: 'Righteous';
            height: 50px;
            margin-right: 10px;
            border-radius: 10px; 
        }

        button:active{
            background-color: #23374D;
            color: #EEEEEE;
        } 
    }


    @media (min-width: 700px){
        #texts div{
            flex-grow: 0.2;
            text-align: center;
            padding: 5%;
            color: #23374D;
            font-family: 'Righteous';
        }
        
        .paragraphs{
            font-size: 30px;
        }
        
        #title{
            font-size: 50px;
        }
        
        button{
            font-family: 'Righteous';
            height: 50px;
            width: 100px;
            margin-right: 10px;
            border-radius: 10px; 
        }
    } 
</style>