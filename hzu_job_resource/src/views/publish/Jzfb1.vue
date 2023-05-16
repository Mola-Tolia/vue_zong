<template>
  <div>
    <div id="box">
        <form action="javascript:;" method="post">
        <span class="zt1">发布基本信息</span>
        <span class="zt2">提交下方基本信息后可公开需求为你推荐服务商</span> <br><br>

        <i class="fa-solid fa-user" style="color: #e10b33;"></i>
        <span class="zt3">用工方式</span>
        <hr style="height: 5px;border:none;border-top:1px dashed #e7e7e7;" width="600px"/><br><br>

        <div class="an" :class="obj1" @click="an1">
            <div class="anzt1" :class="obj3">项目结算</div>
            <span class="anzt2">按项目计费</span>
            <span class="anzt3">按照约定的价格付费 验证工作交付物</span>
            <span class="anzt4">例如：一口价5000元</span>
        </div>

        <div class="an1" :class="obj2" @click="an2">
            <div class="anzt1" :class="obj4">时间结算</div>
            <span class="anzt2">按时计费</span>
            <span class="anzt3">按计时费工作透明</span>
            <span class="anzt4">例如：我想找人做个设计</span>
        </div>  <br><br>

        <i class="fa-solid fa-gear" style="color: #e10b33;"></i>
        <span class="zt3">基本要求</span>
        <hr style="height: 5px;border:none;border-top:1px dashed #e7e7e7;" width="600px"/><br><br>

        <div class="nr">
            <span class="zt3">给需求起个标题（必填）</span>
            <input class="ip1" type="text" v-model="zpInfo.biaot" oninput="if(value.length>20) value=value.slice(0,20)" placeholder="   请输入标题">

            <span class="zt3" style="margin-top: 20px;">填写需求描述</span>
            <textarea name="ms" id="txms" cols="20" rows="10" placeholder=" 请详细填写" style="resize: none;"></textarea>
            <input class="ip3" type="file" accept="image/*" placeholder="请选择照片上传"/>
        
            <span class="zt3" style="margin-top: 20px;">填写需求类型</span>
            <select class="ip1" v-model="zpInfo.lx">
                <option value="" disabled selected hidden>请选择</option>
                <option value="ppsj">品牌设计</option>
                <option value="wzjsfw">网站建设服务</option>
                <option value="ch">策划</option>
                <option value="xz">写作和服务</option>
                <option value="yy">影音视频服务</option>
                <option value="sy">摄影拍摄</option>
                <option value="jj">家教</option>
                <option value="order">...</option> <br><br>
            </select>

            <span class="zt3" style="margin-top: 20px;">地点</span>
            <input class="ip1" type="text" v-model="zpInfo.dz" oninput="if(value.length>100) value=value.slice(0,100)" placeholder="   请详细填写地址">
            
            <span class="zt3" style="margin-top: 20px;">需求预算</span>
            <input class="ip4" type="text" v-model="zpInfo.ys" placeholder="   输入金额">
            <span class="y">元</span>
            <br><br>
        </div>
            
        <i class="fa-solid fa-mobile-screen" style="color: #e10b33;"></i>
        <span class="zt3">联系方式</span>
        <hr style="height: 5px;border:none;border-top:1px dashed #e7e7e7;" width="600px"/><br><br>

        <div class="nr">
            <span class="zt3">发布手机号</span>
            <input class="ip1" type="text" v-model="zpInfo.phone" oninput="if(value.length>11) value=value.slice(0,11)" placeholder="   请输入手机号">
            <div class="fgx"></div>
            <div class="yzmhq" :style="{color: yzmys}" @click="yzman">获取验证码</div>
            <input class="yzm" type="text" placeholder="请输入验证码">
        </div> <br><br>

        <i class="fa-solid fa-building-user" style="color: #e10b33;"></i>
        <span class="zt3">主体性质</span>
        <hr style="height: 5px;border:none;border-top:1px dashed #e7e7e7;" width="600px"/><br><br>

        <div class="nr2">
            <div class="xz" @click="xz1" :class="ztxz1">企业</div> 
            <div class="xz" style="margin-left: 20px;" @click="xz2" :class="ztxz2">个人</div> 
            <div class="xz" style="margin-left: 20px;" @click="xz3" :class="ztxz3">政府组织</div> 
        </div>

        <button class="fb">发布</button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
    name:"Jzfb",
    data(){
            return{
                zpInfo:{
                    xmjs:'',
                    biaot:'',
                    ms:'',
                    lx:'',
                    dz:'',
                    ys:'',
                    xz:'',
                    phone:'',
                },
                an11:false,
                an22:false,
                obj1:'',
                obj2:'',
                obj3:'',
                obj4:'',
                xz11:false,
                xz22:false,
                xz33:false,
                ztxz1:'',
                ztxz2:'',
                ztxz3:'',
                yzmys:''
            }
        },
        watch:{
            'zpInfo.phone':{
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
        methods:{
            an1(){
                this.an11 = !this.an11
                if(this.an22) this.an22 = !this.an22
                if(this.an11){
                    this.obj1 = 'an2'
                    this.obj2 = ''
                    this.zpInfo.lx = '项目结算'
                    this.obj3 = 'anzt5'
                    this.obj4 = ''
                }
            },
            an2(){
                this.an22 = !this.an22
                if(this.an11) this.an11 = !this.an11
                if(this.an22){
                    this.obj1 = ''
                    this.obj2 = 'an2'
                    this.zpInfo.lx = '时间结算'
                    this.obj3 = ''
                    this.obj4 = 'anzt5'
                }
            },
            xz1(){
                this.xz11 = !this.xz11
                if(this.xz22) this.xz22 = !this.xz22
                if(this.xz33) this.xz33 = !this.xz33
                if(this.xz11){
                    this.ztxz3 = ''
                    this.ztxz2 = ''
                    this.ztxz1= 'djc'
                    this.zpInfo.xz = '企业'
                }
            },
            xz2(){
                this.xz22 = !this.xz22
                if(this.xz33) this.xz33 = !this.xz33
                if(this.xz11) this.xz11 = !this.xz11
                if(this.xz22){
                    this.ztxz3 = ''
                    this.ztxz1 = ''
                    this.ztxz2 = 'djc'
                    this.zpInfo.xz = '个人'
                }
            },
            xz3(){
                this.xz33 = !this.xz33
                if(this.xz22) this.xz22 = !this.xz22
                if(this.xz11) this.xz11 = !this.xz11
                if(this.xz33){
                    this.ztxz1 = ''
                    this.ztxz2 = ''
                    this.ztxz3 = 'djc'
                    this.zpInfo.xz = '政府组织'
                }
            },
            yzman(){
                console.log(this.yzmys)
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
    height: 1500px;
}
#box{
    width: 850px;
    height: 1400px;
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
.an{
    width: 250px;
    height: 100px;
    border: 2px #999999 solid;
    border-radius: 10px;
    display: inline-block;
}
.an1{
    width: 250px;
    height: 100px;
    border: 2px #999999 solid;
    border-radius: 10px;
    display: inline-block;
    margin-left: 20px;
}
.an2{
    color: #e10b33 ;
    border: 2px #e10b33 solid;
    /* background-color: #12b45b; */
}
.anzt1{
    font-size: 10px; 
    width: 50px;
    background-color: #92e8b8;
    border-top-left-radius: 5px;
    color: white;

}
.anzt2{
    font-size: 15px;
    /* color: #12b45b; */
    padding: 15px; 
    font-weight: bold;
    
}
.anzt3{
    font-size: 2px;
    /* color: #12b45b; */
    padding: 15px;
    display: block;
    position: relative;
    top: -15px;
}
.anzt4{
    font-size: 2px;
    /* color: #12b45b; */
    padding: 15px;
    display: block;
    position: relative;
    top: -30px;
}
.nr{
    display: flex;
    flex-direction: column;
    display: flex;
    position: relative;
}
.ip1{
    width: 750px;
    height: 35px;
    border-radius: 7px;
    margin-top: 10px;
}
.ip2{
    width: 750px;
    height: 200px;
    border-radius: 7px;
    margin-top: 10px;
}
.nr1{
    display: flex;
    flex-direction: row;
    display: flex;
    width: 400px;
}
.an3{
    width: 100px;
    height: 35px;
    /* background-color: #ffffff; */
    border-top-left-radius: 5px; 
    /* opacity: 0; */
    /* display: none; */
    
}
.anzt5{ 
    background-color: #e10b33;
}
#txms{
    width: 750px;
    border-radius: 7px;
    line-height: 30px;
    margin-top: 10px;
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
.ip4{
    width: 300px;
    height: 35px;
    border-radius: 7px;
    position: relative;
    margin-top: 10px;
}
.y{
    position: absolute;
    left: 270px;
    color: #999999;
    top: 673px;
}
.xz{
    width: 100px;
    height: 40px;
    border-radius: 7px ;
    border: 1px #3c3a3a solid;
    background-color: #ffffff;
    line-height: 40px;
    text-align: center;
}
.nr2{
    display: flex;
    flex-direction: row;
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
.djc{
    background-color: #e10b33;
    color: #ffffff;
}
</style>