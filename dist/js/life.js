;(function($){
    var Life = {
        tpl:["article","album","sounds"],
        api:{
            article:"./data/article.json",
            album:"./data/album.json",
            sounds:"./data/sounds.json"
        },
        /*
        * 页面初始化函数
        * */
        init: function(){
            /*
             * 获取要操作的dom
             * */
            this.tab_lis = $(".tab-titles li");
            this.tab_active = $("li.active");
            this.tab_items = $("div.cont-items");
            this.index = this.tab_active.index();
            this.loading = $(".tab-contents");
            /*
            * 页面打开的时候加载要显示的数据
            * */
            this.loadArticleData();
            this.switch(this.tab_active,this.index);

            //事件绑定函数
            this.bind();
        },
        /*
        * 渲染模板函数
        *
        * */
        render: function(elem,tpl,data){
            elem.html(template(tpl,data));
        },
        /*
        * 绑定事件函数
        *
        * */
        bind: function(){
            var self = this;

            //循环绑定事件
            this.tab_lis.each(function(){
                var _this = $(this);
                    _this.click(function(){
                        var index = _this.index(),api = null;
                            switch (index){
                                case 0:
                                    api = self.api.article;
                                    break;
                                case 1:
                                    api = self.api.album;
                                    break;
                                case 2:
                                    api = self.api.sounds;
                                    break;
                            }
                            //1.请求数据
                            self.ajaxGetData(api,function(XMLHttpRequest){
                                console.log("1");
                                self.loading.addClass("loading");
                            },function(data,textStatus){
                                console.log("2");
                                self.loading.removeClass("loading");
                                //2.渲染dom
                                self.render(self.tab_items.eq(index),self.tpl[index],data);
                                //3.显示元素
                                self.switch(_this,index);
                            },function(XMLHttpRequest,textStatus){
                                console.log("3");
                            },function(XMLHttpRequest,textStatus,errorThrown){
                                console.log("4");
                            })

                    });
            });
        },
        /*
        * 根据下表index切换元素的显示和隐藏以及当前样式
        * */
        switch:function(that,index){
            that.addClass("active").siblings("li").removeClass("active");
            this.tab_items.eq(index).show().siblings("div").hide();
        },
        /*
        * 公共的ajax获取数据函数
        *
        * */
        ajaxGetData:function(url,beforeSend,callback,complete,error){
            $.ajax({
                type:"GET",
                url:url,
                dataType:"json",
                cache: true,
                beforeSend:beforeSend,
                success: callback,
                complete:complete,
                error:error
            })
        },
        /*
        * ajax加载文章数据
        *
        * */
        loadArticleData: function(){
            var self = this;

            //1.请求数据
            this.ajaxGetData(this.api.article,function(XMLHttpRequest){
                console.log("1");
                self.loading.addClass("loading");
            },function(data,textStatus){
                console.log("2");
                self.loading.removeClass("loading");
                var elem = self.tab_items.eq(self.index);
                self.render(elem,self.tpl[0],data);
            },function(XMLHttpRequest,textStatus){
                console.log("3");
            },function(XMLHttpRequest,textStatus,errorThrown){
                console.log("4");
            });
        }

    };

    Life.init();
})(jQuery);