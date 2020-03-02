<template>
    <div id="object"  :style='code'></div>
</template>

<script>
export default {
    name: 'Object',
    props: ['code'],
    data(){
        return {

        }
    }
    
}
</script>

<style>
    #object{
        height: 30%;
        width: 30%;
        border: 2px solid black;
    }
</style>


// Paleta
    Oscuro: #23374d
    Azul: #1089ff
    Blanco Oscuro: #e5e5e5
    Blanco claro: #eeeeee
