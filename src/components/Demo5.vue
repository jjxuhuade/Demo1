<template>
    <div class="component">
        <div class="container">
            <div class="row">
                <my-component :message="message"/>
                <bs-date-input data-3d-date-picker="true"></bs-date-input>
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


