<template>
	<div>
		<!--头部导航-->
		<vheader></vheader>
		<!--侧边栏-->
		<div :class="{tab:true,tabWidth:!topIcon}" ref="tab">
			<!--收起图标-->
			<div :class="{topBar:true}" v-show="topIcon">
				<i class="iconfont icon-collapse-left1" @click="closeBar"></i>
			</div>
			<div :class="{topBar1:true}" v-show="!topIcon">
				<i class="iconfont icon-shouqi2" @click="closeBar"></i>
			</div>
			<!--一级侧边栏-->
			<div class="bar" @click="iShow=!iShow">
            <span><i class="iconfont icon-xitong" v-show="topIcon"></i><i class="iconfont icon-xitong" title="Example"
                                                                          v-show="!topIcon"></i>Example
            </span><i class="el-icon-arrow-right" v-show="!iShow"></i><i class="el-icon-arrow-down" v-show="iShow"></i>
			</div>
			<!--二级侧边栏-->
			<el-collapse-transition>
				<div v-show="iShow">
					<router-link :class="{getColor:1===limit}" to="//page1" @click.native="link(1)">Table</router-link>
					<router-link :class="{getColor:2===limit}" to="//page2" @click.native="link(2)">页面二</router-link>
					<router-link :class="{getColor:3===limit}" to="//page3" @click.native="link(3)">系统注册</router-link>
					<router-link :class="{getColor:4===limit}" to="//page4" @click.native="link(4)">页面三</router-link>
				</div>
			</el-collapse-transition>
		</div>
		<!--面包屑导航-->
		<div :class="{bread:true,mainWidth:main_width}">
			<el-breadcrumb separator="/">
				<!--<el-breadcrumb-item :to="{ path: '/main/page1' }">{{title}}</el-breadcrumb-item>-->
				<el-breadcrumb-item>{{title}}</el-breadcrumb-item>
				<el-breadcrumb-item>{{title1}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--内容区-->
		<div :class="{main:true,mainWidth:main_width}" ref="main">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	import vheader from '../header/header.vue'
	import {mapGetters} from 'vuex'
	export default {
		name: 'HelloWorld',
		data () {
			return {
				title: 'Example',
				title1: '',
				iShow: false,
				topIcon: true,
				limit: 0,
				main_width: false
			}
		},
		computed: {},
		mounted(){
			this.$refs.tab.style.height = window.innerHeight - 60 + 'px';
			this.$refs.main.style.height = window.innerHeight - 95 + 'px';
		},
		methods: {
			closeBar(){
				this.topIcon = !this.topIcon;
				this.main_width = !this.main_width
			},
			link(index){
				this.limit = index;
			}
		},
		components: {
			vheader
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
	.tab {
		width: 180px;
		background: #2a3542;
		position: fixed;
		top: 60px;
		left: 0;
		.topBar {
			width: 180px;
			height: 40px;
			line-height: 40px;
			color: #fff;
			padding-left: 75px;
		}
		.topBar1 {
			width: 180px;
			height: 40px;
			line-height: 35px;
			color: #fff;
			padding-left: 15px;
		}
		.bar {
			background: #35404d;
			margin-bottom: 1px;
			height: 40px;
			overflow: hidden;
			span {
				display: inline-block;
				width: 160px;
				height: 40px;
				line-height: 40px;
				color: #fff;
				text-align: left;
				text-decoration: none;
				cursor: default;
				user-select: none;
				.icon-xitong {
					margin-left: 15px;
					margin-right: 10px;
				}
			}
			i {
				color: #fff;
			}
		}
		a {
			display: inline-block;
			width: 138px;
			padding-left: 42px;
			height: 40px;
			line-height: 40px;
			font-size: 14px;
			background: #35404d;
			color: #fff;
			margin-bottom: 1px;
			text-align: left;
			text-decoration: none;
			user-select: none;
		}
		.getColor {
			background: #13a1ee;
		}
	}

	.tabWidth {
		width: 42px;
		overflow: hidden;
	}

	.bread {
		margin-top: 60px;
		margin-left: 180px;
		height: 35px;
		border-bottom: 1px solid #ccc;
		box-sizing: border-box;
		padding-left: 10px;
		div {
			line-height: 35px;
		}
	}

	.main {
		margin-left: 180px;
	}

	.mainWidth {
		margin-left: 42px;
	}
</style>
<!--本页面BUG记录：侧边栏的点击事件， 当点击右侧，面包屑导航文字会出现bug-->
