<template>
    <footer>
        <div class="container">
            <h1 class="atemporal">Atemporal</h1>
            <ul>
                <li>Productos</li>
                <li>Joyas</li>
                <li>Accesorios</li>
                <li>Relojes</li>
                <li>Marroquinería</li>
            </ul>
            <ul>
                <li>Contacto</li>
                <li>atemporalrelojes@gmail.com</li>
                <li>+5493856121301</li>
                <li></li>
            </ul>
            <ul>
                <li>Ayuda</li>
                <li>Contactanos</li>
            </ul>
            <div class="bottom">
                Atemporal &copy; 2024. Todos los derechos reservados.
            </div>
        </div>
    </footer>
</template>
<script setup>

</script>
<style scoped>

footer {
    background-color: #593122;
    color: white;
    margin-top: 2rem;
}

.container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-top: 2rem;
    gap: 2rem 10rem;
    letter-spacing: .05rem;
}

.atemporal {
    place-self: center;
}

ul {
    width: calc((100%/4) - 12rem);
    min-width: 200px;
}


ul > li {
    font-size: .9rem;
    font-weight: 100;
    padding-bottom: .2rem;
}

ul > li:first-child {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;
}

.bottom {
    width: 100%;
    border-top: 1px solid white;
    text-align: center;
    padding: 1rem;
    padding-bottom: 2rem;
    font-weight: 200;

}
</style>    