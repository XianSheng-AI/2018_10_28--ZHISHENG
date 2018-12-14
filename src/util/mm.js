
'use stract';



var conf = {
    serverHost: ''
};


var _mm = {
    
    request: function (params) {
        var _this= this;
        $.ajax({
            type: params.method || 'get',
            url: params.url || '',
            dataType: params.type || 'json',
            data: params.data || '',
            success: function (res) {
                //数据请求成功且数据正确
                if (0 === res.status) {
                    typeof params.success === 'function' && params.success(res.data, res.msg);
                }
                //没有登陆状态，强制进行登陆
                else if (10 === res.status) {
                    _this.doLogin();
                }
                //请求数据发生错误
                else if (1 === res.status) {
                    typeof params.error === 'function' && params.error(res.msg);
                }
            },
            error: function (err) {
                typeof params.error === 'function' && params.error(err.statusText);
            }
        })
    },
    //获取服务器接口
    getServerUrl: function (path) {
        return conf.serverHost + path;
    },
    //获取服务器地址参数
    getUrlParam: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            //queryString = window.location.hash.split('?')[1] || '',
            result = window.location.search.substr(1).match(reg);
        //result = queryString.match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    },
    //html模板渲染----hogan渲染引擎
    renderHtml: function (htmlTemplate, data) {
        var template = Hogan.compile(htmlTemplate),
            resultTem = template.render(data);
        return resultTem;
    },
    //成功信息
    successTips: function (msg) {
        alert(msg + '成功！');
    },
    //失败信息
    errorTips: function (errMsg) {
        alert(errMsg + '哪里出错了？');
    },

    //字段验证 支持非空，手机，邮箱 格式 验证
    validate: function (value, type) {
        var value = value.$trim();
        // alert(value.length)
        if ('require' === type) {
            return !!value; //强制转布尔型
        }
        //密码大于等于6位
        if('password'===type){
          return value.length>=6;
        }
        //手机号验证
        if ('phone' === type) {
            return /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/.test(value);
            // return /^1\d{10}$/.test(value);
        }
        //邮箱格式验证
        if ('email' === type) {
            return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
        }
    },

    //统一强制登陆处理
    doLogin: function () {
        //特殊字符传输是发生问题，所以用encodeURIComponent
        window.location.href = './user-login.html?redirect=' + encodeURIComponent(window.location.href);
    },
    goHome: function () {
        window.location.href = './index.html'
    }

};

module.exports = _mm;
