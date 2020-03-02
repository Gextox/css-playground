<template>
        <table>
            <tbody>
                <tr>
                    <td class="lineIndex">1</td>
                    <td class="lineCode">#rectangle{</td>
                </tr>
                <tr>
                    <td class="lineIndex">2</td>
                    <td class="lineCode property">height: 30%;</td>
                </tr>
                <tr>
                    <td class="lineIndex">3</td>
                    <td class="lineCode property">width: 30%;</td>
                </tr>
                <tr>
                    <td class="lineIndex">4</td>
                    <td class="lineCode property">border: 2px solid black;</td>
                </tr>
                <tr>
                    <td class="lineIndex">5</td>
                    <td class="lineCode property"><input @keyup.enter="readRefs" type="text" ref="input">;</td>
                </tr>
                <tr>
                    <td class="lineIndex"></td>
                    <td class="d-flex justify-content-end"><button v-on:click="restart">Reset</button><button v-on:click="readRefs">Let's see!</button></td>
                </tr>
            </tbody>
        </table>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        readRefs: function(){
            this.$emit('pullStyleInput', this.$refs.input.value);
            this.$refs.input.value = '';
        },
        restart: function(){
            this.$emit('eraseStyleInput', '');
        }
    }
}
</script>





<style scoped>
    table{
        position: relative;
        background-color:#E5E5E5;
        color: #23374D;
        border-collapse: collapse;
        font-family: 'Righteous';
        height: 30%;
        width: 80%;
        border-radius: 0 20px 20px 0;
    }


    .lineIndex{
        text-align: center;
        background-color: #23374D;
        color: #EEEEEE;
        width: 10%;
        height: 10%;
    }

    .property{
        padding-left: 10%;
    }

    button{
        font-family: 'Righteous';
        height: 100%;
        border-radius: 8px;
        margin-right: 2%;
        margin-bottom: 0%
    }

    button:active{
        background-color: #23374D;
        color: #EEEEEE;
    }
</style>