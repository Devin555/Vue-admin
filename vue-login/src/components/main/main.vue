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
			<!--Example-->
			<div class="bar" @click="iShow(1)">
	            <span><i class="iconfont icon-xitong" v-show="topIcon"></i><i class="iconfont icon-xitong"
	                                                                          v-show="!topIcon" @click="stop($event)"
	                                                                          @mouseenter="showS_bar(1)"
	                                                                          @mouseleave="hideS_bar"></i>Example
	            </span><i class="el-icon-arrow-right" v-show="this.second !== 1"></i><i class="el-icon-arrow-down"
	                                                                                    v-show="this.second == 1"></i>
			</div>
			<!--二级侧边栏-->
			<el-collapse-transition>
				<div v-show="this.second == 1">
					<router-link :class="{getColor:1===limit}" to="//table" @click.native="link(1)">Table</router-link>
					<router-link :class="{getColor:2===limit}" to="//page2" @click.native="link(2)">富文本编辑器</router-link>
					<router-link :class="{getColor:3===limit}" to="//page3" @click.native="link(3)">注册</router-link>
					<router-link :class="{getColor:4===limit}" to="//page4" @click.native="link(4)">截取图片下载</router-link>
				</div>
			</el-collapse-transition>
			<!--组件-->
			<div class="bar" @click="iShow(2)">
	            <span><i class="iconfont icon-zujian1" v-show="topIcon"></i><i class="iconfont icon-zujian1"
	                                                                           v-show="!topIcon" @click="stop($event)"
	                                                                           @mouseenter="showS_bar(2)"
	                                                                           @mouseleave="hideS_bar"></i>组件
	            </span><i class="el-icon-arrow-right" v-show="this.second !== 2"></i><i class="el-icon-arrow-down"
	                                                                                    v-show="this.second == 2"></i>
			</div>
			<!--二级侧边栏-->
			<el-collapse-transition>
				<div v-show="this.second == 2">
					<router-link :class="{getColor:5===limit}" to="" @click.native="link(5)">Table</router-link>
					<router-link :class="{getColor:6===limit}" to="" @click.native="link(6)">页面二</router-link>
					<router-link :class="{getColor:7===limit}" to="" @click.native="link(7)">系统注册</router-link>
					<router-link :class="{getColor:8===limit}" to="" @click.native="link(8)">页面三</router-link>
				</div>
			</el-collapse-transition>
			<!--图表-->
			<div class="bar" @click="iShow(3)">
	            <span><i class="iconfont icon-chart" v-show="topIcon"></i><i class="iconfont icon-chart"
	                                                                         v-show="!topIcon"
	                                                                         @click="stop($event)"
	                                                                         @mouseenter="showS_bar(3)"
	                                                                         @mouseleave="hideS_bar"></i>图表
	            </span><i class="el-icon-arrow-right" v-show="this.second !== 3"></i><i class="el-icon-arrow-down"
	                                                                                    v-show="this.second == 3"></i>
			</div>
			<!--二级侧边栏-->
			<el-collapse-transition>
				<div v-show="this.second == 3">
					<router-link :class="{getColor:9===limit}" to="" @click.native="link(9)">Table</router-link>
					<router-link :class="{getColor:10===limit}" to="" @click.native="link(10)">页面二</router-link>
					<router-link :class="{getColor:11===limit}" to="" @click.native="link(11)">系统注册</router-link>
					<router-link :class="{getColor:12===limit}" to="" @click.native="link(12)">页面三</router-link>
				</div>
			</el-collapse-transition>
			<!--excel-->
			<div class="bar" @click="iShow(4)">
	            <span><i class="iconfont icon-Excel" v-show="topIcon"></i><i class="iconfont icon-Excel"
	                                                                         v-show="!topIcon"
	                                                                         @click="stop($event)"
	                                                                         @mouseenter="showS_bar(4)"
	                                                                         @mouseleave="hideS_bar"></i>Excel
	            </span><i class="el-icon-arrow-right" v-show="this.second !== 4"></i><i class="el-icon-arrow-down"
	                                                                                    v-show="this.second == 4"></i>
			</div>
			<!--二级侧边栏-->
			<el-collapse-transition>
				<div v-show="this.second == 4">
					<router-link :class="{getColor:13===limit}" to="//excel" @click.native="link(13)">export excel
					</router-link>
					<router-link :class="{getColor:14===limit}" to="//select_excel" @click.native="link(14)">export
						selected
					</router-link>
					<router-link :class="{getColor:15===limit}" to="//unload_excel" @click.native="link(15)">unload
						excel
					</router-link>
				</div>
			</el-collapse-transition>
			<!--zip-->
			<div class="bar" @click="iShow(5)">
	            <span><i class="iconfont icon-zip1" v-show="topIcon"></i><i class="iconfont icon-zip1"
	                                                                        v-show="!topIcon"
	                                                                        @click="stop($event)"
	                                                                        @mouseenter="showS_bar(5)"
	                                                                        @mouseleave="hideS_bar"></i>Zip
	            </span><i class="el-icon-arrow-right" v-show="this.second !== 5"></i><i class="el-icon-arrow-down"
	                                                                                    v-show="this.second == 5"></i>
			</div>
			<!--二级侧边栏-->
			<el-collapse-transition>
				<div v-show="this.second == 5">
					<router-link :class="{getColor:16===limit}" to="//zip" @click.native="link(16)">export zip
					</router-link>
				</div>
			</el-collapse-transition>
		</div>
		<!--一级侧边栏收起后显示的二级侧边栏-->
		<transition name="el-zoom-in-left">
			<div class="exampleSecond exampleSecond_top01" v-show="this.exampleBar==1" @mouseenter="showS_bar(1)"
			     @mouseleave="hideS_bar">
				<router-link :class="{getColor:1===limit}" to="//table" @click.native="link(1)">Table</router-link>
				<router-link :class="{getColor:2===limit}" to="//page2" @click.native="link(2)">富文本编辑器</router-link>
				<router-link :class="{getColor:3===limit}" to="//page3" @click.native="link(3)">注册</router-link>
				<router-link :class="{getColor:4===limit}" to="//page4" @click.native="link(4)">截取图片下载</router-link>
			</div>
		</transition>
		<transition name="el-zoom-in-left">
			<div class="exampleSecond exampleSecond_top02" v-show="exampleBar==2" @mouseenter="showS_bar(2)"
			     @mouseleave="hideS_bar">
				<router-link :class="{getColor:5===limit}" to="" @click.native="link(5)">Table</router-link>
				<router-link :class="{getColor:6===limit}" to="" @click.native="link(6)">页面二</router-link>
				<router-link :class="{getColor:7===limit}" to="" @click.native="link(7)">系统注册</router-link>
				<router-link :class="{getColor:8===limit}" to="" @click.native="link(8)">页面三</router-link>
			</div>
		</transition>
		<transition name="el-zoom-in-left">
			<div class="exampleSecond exampleSecond_top03" v-show="exampleBar==3" @mouseenter="showS_bar(3)"
			     @mouseleave="hideS_bar">
				<router-link :class="{getColor:9===limit}" to="" @click.native="link(9)">Table</router-link>
				<router-link :class="{getColor:10===limit}" to="" @click.native="link(10)">页面二</router-link>
				<router-link :class="{getColor:11===limit}" to="" @click.native="link(11)">系统注册</router-link>
				<router-link :class="{getColor:12===limit}" to="" @click.native="link(12)">页面三</router-link>
			</div>
		</transition>
		<transition name="el-zoom-in-left">
			<div class="exampleSecond exampleSecond_top04" v-show="exampleBar==4" @mouseenter="showS_bar(4)"
			     @mouseleave="hideS_bar">
				<router-link :class="{getColor:13===limit}" to="//excel" @click.native="link(13)">export excel
				</router-link>
				<router-link :class="{getColor:14===limit}" to="//select_excel" @click.native="link(14)">export
					selected
				</router-link>
				<router-link :class="{getColor:15===limit}" to="//unload_excel" @click.native="link(15)">unload excel
				</router-link>
			</div>
		</transition>
		<transition name="el-zoom-in-left">
			<div class="exampleSecond exampleSecond_top05" v-show="exampleBar==5" @mouseenter="showS_bar(5)"
			     @mouseleave="hideS_bar">
				<router-link :class="{getColor:16===limit}" to="//zip" @click.native="link(16)">export excel
				</router-link>
			</div>
		</transition>
		<!--面包屑导航-->
		<div :class="{bread:true,mainWidth:main_width}">
			<el-breadcrumb separator="/">
				<!--<el-breadcrumb-item :to="{ path: '/main/table' }">{{title}}</el-breadcrumb-item>-->
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
				topIcon: true,
				limit: 0,
				main_width: false,
				second: 0,
				exampleBar: 0
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
				this.main_width = !this.main_width;
				this.second = 0;
				this.Sbar = true
			},
			link(index){
				this.limit = index;
			},
			iShow(index){
				this.second = index;
			},
			showS_bar(index){
				this.exampleBar = index
			},
			hideS_bar(){
				this.exampleBar = 0
			},
			stop(event){
				event.cancelBubble = true;
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
			cursor: pointer;
		}
		.topBar1 {
			width: 180px;
			height: 40px;
			line-height: 35px;
			color: #fff;
			padding-left: 15px;
			cursor: pointer;
		}
		.bar {
			background: #35404d;
			margin-bottom: 1px;
			height: 40px;
			cursor: pointer;
			overflow: hidden;
			span {
				display: inline-block;
				width: 160px;
				height: 40px;
				line-height: 40px;
				color: #fff;
				text-align: left;
				text-decoration: none;
				cursor: pointer;
				user-select: none;
				font-size: 14px;
				.icon-xitong, .icon-zujian1, .icon-chart, .icon-Excel, .icon-zip1 {
					display: inline-block;
					width: 45px;
					text-align: center;
				}
			}
			i {
				color: #fff;
				cursor: pointer;
			}
		}
		a {
			display: inline-block;
			width: 180px;
			height: 40px;
			line-height: 40px;
			font-size: 14px;
			background: #35404d;
			color: #ccc;
			margin-bottom: 1px;
			text-align: center;
			text-decoration: none;
			user-select: none;
		}
		.getColor {
			color: #13a1ee;
		}
	}

	.exampleSecond {
		width: 180px;
		position: absolute;
		/*top: 100px;*/
		left: 45px;
		z-index: 9999;
		background: #2a3542;
		border-radius: 5px;
		overflow: hidden;
		border-left: 1px solid #ccc;
		a {
			display: inline-block;
			width: 180px;
			height: 40px;
			line-height: 40px;
			font-size: 14px;
			background: #35404d;
			color: #ccc;
			margin-bottom: 1px;
			text-align: center;
			text-decoration: none;
			user-select: none;
		}
		.getColor {
			color: #13a1ee;
		}
	}

	.exampleSecond_top01 {
		top: 100px
	}

	.exampleSecond_top02 {
		top: 141px
	}

	.exampleSecond_top03 {
		top: 182px
	}

	.exampleSecond_top04 {
		top: 223px
	}

	.exampleSecond_top05 {
		top: 264px
	}

	.tabWidth {
		width: 45px;
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
		margin-left: 45px;
	}
</style>
