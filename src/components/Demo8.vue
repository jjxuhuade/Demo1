<template>
    <div class="component">
        <div class="container">
            <div class="row">

                <div>
                    <h4>我是父组件的标题</h4>
                    <my-component>slot有内容,默认内容不显示</my-component>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
      }
    },
    methods: {
    }
  }
</script>


