// slide top
! function(t) {
    var e = {
            topSpacing: 0,
            bottomSpacing: 0,
            className: "is-sticky",
            wrapperClassName: "sticky-wrapper",
            center: !1,
            getWidthFrom: "",
            responsiveWidth: !1
        },
        i = t(window),
        n = t(document),
        s = [],
        r = i.height(),
        o = function() {
            for (var e = i.scrollTop(), o = n.height(), a = o - r, c = e > a ? a - e : 0, p = 0; p < s.length; p++) {
                var l = s[p];
                if (e <= l.stickyWrapper.offset().top - l.topSpacing - c) null !== l.currentTop && (l.stickyElement.css("position", "").css("top", ""), l.stickyElement.trigger("sticky-end", [l]).parent().removeClass(l.className), l.currentTop = null);
                else {
                    var d = o - l.stickyElement.outerHeight() - l.topSpacing - l.bottomSpacing - e - c;
                    d < 0 ? d += l.topSpacing : d = l.topSpacing, l.currentTop != d && (l.stickyElement.css("position", "fixed").css("top", d), void 0 !== l.getWidthFrom && l.stickyElement.css("width", t(l.getWidthFrom).width()), l.stickyElement.trigger("sticky-start", [l]).parent().addClass(l.className), l.currentTop = d)
                }
            }
        },
        a = function() {
            r = i.height();
            for (var e = 0; e < s.length; e++) {
                var n = s[e];
                void 0 !== n.getWidthFrom && !0 === n.responsiveWidth && n.stickyElement.css("width", t(n.getWidthFrom).width())
            }
        },
        c = {
            init: function(i) {
                var n = t.extend({}, e, i);
                return this.each(function() {
                    var e = t(this),
                        i = e.attr("id"),
                        r = t("<div></div>").attr("id", i + "-sticky-wrapper").addClass(n.wrapperClassName);
                    e.wrapAll(r), n.center && e.parent().css({
                        width: e.outerWidth(),
                        marginLeft: "auto",
                        marginRight: "auto"
                    }), "right" == e.css("float") && e.css({
                        float: "none"
                    }).parent().css({
                        float: "right"
                    });
                    var o = e.parent();
                    o.css("height", e.outerHeight()), s.push({
                        topSpacing: n.topSpacing,
                        bottomSpacing: n.bottomSpacing,
                        stickyElement: e,
                        currentTop: null,
                        stickyWrapper: o,
                        className: n.className,
                        getWidthFrom: n.getWidthFrom,
                        responsiveWidth: n.responsiveWidth
                    })
                })
            },
            update: o,
            unstick: function(e) {
                return this.each(function() {
                    for (var e = t(this), i = -1, n = 0; n < s.length; n++) s[n].stickyElement.get(0) == e.get(0) && (i = n); - 1 != i && (s.splice(i, 1), e.unwrap(), e.removeAttr("style"))
                })
            }
        };
    window.addEventListener ? (window.addEventListener("scroll", o, !1), window.addEventListener("resize", a, !1)) : window.attachEvent && (window.attachEvent("onscroll", o), window.attachEvent("onresize", a)), t.fn.sticky = function(e) {
        return c[e] ? c[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist on jQuery.sticky") : c.init.apply(this, arguments)
    }, t.fn.unstick = function(e) {
        return c[e] ? c[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist on jQuery.sticky") : c.unstick.apply(this, arguments)
    }, t(function() {
        setTimeout(o, 0)
    })
     var elm = document.querySelector('.main-menu');
    var ms = new MenuSpy(elm);
}(jQuery);