<template>
     <div 
                    class="dropdown-content pt-5 pb-3 animate__animated animate__fadeIn text-start"
                    style="left:0;"
                >
                    <div class="custom-container row">
                        <div class="col-2 " v-for="(item, index) in subtitles" :key="index">
                            <p class="fw-bold" >{{item.name}}</p>
                            <p class="subItemLink font-title" v-for="(subItem) in item.content" :key="subItem.id">{{subItem.name}}</p>
                            
                        </div>
                       
                        <div class="col-2">
                            <img v-if="photo != undefined" class="img-fluid" :src="photo" alt="">
                        </div>
                    </div>
                    
                </div>
        
    
</template>

<script>

export default{
    props:["subtitles","photo"],
    
}
</script>

<style>
.subItemLink{
    cursor: pointer;
    transition: all .1s ease-in-out;
}
.subItemLink:hover{
    color: #a5a5a5;
}

</style>