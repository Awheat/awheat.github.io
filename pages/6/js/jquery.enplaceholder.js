/**
 * jQuery EnPlaceholder plug
 * EnPlaceholder是一个跨浏览器实现placeholder效果的jQuery插件
 * version 1.0
 * by Frans.Lee <dmon@foxmail.com>  http://www.ifrans.cn
 */
;(function ($) {
    $.fn.extend({
        "placeholder":function (options) {
            options = $.extend({
                placeholderColor:'#ACA899',
                isUseSpan:false, //是否使用插入span标签模拟placeholder的方�?,默认false,默认使用value模拟
                onInput:true  //使用标签模拟(isUseSpan为true)时，是否绑定onInput事件取代focus/blur事件
            }, options);
			
            $(this).each(function () {
                var _this = this;
                var supportPlaceholder = 'placeholder' in document.createElement('input');
                if (!supportPlaceholder) {
                    var defaultValue = $(_this).attr('placeholder');
                    var defaultColor = $(_this).css('color');
                    if (options.isUseSpan == false) {
                        $(_this).focus(function () {
                            var pattern = new RegExp("^" + defaultValue + "$|^$");
                            pattern.test($(_this).val()) && $(_this).val('').css('color', defaultColor);
                        }).blur(function () {
                                if ($(_this).val() == defaultValue) {
                                    $(_this).css('color', defaultColor);
                                } else if ($(_this).val().length == 0) {
                                    $(_this).val(defaultValue).css('color', options.placeholderColor)
                                }
                            }).trigger('blur');
                    } else {
                        var $imitate = $('<span class="wrap-placeholder" style="position:absolute; display:inline-block; overflow:hidden; color:'+options.placeholderColor+'; width:'+$(_this).outerWidth()+'px; height:'+$(_this).outerHeight()+'px;">' + defaultValue + '</span>');
                        $imitate.css({
                            'margin-left':$(_this).css('margin-left'),
                            'margin-top':$(_this).css('margin-top'),
                            'font-size':$(_this).css('font-size'),
                            'font-family':$(_this).css('font-family'),
                            'font-weight':$(_this).css('font-weight'),
                            'padding-left':parseInt($(_this).css('padding-left')) + 2 + 'px',
                            'line-height':_this.nodeName.toLowerCase() == 'textarea' ? $(_this).css('line-weight') : $(_this).outerHeight() + 'px',
                            'padding-top':_this.nodeName.toLowerCase() == 'textarea' ? parseInt($(_this).css('padding-top')) + 2 : 0
                        });
                        $(_this).before($imitate.click(function () {
                            $(_this).trigger('focus');
                        }));

                        $(_this).val().length != 0 && $imitate.hide();

                        if (options.onInput) {
                            //绑定oninput/onpropertychange事件
                            var inputChangeEvent = typeof(_this.oninput) == 'object' ? 'input' : 'propertychange';
                            $(_this).bind(inputChangeEvent, function () {
                                $imitate[0].style.display = $(_this).val().length != 0 ? 'none' : 'inline-block';
                            });
                        } else {
                            $(_this).focus(function () {
                                $imitate.hide();
                            }).blur(function () {
                                    /^$/.test($(_this).val()) && $imitate.show();
                                });
                        }
                    }
                }
            });
            return this;
        }
    });
})(jQuery);
