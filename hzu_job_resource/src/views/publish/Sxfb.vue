<template>
  <div>
    <div id="box">
        <form action="javascript:;" method="post">
            <span class="zt1">发布基本信息</span>
            <span class="zt2">提交下方基本信息后可公开需求为你推荐服务商</span> <br><br>

            <i class="fa-regular fa-building" style="color: #e10b33;"></i>
            <span class="zt3">公司信息</span>
            <hr style="height: 5px;border:none;border-top:1px dashed #e7e7e7;" width="600px"/><br><br>

            <div class="gsxx">
                <div class="gsmc">
                    <img class="imgw" src="">
                    <input type="file" name="gszp">
                </div>
                <div class="gsmc">
                    <span class="gsmz">公司名称：珈百璃</span>
                    <div class="fsxx">
                        <i class="fa-solid fa-flag" style="color: #e10b33;"></i>
                        <span >企业性质：国企</span>
                    </div>
                    <div class="fsxx">
                        <i class="fa-solid fa-person" style="color: #e10b33;"></i>
                        <span >企业规模：50~100人</span>
                    </div>
                    <div class="fsxx">
                        <i class="fa-brands fa-slack" style="color: #e10b33;"></i>
                        <span >企业类型：计算机软件</span>
                    </div>
                </div>
            </div> <br><br>
           
            <i class="fa-solid fa-user-tie" style="color: #e10b33;"></i>
            <span class="zt3">职务要求</span>
            <hr style="height: 5px;border:none;border-top:1px dashed #e7e7e7;" width="600px"/><br><br>
            
            <div class="gsmc"> 
                <div class="zwxx">
                    <div class="gsmc1">
                        <span class="zt3">职位类型</span>
                        <input class="ip1" type="text" v-model="sxfbInfo.zwlb" placeholder="请填写">
                    </div>
                    
                    <div class="gsmc1">
                        <span class="zt3">职位名称</span>
                        <input class="ip1" type="text" v-model="sxfbInfo.zwmc" placeholder="请填写">
                    </div>

                    <div class="gsmc1">
                        <span class="zt3">工作地区</span>
                        <input class="ip1" type="text" v-model="sxfbInfo.gzdq" placeholder="请填写">
                    </div>

                    <div class="gsmc1">
                        <span class="zt3">资薪范围</span>
                        <input class="ip1" type="text" v-model="sxfbInfo.zxfw" placeholder="请填写">
                    </div>

                    <div class="gsmc1">
                        <span class="zt3">学历要求</span>
                        <select class="ip2" v-model="sxfbInfo.xl">
                            <option value="" disabled selected hidden>请选择</option>
                            <option value="gz">高中及以下学历</option>
                            <option value="dz">大专</option>
                            <option value="bk">本科</option>
                            <option value="ss">硕士</option>
                            <option value="bs">博士</option>
                            <option value="order">...</option>
                        </select>
                    </div>

                    <div class="gsmc1">
                        <span class="zt3">经验要求</span>
                        <select class="ip2" v-model="sxfbInfo.jy">
                            <option value="" disabled selected hidden>请选择</option>
                            <option value="zxs">在校生/应届生</option>
                            <option value="ynyn">一年以内</option>
                            <option value="lnyn">两年以内</option>
                            <option value="snyn">三年以内</option>
                            <option value="snys">三年以上</option>
                            <option value="order">...</option>
                        </select>
                    </div>
                </div>
            </div> <br><br>
                
            <i class="fa-solid fa-clipboard" style="color: #e10b33;"></i>
            <span class="zt3">职务信息</span>
            <hr style="height: 5px;border:none;border-top:1px dashed #e7e7e7;" width="600px"/><br><br>
            
            <div class="gsmc" style="margin-top: -20px;">
                <span class="zt3" style="margin-top: 20px;">填写职位描述</span>
                <textarea name="sxfbInfo.zwms" id="txms" cols="20" rows="10" placeholder="请详细填写" style="resize: none;"></textarea>
            </div> <br><br>

            <i class="fa-solid fa-location-pin" style="color: #e10b33;"></i>
            <span class="zt3">工作地址</span>
            <hr style="height: 5px;border:none;border-top:1px dashed #e7e7e7;" width="600px"/><br><br>
            
            <div class="gsmc" style="margin-top: -20px;">
                <span class="zt3" style="margin-top: 20px;">上班详细地址</span>
                <input class="ip3" type="text" v-model="sxfbInfo.gzdd" placeholder="请填写">
            </div> <br><br>

            <i class="fa-regular fa-building" style="color: #e10b33;"></i>
            <span class="zt3">公司信息</span>
            <hr style="height: 5px;border:none;border-top:1px dashed #e7e7e7;" width="600px"/><br><br>

            <div class="gsmc" style="margin-top: -20px;">
                <span class="zt3" style="margin-top: 20px;">填写公司描述</span>
                <textarea name="sxfbInfo.gsms" id="txms" cols="20" rows="10" placeholder="请详细填写" style="resize: none;"></textarea>
            </div> <br><br>

            <i class="fa-solid fa-money-bill" style="color: #e10b33;"></i>
            <span class="zt3">公司福利</span>
            <hr style="height: 5px;border:none;border-top:1px dashed #e7e7e7;" width="600px"/><br><br>

            <div class="gsmc" style="margin-top: -20px;">
                <span class="zt3" style="margin-top: 20px;">公司福利标签</span>
                <div class="bqk">
                    <input class="ip22" type="text" v-model="sxfbInfo.gsfl" @keyup.enter="fl" placeholder="请填写">
                    <div class="qk" @click="qk">清空标签</div>
                    <ul class="gsfl">
                        <li v-for="(F,index) in flbq" :key="index">{{F}}</li>
                    </ul>
                </div>
            </div> <br><br>

            <i class="fa-solid fa-mobile-screen" style="color: #e10b33;"></i>
            <span class="zt3">联系方式</span>
            <hr style="height: 5px;border:none;border-top:1px dashed #e7e7e7;" width="600px"/><br><br>    

            <div class="phone">
                <span class="zt3">发布手机号</span>
                <input class="ip3" type="text" v-model="sxfbInfo.phone" oninput="if(value.length>11) value=value.slice(0,11)" placeholder="请输入手机号">
                <div class="fgx"></div>
                <div class="yzmhq" :style="{color: yzmys}" @click="yzman">获取验证码</div>
                <input class="yzm" type="text" placeholder="请输入验证码">
            </div>

            <button class="fb">发布</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
    name:'Sxfb',
    data(){
            return{
                abc:'123',
                sxfbInfo:{
                    gsfl:'',
                    zwlb:'',
                    zwmc:'',
                    gzdq:'',
                    zxfw:'',
                    xl:'',
                    jy:'',
                    zwms:'',
                    gzdd:'',
                    gsms:'',
                    phone:'',
                    gszp:'',
                },
                flbq:[],
                yzmys:'',
            }
        },
        watch:{
            'sxfbInfo.phone':{
                handler(value){
                    let reg = new RegExp(/^1\d{10}/)
                    if(reg.test(value)){
                    console.log(value)
                        this.yzmys = '#e10b33'
                    }else{
                        this.yzmys = ''
                    }
                }
            }
        },
        methods: {
            fl(){
                if(this.sxfbInfo.gsfl)this.flbq.push(this.sxfbInfo.gsfl)
                this.sxfbInfo.gsfl = ''
            },
            yzman(){
                console.log(this.yzmys)
            },
            qk(){
                this.flbq = []
            }
        }
}
</script>

