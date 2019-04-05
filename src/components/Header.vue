<template>
    <header class="header">
        <div class="container">
            <div class="header__logo"></div>
        </div>
    </header>
</template>
<style lang="scss">
.header{
    display:block;
    width:100%;
    height:43px;
    position:fixed;
    top:0;
    left:0;
    background-color:#222;
    color:#fff;
    z-index: 40;
    .container{
        position:relative;
        padding-left:265px;
    }
}
.header__logo{
    position:absolute;
    left:0;
    top:0;
    width:44px;
    height:44px;
    background-size:80%;
    background-repeat: no-repeat;
    background-position: center;
    background-image:url(../assets/logo_white.png);
}
</style>
<script>
export default {
  name: 'Header',
};
</script>
