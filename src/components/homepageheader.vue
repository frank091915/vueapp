<template>
	 <mt-header fixed title="">
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
	.mint-header{
		background-color: white;
		color: black;
	}
</style>