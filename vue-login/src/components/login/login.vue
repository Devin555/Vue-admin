<template>
	<div class="logintmpl" ref="logintmpl">
		<div class="login">
			<el-form ref="form" label-width="60px">
				<el-form-item label="姓名">
					<el-input v-model="username"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="password"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" style="width: 100%" @click="confirm" size="medium">登 录</el-button>
				</el-form-item>
				<div class="tip">账号：F1333553 密码：123456</div>
			</el-form>
		</div>
	</div>
</template>

<script>
	let Base64 = require('js-base64').Base64;
	import {mapGetters} from 'vuex'
	export default {
		name: 'HelloWorld',
		data () {
			return {
				username: '',
				password: '',
				keyPassword: '',
				token: 'asdfasdfaskjdf23j423jasjdfjasdfjaskdfjasdklf'
			}
		},
		mounted(){
			this.$refs.logintmpl.style.height = window.innerHeight + 'px';
		},
		computed: {},
		methods: {
			confirm(){
				this.$http.get("http://localhost:8080/api/user"
				).then((res)=> {
					if (this.username == res.data.user.username && this.password == res.data.user.password) {
						window.localStorage.setItem("TOKEN", this.token);
						this.$router.push({path: '/'})
					} else {
						alert("登录失败")
					}
				}).catch((err)=> {
					alert(err)
				});
			}
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
	.logintmpl {
		background: #2d3a4b;
	}

	.login {
		border: 1px solid grey;
		border-radius: 4px;
		position: absolute;
		width: 500px;
		height: 240px;
		top: 50%;
		left: 50%;
		margin-top: -160px;
		margin-left: -250px;
		padding: 50px 15px 0;
		.el-form-item__label {
			text-align: center;
			font-weight: 600;
			font-size: 15px;
		}
		.tip {
			color: #ccc;
			padding-left: 57px;
		}
	}
</style>
