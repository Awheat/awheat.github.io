;(function($,window,document,undefined){
    data = {
        life:[
            {title:"生活丰富多彩", url:'1.jpg'},
            {title:"生活丰富多彩", url:'2.jpg'},
            {title:"生活丰富多彩", url:'3.jpg'}
        ],
        work:[
            {title:"工作丰富多彩", url:'1.jpg'},
            {title:"工作丰富多彩", url:'2.jpg'},
            {title:"工作丰富多彩", url:'3.jpg'}
        ],
        about:[
            {title:"个人丰富多彩", url:'1.jpg'},
            {title:"个人丰富多彩", url:'2.jpg'},
            {title:"个人丰富多彩", url:'3.jpg'}
        ]
    }

    /*
    * 面向对象编写组件
    *
    * 1.明白需求
    * 2.实现需求
    * 3.优化代码
    *
    * */
    var Slider = function(element){
        this.elem = $(element);
        this.init();
    }
    Slider.prototype.init = function(){
        this.render();
        this.bind();
    }
    Slider.prototype.render = function(){

    }
    Slider.prototype.bind = function(){

    }

    return {
        Slider:Slider
    }
})(jQuery,window,document);