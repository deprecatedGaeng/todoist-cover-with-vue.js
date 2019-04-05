<template>
  <div id="app">
    <Header></Header>
    <div class="wrapper container">
      <Nav></Nav>
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  #app{
    padding-top:43px;
  }
  /*RESET*/
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input{
    border:none;
    outline: none;
  }
  button,input[type="button"],input[type="submit"]{
    border:none;
    background-color:none;
  }
  a:link,a:visited{
    color:inherit;
    text-decoration: none;
  }
  /*COMMON*/
  html,body{
    position:relative;
    width:100%;
    height:100%;
    background-color:#fafafa;
  }
  .container{
    position:relative;
    min-height:100%;
    width:1080px;
    margin:0 auto;

  }
  .todoist-title{
    font-size:20px;
    margin-bottom:40px;
  }
  /*APP*/
  #app{
    position:relative;
    width:100%;
    height:100%;
  }
  .wrapper{
    padding:40px 80px 40px 345px;
    background-color:#fff;
    border-right: 1px solid #f1f1f1;
  }
</style>
<script>
import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue';
export default {
  components: {
    Header, Nav
  }
}
</script>

