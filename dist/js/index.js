;(function($,window,document,undefined){
    data = {
        life:[
            {title:"����ḻ���", url:'1.jpg'},
            {title:"����ḻ���", url:'2.jpg'},
            {title:"����ḻ���", url:'3.jpg'}
        ],
        work:[
            {title:"�����ḻ���", url:'1.jpg'},
            {title:"�����ḻ���", url:'2.jpg'},
            {title:"�����ḻ���", url:'3.jpg'}
        ],
        about:[
            {title:"���˷ḻ���", url:'1.jpg'},
            {title:"���˷ḻ���", url:'2.jpg'},
            {title:"���˷ḻ���", url:'3.jpg'}
        ]
    }

    /*
    * ��������д���
    *
    * 1.��������
    * 2.ʵ������
    * 3.�Ż�����
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