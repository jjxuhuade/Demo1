<template>
    <div class="component">
        <div class="container">
            <div class="row">
                <my-component :message="message"/>
            </div>

        </div>
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
        message: {name: 'user01', age: '22'}
      }
    }
  }
</script>


