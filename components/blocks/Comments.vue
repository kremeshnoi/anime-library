<template lang="pug">

  section.comments
    .comments__container
      .comments__title
        | Comments

    .comments__content
    wysiwyg.comments__wysiwyq

</template>

<script>

  export default {
    name: "Comments"
  }

</script>

<style lang="sass" scoped>

  .comments
    grid-area: comments

</style>
