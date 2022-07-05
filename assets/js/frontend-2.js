!function (e, t) {
    "use strict";
    var n = {
        isAdminBar: function () {
            return e("body").is(".admin-bar")
        }, init: function () {
            var t = {
                    "ee-calendar.default": n.Calendar,
                    "ee-google-map.default": n.GoogleMap,
                    "ee-audio-player.default": n.AudioPlayer,
                    "ee-offcanvas.classic": n.Offcanvas,
                    "ee-slide-menu.classic": n.SlideMenu,
                    "ee-popup.classic": n.Popup,
                    "ee-age-gate.classic": n.AgeGate,
                    "ee-toggle-element.classic": n.ToggleElement,
                    "ee-switcher.classic": n.Switcher,
                    "ee-inline-svg.default": n.InlineSvg,
                    "posts-extra.classic": n.PostsClassic,
                    "posts-extra.carousel": n.PostsCarousel,
                    "table.default": n.Table,
                    "unfold.default": n.Unfold,
                    "portfolio.default": n.Portfolio,
                    "gallery-extra.default": n.GalleryExtra,
                    "gallery-slider.default": n.GallerySlider,
                    "timeline.default": n.Timeline,
                    "heading-extended.default": n.HeadingExtra,
                    "image-comparison.default": n.ImageComparison,
                    "devices-extended.default": n.Devices,
                    "hotspots.default": n.Tooltips,
                    "button-group.default": n.Tooltips,
                    "html5-video.default": n.VideoPlayer,
                    "circle-progress.default": n.CircleProgress,
                    "ee-scroll-indicator.list": n.ScrollIndicatorList,
                    "ee-scroll-indicator.bar": n.ScrollIndicatorBar,
                    "ee-scroll-indicator.bullets": n.ScrollIndicatorBullets,
                    "ee-search-form.classic": n.SearchFormFilters,
                    "ee-search-form.expand": [n.SearchFormExpand, n.SearchFormFilters],
                    "ee-search-form.fullscreen": [n.SearchFormExpand, n.SearchFormFilters]
                }, o = {sticky: n.Sticky, parallax: n.ParallaxElement, "global-tooltip": n.GlobalTooltip},
                i = {"parallax-background": n.ParallaxBackground};
            e.each(t, function (t, n) {
                "object" == typeof n ? e.each(n, function (e, n) {
                    elementorFrontend.hooks.addAction("frontend/element_ready/" + t, n)
                }) : elementorFrontend.hooks.addAction("frontend/element_ready/" + t, n)
            }), e.each(o, function (e, t) {
                elementorFrontend.hooks.addAction("frontend/element_ready/global", t)
            }), e.each(i, function (e, t) {
                elementorFrontend.hooks.addAction("frontend/element_ready/section", t)
            })
        }, getRefreshableWidgets: function () {
            return !!elementorExtrasFrontendConfig && elementorExtrasFrontendConfig.refreshableWidgets
        }, getGlobalSettings: function (e) {
            return e in elementorFrontendConfig.settings ? elementorFrontendConfig.settings[e] : "extras" === e && {
                ee_tooltips_position: "top",
                ee_tooltips_arrow_position_h: "",
                ee_tooltips_arrow_position_v: "",
                ee_tooltips_delay_in: {size: 0, unit: "px"},
                ee_tooltips_delay_out: {size: 0, unit: "px"},
                ee_tooltips_duration: {size: .2, unit: "px"},
                ee_tooltips_disable: ""
            }
        }, getItems: function (e, t) {
            if (t) {
                var n = t.split("."), o = n.splice(0, 1);
                if (!n.length) return e[o];
                if (!e[o]) return;
                return this.getItems(e[o], n.join("."))
            }
            return e
        }, getElementSettings: function (e, t) {
            var o = {}, i = e.data("model-cid");
            if (elementorFrontend.isEditMode() && i) {
                var l = elementorFrontend.config.elements.data[i], a = l.attributes.widgetType || l.attributes.elType,
                    s = elementorFrontend.config.elements.keys[a];
                s || (s = elementorFrontend.config.elements.keys[a] = [], jQuery.each(l.controls, function (e, t) {
                    t.frontend_available && s.push(e)
                })), jQuery.each(l.getActiveControls(), function (e) {
                    -1 !== s.indexOf(e) && (o[e] = l.attributes[e])
                })
            } else o = e.data("settings") || {};
            return n.getItems(o, t)
        }, getElementType: function (e) {
            return "section" === e.data("element_type") || "column" === e.data("element_type") ? e.data("element_type") : "widget"
        }, getElementSkin: function (e) {
            return e.attr("data-widget_type").split(".")[1]
        }, getUniqueLoopScopeId: function (e) {
            return e.data("ee-template-widget-id") ? e.data("ee-template-widget-id") : e.data("id")
        }, getOffcanvasUniqueScopeId: function (t) {
            var o = t.data("id"), i = e('[data-id="' + o + '"]');
            return n.hasMultipleScopeId(o) ? (i.each(function (t) {
                e(this).attr("data-offcanvas-index", t)
            }), o = o + "_" + t.data("offcanvas-index")) : o
        }, refreshElements: function (t, o) {
            var i = [".elementor-widget", ".elementor-section", ".elementor-column"], l = [".elementor-widget-form"];
            t.each(function () {
                e(this).find(i.join(",")).each(function () {
                    var t = e(this), i = !0;
                    l.forEach(function (e, n) {
                        t.is(e) && (i = !1)
                    }), i && n.refreshElement(e(this), o)
                })
            })
        }, refreshElement: function (t, o) {
            var i = t.data("element_type");
            if (o) if ("widget" === i) {
                var l = t.data("widget_type");
                e.inArray(l, n.getRefreshableWidgets()) && elementorFrontend.elementsHandler.runReadyTrigger(t)
            } else elementorFrontend.elementsHandler.runReadyTrigger(t); else elementorFrontend.elementsHandler.runReadyTrigger(t)
        }, fixSwipers: function (t) {
            t.find(".swiper-container-initialized").each(function () {
                var t = e(this).data("swiper");
                t && (t.params.observer = !0, t.params.observeParents = !0, t.update())
            })
        }, hasMultipleScopeId: function (t) {
            return 1 !== e('[data-id="' + t + '"]').length
        }, getWindow: function () {
            return elementorFrontend.isEditMode() ? t.elementor.$previewContents : e(t)
        }, onElementRemove: function (e, t) {
            elementorFrontend.isEditMode() && elementor.channels.data.on("element:before:remove", function (n) {
                e.data("id") === n.id && t()
            })
        }, SearchFormFilters: function (e, t) {
            var i = (n.getElementSettings(e), e.data("id")), l = e.find(".ee-search-form"),
                a = e.find("input[type=hidden][name=ee_search_query]"), s = e.find(".ee-search-form__input"),
                r = (e.find(".ee-search-form__submit"), e.find(".ee-search-form__container")),
                c = l.find(":input").filter(".ee-form__field__control--search"),
                d = l.find(".ee-form__field--select.ee-custom").find(":input").filter(".ee-form__field__control--select"),
                p = l.find(":input").filter(".ee-form__field__control--all"),
                m = l.find(":input").filter(":not(.ee-form__field__control--sent)");
            n.getWindow(), n.getElementSkin(e);
            n.SearchFormFilters.init = function () {
                u(), p.filter("[type=checkbox]").length && (p.filter("[type=checkbox]").on("change", function () {
                    _(t(this))
                }), c.filter("[type=checkbox]").on("change", function () {
                    f(t(this))
                })), d.select2({
                    containerCssClass: "ee-select2 ee-form__field__control ee-form__field__control--text ee-form__field__control--select2",
                    dropdownCssClass: "ee-select2__dropdown ee-select2__dropdown--" + i,
                    minimumResultsForSearch: -1,
                    width: "100%"
                }), elementorFrontend.isEditMode() || (l.on("submit", g), s.on("click blur", function () {
                    r.removeClass("ee--empty")
                }), c.on("change", function () {
                    u()
                }))
            };
            var g = function (e) {
                m.attr("disabled", !1), u(), m.attr("disabled", !0)
            }, f = function (e) {
                var t = e.attr("name"), n = p.filter("[name=" + t + "]");
                n.is(":checked") && n.prop("checked", !1)
            }, _ = function (e) {
                var t = e.attr("name"), n = c.filter("[name=" + t + "]");
                e.is(":checked") ? n.prop("checked", !0) : n.prop("checked", !1), u()
            }, u = function () {
                var e = JSON.stringify(o.serializeObject(c));
                a.val(e.replace(/\\/g, ""))
            };
            n.SearchFormFilters.destroy = function () {
            }, n.onElementRemove(e, function () {
                n.SearchFormFilters.destroy()
            }), n.SearchFormFilters.init()
        }, SearchFormExpand: function (e, t) {
            var o = (n.getElementSettings(e), e.find(".ee-search-form")),
                i = (e.find(".ee-search-form__container"), e.find(".ee-search-form__overlay")),
                l = e.find(".ee-search-form__overlay__close"),
                a = (e.find(".ee-search-form__fields"), e.find(".ee-search-form__input")),
                s = e.find(".ee-search-form__submit"), r = (n.getWindow(), n.getElementSkin(e));
            n.SearchFormExpand.init = function () {
                s.on("click", n.SearchFormExpand.onSubmitClick), "expand" === r ? t(document).on("click", n.SearchFormExpand.onDocumentClick) : (i.on("click", n.SearchFormExpand.onOverlayClick), l.on("click", n.SearchFormExpand.close))
            }, n.SearchFormExpand.isOpen = function (e) {
                return e.is(".ee--active")
            }, n.SearchFormExpand.open = function (e) {
                e.addClass("ee--active"), e.find(".ee-search-form__input").focus()
            }, n.SearchFormExpand.close = function (e) {
                e.removeClass("ee--active"), e.find(".ee-search-form__input").blur()
            }, n.SearchFormExpand.onSubmitClick = function (e) {
                if (e.preventDefault(), n.SearchFormExpand.isOpen(o)) return void(a.val() ? o.submit() : n.SearchFormExpand.close(o));
                n.SearchFormExpand.open(o)
            }, n.SearchFormExpand.onDocumentClick = function (e) {
                var i = t(e.target);
                e.target === o[0] || i.closest(".ee-search-form").length || n.SearchFormExpand.close(o)
            }, n.SearchFormExpand.onOverlayClick = function (e) {
                t(e.target);
                e.target === i[0] && n.SearchFormExpand.isOpen(o) && n.SearchFormExpand.close(o)
            }, n.SearchFormExpand.destroy = function () {
                s.off("click", n.SearchFormExpand.onSubmitClick), "expand" === r ? t(document).off("click", n.SearchFormExpand.onDocumentClick) : (i.off("click", n.SearchFormExpand.onOverlayClick), l.off("click", n.SearchFormExpand.close))
            }, n.onElementRemove(e, function () {
                n.SearchFormExpand.destroy()
            }), n.SearchFormExpand.init()
        }, ScrollIndicatorList: function (e, t) {
            var o = n.getElementSettings(e), i = e.find(".ee-scroll-indicator"),
                l = (n.getElementSkin(e), n.getWindow(), {progress: "circle", click: "yes" === o.click});
            l.scrollOffset = o.scroll_offset ? o.scroll_offset.size : 0, n.ScrollIndicatorList.init = function () {
                n.ScrollIndicatorList.destroy(), i.scrollIndicator(l)
            }, n.ScrollIndicatorList.destroy = function () {
                i.data("scrollIndicator") && i.data("scrollIndicator").destroy()
            }, n.onElementRemove(e, function () {
                n.ScrollIndicatorList.destroy()
            }), n.ScrollIndicatorList.init()
        }, ScrollIndicatorBar: function (e, t) {
            var o = n.getElementSettings(e), i = e.find(".ee-scroll-indicator"),
                l = (n.getElementSkin(e), n.getWindow(), {
                    mode: "anchor",
                    progress: "background",
                    click: "yes" === o.click
                });
            l.scrollOffset = o.scroll_offset ? o.scroll_offset.size : 0, n.ScrollIndicatorBar.init = function () {
                n.ScrollIndicatorBar.destroy(), i.scrollIndicator(l)
            }, n.ScrollIndicatorBar.destroy = function () {
                i.data("scrollIndicator") && i.data("scrollIndicator").destroy()
            }, n.onElementRemove(e, function () {
                n.ScrollIndicatorBar.destroy()
            }), n.ScrollIndicatorBar.init()
        }, ScrollIndicatorBullets: function (e, t) {
            var o = n.getElementSettings(e), i = e.find(".ee-scroll-indicator"), l = n.getElementSkin(e);
            n.getWindow();
            l = "" !== l && "default" !== l ? l + "_" : "", "yes" === o[l + "tooltips"] && n.Tooltips(e, t);
            var a = {
                autoHover: "yes" === o[l + "show_on_focus"],
                progress: "background",
                click: "yes" === o.click,
                property: "height"
            };
            a.scrollOffset = o.scroll_offset ? o.scroll_offset.size : 0, n.ScrollIndicatorBullets.init = function () {
                n.ScrollIndicatorBullets.destroy(), i.scrollIndicator(a)
            }, n.ScrollIndicatorBullets.destroy = function () {
                i.data("scrollIndicator") && i.data("scrollIndicator").destroy()
            }, n.onElementRemove(e, function () {
                n.ScrollIndicatorBullets.destroy()
            }), n.ScrollIndicatorBullets.init()
        }, SlideMenu: function (e, t) {
            n.SlideMenu.elementSettings = n.getElementSettings(e);
            var o = e.find(".ee-slide-menu__menu"), i = {
                linkNavigation: "yes" === n.SlideMenu.elementSettings.link_navigation,
                backLabel: n.SlideMenu.elementSettings.back_text
            };
            n.SlideMenu.destroy = function () {
                o.data("slideMenu") && o.data("slideMenu").destroy()
            }, n.SlideMenu.init = function () {
                n.SlideMenu.destroy(), o.slideMenu(i)
            }, n.onElementRemove(e, function () {
                n.SlideMenu.destroy()
            }), n.SlideMenu.init()
        }, Calendar: function (e, t) {
            n.Calendar.elementSettings = n.getElementSettings(e);
            var o = e.find(".ee-calendar"), i = (o.find("#ee-calendar__template").html(), o.find(".ee-calendar-event")),
                l = elementorFrontend.config.is_rtl ? "right" : "left",
                a = elementorFrontend.config.is_rtl ? "left" : "right",
                s = t.trim(n.Calendar.elementSettings.event_date_format) || "MMMM Do",
                r = "<div class='ee-calendar__events'><div class='ee-calendar__events__header ee-calendar__table__head'><span class='ee-calendar__events__header__title'>" + n.Calendar.elementSettings.event_list_heading + "</span><span class='ee-arrow ee-calendar__controls__button ee-calendar__events__hide'><i class='fa fa-times'></i></span></div><div class='ee-calendar__events__list ee-nav ee-nav--stacked'><% _.each(eventsThisMonth, function(event) { %><div class='ee-calendar__events__event ee-calendar__cell__content ee-nav__item'><%= event.before %><a <% if ( '' !== event.link ) { %>href='<%= event.link %>' <% if ( '' !== event.target ) { %>target='<%= event.target %>'<% } %> <% if ( '' !== event.rel ) { %>rel='<%= event.rel %>'<% } %><% } %>><%= moment(event.start).format('" + s + "') %><% if ( event.end !== event.start ) { %> - <%= moment(event.end).format('" + s + "') %><% } %>: <%= event.name %></a><%= event.after %></div><% }); %></div></div>",
                c = "<div class='ee-calendar__controls clndr-controls'><span class='ee-calendar__controls__button ee-calendar__button--previous ee-arrow ee-arrow--" + l + " clndr-control-button clndr-previous-button'><i class='eicon-chevron-" + l + "'></i></span><div class='ee-calendar__controls__month ee-calendar__controls__content month'><%= month %> <%= year %></div><span class='ee-calendar__controls__button ee-calendar__button--next ee-arrow ee-arrow--" + a + " clndr-control-button clndr-next-button'><i class='eicon-chevron-" + a + "'></i></span></div><div class='ee-calendar__month clndr-events'><table class='ee-table ee-calendar__table clndr-table' border='0' cellspacing='0' cellpadding='0'><thead class='ee-table__head ee-calendar__table__head'><tr class='ee-table__row ee-calendar__header header-days'><% _.each(daysOfTheWeek, function (day) { %><td class='ee-table__cell ee-calendar__cell ee-calendar__header__week'><div class='ee-calendar__week ee-calendar__cell__content'><div class='ee-calendar__cell__wrapper'><%= day %></div></div></td><% }); %></tr></thead><tbody class='ee-table__body ee-calendar__table__body'><% for(var i = 0; i < numberOfRows; i++){ %><tr class='ee-table__row'><% for(var j = 0; j < 7; j++){ %><% var d = j + i * 7; %><td class='ee-table__cell ee-calendar__cell ee-calendar__day align--top <%= days[d].classes %>'><div class='ee-table__cell__content ee-calendar__cell__content ee-calendar__day__content'><div class='ee-calendar__day__wrapper'><div class='ee-calendar__day__header day-contents'><%= days[d].day %></div><% if ( days[d].events.length ) { %><div class='ee-calendar__day__events'><% _.each(days[d].events, function(event) { %><div class='ee-calendar__day__event'><div class='ee-calendar__day__event__name'><%= event.before %><a <% if ( '' !== event.link ) { %>href='<%= event.link %>' <% if ( '' !== event.target ) { %>target='<%= event.target %>'<% } %> <% if ( '' !== event.rel ) { %>rel='<%= event.rel %>'<% } %><% } %> data-title='<%= event.name %>'><%= event.name %></a><%= event.after %></div></div><% }); %></div><% } %></div></div></td><% } %></tr><% } %></tbody></table>" + r + "</div>";
            moment.updateLocale("en", {months: [n.Calendar.elementSettings.month_january, n.Calendar.elementSettings.month_february, n.Calendar.elementSettings.month_march, n.Calendar.elementSettings.month_april, n.Calendar.elementSettings.month_may, n.Calendar.elementSettings.month_june, n.Calendar.elementSettings.month_july, n.Calendar.elementSettings.month_august, n.Calendar.elementSettings.month_september, n.Calendar.elementSettings.month_october, n.Calendar.elementSettings.month_november, n.Calendar.elementSettings.month_december]});
            var d = (moment().format("YYYY-MM"), []), p = {
                moment: moment,
                classes: {
                    past: "ee-calendar__day--passed",
                    today: "ee-calendar__day--today",
                    event: "ee-calendar__day--event",
                    inactive: "ee-calendar__day--inactive",
                    lastMonth: "ee-calendar__month--last",
                    nextMonth: "ee-calendar__month--next",
                    adjacentMonth: "ee-calendar__day--adjacent"
                },
                template: c,
                lengthOfTime: {months: null, interval: 1},
                events: d,
                multiDayEvents: {endDate: "end", startDate: "start"},
                startWithMonth: "yes" === n.Calendar.elementSettings.default_current_month ? moment() : n.Calendar.elementSettings.default_month,
                constraints: {
                    startDate: n.Calendar.elementSettings.constrain_start,
                    endDate: n.Calendar.elementSettings.constrain_end
                },
                daysOfTheWeek: [n.Calendar.elementSettings.day_sunday, n.Calendar.elementSettings.day_monday, n.Calendar.elementSettings.day_tuesday, n.Calendar.elementSettings.day_wednesday, n.Calendar.elementSettings.day_thursday, n.Calendar.elementSettings.day_friday, n.Calendar.elementSettings.day_saturday],
                weekOffset: parseInt(n.Calendar.elementSettings.first_day),
                showAdjacentMonths: "yes" === n.Calendar.elementSettings.show_adjacent_months,
                adjacentDaysChangeMonth: "yes" === n.Calendar.elementSettings.click_adjacent,
                clickEvents: {
                    click: function (e) {
                        if (e.events.length) {
                            var t = o.find(".ee-calendar__month");
                            t.toggleClass("show-events", !0), o.find(".ee-calendar__events__hide").click(function () {
                                t.toggleClass("show-events", !1)
                            })
                        }
                    }, nextInterval: function () {
                    }, previousInterval: function () {
                    }, onIntervalChange: function () {
                    }
                }
            };
            n.Calendar.init = function () {
                n.Calendar.setupEvents(), o.length && o.clndr(p)
            }, n.Calendar.setupEvents = function () {
                i.each(function () {
                    d.push({
                        name: t(this).html(),
                        start: t(this).data("start"),
                        end: t(this).data("end"),
                        link: t(this).data("link"),
                        target: t(this).data("target"),
                        rel: t(this).data("rel"),
                        archive: t(this).data("archive"),
                        before: t(this).data("before"),
                        after: t(this).data("after")
                    })
                })
            }, n.Calendar.init()
        }, GoogleMap: function (e, t) {
            n.GoogleMap.elementSettings = n.getElementSettings(e);
            var i = e.find(".ee-google-map");
            if (i.length) {
                var l = i.find(".ee-google-map__pin"), a = e.find(".ee-google-map__navigation"),
                    s = n.GoogleMap.elementSettings, r = {
                        center: [48.8583736, 2.2922873],
                        mapTypeId: google.maps.MapTypeId[s.map_type],
                        scrollwheel: "yes" === s.scrollwheel,
                        clickableIcons: "yes" === s.clickable_icons,
                        disableDoubleClickZoom: "yes" !== s.doubleclick_zoom,
                        keyboardShortcuts: "yes" === s.keyboard_shortcuts,
                        draggable: !elementorFrontend.isEditMode() && "yes" === s.draggable,
                        fullscreenControl: "yes" === s.fullscreen_control,
                        mapTypeControl: "yes" === s.map_type_control,
                        rotateControl: "yes" === s.rotate_control,
                        scaleControl: "yes" === s.scale_control,
                        streetViewControl: "yes" === s.streetview_control,
                        zoomControl: "yes" === s.zoom_control
                    }, c = {
                        default: {
                            strokeColor: s.polygon_stroke_color ? s.polygon_stroke_color : "#FF0000",
                            strokeWeight: s.polygon_stroke_weight ? s.polygon_stroke_weight.size : 2,
                            strokeOpacity: s.polygon_stroke_opacity ? s.polygon_stroke_opacity.size : .8,
                            fillColor: s.polygon_fill_color ? s.polygon_fill_color : "#FF0000",
                            fillOpacity: s.polygon_fill_opacity ? s.polygon_fill_opacity.size : .35
                        },
                        hover: {
                            strokeColor: s.polygon_stroke_color_hover ? s.polygon_stroke_color_hover : "#FF0000",
                            strokeWeight: s.polygon_stroke_weight_hover ? s.polygon_stroke_weight_hover.size : 2,
                            strokeOpacity: s.polygon_stroke_opacity_hover ? s.polygon_stroke_opacity_hover.size : .8,
                            fillColor: s.polygon_fill_color_hover ? s.polygon_fill_color_hover : "#FF0000",
                            fillOpacity: s.polygon_fill_opacity_hover ? s.polygon_fill_opacity_hover.size : .35
                        }
                    }, d = [], p = [], m = null;
                n.GoogleMap.init = function () {
                    var e = s.map_style_json;
                    if ("api" === s.map_style_type && s.map_style_api) {
                        JSON.parse(s.map_style_api) && (e = JSON.parse(s.map_style_api).json)
                    }
                    "" !== t.trim(e) && void 0 !== e && (r.styles = n.GoogleMap.parseStyles(e)), "yes" !== s.fit && (s.zoom && s.zoom.size && (r.zoom = s.zoom.size), i.data("lat") && i.data("lng") && (r.center = [i.data("lat"), i.data("lng")])), m = i.gmap3(r), n.GoogleMap.addPins(), "yes" === s.popups && n.GoogleMap.addInfoWindows(), "yes" === s.route && l.length > 1 && n.GoogleMap.addRoute(), "yes" === s.polygon && n.GoogleMap.addPolygon(), "yes" === s.navigation && n.GoogleMap.navigation(), n.GoogleMap.events(), n.GoogleMap.center()
                }, n.GoogleMap.events = function () {
                    i._resize(n.GoogleMap.onResize)
                }, n.GoogleMap.onResize = function () {
                    n.GoogleMap.center()
                }, n.GoogleMap.center = function () {
                    "yes" === s.fit && m.wait(2e3).fit()
                }, n.GoogleMap.parseStyles = function (e) {
                    try {
                        var t = JSON.parse(e);
                        if (t && "object" == typeof t) return t
                    } catch (e) {
                        alert("Invalid JSON")
                    }
                    return !1
                }, n.GoogleMap.addPolygon = function () {
                    l.length <= 1 || m.polygon({
                        strokeColor: c.default.strokeColor,
                        strokeWeight: c.default.strokeWeight,
                        strokeOpacity: c.default.strokeOpacity,
                        fillColor: c.default.fillColor,
                        fillOpacity: c.default.fillOpacity,
                        paths: p
                    }).on({
                        mouseover: function (e, t) {
                            e.setOptions({
                                strokeColor: c.hover.strokeColor,
                                strokeWeight: c.hover.strokeWeight,
                                strokeOpacity: c.hover.strokeOpacity,
                                fillColor: c.hover.fillColor,
                                fillOpacity: c.hover.fillOpacity
                            })
                        }, mouseout: function (e, t) {
                            e.setOptions({
                                strokeColor: c.default.strokeColor,
                                strokeWeight: c.default.strokeWeight,
                                strokeOpacity: c.default.strokeOpacity,
                                fillColor: c.default.fillColor,
                                fillOpacity: c.default.fillOpacity
                            })
                        }
                    })
                }, n.GoogleMap.addPins = function () {
                    l.length && (l.each(function () {
                        var e = {}, o = {
                            id: t(this).data("id"),
                            input: t(this).data("input"),
                            lat: t(this).data("lat"),
                            lng: t(this).data("lng"),
                            trigger: t(this).data("trigger"),
                            icon: t(this).data("icon"),
                            content: t(this).html()
                        };
                        if (o.lat && o.lng) {
                            if (e.id = o.id, e.trigger = o.trigger, e.position = [o.lat, o.lng], p.push(e.position), o.icon) {
                                var i = s.pin_size ? s.pin_size.size : 50, l = n.GoogleMap.getIconPosition(i);
                                e.icon = {
                                    url: o.icon,
                                    scaledSize: new google.maps.Size(i, i),
                                    origin: new google.maps.Point(0, 0),
                                    anchor: new google.maps.Point(l[0], l[1])
                                }
                            }
                            o.content && s.popups && (e.content = o.content), d.push(e)
                        }
                    }), m.marker(d))
                }, n.GoogleMap.getIconPosition = function (e) {
                    var t = 25, n = 50;
                    switch (s.pin_position_horizontal) {
                        case"left":
                            t = e;
                            break;
                        case"center":
                            t = e / 2;
                            break;
                        case"right":
                            t = 0;
                            break;
                        default:
                            t = e / 2
                    }
                    switch (s.pin_position_vertical) {
                        case"top":
                            n = e;
                            break;
                        case"middle":
                            n = e / 2;
                            break;
                        case"bottom":
                            n = 0;
                            break;
                        default:
                            n = e
                    }
                    return [t, n]
                }, n.GoogleMap.addInfoWindows = function () {
                    l.length && m.infowindow(d).then(function (e) {
                        var t = this.get(0);
                        this.get(1).forEach(function (n, o) {
                            "auto" === n.trigger ? (e[o].open(t, n), n.addListener("click", function () {
                                e[o].open(t, n)
                            })) : "mouseover" === n.trigger ? (n.addListener("mouseover", function () {
                                e[o].open(t, n)
                            }), n.addListener("mouseout", function () {
                                e[o].close(t, n)
                            })) : "click" === n.trigger && n.addListener("click", function () {
                                e[o].open(t, n)
                            })
                        })
                    })
                }, n.GoogleMap.addRoute = function () {
                    if (!(l.length <= 1)) {
                        var e = d.slice(), t = n.GoogleMap.getMarkerDataForRoutes(d[0]),
                            o = n.GoogleMap.getMarkerDataForRoutes(d[d.length - 1]),
                            i = d.length >= 3 ? n.GoogleMap.getWaypoints(e) : null;
                        m.route({
                            origin: t,
                            destination: o,
                            waypoints: i,
                            travelMode: google.maps.DirectionsTravelMode[s.route_mode]
                        }).directionsrenderer(function (e) {
                            if (e) return {suppressMarkers: "yes" !== s.route_markers, directions: e}
                        })
                    }
                }, n.GoogleMap.getWaypoints = function (e) {
                    var t = [];
                    return e.shift(), e.pop(), e.forEach(function (e, o) {
                        t.push({location: n.GoogleMap.getMarkerDataForRoutes(e), stopover: !0})
                    }), t
                }, n.GoogleMap.getMarkerDataForRoutes = function (e) {
                    return new google.maps.LatLng(e.position[0], e.position[1])
                }, n.GoogleMap.navigation = function () {
                    var e = a.find(".ee-google-map__navigation__item");
                    e.filter(".ee-google-map__navigation__item--all").addClass("ee--is-active"), e.on("click", function (n) {
                        n.preventDefault(), n.stopPropagation(), e.removeClass("ee--is-active"), t(this).addClass("ee--is-active");
                        var i = o.findObjectByKey(d, "id", t(this).data("id"));
                        if (i) {
                            var l = s.navigation_zoom ? s.navigation_zoom.size : 18;
                            m.get(0).setCenter(new google.maps.LatLng(i.position[0], i.position[1])), m.get(0).setZoom(l)
                        } else m.fit()
                    })
                }, n.GoogleMap.init()
            }
        }, AudioPlayer: function (e, t) {
            n.AudioPlayer.elementSettings = n.getElementSettings(e);
            var o = e.find(".ee-audio-player");
            n.AudioPlayer.init = function () {
                o.audioPlayer({
                    restartOnPause: "yes" === n.AudioPlayer.elementSettings.restart_on_pause,
                    loopPlaylist: "yes" === n.AudioPlayer.elementSettings.loop_playlist,
                    autoplay: "yes" === n.AudioPlayer.elementSettings.autoplay && !elementorFrontend.isEditMode(),
                    volume: n.AudioPlayer.elementSettings.volume.size
                })
            }, n.AudioPlayer.init()
        }, Offcanvas: function (e, o) {
            n.Offcanvas.elementSettings = n.getElementSettings(e);
            var l = e.data("id"), a = n.getOffcanvasUniqueScopeId(e), s = n.Offcanvas.elementSettings.position,
                r = n.Offcanvas.elementSettings.animation, c = "oc" + a, d = o("body"), p = n.getWindow(),
                m = p.scrollTop(), g = e.find(".ee-offcanvas__trigger"), f = e.find(".ee-offcanvas__content"),
                _ = elementorFrontend.isEditMode() ? t.elementor.$previewContents.find("html") : o("html"),
                u = o(".ee-offcanvas__header__close"), v = o('<div class="ee-offcanvas__overlay"></div>'),
                y = o('<div class="ee-offcanvas__container" canvas="container"></div>'),
                S = o('<div class="ee-offcanvas__slidebar ee-offcanvas__slidebar--' + l + '" id="' + c + '" off-canvas="' + c + " " + s + " " + r + '" />');
            n.Offcanvas.setTriggers = function () {
                "id" === n.Offcanvas.elementSettings.trigger_source && "" !== n.Offcanvas.elementSettings.trigger_id ? (g = o("#" + n.Offcanvas.elementSettings.trigger_id), g.addClass("ee-offcanvas__trigger")) : "class" === n.Offcanvas.elementSettings.trigger_source && "" !== n.Offcanvas.elementSettings.trigger_class && (g = o("." + n.Offcanvas.elementSettings.trigger_class), g.addClass("ee-offcanvas__trigger")), g.attr("data-slidebar-id", c), "id" === n.Offcanvas.elementSettings.header_close_source && "" !== n.Offcanvas.elementSettings.header_close_id && (u = f.find("#" + n.Offcanvas.elementSettings.header_close_id), u.addClass("ee-offcanvas__close")), "class" === n.Offcanvas.elementSettings.header_close_source && "" !== n.Offcanvas.elementSettings.header_close_class && (u = f.find("." + n.Offcanvas.elementSettings.header_close_class), u.addClass("ee-offcanvas__close"))
            }, n.Offcanvas.prepare = function () {
                e.attr("data-slidebar-id", c), n.Offcanvas.elementSettings.scroll_fix && o("html").addClass("ee-offcanvas-scroll-fix-" + n.Offcanvas.elementSettings.scroll_fix).css({height: "auto"}), d.find(".ee-offcanvas__container").length || d.wrapInner(y), y = d.find(".ee-offcanvas__container"), o("#" + c).remove(), S.append(f), d.prepend(S), d.find(".ee-offcanvas__overlay").length ? v = y.find("> .ee-offcanvas__overlay") : y.append(v), _.addClass("ee-offcanvas--closed")
            }, n.Offcanvas.onResize = function () {
                elementorFrontend.isEditMode() && i.controller.css()
            }, n.Offcanvas.destroy = function () {
                S.remove()
            }, n.Offcanvas.events = function () {
                elementorFrontend.isEditMode() && S._resize(n.Offcanvas.onResize), g.on("click", function (e) {
                    e.stopPropagation(), e.preventDefault(), i.controller.css(), i.controller.isActiveSlidebar(c) ? i.controller.close(c) : i.controller.open(c), o(this).addClass("ee--is-active")
                }), u.on("click", function (e) {
                    e.stopPropagation(), e.preventDefault(), i.controller.close()
                }), v.on("click", function () {
                    i.controller.isActiveSlidebar(c) && i.controller.close()
                }), p.on("scroll", function () {
                    m = this.scrollY
                }), o(i.controller.events).on("opening", function (e, t) {
                    var o = d.find('.elementor-widget-ee-offcanvas[data-slidebar-id="' + t + '"]').data("id");
                    d.addClass("ee-offcanvas--id-" + o), _.removeClass("ee-offcanvas--closed ee-offcanvas--open"), d.removeClass("ee-offcanvas--closed ee-offcanvas--open"), d.addClass("ee-offcanvas--opening"), _.addClass("ee-offcanvas--opening"), n.Offcanvas.setOverflows(), "yes" === n.Offcanvas.elementSettings.refresh_widgets && n.refreshElements(f, !0)
                }), o(i.controller.events).on("opened", function (e, t) {
                    _.removeClass("ee-offcanvas--closed ee-offcanvas--opening"), d.removeClass("ee-offcanvas--closed ee-offcanvas--opening"), d.addClass("ee-offcanvas--open"), _.addClass("ee-offcanvas--open"), "yes" === n.Offcanvas.elementSettings.container_scroll && d.addClass("ee-offcanvas--scroll")
                }), o(i.controller.events).on("closing", function (e, t) {
                    _.removeClass("ee-offcanvas--open ee-offcanvas--opening ee-offcanvas--closed"), d.removeClass("ee-offcanvas--open ee-offcanvas--opening ee-offcanvas--closed"), d.addClass("ee-offcanvas--closing"), _.addClass("ee-offcanvas--closing")
                }), o(i.controller.events).on("closed", function (e, i) {
                    d.removeClass("ee-offcanvas--open ee-offcanvas--closing"), _.removeClass("ee-offcanvas--open ee-offcanvas--closing"), n.Offcanvas.removeOverflows(), "yes" === n.Offcanvas.elementSettings.container_scroll && d.removeClass("ee-offcanvas--scroll"), d.removeClass(function (e, t) {
                        return (t.match(/(^|\s)ee-offcanvas--id-\S+/g) || []).join(" ")
                    }), d.addClass("ee-offcanvas--closed"), _.addClass("ee-offcanvas--closed"), o(".ee-offcanvas__trigger").removeClass("ee--is-active"), o(t).trigger("resize")
                }), n.onElementRemove(e, function () {
                    n.Offcanvas.destroy()
                })
            }, n.Offcanvas.anchorNavigation = function () {
                f.find('a[href*=\\#]:not([href^="%23elementor-action"]):not([href^="#elementor-action"])').each(function () {
                    var e = o(this), t = e.attr("href"), l = t.substring(t.indexOf("#") + 1), a = o("#" + l),
                        s = void 0 !== n.Offcanvas.elementSettings.anchor_navigation_speed.size ? n.Offcanvas.elementSettings.anchor_navigation_speed.size : 0;
                    a.length && e.on("click", function (e) {
                        e.preventDefault(), e.stopPropagation(), m = a.offset().top + y.scrollTop(), y.animate({scrollTop: m}, s, function () {
                            "yes" === n.Offcanvas.elementSettings.anchor_navigation_close && i.controller.close()
                        })
                    })
                })
            }, n.Offcanvas.setOverflows = function () {
                p.scrollTop();
                o("html").css({height: "100%"}), y.on("scroll", n.Offcanvas.onWrapperScroll), y.animate({scrollTop: m}, 0), v.css({top: m})
            }, n.Offcanvas.onWrapperScroll = function (e) {
                v.css({top: y.scrollTop()})
            }, n.Offcanvas.removeOverflows = function () {
                var e = y.scrollTop();
                y.animate({scrollTop: 0}, 0), y.off("scroll", n.Offcanvas.onWrapperScroll), _.css({height: "auto"}), o("html, body").animate({scrollTop: e}, 0)
            }, n.Offcanvas.getClickedTriggerId = function (e) {
                return e.closest(".elementor-element").data("id")
            }, n.Offcanvas.init = function () {
                n.Offcanvas.setTriggers(), i.initialized && i.controller.close(), d.is(":not(.ee-offcanvas)") && d.addClass("ee-offcanvas"), n.Offcanvas.prepare(), i.init(), n.Offcanvas.events(), "yes" === n.Offcanvas.elementSettings.anchor_navigation && n.Offcanvas.anchorNavigation()
            }, n.Offcanvas.init()
        }, Popup: function (e, i) {
            n.Popup.elementSettings = n.getElementSettings(e);
            var l = e.data("id"), a = e.find(".ee-popup__trigger"), s = e.find(".ee-popup__content"),
                r = "ee_PopupShown_" + l, c = n.Popup.elementSettings.popup_times, d = n.getWindow(),
                p = elementorFrontend.isEditMode() ? d.find("html") : i("html"),
                m = n.Popup.elementSettings.popup_persist,
                g = (void 0 !== n.Popup.elementSettings.popup_open_admin && n.Popup.elementSettings.popup_open_admin, "default" === n.Popup.elementSettings.popup_close_button_position ? e.find(".ee-popup__footer__button") : e.find(n.Popup.elementSettings.popup_close_button_selector)),
                f = "mfp-popup--valign-" + n.Popup.elementSettings.popup_valign,
                _ = "mfp-close--halign-" + n.Popup.elementSettings.popup_close_halign,
                u = "mfp-close--valign-" + n.Popup.elementSettings.popup_close_valign,
                v = "yes" === n.Popup.elementSettings.popup_no_overlay ? "ee-mfp-popup--no-overlay" : "ee-mfp-popup--overlay",
                y = {
                    autoFocusLast: !1,
                    mainClass: "ee-mfp-popup ee-mfp-popup-" + l + " " + v + " " + f + " " + n.Popup.elementSettings.popup_animation,
                    type: "inline",
                    disableOn: n.Popup.elementSettings.popup_disable_on,
                    fixedContentPos: "yes" === n.Popup.elementSettings.popup_fixed || "yes" === n.Popup.elementSettings.popup_prevent_scroll,
                    preloader: "yes" === n.Popup.elementSettings.popup_preloader,
                    closeOnContentClick: "yes" === n.Popup.elementSettings.popup_close_on_content,
                    closeOnBgClick: "yes" === n.Popup.elementSettings.popup_close_on_bg,
                    enableEscapeKey: "yes" === n.Popup.elementSettings.popup_close_on_escape,
                    closeBtnInside: "inside" === n.Popup.elementSettings.popup_close_position,
                    showCloseBtn: n.Popup.elementSettings.popup_close_position || !1,
                    focus: ".no-focus",
                    closeMarkup: '<button title="%title%" type="button" class="ee-popup__close mfp-close ' + _ + " " + u + ' eicon-close"></button>',
                    callbacks: {
                        open: function () {
                            var e = i.magnificPopup.instance;
                            n.Popup.onOpen(e, e.st.el)
                        }, beforeOpen: function () {
                        }
                    }
                };
            n.Popup.init = function () {
                e.is(":not(:visible)") || (elementorFrontend.isEditMode() || "" === n.Popup.elementSettings.popup_animation || (y.removalDelay = 500), g.length && g.on("click", function (e) {
                    e.preventDefault(), e.stopPropagation(), a.magnificPopup("close")
                }), "iframe" === n.Popup.elementSettings.popup_type ? (y.type = "iframe", "" !== n.Popup.elementSettings.popup_animation && (y.callbacks.beforeOpen = function () {
                    this.st.iframe.markup = this.st.iframe.markup.replace('class="mfp-iframe"', 'class="mfp-iframe mfp-with-anim"')
                })) : "image" === n.Popup.elementSettings.popup_type ? (y.type = "image", y.image = {verticalFit: "yes" === n.Popup.elementSettings.popup_vertical_fit}, "" !== n.Popup.elementSettings.popup_animation && (y.callbacks.beforeOpen = function () {
                    this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim")
                })) : "url" === n.Popup.elementSettings.popup_type ? (y.type = "ajax", y.items = {src: s.data("ee-popup-url")}, y.callbacks = {
                    parseAjax: function (e) {
                        var t = s.clone(),
                            i = "" !== n.Popup.elementSettings.popup_url_container && n.Popup.elementSettings.popup_url_container,
                            l = o.parseAjaxResponse(e.data, i);
                        t.removeClass("mfp-hide").find(".ee-popup__content__body").append(l), e.data = t.get(0)
                    }
                }) : y.items = {src: s}, elementorFrontend.isEditMode() ? (a.magnificPopup("close").magnificPopup(y), "yes" === n.Popup.elementSettings.popup_open && a.magnificPopup("open")) : (a.magnificPopup(y), n.Popup.behaviour()))
            }, n.Popup.behaviour = function () {
                switch (n.Popup.elementSettings.popup_trigger) {
                    case"click":
                        n.Popup.behaviourClick();
                        break;
                    case"instant":
                        n.Popup.behaviourInstant();
                        break;
                    case"scroll":
                        n.Popup.behaviourScroll();
                        break;
                    case"intent":
                        n.Popup.behaviourIntent();
                        break;
                    default:
                        console.log("No popup trigger selected")
                }
            }, n.Popup.behaviourClick = function () {
                if ("text" !== n.Popup.elementSettings.popup_click_target) {
                    var t = null, o = null, l = null, s = e.closest(".elementor-template");
                    "id" === n.Popup.elementSettings.popup_click_target ? o = "#" + a.data("trigger-id") : "class" === n.Popup.elementSettings.popup_click_target && (o = "." + a.data("trigger-class")), l = s.length && e.data("ee-template-widget-id") ? s.find(o) : i(document).find(o), l && (t = l), t.length && t.on("click", function (e) {
                        e.preventDefault(), e.stopPropagation(), a.magnificPopup("open")
                    })
                }
            }, n.Popup.behaviourInstant = function () {
                setTimeout(n.Popup.open, n.Popup.elementSettings.popup_delay)
            }, n.Popup.behaviourScroll = function () {
                var e, o = document.documentElement
                ;
                if ("amount" === n.Popup.elementSettings.popup_scroll_type) e = n.Popup.elementSettings.popup_scroll_amount; else if ("element" === n.Popup.elementSettings.popup_scroll_type) {
                    var l = i("#" + n.Popup.elementSettings.popup_scroll_element);
                    l.length && (e = l.offset().top)
                }
                d.on("scroll", function () {
                    (t.pageYOffset || o.scrollTop) - (o.clientTop || 0) >= e && n.Popup.open()
                })
            }, n.Popup.behaviourIntent = function () {
                var e = {};
                n.Popup.elementSettings.popup_intent_sensitivity && (e.sensitivity = n.Popup.elementSettings.popup_intent_sensitivity.size), i.exitIntent("enable", e), i(document).bind("exitintent", n.Popup.open)
            }, n.Popup.onOpen = function (e, t) {
                "yes" === n.Popup.elementSettings.refresh_widgets && n.refreshElements(e.content, !0), "yes" !== n.Popup.elementSettings.popup_prevent_scroll && p.css({overflow: ""})
            }, n.Popup.open = function () {
                if (!jQuery.magnificPopup.instance.isOpen) {
                    var e = new Date, t = !1, i = 0, l = !1, s = !1, d = {date: e, times: i},
                        p = localStorage.getItem(r), g = o.isJson(p) ? JSON.parse(p) : p;
                    m ? (localStorage.removeItem(r), a.magnificPopup("open")) : (null !== g && (t = o.isJson(p) ? Date.parse(g.date) : p, i = o.isJson(p) ? g.times : i), s = i >= c, l = e - t >= 864e5 * n.Popup.elementSettings.popup_days, (!t || !s || s && l) && (a.magnificPopup("open"), d.times = i + 1, d.date = e, localStorage.setItem(r, JSON.stringify(d))))
                }
            }, n.Popup.init()
        }, AgeGate: function (e, t) {
            n.AgeGate.elementSettings = n.getElementSettings(e);
            var o = e.data("id"), i = e.find(".ee-age-gate__trigger"), l = e.find(".ee-form--age-gate"),
                a = e.find(".ee-age-gate__header"),
                s = (e.find(".ee-popup__content"), e.find("[name=ee-age-gate-age]")),
                r = e.find(".ee-notification--error"),
                c = void 0 !== n.AgeGate.elementSettings.popup_open_admin && "yes" === n.AgeGate.elementSettings.popup_open_admin,
                d = "mfp-popup--valign-" + n.AgeGate.elementSettings.popup_valign, p = {
                    mainClass: "ee-mfp-popup ee-mfp-popup-" + o + " " + d + " " + n.AgeGate.elementSettings.popup_animation,
                    type: "inline",
                    showCloseBtn: !1,
                    modal: !elementorFrontend.isEditMode(),
                    focus: elementorFrontend.isEditMode() ? ".no-focus" : ".ee-age-gate__form__age",
                    autoFocusLast: !1
                };
            n.AgeGate.init = function () {
                elementorFrontend.isEditMode() ? (p.closeOnBgClick = !0, p.enableEscapeKey = !0, i.magnificPopup("close").magnificPopup(p), "yes" === n.AgeGate.elementSettings.popup_open && i.magnificPopup("open")) : (i.magnificPopup(p), c && localStorage.removeItem("ee_AgeGate"), (!localStorage.getItem("ee_AgeGate") || localStorage.getItem("ee_AgeGate") < n.AgeGate.elementSettings.age) && ("" !== n.AgeGate.elementSettings.popup_animation && (p.removalDelay = 500), i.magnificPopup("open"), l.on("submit", n.AgeGate.onSubmit)))
            }, n.AgeGate.onSubmit = function (e) {
                e.preventDefault();
                var t = s.val();
                t >= Math.abs(parseFloat(n.AgeGate.elementSettings.age)) ? (i.magnificPopup("close"), c || localStorage.setItem("ee_AgeGate", t)) : (r.show(), n.AgeGate.elementSettings.hide_form_on_denied ? (l.remove(), a.remove()) : n.AgeGate.elementSettings.clear_form_on_denied && l[0].reset())
            }, n.AgeGate.init()
        }, ToggleElement: function (e, t) {
            n.ToggleElement.elementSettings = n.getElementSettings(e);
            var o = e.find(".ee-toggle-element"), i = {
                active: n.ToggleElement.elementSettings.toggle_active_index || 1,
                inactive: "yes" == n.ToggleElement.elementSettings.toggle_inactive,
                hashToggle: "yes" == n.ToggleElement.elementSettings.toggle_hash,
                hashLoad: "yes" == n.ToggleElement.elementSettings.toggle_hash_load,
                onAfterToggle: function (e) {
                    "yes" === n.ToggleElement.elementSettings.refresh_widgets && n.refreshElements(e, !1), n.fixSwipers(e)
                }
            };
            n.ToggleElement.init = function () {
                "" !== n.ToggleElement.elementSettings.indicator_color && (i.indicatorColor = n.ToggleElement.elementSettings.indicator_color), n.ToggleElement.elementSettings.indicator_speed.size && (i.speed = n.ToggleElement.elementSettings.indicator_speed.size), elementorFrontend.isEditMode() && (i.watchControls = !0), o.toggleElement(i)
            }, n.ToggleElement.init()
        }, Switcher: function (e, o) {
            n.Switcher.elementSettings = n.getElementSettings(e);
            var i = e.find(".ee-switcher__media-wrapper"), l = e.find(".ee-switcher__titles"), a = {
                mediaEffect: n.Switcher.elementSettings.effect_media,
                contentEffect: n.Switcher.elementSettings.effect_title,
                entranceAnimation: "yes" === n.Switcher.elementSettings.effect_entrance,
                contentEffectZoom: "yes" === n.Switcher.elementSettings.effect_media_zoom,
                contentStagger: "yes" === n.Switcher.elementSettings.effect_title_stagger,
                autoplay: "yes" === n.Switcher.elementSettings.autoplay,
                loop: "yes" === n.Switcher.elementSettings.loop,
                cancelOnInteraction: "yes" === n.Switcher.elementSettings.autoplay_cancel,
                changeBackground: "yes" === n.Switcher.elementSettings.background_switcher
            }, s = {
                type: "mouse",
                mouse: {relative: "viewport", axis: n.Switcher.elementSettings.parallax_pan_axis},
                speed: {desktop: .2}
            }, r = {
                type: "mouse",
                invert: !0,
                mouse: {relative: "viewport", axis: n.Switcher.elementSettings.parallax_pan_axis},
                speed: {desktop: .2}
            };
            n.Switcher.maybeDestroy = function () {
                e.data("eeSwitcher") && e.data("eeSwitcher").destroy(), i.data("parallaxElement") && i.data("parallaxElement").destroy(), l.data("parallaxElement") && l.data("parallaxElement").destroy()
            }, n.Switcher.init = function () {
                switch (elementorFrontend.isEditMode() && (a.scope = t.elementor.$previewContents, s.scope = t.elementor.$previewContents, s.scope = t.elementor.$previewContents, "yes" === n.Switcher.elementSettings.autoplay && "yes" !== n.Switcher.elementSettings.autoplay_preview && (a.autoplay = !1), "yes" === n.Switcher.elementSettings.effect_entrance && "yes" !== n.Switcher.elementSettings.effect_entrance_preview && (a.entranceAnimation = !1)), "yes" === n.Switcher.elementSettings.autoplay && n.Switcher.elementSettings.duration.size && (a.duration = n.Switcher.elementSettings.duration.size), n.Switcher.elementSettings.speed.size && (a.speed = n.Switcher.elementSettings.speed.size), "yes" === n.Switcher.elementSettings.parallax_enable && (void 0 !== n.Switcher.elementSettings.parallax_amount && "" !== n.Switcher.elementSettings.parallax_amount.size && (s.speed.desktop = n.Switcher.elementSettings.parallax_amount.size, r.speed.desktop = n.Switcher.elementSettings.parallax_amount.size), i.parallaxElement(s), l.parallaxElement(r)), n.Switcher.elementSettings.background_switcher_element) {
                    case"widget":
                        a.background = e.find(".elementor-widget-container");
                        break;
                    case"section":
                        a.background = e.parents(".elementor-section").first();
                        break;
                    default:
                        a.background = elementorFrontend.isEditMode() ? a.scope.find("body") : o("body")
                }
                e.eeSwitcher(a), n.onElementRemove(e, function () {
                    n.Switcher.maybeDestroy()
                })
            }, n.Switcher.maybeDestroy(), n.Switcher.init()
        }, InlineSvg: function (e, t) {
            var o = n.getElementSettings(e), i = e.find(".ee-inline-svg"),
                l = "" !== o.svg.url ? o.svg.url : i.data("url");
            n.InlineSvg.init = function () {
                if (l) return "svg" !== l.split(".").pop().toLowerCase() ? void alert("Please select a SVG file format.") : void jQuery.get(l, n.InlineSvg.callback)
            }, n.InlineSvg.callback = function (e) {
                i.html(t(e).find("svg"));
                var n = i.find("svg"), l = n.find("title"), a = n.find("desc"),
                    s = (n.find("*[fill]"), n.find("circle, ellipse, polygon, rect, path, line, polyline"));
                n.find("circle, ellipse, polygon, rect, path").filter(":not([fill])"), n.find("*[stroke]"), n.find("line, polyline").filter(":not([fill])");
                l.remove(), a.remove(), "yes" === o.remove_inline_css && (s.each(function () {
                    var e = t(this).css("stroke"), n = t(this).css("stroke-width"), o = t(this).css("stroke-linecap"),
                        i = t(this).css("stroke-dasharray"), l = t(this).css("stroke-miterlimit"),
                        a = t(this).css("fill");
                    n = n > 0 && n < 1 ? 1 : n, t(this).attr("stroke", e), t(this).attr("stroke-width", n), t(this).attr("stroke-linecap", o), t(this).attr("stroke-dasharray", i), t(this).attr("stroke-miterlimit", l), t(this).attr("fill", a)
                }), n.find("style").remove()), "yes" === o.override_colors && (s.filter('[fill]:not([fill="none"])').attr("fill", "currentColor"), s.filter('[stroke]:not([stroke="none"])').attr("stroke", "currentColor")), "yes" !== o.maintain_ratio && n[0].setAttribute("preserveAspectRatio", "none"), "yes" === o.sizing && (n[0].removeAttribute("width"), n[0].removeAttribute("height"))
            }, n.InlineSvg.init()
        }, PostsClassic: function (e, t) {
            if (!elementorFrontend.isEditMode()) {
                n.PostsClassic.elementSettings = n.getElementSettings(e);
                var o = e.data("id"), i = e.find(".ee-loop"), l = e.find(".ee-filters"), a = null,
                    s = l.find("[data-filter]"), r = ".elementor-element-" + o,
                    c = "default" !== n.PostsClassic.elementSettings.classic_layout && 1 < n.PostsClassic.elementSettings.columns,
                    d = "yes" === n.PostsClassic.elementSettings.classic_infinite_scroll,
                    p = "yes" === n.PostsClassic.elementSettings.classic_filters,
                    m = "yes" === n.PostsClassic.elementSettings.classic_infinite_scroll_history && "replace";
                e.find(".ee-pagination").length || (d = !1);
                var g = {
                    history: m,
                    path: r + " .ee-pagination__next",
                    append: r + " .ee-loop__item",
                    hideNav: r + " .ee-pagination",
                    status: r + " .ee-load-status"
                }, f = {
                    isOriginLeft: !elementorFrontend.config.is_rtl,
                    itemSelector: r + " .ee-loop__item",
                    layoutMode: c ? n.PostsClassic.elementSettings.classic_layout : "masonry",
                    masonry: c ? {columnWidth: r + " .ee-grid__item--sizer"} : "",
                    percentPosition: !0,
                    hiddenStyle: {opacity: 0}
                }, _ = {
                    wrapper: i,
                    filterables: ".ee-loop__item",
                    activeFilterClass: "ee--active",
                    notFound: e.find(".ee-grid__notice--not-found")
                };
                n.PostsClassic.init = function () {
                    n.PostsClassic.infinitescroll(), p && s.length && (a = s.filter(".ee--active"), n.PostsClassic.filters())
                }, n.PostsClassic.infinitescroll = function () {
                    if (d && (i.on("request.infiniteScroll", function (n, o) {
                        t(this).addClass("ee-loop--loading"), e.find(".ee-load-button").hide()
                    }), i.on("load.infiniteScroll", function (n, o, i) {
                        t(this).addClass("ee-loop--loaded"), e.find(".ee-load-button").show()
                    }), i.on("append.infiniteScroll", function (e, o, i, l) {
                        t(this).removeClass("ee-loop--loading ee-loop--loaded").addClass("ee-loop--added"), n.refreshElements(t(l), !1)
                    }), "yes" === n.PostsClassic.elementSettings.classic_infinite_scroll_button && (g.loadOnScroll = !1, g.scrollThreshold = !1, g.button = ".ee-load-button__trigger--" + o)), d && !c) i.infiniteScroll(g); else if (c) {
                        var l = i.isotope(f);
                        l.imagesLoaded().progress(function () {
                            l.isotope("layout")
                        });
                        var a = i.data("isotope");
                        if (d) {
                            e.find(".ee-filters");
                            p && s.length || (g.outlayer = a), l.infiniteScroll(g), l.on("append.infiniteScroll", function (e, t, n, o) {
                                l.imagesLoaded().always(function () {
                                    l.isotope("layout")
                                })
                            })
                        }
                    }
                }, n.PostsClassic.filters = function () {
                    if (c) a.length && a.data("filter") && i.isotope(t.extend({}, f, {filter: a.data("filter")})), s.on("click", function (e) {
                        var n = t(this).data("filter");
                        n && i.isotope(t.extend({}, f, {filter: n})), s.removeClass("ee--active"), t(this).addClass("ee--active")
                    }), d && i.on("load.infiniteScroll", function (e, n, o) {
                        var l = t(n).find(r + " .ee-loop__item");
                        t(n).imagesLoaded(function () {
                            i.append(l).isotope("appended", l)
                        })
                    }); else {
                        l.filtery(_);
                        var e = l.data("filtery");
                        d && i.on("load.infiniteScroll", function (n, o, l) {
                            var a = t(o).find(r + " .ee-loop__item");
                            t(o).imagesLoaded(function () {
                                e.update(), i.append(a)
                            })
                        })
                    }
                }, n.PostsClassic.init()
            }
        }, PostsCarousel: function (e, t) {
            var o = n.getElementSettings(e), i = n.getUniqueLoopScopeId(e),
                l = (e.data("id"), e.find(".ee-swiper__container"));
            e.find(".ee-grid__item");
            if (l.length) {
                var a = null, s = {
                    scope: e,
                    id: i,
                    stretch: !0,
                    element: {
                        autoHeight: "yes" === o.carousel_autoheight,
                        autoplay: "yes" === o.carousel_autoplay,
                        loop: "yes" === o.carousel_loop,
                        direction: o.carousel_direction,
                        effect: o.carousel_effect,
                        speed: o.carousel_speed.size || 500,
                        resistance: o.carousel_resistance_ratio.size || .25,
                        autoplaySpeed: !!o.carousel_autoplay && o.carousel_autoplay_speed,
                        slidesPerView: o.carousel_slides_per_view_mobile,
                        slidesPerColumn: "vertical" === o.carousel_direction ? 1 : o.carousel_slides_per_column_mobile,
                        slidesPerGroup: o.carousel_slides_to_scroll_mobile,
                        spaceBetween: o.carousel_grid_columns_spacing_mobile.size || 0,
                        disableOnInteraction: "yes" === o.carousel_pause_on_interaction,
                        stopOnHover: "yes" === o.carousel_stop_on_hover,
                        arrows: "" !== o.carousel_arrows,
                        arrowPrev: ".ee-swiper__button--prev",
                        arrowNext: ".ee-swiper__button--next",
                        freeMode: "yes" === o.carousel_free_mode,
                        freeModeSticky: "yes" === o.carousel_free_mode_sticky,
                        freeModeMomentum: "yes" === o.carousel_free_mode_momentum,
                        freeModeMomentumBounce: "yes" === o.carousel_free_mode_momentum_bounce,
                        freeModeMomentumRatio: !!o.carousel_free_mode_momentum_ratio && o.carousel_free_mode_momentum_ratio.size,
                        freeModeMomentumVelocityRatio: !!o.carousel_free_mode_momentum_velocity && o.carousel_free_mode_momentum_velocity.size,
                        freeModeMomentumBounceRatio: !!o.carousel_free_mode_momentum_bounce_ratio && o.carousel_free_mode_momentum_bounce_ratio.size,
                        pagination: "" !== o.carousel_pagination,
                        paginationType: o.carousel_pagination_type,
                        paginationClickable: "yes" === o.carousel_pagination_clickable,
                        slideChangeTriggerResize: "yes" === o.carousel_slide_change_resize,
                        breakpoints: {
                            tablet: {
                                slidesPerView: o.carousel_slides_per_view_tablet,
                                slidesPerColumn: "vertical" === o.carousel_direction ? 1 : o.carousel_slides_per_column_tablet,
                                slidesPerGroup: o.carousel_slides_to_scroll_tablet,
                                spaceBetween: o.carousel_grid_columns_spacing_tablet.size || 0
                            },
                            desktop: {
                                slidesPerView: o.carousel_slides_per_view,
                                slidesPerColumn: "vertical" === o.carousel_direction ? 1 : o.carousel_slides_per_column,
                                slidesPerGroup: o.carousel_slides_to_scroll,
                                spaceBetween: o.carousel_grid_columns_spacing.size || 0
                            }
                        }
                    },
                    default: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        slidesPerColumn: 1,
                        spaceBetween: 6,
                        breakpoints: {
                            tablet: {
                                slidesPerView: 2,
                                slidesPerGroup: 1,
                                slidesPerColumn: 1,
                                spaceBetween: 12
                            }, desktop: {slidesPerView: 3, slidesPerGroup: 1, slidesPerColumn: 1, spaceBetween: 24}
                        }
                    }
                };
                n.PostsCarousel.init = function () {
                    var e = n.Carousel(l, s);
                    if ("undefined" == typeof Swiper) {
                        new (0, elementorFrontend.utils.swiper)(l, e).then(function (e) {
                            n.Carousel.onAfterInit(l, e, s)
                        })
                    } else a = new Swiper(l, e), n.Carousel.onAfterInit(l, a, s)
                }, n.onElementRemove(e, function () {
                    e.find(".swiper-container").each(function () {
                        t(this).data("swiper") && t(this).data("swiper").destroy()
                    })
                }), n.PostsCarousel.init()
            }
        }, Sticky: function (e, t) {
            n.Sticky.elementSettings = n.getElementSettings(e), n.Sticky.elementType = n.getElementType(e), new eeSticky(e, n.Sticky.elementSettings).init()
        }, Table: function (e, t) {
            n.Table.elementSettings = n.getElementSettings(e);
            var o = e.find("table.ee-table");
            o.data("tablesorter");
            n.Table.init = function () {
                "yes" == n.Table.elementSettings.sortable ? o.tablesorter({
                    cssHeader: "ee-table__sort",
                    cssAsc: "ee-table__sort--up",
                    cssDesc: "ee-table__sort--down"
                }) : o.removeData("tablesorter")
            }, n.Table.init()
        }, ParallaxBackground: function (e, o) {
            if ("section" === n.getElementType(e)) {
                n.ParallaxBackground.elementSettings = n.getElementSettings(e);
                var i = e.data("parallaxBackground"), l = {parallaxResizeWatch: e.find(".elementor-container")};
                n.ParallaxBackground.maybeDestroy = function () {
                    i && i.destroy()
                }, n.ParallaxBackground.init = function () {
                    n.ParallaxBackground.maybeDestroy(), n.ParallaxBackground.elementSettings.parallax_background_enable && "" !== n.ParallaxBackground.elementSettings.parallax_background_enable && (elementorFrontend.isEditMode() || "" !== e.css("background-image") && "none" !== e.css("background-image")) && (l.parallaxBgImage = n.ParallaxBackground.elementSettings.background_image.url, "" !== n.ParallaxBackground.elementSettings.parallax_background_speed.size && (l.parallaxSpeed = n.ParallaxBackground.elementSettings.parallax_background_speed.size), "" !== n.ParallaxBackground.elementSettings.parallax_background_speed_tablet.size && (l.parallaxSpeedTablet = n.ParallaxBackground.elementSettings.parallax_background_speed_tablet.size), "" !== n.ParallaxBackground.elementSettings.parallax_background_speed_mobile.size && (l.parallaxSpeedMobile = n.ParallaxBackground.elementSettings.parallax_background_speed_mobile.size), n.ParallaxBackground.elementSettings.parallax_background_direction && (l.parallaxDirection = n.ParallaxBackground.elementSettings.parallax_background_direction), elementorFrontend.isEditMode() && (l.win = t.elementor.$previewContents), e.parallaxBackground(l), n.onElementRemove(e, function () {
                        n.ParallaxBackground.maybeDestroy()
                    }))
                }, n.ParallaxBackground.init()
            }
        }, Unfold: function (e, t) {
            n.Unfold.elementSettings = n.getElementSettings(e);
            var o = e.find(".ee-unfold"), i = o.find(".ee-button-text"), l = o.data("unfold"), a = {};
            n.Unfold.maybeDestroy = function () {
                l && l.destroy()
            }, n.Unfold.init = function () {
                n.Unfold.maybeDestroy(), n.Unfold.elementSettings.animation_unfold && (a.animation_unfold = n.Unfold.elementSettings.animation_unfold), n.Unfold.elementSettings.animation_fold && (a.animation_fold = n.Unfold.elementSettings.animation_fold), n.Unfold.elementSettings.easing_unfold && (a.easing_unfold = n.Unfold.elementSettings.easing_unfold), n.Unfold.elementSettings.easing_fold && (a.easing_fold = n.Unfold.elementSettings.easing_fold), n.Unfold.elementSettings.steps_unfold && (a.steps_unfold = n.Unfold.elementSettings.steps_unfold.size), n.Unfold.elementSettings.steps_fold && (a.steps_fold = n.Unfold.elementSettings.steps_fold.size), n.Unfold.elementSettings.slow_unfold && (a.slow_unfold = n.Unfold.elementSettings.slow_unfold.size), n.Unfold.elementSettings.slow_fold && (a.slow_fold = n.Unfold.elementSettings.slow_fold.size), "yes" === n.Unfold.elementSettings.focus_close && (a.focusOnClose = !0), "yes" === n.Unfold.elementSettings.focus_open && (a.focusOnOpen = n.Unfold.elementSettings.focus_open), n.Unfold.elementSettings.duration_unfold && (a.duration_unfold = n.Unfold.elementSettings.duration_unfold.size), n.Unfold.elementSettings.duration_fold && (a.duration_fold = n.Unfold.elementSettings.duration_fold.size), "lines" === n.Unfold.elementSettings.visible_type && (a.visible_lines = n.Unfold.elementSettings.visible_lines.size), n.Unfold.elementSettings.visible_percentage && (a.visible_percentage = n.Unfold.elementSettings.visible_percentage.size), "" !== i.data("open-label") && (a.text_closed = i.data("open-label")), "" !== i.data("close-label") && (a.text_open = i.data("close-label")), o.unfold(a), n.onElementRemove(e, function () {
                    n.Unfold.maybeDestroy()
                })
            }, n.Unfold.init()
        }, Portfolio: function (e, o) {
            if (n.Portfolio.elementSettings = n.getElementSettings(e), "yes" === n.Portfolio.elementSettings.parallax_enable) {
                var i = {
                    transformItem: "a.elementor-post__thumbnail__link",
                    columns: n.Portfolio.elementSettings.columns
                };
                n.Portfolio.init = function () {
                    "none" !== n.Portfolio.elementSettings.parallax_disable_on && (i.responsive = n.Portfolio.elementSettings.parallax_disable_on), n.Portfolio.elementSettings.columns_tablet && (i.columnsTablet = n.Portfolio.elementSettings.columns_tablet), n.Portfolio.elementSettings.columns_mobile && (i.columnsMobile = n.Portfolio.elementSettings.columns_mobile), n.Portfolio.elementSettings.parallax_speed_tablet.size && (i.speedTablet = n.Portfolio.elementSettings.parallax_speed_tablet.size), n.Portfolio.elementSettings.parallax_speed_mobile.size && (i.speedMobile = n.Portfolio.elementSettings.parallax_speed_mobile.size), n.Portfolio.elementSettings.parallax_speed.size && (i.speed = n.Portfolio.elementSettings.parallax_speed.size), elementorFrontend.isEditMode() && (i.scope = t.elementor.$previewContents), e.find(".elementor-portfolio").parallaxGallery(i)
                }, n.Portfolio.init()
            }
        }, GalleryExtra: function (e, o) {
            n.GalleryExtra.elementSettings = n.getElementSettings(e);
            var i = e.find(".ee-gallery"), l = {columns: n.GalleryExtra.elementSettings.columns};
            n.GalleryExtra.parallax = function () {
                "none" !== n.GalleryExtra.elementSettings.parallax_disable_on && (l.responsive = n.GalleryExtra.elementSettings.parallax_disable_on), n.GalleryExtra.elementSettings.columns_tablet && (l.columnsTablet = n.GalleryExtra.elementSettings.columns_tablet), n.GalleryExtra.elementSettings.columns_mobile && (l.columnsMobile = n.GalleryExtra.elementSettings.columns_mobile), n.GalleryExtra.elementSettings.parallax_speed.size && (l.speed = n.GalleryExtra.elementSettings.parallax_speed.size), n.GalleryExtra.elementSettings.parallax_speed_tablet.size && (l.speedTablet = n.GalleryExtra.elementSettings.parallax_speed_tablet.size), n.GalleryExtra.elementSettings.parallax_speed_mobile.size && (l.speedMobile = n.GalleryExtra.elementSettings.parallax_speed_mobile.size), elementorFrontend.isEditMode() && (l.scope = t.elementor.$previewContents), i.parallaxGallery(l)
            }, n.GalleryExtra.masonry = function () {
                i.imagesLoaded(function () {
                    i.isotope({
                        itemSelector: ".ee-gallery__item",
                        percentPosition: !0,
                        hiddenStyle: {opacity: 0}
                    }).masonry()
                })
            }, n.GalleryExtra.tilt = function () {
                i.find(".ee-gallery__tilt").tilt({
                    maxTilt: n.GalleryExtra.elementSettings.tilt_amount.size,
                    scale: n.GalleryExtra.elementSettings.tilt_scale.size,
                    speed: n.GalleryExtra.elementSettings.tilt_speed.size,
                    axis: n.GalleryExtra.elementSettings.tilt_axis,
                    perspective: 1e3
                })
            }, n.GalleryExtra.init = function () {
                "yes" === n.GalleryExtra.elementSettings.parallax_enable ? n.GalleryExtra.parallax() : "yes" !== n.GalleryExtra.elementSettings.masonry_enable || elementorFrontend.isEditMode() || n.GalleryExtra.masonry(), "yes" === n.GalleryExtra.elementSettings.tilt_enable && n.GalleryExtra.tilt()
            }, n.GalleryExtra.init()
        }, ParallaxElement: function (e, o) {
            n.ParallaxElement.elementSettings = n.getElementSettings(e);
            var i = e, l = e.data("parallaxElement"), a = {
                type: n.ParallaxElement.elementSettings.parallax_element_type,
                invert: "yes" === n.ParallaxElement.elementSettings.parallax_element_invert,
                moveOutside: "yes" === n.ParallaxElement.elementSettings.parallax_off_viewport,
                scroll: {relative: n.ParallaxElement.elementSettings.parallax_element_relative},
                mouse: {
                    relative: n.ParallaxElement.elementSettings.parallax_element_pan_relative,
                    axis: n.ParallaxElement.elementSettings.parallax_element_pan_axis
                },
                speed: {}
            };
            n.ParallaxElement.maybeDestroy = function () {
                l && l.destroy()
            }, n.ParallaxElement.init = function () {
                "column" === n.getElementType(e) && (i = e.find("> .elementor-column-wrap")), "widget" === n.getElementType(e) && (i = e.find(".elementor-widget-container")), n.ParallaxElement.maybeDestroy(), "yes" === n.ParallaxElement.elementSettings.parallax_element_enable && ("scroll" === n.ParallaxElement.elementSettings.parallax_element_type ? "none" !== n.ParallaxElement.elementSettings.parallax_element_disable_on && (a.scroll.responsive = n.ParallaxElement.elementSettings.parallax_element_disable_on) : "mouse" === n.ParallaxElement.elementSettings.parallax_element_type && void 0 !== typeof n.ParallaxElement.elementSettings.parallax_element_pan_distance && "element" === n.ParallaxElement.elementSettings.parallax_element_pan_relative && (a.mouse.distance = n.ParallaxElement.elementSettings.parallax_element_pan_distance.size), n.ParallaxElement.elementSettings.parallax_element_speed.size && (a.speed.desktop = n.ParallaxElement.elementSettings.parallax_element_speed.size), n.ParallaxElement.elementSettings.parallax_element_speed_tablet.size && (a.speed.tablet = n.ParallaxElement.elementSettings.parallax_element_speed_tablet.size), n.ParallaxElement.elementSettings.parallax_element_speed_mobile.size && (a.speed.mobile = n.ParallaxElement.elementSettings.parallax_element_speed_mobile.size), elementorFrontend.isEditMode() && (a.scope = t.elementor.$previewContents), i.parallaxElement(a))
            }, n.ParallaxElement.init(), n.onElementRemove(e, function () {
                n.ParallaxElement.maybeDestroy()
            })
        }, GallerySlider: function (e, t) {
            var o = n.getElementSettings(e), i = n.getUniqueLoopScopeId(e),
                l = (e.data("id"), e.find(".ee-gallery-slider__slider")), a = e.find(".ee-gallery-slider__carousel"),
                s = (e.find(".ee-gallery__item"), a.length), r = null, c = null, d = {
                    key: "slider",
                    scope: e,
                    id: i,
                    element: {
                        autoHeight: "yes" === o.adaptive_height,
                        autoplay: "yes" === o.autoplay,
                        autoplaySpeed: !("yes" !== o.autoplay || !o.autoplay_speed) && o.autoplay_speed.size,
                        disableOnInteraction: "" !== o.autoplay_disable_on_interaction,
                        stopOnHover: "yes" === o.pause_on_hover,
                        loop: "yes" === o.infinite,
                        arrows: "" !== o.show_arrows,
                        arrowPrev: ".ee-swiper__button--prev-slider",
                        arrowNext: ".ee-swiper__button--next-slider",
                        effect: o.effect,
                        speed: o.speed ? o.speed.size : 500,
                        resistance: o.resistance ? o.resistance.size : .25
                    },
                    default: {
                        effect: "slide",
                        direction: "horizontal",
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        slidesPerColumn: 1,
                        spaceBetween: 0
                    }
                };
            if (s) var p = {
                key: "carousel",
                scope: e,
                id: i,
                stretch: "yes" === o.thumbnails_stretch,
                element: {
                    direction: o.carousel_orientation,
                    arrows: "" !== o.carousel_arrows,
                    arrowPrev: ".ee-swiper__button--prev-carousel",
                    arrowNext: ".ee-swiper__button--next-carousel",
                    autoHeight: !1,
                    speed: o.carousel_speed ? o.carousel_speed.size : 500,
                    slidesPerView: o.carousel_slides_per_view_mobile,
                    slidesPerColumn: "vertical" === o.carousel_orientation ? 1 : o.carousel_slides_per_column_mobile,
                    slidesPerGroup: o.carousel_slides_to_scroll_mobile,
                    resistance: o.carousel_resistance ? o.carousel_resistance.size : .15,
                    spaceBetween: o.carousel_spacing_mobile ? o.carousel_spacing_mobile.size : 0,
                    breakpoints: {
                        tablet: {
                            slidesPerView: o.carousel_slides_per_view_tablet,
                            slidesPerColumn: "vertical" === o.carousel_orientation ? 1 : o.carousel_slides_per_column_tablet,
                            slidesPerGroup: o.carousel_slides_to_scroll_tablet,
                            spaceBetween: o.carousel_spacing_tablet ? o.carousel_spacing_tablet.size : 0
                        },
                        desktop: {
                            slidesPerView: o.carousel_slides_per_view,
                            slidesPerColumn: "vertical" === o.carousel_orientation ? 1 : o.carousel_slides_per_column,
                            slidesPerGroup: o.carousel_slides_to_scroll,
                            spaceBetween: o.carousel_spacing ? o.carousel_spacing.size : 0
                        }
                    }
                },
                default: {
                    effect: "slide",
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    slidesPerColumn: 1,
                    spaceBetween: 6,
                    breakpoints: {
                        tablet: {slidesPerView: 2, slidesPerGroup: 1, slidesPerColumn: 2, spaceBetween: 12},
                        desktop: {slidesPerView: 3, slidesPerGroup: 1, slidesPerColumn: 3, spaceBetween: 24}
                    }
                }
            };
            n.GallerySlider.init = function () {
                var t = n.Carousel(l, d);
                if (s) var o = n.Carousel(a, p);
                if ("undefined" == typeof Swiper) {
                    const i = elementorFrontend.utils.swiper;
                    new i(l, t).then(function (t) {
                        s ? new i(a, o).then(function (o) {
                            n.GallerySlider.initSliders(e, t, o), n.Carousel.onAfterInit(l, t, d), n.Carousel.onAfterInit(a, o, p)
                        }) : (n.GallerySlider.initSliders(e, t, !1), n.Carousel.onAfterInit(l, t, d))
                    })
                } else r = new Swiper(l, t), s && (c = new Swiper(a, o)), n.GallerySlider.initSliders(e, r, c), n.Carousel.onAfterInit(l, r, d), s && n.Carousel.onAfterInit(a, c, p)
            }, n.GallerySlider.getSlider = function () {
                return e.find(".ee-gallery-slider__slider")
            }, n.GallerySlider.getCarousel = function () {
                return e.find(".ee-gallery-slider__carousel")
            }, n.GallerySlider.initSliders = function (e, t, o) {
                var i = {scope: e, slider: t, carousel: o};
                n.GallerySlider.onSlideChange(i), n.GallerySlider.events(i)
            }, n.GallerySlider.events = function (e) {
                var o = e.scope.find(".ee-gallery__item");
                e.slider.on("slideChange", function (t) {
                    n.GallerySlider.onSlideChange(e)
                }), o.on("click", function () {
                    var n = d.element.loop ? 1 : 0;
                    event.preventDefault(), e.slider.slideTo(t(this).index() + n)
                })
            }, n.GallerySlider.onSlideChange = function (e) {
                var t = d.element.loop ? e.slider.realIndex : e.slider.activeIndex;
                s && e.carousel.slideTo(t);
                var n = e.scope.find(".ee-gallery__item");
                n.removeClass("is--active"), n.eq(t).addClass("is--active")
            }, n.onElementRemove(e, function () {
                e.find(".swiper-container").each(function () {
                    t(this).data("swiper") && t(this).data("swiper").destroy()
                })
            }), n.GallerySlider.init()
        }, Carousel: function (o, i) {
            var l = o.find(".ee-swiper__slide"), a = elementorFrontend.config.breakpoints, s = o.data("swiper"), r = {
                autoHeight: i.element.autoHeight || !1,
                direction: i.element.direction || i.default.direction,
                effect: i.element.effect || i.default.effect,
                slidesPerView: i.default.slidesPerView,
                slidesPerColumn: i.default.slidesPerColumn,
                slidesPerColumnFill: "row",
                slidesPerGroup: i.default.slidesPerGroup,
                spaceBetween: i.default.spaceBetween,
                pagination: {},
                navigation: {},
                autoplay: i.element.autoplay || !1,
                grabCursor: !0,
                watchSlidesProgress: !0,
                watchSlidesVisibility: !0
            };
            return i.default.breakpoints && (r.breakpoints = {}, r.breakpoints[a.md] = i.default.breakpoints.tablet, r.breakpoints[a.lg] = i.default.breakpoints.desktop), elementorFrontend.isEditMode() ? (r.observer = !0, r.observeParents = !0, r.observeSlideChildren = !0) : i.element.freeMode || (r.observer = !0, r.observeParents = !0, r.observeSlideChildren = !0), n.Carousel.init = function () {
                if (s) return void n.Carousel.destroy();
                if (r.breakpoints && (i.element.breakpoints.desktop.slidesPerView && (r.breakpoints[a.lg].slidesPerView = i.stretch ? Math.min(l.length, +i.element.breakpoints.desktop.slidesPerView || 3) : +i.element.breakpoints.desktop.slidesPerView || 3), i.element.breakpoints.tablet.slidesPerView && (r.breakpoints[a.md].slidesPerView = i.stretch ? Math.min(l.length, +i.element.breakpoints.tablet.slidesPerView || 2) : +i.element.breakpoints.tablet.slidesPerView || 2)), i.element.slidesPerView && (r.slidesPerView = i.stretch ? Math.min(l.length, +i.element.slidesPerView || 1) : +i.element.slidesPerView || 1), r.breakpoints && (i.element.breakpoints.desktop.slidesPerGroup && (r.breakpoints[a.lg].slidesPerGroup = Math.min(l.length, +i.element.breakpoints.desktop.slidesPerGroup || 3)), i.element.breakpoints.tablet.slidesPerGroup && (r.breakpoints[a.md].slidesPerGroup = Math.min(l.length, +i.element.breakpoints.tablet.slidesPerGroup || 2))), i.element.slidesPerGroup && (r.slidesPerGroup = Math.min(l.length, +i.element.slidesPerGroup || 1)), r.breakpoints && (i.element.breakpoints.desktop.slidesPerColumn && (r.breakpoints[a.lg].slidesPerColumn = i.element.breakpoints.desktop.slidesPerColumn), i.element.breakpoints.tablet.slidesPerColumn && (r.breakpoints[a.md].slidesPerColumn = i.element.breakpoints.tablet.slidesPerColumn)), i.element.slidesPerColumn && (r.slidesPerColumn = i.element.slidesPerColumn), r.breakpoints && (r.breakpoints[a.lg].spaceBetween = i.element.breakpoints.desktop.spaceBetween || 0, r.breakpoints[a.md].spaceBetween = i.element.breakpoints.tablet.spaceBetween || 0), i.element.spaceBetween && (r.spaceBetween = i.element.spaceBetween || 0), i.element.slidesPerColumnFill && (r.slidesPerColumnFill = i.element.slidesPerColumnFill), i.element.arrows) {
                    r.navigation.disabledClass = "ee-swiper__button--disabled";
                    var e = i.scope.find(i.element.arrowPrev), t = i.scope.find(i.element.arrowNext);
                    if (e.length && t.length) {
                        var o = i.element.arrowPrev + "-" + i.id, c = i.element.arrowNext + "-" + i.id;
                        e.addClass(o.replace(".", "")), t.addClass(c.replace(".", "")), r.navigation.prevEl = o, r.navigation.nextEl = c
                    }
                }
                return i.element.pagination && (r.pagination.el = ".ee-swiper__pagination-" + i.id, r.pagination.type = i.element.paginationType, i.element.paginationClickable && (r.pagination.clickable = !0)), i.element.loop && (r.loop = !0), r.autoplay && (i.element.autoplaySpeed || i.element.disableOnInteraction) && (r.autoplay = {}, i.element.autoplaySpeed && (r.autoplay.delay = i.element.autoplaySpeed), i.element.autoplaySpeed && (r.autoplay.disableOnInteraction = i.element.disableOnInteraction)), i.element.speed && (r.speed = i.element.speed), i.element.resistance && (r.resistanceRatio = 1 - i.element.resistance), i.element.freeMode && (r.freeMode = !0, r.freeModeSticky = i.element.freeModeSticky, r.freeModeMomentum = i.element.freeModeMomentum, r.freeModeMomentumBounce = i.element.freeModeMomentumBounce, i.element.freeModeMomentumRatio && (r.freeModeMomentumRatio = i.element.freeModeMomentumRatio), i.element.freeModeMomentumVelocityRatio && (r.freeModeMomentumVelocityRatio = i.element.freeModeMomentumVelocityRatio), i.element.freeModeMomentumBounceRatio && (r.freeModeMomentumBounceRatio = i.element.freeModeMomentumBounceRatio)), r
            }, n.Carousel.onAfterInit = function (n, o, i) {
                void 0 !== i && void 0 !== o && (i.element.stopOnHover && (n.on("mouseover", function () {
                    o.autoplay.stop()
                }), n.on("mouseout", function () {
                    o.autoplay.start()
                })), i.element.slideChangeTriggerResize && o.on("slideChange", function () {
                    e(t).trigger("resize")
                }), n.data("swiper", o))
            }, n.Carousel.init()
        }, Timeline: function (e, o) {
            n.Timeline.elementSettings = n.getElementSettings(e);
            var i = e.find(".ee-timeline"), l = {};
            n.Timeline.init = function () {
                elementorFrontend.isEditMode() && (l.scope = t.elementor.$previewContents), void 0 !== n.Timeline.elementSettings.line_location && n.Timeline.elementSettings.line_location.size && (l.lineLocation = n.Timeline.elementSettings.line_location.size), i.eeTimeline(l)
            }, n.Timeline.init()
        }, HeadingExtra: function (e, t) {
            n.HeadingExtra.elementSettings = n.getElementSettings(e);
            var o = e.find(".ee-heading"), i = o.find(".ee-heading__long-shadow"), l = {};
            "yes" === n.HeadingExtra.elementSettings.title_long_shadow_enable && (n.HeadingExtra.init = function () {
                n.HeadingExtra.elementSettings.title_long_shadow_color && (l.colorShadow = n.HeadingExtra.elementSettings.title_long_shadow_color), n.HeadingExtra.elementSettings.title_long_shadow_size && (l.sizeShadow = n.HeadingExtra.elementSettings.title_long_shadow_size.size), n.HeadingExtra.elementSettings.title_long_shadow_direction && (l.directionShadow = n.HeadingExtra.elementSettings.title_long_shadow_direction), i.longShadow(l)
            }, n.HeadingExtra.init())
        }, ImageComparison: function (e, o) {
            n.ImageComparison.elementSettings = n.getElementSettings(e);
            var i = e.find(".ee-image-comparison"), l = {
                animation: "yes" === n.ImageComparison.elementSettings.entrance_animation,
                clickToMove: "yes" === n.ImageComparison.elementSettings.click_to_move,
                clickLabels: "yes" === n.ImageComparison.elementSettings.click_labels,
                animateClick: "yes" === n.ImageComparison.elementSettings.click_animate
            };
            n.ImageComparison.init = function () {
                elementorFrontend.isEditMode() && (l.scope = t.elementor.$previewContents, l.editMode = !0), i.imageComparison(l)
            }, n.ImageComparison.init()
        }, Tooltips: function (e, t) {
            n.Tooltips.elementSettings = n.getElementSettings(e),
                n.Tooltips.globalSettings = n.getGlobalSettings("extras");
            var o = e.find(".hotip"), i = e.data("id"), l = n.getElementSkin(e),
                l = "" !== l && "default" !== l ? l + "_" : "", a = new eeTooltips(e), s = {
                    id: i,
                    fixed: "fixed" === n.Tooltips.elementSettings[l + "css_position"],
                    position: n.Tooltips.elementSettings[l + "position"] || n.Tooltips.globalSettings.ee_tooltips_position,
                    arrowPositionH: n.Tooltips.elementSettings[l + "arrow_position_h"] || n.Tooltips.globalSettings.ee_tooltips_arrow_position_h,
                    arrowPositionV: n.Tooltips.elementSettings[l + "arrow_position_v"] || n.Tooltips.globalSettings.ee_tooltips_arrow_position_v,
                    trigger: {
                        desktop: n.Tooltips.elementSettings[l + "trigger"],
                        tablet: n.Tooltips.elementSettings[l + "trigger_tablet"],
                        mobile: n.Tooltips.elementSettings[l + "trigger_mobile"]
                    },
                    hide: {
                        desktop: n.Tooltips.elementSettings[l + "_hide"],
                        tablet: n.Tooltips.elementSettings[l + "_hide_tablet"],
                        mobile: n.Tooltips.elementSettings[l + "_hide_mobile"]
                    },
                    responsive: {
                        disable: n.Tooltips.elementSettings[l + "disable"] || n.Tooltips.globalSettings.ee_tooltips_disable,
                        breakpoints: {
                            mobile: elementorFrontend.config.breakpoints.xs,
                            tablet: elementorFrontend.config.breakpoints.md,
                            desktop: elementorFrontend.config.breakpoints.lg
                        }
                    }
                };
            n.Tooltips.init = function () {
                a.remove(e), "" !== n.Tooltips.elementSettings[l + "delay_in"].size ? s.delayIn = n.Tooltips.elementSettings[l + "delay_in"].size : n.Tooltips.globalSettings.ee_tooltips_delay_in.size && (s.delayIn = n.Tooltips.globalSettings.ee_tooltips_delay_in.size), "" !== n.Tooltips.elementSettings[l + "delay_out"].size ? s.delayOut = n.Tooltips.elementSettings[l + "delay_out"].size : n.Tooltips.globalSettings.ee_tooltips_delay_out.size && (s.delayOut = n.Tooltips.globalSettings.ee_tooltips_delay_out.size), "" !== n.Tooltips.elementSettings[l + "duration"].size ? s.speed = n.Tooltips.elementSettings[l + "duration"].size : n.Tooltips.globalSettings.ee_tooltips_duration.size && (s.speed = n.Tooltips.globalSettings.ee_tooltips_duration.size), elementorFrontend.isEditMode() && (s.scope = n.getWindow(), o.attr("data-hotips-class", "ee-global ee-tooltip ee-tooltip-" + i)), o.hotips(s)
            }, n.onElementRemove(e, function () {
                a.remove(e)
            }), n.Tooltips.init()
        }, VideoPlayer: function (e, t) {
            n.VideoPlayer.elementSettings = n.getElementSettings(e);
            var o = e.find(".ee-video-player"), i = {
                playOnViewport: "yes" === n.VideoPlayer.elementSettings.video_play_viewport,
                stopOffViewport: "yes" === n.VideoPlayer.elementSettings.video_stop_viewport,
                endAtLastFrame: "yes" === n.VideoPlayer.elementSettings.video_end_at_last_frame,
                restartOnPause: "yes" === n.VideoPlayer.elementSettings.video_restart_on_pause,
                stopOthersOnPlay: "yes" === n.VideoPlayer.elementSettings.video_stop_others,
                disableFsRightClick: "yes" === n.VideoPlayer.elementSettings.video_fs_no_rightclick
            };
            void 0 !== n.VideoPlayer.elementSettings.video_speed && (i.speed = n.VideoPlayer.elementSettings.video_speed.size), o.length && (n.VideoPlayer.init = function () {
                void 0 !== n.VideoPlayer.elementSettings.video_volume && (i.volume = n.VideoPlayer.elementSettings.video_volume.size), o.videoPlayer(i)
            }, n.VideoPlayer.init())
        }, Devices: function (e, t) {
            n.Devices.elementSettings = n.getElementSettings(e);
            var o = (e.find(".ee-device-wrapper"), e.find(".ee-device"), e.find(".ee-device__shape")), i = null,
                l = null;
            n.Devices.init = function () {
                n.Devices.elementSettings.device_type || (n.Devices.elementSettings.device_type = "phone"), i = elementorExtrasFrontendConfig.urls.assets + "shapes/" + n.Devices.elementSettings.device_type + ".svg", jQuery.get(i, function (e) {
                    o.html(e.childNodes[0]), l = o.find("svg.devices-elementor-svg").get(0)
                }), "yes" === n.Devices.elementSettings.device_orientation_control && e.find(".ee-device__orientation").on("click", function () {
                    e.toggleClass("ee-device-orientation-landscape")
                }), n.VideoPlayer(e)
            }, n.Devices.init()
        }, CircleProgress: function (e, t) {
            var i = n.getElementSettings(e), l = null, a = e.find(".ee-circle-progress__value .value"),
                s = (e.find(".ee-circle-progress__value .suffix"), o.parseValue(e.find(".ee-circle-progress__value").data("cp-value"), 75)),
                r = 0, c = s, d = 100, p = o.countDecimals(s), m = {
                    value: .75,
                    reverse: "yes" === i.reverse,
                    lineCap: i.lineCap,
                    startAngle: -Math.PI,
                    animation: {easing: i.easing}
                };
            n.CircleProgress.init = function () {
                l = e.find(".ee-circle-progress"), l.length && (i.value_max && (d = i.value_max), void 0 !== s && ("percentage" === i.value_progress ? s /= 100 : "absolute" === i.value_progress && (s /= d), m.value = s), void 0 !== i.value_decimal_move && (r = -1 * i.value_decimal_move.size), i.size.size && (m.size = i.size.size), i.thickness.size && (i.thickness.size > i.size.size / 2 ? m.thickness = i.size.size / 2 : m.thickness = i.thickness.size), i.angle.size && (m.startAngle = m.startAngle + i.angle.size), i.emptyFill && (m.emptyFill = i.emptyFill), i.animate ? (i.duration && (m.animation.duration = i.duration.size), l.circleProgress(m), l.off("circle-animation-progress").on("circle-animation-progress", n.CircleProgress.onProgress)) : (m.animation = !1, l.circleProgress(m), a.text(n.CircleProgress.getStepValue(m.value, s, c, r))), elementorFrontend.isEditMode() || n.CircleProgress.appear())
            }, n.CircleProgress.appear = function () {
                t(l.circleProgress("widget")).stop(), t._appear(l.get(0), {force_process: !0}), l.on("_appear", function () {
                    l.data("animated") || (l.circleProgress("value", s), l.data("animated", !0))
                })
            }, n.CircleProgress.onProgress = function (e, t, o) {
                a.text(n.CircleProgress.getStepValue(o, s, c, r))
            }, n.CircleProgress.getStepValue = function (e, t, n, l) {
                if (!e) return 0;
                var a = "percentage" === i.value_progress ? 100 * e : n * e / t;
                return a = a.toFixed(p), l && (a = o.moveDecimal(a, l)), a
            }, n.CircleProgress.init()
        }, GlobalTooltip: function (e, o) {
            n.GlobalTooltip.elementSettings = n.getElementSettings(e), n.GlobalTooltip.globalSettings = n.getGlobalSettings("extras");
            var i = e, l = e.data("id"), a = i.data("hotips"), s = (new eeTooltips(e), {
                fixed: "fixed" === n.GlobalTooltip.elementSettings.tooltip_css_position,
                position: n.GlobalTooltip.elementSettings.tooltip_position || n.GlobalTooltip.globalSettings.ee_tooltips_position,
                arrowPositionH: n.GlobalTooltip.elementSettings.tooltip_arrow_position_h || n.GlobalTooltip.globalSettings.ee_tooltips_arrow_positio_h,
                arrowPositionV: n.GlobalTooltip.elementSettings.tooltip_arrow_position_v || n.GlobalTooltip.globalSettings.ee_tooltips_arrow_positio_v,
                responsive: {
                    disable: n.GlobalTooltip.elementSettings.tooltip_disable || n.GlobalTooltip.globalSettings.ee_tooltips_disable,
                    breakpoints: {
                        mobile: elementorFrontend.config.breakpoints.xs,
                        tablet: elementorFrontend.config.breakpoints.md,
                        desktop: elementorFrontend.config.breakpoints.lg
                    }
                },
                source: e.find("#hotip-content-" + l)
            });
            n.GlobalTooltip.setTarget = function () {
                if ("custom" === n.GlobalTooltip.elementSettings.tooltip_target && "" !== n.GlobalTooltip.elementSettings.tooltip_selector) {
                    var t = e.find(n.GlobalTooltip.elementSettings.tooltip_selector);
                    t.length && (i = t, a = i.data("hotips"))
                }
            }, n.GlobalTooltip.maybeDestroy = function () {
                a && a.destroy()
            }, n.GlobalTooltip.init = function () {
                n.GlobalTooltip.maybeDestroy(), "yes" === n.GlobalTooltip.elementSettings.tooltip_enable && (n.GlobalTooltip.setTarget(), n.GlobalTooltip.elementSettings.tooltip_trigger && (s.trigger = {
                    desktop: n.GlobalTooltip.elementSettings.tooltip_trigger,
                    tablet: n.GlobalTooltip.elementSettings.tooltip_trigger_tablet,
                    mobile: n.GlobalTooltip.elementSettings.tooltip_trigger_mobile
                }), n.GlobalTooltip.elementSettings.tooltip__hide && (s.hide = {
                    desktop: n.GlobalTooltip.elementSettings.tooltip__hide,
                    tablet: n.GlobalTooltip.elementSettings.tooltip__hide_tablet,
                    mobile: n.GlobalTooltip.elementSettings.tooltip__hide_mobile
                }), "" !== n.GlobalTooltip.elementSettings.tooltip_delay_in.size ? s.delayIn = n.GlobalTooltip.elementSettings.tooltip_delay_in.size : n.GlobalTooltip.globalSettings.ee_tooltips_delay_in.size && (s.delayIn = n.GlobalTooltip.globalSettings.ee_tooltips_delay_in.size), "" !== n.GlobalTooltip.elementSettings.tooltip_delay_out.size ? s.delayOut = n.GlobalTooltip.elementSettings.tooltip_delay_out.size : n.GlobalTooltip.globalSettings.ee_tooltips_delay_out.size && (s.delayOut = n.GlobalTooltip.globalSettings.ee_tooltips_delay_out.size), "" !== n.GlobalTooltip.elementSettings.tooltip_duration.size ? s.speed = n.GlobalTooltip.elementSettings.tooltip_duration.size : n.GlobalTooltip.globalSettings.ee_tooltips_duration.size && (s.speed = n.GlobalTooltip.globalSettings.ee_tooltips_duration.size), elementorFrontend.isEditMode() && (s.scope = t.elementor.$previewContents), i.attr("data-hotips-class", "ee-global ee-tooltip ee-tooltip-" + l), i.hotips(s), n.onElementRemove(e, function () {
                    n.GlobalTooltip.maybeDestroy()
                }))
            }, n.GlobalTooltip.init()
        }
    }, o = {
        timer: null, isJson: function (e) {
            e = "string" != typeof e ? JSON.stringify(e) : e;
            try {
                e = JSON.parse(e)
            } catch (e) {
                return !1
            }
            return "object" == typeof e && null !== e
        }, countDecimals: function (e) {
            return Math.floor(e) === e ? 0 : e.toString().split(".")[1].length || 0
        }, parseValue: function (e, t) {
            var n = e;
            if ("string" == typeof n && (n = n.replace(/\s/g, ""), n = n.replace(",", "."), n.indexOf("/") > -1)) {
                var o = n.split("/");
                isNaN(o[0]) || isNaN(o[1]) || (o = parseInt(o[0]) / o[1], n = 100 * o, n = n.toFixed(0))
            }
            return n = isNaN(n) ? t : Math.abs(parseFloat(n))
        }, findObjectByKey: function (e, t, n) {
            for (var o = 0; o < e.length; o++) if (e[o][t] === n) return e[o];
            return null
        }, moveDecimal: function (e, t) {
            var n = e / Math.pow(10, t);
            return n = n > 1 ? Math.round(n) : Math.round(n * Math.pow(10, t + 1)) / Math.pow(10, t + 1)
        }, trackLeave: function (t) {
            if (!(t.clientY > 0)) {
                if (o.timer && clearTimeout(o.timer), e.exitIntent.settings.sensitivity <= 0) return void e.event.trigger("exitintent");
                o.timer = setTimeout(function () {
                    o.timer = null, e.event.trigger("exitintent")
                }, e.exitIntent.settings.sensitivity)
            }
        }, serializeObject: function (t) {
            var n = {}, o = t.serializeArray();
            return e.each(o, function () {
                this.value && (n[this.name] ? (n[this.name].push || (n[this.name] = [n[this.name]]), n[this.name].push(this.value || "")) : n[this.name] = this.value || "")
            }), n
        }, trackEnter: function () {
            o.timer && (clearTimeout(o.timer), o.timer = null)
        }, parseAjaxResponse: function (t, n) {
            t = t.replace(/\<\!\[CDATA\[\/\/\>\<\!\-\-/gi, ""), t = t.replace(/\/\/\-\-\>\<\!\]\]\>/gi, "");
            var o = t.match(/<\s*head.*>[\s\S]*<\s*\/head\s*>/gi).join(""),
                i = t.match(/<\s*body.*>[\s\S]*<\s*\/body\s*>/gi).join("");
            o = o.replace(/<\s*head/gi, "<div"), o = o.replace(/<\s*\/head/gi, "</div"), i = i.replace(/<\s*body/gi, "<div"), i = i.replace(/<\s*\/body/gi, "</div");
            e(o);
            return n && e(i).find(n).length ? e(o).add(e(i).find(n)) : e(o).add(e(i))
        }
    };
    t.ElementorExtrasOffcanvas = function () {
        var e = this;
        e.initialized = !1, e.controller = null, e.init = function () {
            e.controller = new slidebars, e.controller.init(), e.initialized = !0
        }
    };
    var i = new ElementorExtrasOffcanvas;
    elementorFrontend.eeOffcanvas = i, t.eeTooltips = function () {
        this.remove = function (t) {
            if (t.length) var n = t.data("id"),
                o = e('.hotip-tooltip[data-target-id="' + n + '"]'); else o = e(".hotip-tooltip");
            o.length && o.remove()
        }
    }, t.eeSticky = function (o, i) {
        var l = this, a = null, s = o, r = o.closest(".elementor-column"), c = o.closest(".elementor-section"),
            d = (n.getWindow(), elementorFrontend.isEditMode() ? t.elementor.$previewContents.find("body") : e("body"), "tablet" === i.sticky_unstick_on ? 1023 : 767),
            p = {
                top: n.isAdminBar() ? 32 : 0,
                stickyClass: "ee-sticky--stuck",
                followScroll: "yes" === i.sticky_follow_scroll,
                bottomEnd: 0,
                responsive: {}
            };
        l.isEnabled = function () {
            return "yes" === i.sticky_enable
        }, l.getStickyContainer = function () {
            var t = o.parent();
            return "" === i.sticky_parent ? t = "widget" === n.getElementType(o) ? r : t : "section" === i.sticky_parent ? t = "widget" === n.getElementType(o) ? c : t : "body" === i.sticky_parent ? t = e("body") : "custom" === i.sticky_parent && "" !== i.sticky_parent_selector && o.closest(i.sticky_parent_selector).length && (t = o.closest(i.sticky_parent_selector)), t
        }, l.setStickyParent = function () {
            a = o.parent(), a.addClass("ee-sticky-parent"), p.stickTo = a.get(0)
        }, l.getBottomEndValue = function (e) {
            return -1 * (e.offset().top + e.outerHeight() - (a.offset().top + a.outerHeight()))
        }, l.getBottomEnd = function () {
            var e = 0;
            return e += l.getBottomEndValue(l.getStickyContainer()), i.sticky_offset_bottom && (e += i.sticky_offset_bottom.size), e
        }, l.setBottomEnd = function () {
            p.bottomEnd = l.getBottomEnd()
        }, l.setOffset = function () {
            p.top = n.isAdminBar() ? 32 : 0, i.sticky_offset && ("%" === i.sticky_offset.unit ? p.top += e(t).height() * (i.sticky_offset.size / 100) : p.top += i.sticky_offset.size)
        }, l.events = function () {
            l.getStickyContainer()._resize(l.onResize), e(t).on("resize", l.onResize), n.onElementRemove(o, function () {
                s.hcSticky("detach")
            })
        }, l.onResize = function () {
            l.setOffset(), l.setBottomEnd(), l.update()
        }, l.update = function () {
            s.hcSticky("update", p)
        }, l.init = function () {
            s.data("hcSticky") && s.hcSticky("destroy"), l.isEnabled() && s.length && (l.setStickyParent(), a.length && (l.setBottomEnd(), p.onStart = function () {
                a.addClass("ee-sticky-parent--stuck")
            }, p.onStop = function () {
                a.removeClass("ee-sticky-parent--stuck")
            }, p.onResize = l.onResize(), i.sticky_offset && ("%" === i.sticky_offset.unit ? p.top += e(t).height() * (i.sticky_offset.size / 100) : p.top += i.sticky_offset.size), "none" !== i.sticky_unstick_on && (p.responsive[d] = {disable: !0}), s.addClass("ee-sticky").hcSticky(p), elementorFrontend.isEditMode() && l.update(), l.events()))
        }
    }, e.exitIntent = function (n, i) {
        if (e.exitIntent.settings = e.extend(e.exitIntent.settings, i), "enable" == n) e(t).mouseleave(o.trackLeave), e(t).mouseenter(o.trackEnter); else {
            if ("disable" != n) throw"Invalid parameter to jQuery.exitIntent -- should be 'enable'/'disable'";
            trackEnter(), e(t).unbind("mouseleave", o.trackLeave), e(t).unbind("mouseenter", o.trackEnter)
        }
    }, e.exitIntent.settings = {sensitivity: 300}, e(t).on("elementor/frontend/init", n.init)
}(jQuery, window);