<style scoped>
   *{
    padding: 0;
    margin: 0;
    }
    body{
        background-color: #f5f5f5;
        height: 2300px;
    }
    #box{
        width: 850px;
        height: 2000px;
        margin-top: 195px;
        margin-left: 170px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 20px, 20px, 20px, #f5f5f5;
        padding-left: 50px;
        padding-top: 30px;
    }
    .zt1{
        font-size: 25px;
        color: #e10b33;
    }
    .zt2{
        padding: 10px;
        color: #999999;
        font-size: 10px;
    }
    .zt3{
        font-size: 15px;
    }
    hr{
        display: inline-block;
    }
    .imgw{
        width: 100px;
        border: 1px black solid;
    }
    .gsmz{
        font-weight: bold;
    }
    .gsxx{
        display: flex;
        flex-direction: row;
        width: 400px;
        justify-content: space-around;
    }
    .gsmc{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .fsxx{
        font-size: 13px;
    }
    .ip1{
        width: 300px;
        height: 35px;
        border-radius: 7px;
        margin-top: 10px;
        padding-left: 5px;
    }
    .zwxx{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 750px;
        flex-wrap: wrap;
        margin-top: -10px;
    }
    .gsmc1{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 10px;
    }
    .ip2{
        width: 310px;
        height: 40px;
        border-radius: 7px;
        margin-top: 10px;
    }
    #txms{
        width: 750px;
        border-radius: 7px;
        line-height: 30px;
        margin-top: 10px;
        padding-left: 5xp;
    }
    .ip3{
        width: 750px;
        height: 35px;
        border-radius: 7px;
        margin-top: 10px;
        padding-left: 5px;
    }
    li{
        list-style: none;
        /* width: 100px; */
        height: 15px;
        line-height: 15px;
        color: #12b45b;
        border: 1px #999999 solid;
        border-radius: 7px; 
        margin-left: 10px;
        margin-top: 10px;
        padding: 10px;
    }
    .gsfl{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 300px;
    }
    .bqk{
        width: 750px;
        height: 100px;
        border: 1px #999999 solid;
        border-radius: 7px; 
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        position: relative;
    }
    .ip22{
        width: 300px;
        height: 40px;
        border-radius: 7px;
        margin-top: 25px;
        padding-left: 5px;
    }
    .phone{
        display: flex;
        flex-direction: column;
        display: flex;
        position: relative;
    }
    .fgx{
        position: absolute;
        border-left: 1px solid #999999;
        height: 20px;
        background-color: #999999;
        left: 450px;
        top: 40px;
    }
    .yzmhq{
        position: absolute;
        left: 650px;
        top: 39px;
        color: #999999;
        cursor: pointer;
        font-size: 14px;
    }
    .yzm{
        position: absolute;
        left: 500px;
        top: 32px;
        /* color: #999999; */
        width: 100px;
        height: 35px;
        border-radius: 7px;
        border: 0px;
        outline: none;
    }
    .fb{
        width: 100px;
        height: 40px;
        border-radius: 7px ;
        border: 1px #3c3a3a solid;
        background-color: #ffffff;
        line-height: 40px;
        text-align: center;
        margin-top: 50px;
        margin-left: 650px;
        background-color: #e10b33;
        color: #f5f5f5;
    }
    .qk{
        position: absolute;
        left: 650px;
        top: 39px;
        color: #e10b33;
        cursor: pointer;
        font-size: 14px;
        left: 240px;
        top: 38px;
    }
</style>