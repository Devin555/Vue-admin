<template>
    <div class="page3">
        <el-form ref="form" :model="form" label-width="150px">
            <el-form-item label="简称">
                <el-input v-model="form.shortName"></el-input>
            </el-form-item>
            <el-form-item label="全称">
                <el-input v-model="form.fullName"></el-input>
            </el-form-item>
            <el-form-item label="访问地址">
                <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="服务器IP">
                <el-input v-model="form.serveIP"></el-input>
            </el-form-item>
            <el-form-item label="是否有APP">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="负责人工号">
                <el-input v-model="form.number"></el-input>
            </el-form-item>
            <el-form-item label="项目描述">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="system_apply">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: 'page3',
        data () {
            return {
                form: {
                    shortName: '',
                    fullName: '',
                    fullName: '',
                    address: '',
                    serveIP: '',
                    type: false,
                    number: '',
                    desc: ''
                }
            }
        },
        computed: {
            ...mapGetters([
                'urls'
            ]),
            msg(){
                return 'welcome to itany';
            }
        },
        methods: {
            system_apply(){
                let token = 'TOKEN=df0bddc9-0b1c-476f-ad4a-737711ad8d99;PID=17072501';
                let authkey = "KEY=3a8460e448f559f4025bdf1f7fec825a0c5c8e5c9d98f2768cb089544f76170ca2a71bc244d4670dab9947bf3abbcfa02decb79588712385a73c1f5d83c98abc;PID=17072501";
                this.$http.post(this.urls.register,
                    {
                        short_name: this.form.shortName,
                        full_name: this.form.fullName,
                        http_address: this.form.address,
                        server_ip: this.form.serveIP,
                        have_app: this.form.type,
                        manager: this.form.number,
                        desc: this.form.desc,
                        proposer: 91,
                    },
                    {
                        headers: {
                            "X-CSRFToken": token,
                            "X-REQUESTED-WITH": authkey,
                            "Accept-Language": "zh-hans"
                        }
                    }
                ).then((res)=> {
                    console.log(res.data)
                }).catch((err)=> {
                    alert(err.data)
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
    .page3 {
        form {
            margin-top: 20px;
            width: 50%;
            .el-form-item__label {
                text-align: center;
                font-size: 14px;
                color: #666;
                font-weight: bold;
            }
        }
    }
</style>
