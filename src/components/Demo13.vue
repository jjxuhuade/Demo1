<template>
    <div class="component">
        <div class="container">
            <div class="row">
                <component :is="current">

                </component>
            </div>

        </div>
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
        current: 'com3'
      }
    },
    methods: {},
    components: {
      com1: {
        template: '<div>component1</div>'
      },
      com2: {
        template: '<div>component2</div>'
      },
      com3: {
        template: '<div>component3</div>'
      }
    }
  }
</script>


