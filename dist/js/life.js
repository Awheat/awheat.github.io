;(function($){
    var Life = {
        /*
        * 页面初始化函数
        * */
        init: function(){
            this.loadArticleData();
        },
        /*
        * 渲染模板函数
        *
        * */
        render: function(elem,tpl,data){
            $(elem).html(template(tpl,data)).show().siblings("div").hide();
        },
        /*
        * 绑定事件函数
        *
        * */
        bind: function(){
            var tab_titles = $(".tab-titles li");

        },
        /*
        * 公共的ajax获取数据函数
        *
        * */
        ajaxGetData:function(url,callback){
            $.ajax({
                type:"GET",
                url:url,
                dataType:"json",
                success: callback
            });
        },
        /*
        * ajax加载文章数据
        *
        * */
        loadArticleData: function(){
            var self = this;
            this.ajaxGetData("./data/article.json",function(data){
                self.render(".chats","article-list",data);
            });
        }

    };

    Life.init();
})(jQuery);