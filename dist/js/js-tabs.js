;(function($){
    function JsTabs(options){
        /*
        * 获取参数
        * */
        options = options || {};
        this.id = $(options.id);
        this.event = options.event;
        this.effects = options.effects;
        //初始化函数
        this.init();
        //打开页面显示的内容
        this.switch(this.active,this.active.index());
    }

    JsTabs.prototype = {
        //初始化函数
        init:function(){
            var self = this;
            /*
             *   定义和初始化变量
             * */
            this.tabTitles = this.id.find("ul.tab-titles li");
            this.tabItems = this.id.find("div.cont-items");
            this.active = this.id.find("li.active");
            this.timer = null;

            //绑定事件函数
            this.bind();
        },
        //绑定事件
        bind:function(){
            var self = this;
            switch (this.event){
                case 'hover':
                    self._hover();
                    break;
                case 'click':
                    self._click();
                    break;
            }
        },
        //悬浮切换
        _hover:function(){
            var self = this;
            //循环绑定事件
            this.tabTitles.each(function(){
                var _this = $(this).hover(function(){
                    self.switch(_this,$(this).index());
                },function(){
                    clearInterval(self.timer);
                });
            });
        },
        //点击切换
        _click:function(){
            var self = this;
            //循环绑定事件
            this.tabTitles.each(function(){
                var _this = $(this).click(function(){
                    self.switch(_this,$(this).index());
                });
            });
        },
        //选项卡切换函数
        switch:function(that,index){
            var self = this;
            that.addClass("active").siblings("li").removeClass("active");
            this.timer = setInterval(function(){
                if(self.effects){
                    self.tabItems.eq(index).slideDown().siblings("div").fadeOut('fast');
                }else{
                    self.tabItems.eq(index).show().siblings("div").hide();
                }
                clearInterval(self.timer);
            },200);
        }
    };
    window.JsTabs = JsTabs;
})(jQuery);