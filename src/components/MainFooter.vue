<template lang="pug">

  footer.page-footer.footer
    .container
      .row
        .col.l5.s12
          h5.white-text Discord channel
          p.white-text We will also be happy to meet you on our channel, where you can always find like-minded people. Feel free to come in.
          a.waves-effect.waves-light.btn(href="https://discord.com/invite/Ku72D5/" target="_blank") Chat

        .col.l5.offset-l2.s12
          h5.white-text
          ul
            li
              a.footer-link(href='https://www.linkedin.com/in/alexander-kremeshnoi/' target="_blank") LinkedIn
            li
              a.footer-link(href='https://github.com/kremeshnoi' target="_blank") Github
            li
              a.footer-link(href='https://shikimori.one/SIDREZNOR' target="_blank") Shikimori

    .footer-copyright
      .container
        span.footer-very-low-bar
          p.grey-text.text-lighten-4.footer-very-low-bar-text Inspired by
            a.footer-link(href="https://myanimelist.net/" target="_blank")  MAL
          p.grey-text.text-lighten-4.footer-very-low-bar-text and
            a.footer-link(href="https://shikimori.org/" target="_blank")  Shikimori

</template>

<script>

  export default {
    name: "MainFooter"
  }

</script>

<style lang="sass" scoped>

  .footer
    width: 100%
    text-align: start
    background-color: rgb(35, 77, 173)

    &-link
      &:hover
        color: rgba(255, 255, 255, 0.7)

    &-very-low-bar
      display: flex
      justify-content: center

      &-text
        margin: 0 4px 0 0



</style>
