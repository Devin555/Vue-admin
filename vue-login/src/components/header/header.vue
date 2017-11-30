<template>
	<div class="header">
		<span class="logo">Vue-admin</span>
		<el-dropdown @command="handleCommand" class="signout">
		      <span class="el-dropdown-link">
		        个人中心<i class="el-icon-arrow-down el-icon--right"></i>
		      </span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="1">个人信息</el-dropdown-item>
				<el-dropdown-item command="2">退出</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<span class="screenFull"><i class="iconfont icon-icwindowzoom48px" @click="toScreenFull"></i></span>
	</div>
</template>

<script>
	export default {
		name: 'vheader',
		data () {
			return {}
		},
		created(){
		},
		computed: {},
		components: {},
		methods: {
			handleCommand(command) {
				if (command == 1) {
					this.$router.push({path: '/user'})
				} else if (command == 2) {
					window.localStorage.setItem('TOKEN', "");
					this.$router.push({path: '/login'})
				}
			},
			toScreenFull(){
				var de = document.documentElement;
				if (de.requestFullscreen) {
					de.requestFullscreen();
				} else if (de.mozRequestFullScreen) {
					de.mozRequestFullScreen();
				} else if (de.webkitRequestFullScreen) {
					de.webkitRequestFullScreen();
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
	.header {
		width: 100%;
		height: 54px;
		background: #3399cc;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 5000;
		.signout {
			color: #fff;
			cursor: pointer;
			float: right;
			margin-top: 18px;
			margin-right: 15px;
		}
		.logo {
			display: inline-block;
			width: 180px;
			height: 54px;
			line-height: 54px;
			text-align: center;
			font-size: 23px;
			color: #fff;
			font-weight: 600;
			user-select: none;
		}
		.screenFull{
			float: right;
			width: 54px;
			height: 54px;
			line-height: 54px;
			text-align: center;
			i{
				color: #fff;
				font-size: 20px;
				cursor: pointer;
			}
		}
	}
</style>
