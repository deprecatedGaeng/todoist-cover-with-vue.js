<template>
    <nav class="nav">
        <ul class="nav__menu">
            <li class="nav__menu-item">
                <svg width="24" height="24"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M6 20h12a2 2 0 0 0 2-2v-4h-4.4l-.635 1.41a1 1 0 0 1-.912.59H9.947a1 1 0 0 1-.912-.59L8.4 14H4v4a2 2 0 0 0 2 2z"></path><path stroke="currentColor" d="M4.526 13.004a.5.5 0 0 0-.026.158V18A1.5 1.5 0 0 0 6 19.5h12a1.5 1.5 0 0 0 1.5-1.5v-4.838a.5.5 0 0 0-.026-.158l-2.16-6.478A1.5 1.5 0 0 0 15.893 5.5H8.108a1.5 1.5 0 0 0-1.423 1.026l-2.16 6.478z"></path></g></svg>
                <router-link to="/">관리함</router-link>
            </li>
            <li class="nav__menu-item">
                <svg width="24" height="24"><g fill="currentColor" fill-rule="evenodd"><path d="M20 8v9.436c0 .892-.093 1.215-.267 1.54a1.81 1.81 0 0 1-.756.757c-.326.174-.65.267-1.54.267H6.563c-.892 0-1.215-.093-1.54-.267a1.817 1.817 0 0 1-.757-.756c-.174-.326-.267-.65-.267-1.54V6a2 2 0 0 1 2-2h1V2.5a.5.5 0 0 1 1 0V4h8V2.5a.5.5 0 1 1 1 0V4h1a2 2 0 0 1 2 2v2zM6.564 8c-.662 0-.864.039-1.07.149a.818.818 0 0 0-.345.346C5.039 8.7 5 8.902 5 9.564v7.872c0 .662.039.864.149 1.07a.818.818 0 0 0 .346.345c.205.11.407.149 1.069.149h10.872c.662 0 .864-.039 1.07-.149a.818.818 0 0 0 .345-.346c.11-.205.149-.407.149-1.069V9.564c0-.662-.039-.864-.149-1.07a.818.818 0 0 0-.346-.345C18.3 8.039 18.098 8 17.436 8H6.564z"></path><text font-family="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" font-size="9" transform="translate(4 2)"><tspan x="7.7" y="14.5" text-anchor="middle">3</tspan></text></g></svg>
                <router-link to="/today">오늘</router-link>
            </li>
            <li class="nav__menu-item">
                <svg width="24" height="24"><path fill="currentColor" fill-rule="evenodd" d="M20 8v9.436c0 .892-.093 1.215-.267 1.54a1.81 1.81 0 0 1-.756.757c-.326.174-.65.267-1.54.267H6.563c-.892 0-1.215-.093-1.54-.267a1.817 1.817 0 0 1-.757-.756c-.174-.326-.267-.65-.267-1.54V6a2 2 0 0 1 2-2h1V2.5a.5.5 0 0 1 1 0V4h8V2.5a.5.5 0 1 1 1 0V4h1a2 2 0 0 1 2 2v2zM6.564 8c-.662 0-.864.039-1.07.149a.818.818 0 0 0-.345.346C5.039 8.7 5 8.902 5 9.564v7.872c0 .662.039.864.149 1.07a.818.818 0 0 0 .346.345c.205.11.407.149 1.069.149h10.872c.662 0 .864-.039 1.07-.149a.818.818 0 0 0 .345-.346c.11-.205.149-.407.149-1.069V9.564c0-.662-.039-.864-.149-1.07a.818.818 0 0 0-.346-.345C18.3 8.039 18.098 8 17.436 8H6.564zM8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></svg>
                <router-link to="/nextSevenDays">다음 7일</router-link>
            </li>
        </ul>
    </nav>
</template>
<style lang="scss">
.nav{
    width:265px;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:#fafafa;
    padding:20px 0;
    border-right: 1px solid #f1f1f1;
}
.nav__menu{
    padding:20px 0;
}
.nav__menu-item{
    position:relative;
    padding-left:30px;
    svg{
        position:absolute;
        left:0;
        top:50%;
        transform: translateY(-50%);
    }
}
.nav__menu-item a{
    padding:20px 0;
    display:block;
    &:hover{
        background-color:#f1f3f5;
    }
}
</style>
<script>
export default {
  name: 'Nav'
};
</script>
