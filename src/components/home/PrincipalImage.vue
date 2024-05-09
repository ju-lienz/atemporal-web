<template>
    <img src="@/assets/images/imagen3.jpg" :style="{
        width: '100%',
        maxHeight: '100vh',
        filter: 'brightness(0.6)',
        position: 'absolute',
        objectFit:'cover',
        top: '0',
        zIndex: '-1'
    }">
    <div class="container-text ">
        <div class="text-principal">
            <h2 class="arsenica" :style="{
                color: '#F2D49B',
                fontSize: '3.5rem',
                width: '100%'
            }">Expresa tu personalidad con</h2>
            
            <StarIcon color="#fbfbfb"/>
            <h3 class="atemporal">Atemporal</h3>

            
            <StarIcon color="#fbfbfb"/>
            <p>Queremos acercarte una exclusiva línea de accesorios seleccionados para ser tu complemento ideal en el
                día a día o en ocasiones especiales. Nuestra misión es que cada accesorios que elijas sea el reflejo de
                tu personalidad y estilo</p>
            <div class="scroll">
                Descubre más
                <ArrowDownIcon />
            </div>
        </div>
    </div>
</template>
<script setup>
import ArrowDownIcon from '@/assets/icons/ArrowDownIcon.vue';
import StarIcon from '@/assets/icons/StarIcon.vue';


</script>
<style scoped>
.container-text {
    z-index: 100;
    display: flex;
    min-height: 100vh;
    align-items: center;
    padding-left: 5rem;
}

.text-principal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    gap: .5rem;
    max-width: 730px;
    height: 100vh;
}

p {
    font-weight: 100;
    color: #fbfbfb;
    font-size: clamp(16px, 1vw, 20px);
    line-height: 1.5rem;
    padding-right: 1rem;
    padding-top: 1rem;
}

.atemporal {
    font-size: 5rem;
    width: 100%;
    text-align: center
}

.scroll {
    position: absolute;
    bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    font-size: 1.2rem;
    color: #fbfbfb;
    font-weight: 100;
}

</style>