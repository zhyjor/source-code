/**
 * Created by JackHou on 2017/8/16.
 */


//语言初始化
var langdata={'html':['葡萄酒','红酒','茅台','竹叶青']};
var tempDemo = new rollWidget({
    containerID: 'container_temp',//容器ID
    renderTo: 'carousel_temp',//渲染到
    scale: 0.6,//中间值和两边的缩放比
    dataStyle:"color:#f00",//数据初始化样式
    focusColor: "f4f4f4",//字体点击后的颜色
    data:langdata,
    onChange: function (val) {

    }
});