<template>
	 <mt-header fixed title="仅图标">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right" icon="more"></mt-button>
      </mt-header>
</template>

<script>
	export default {
	  name: 'homepageheader',
	  data() {
	    return {
	    };
	  },
	  methods: {

	  }
	};
</script>

<style>
</style>