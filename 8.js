window.habitlab_content_script = true;

(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/bower_components/habitlab-paper-item/habitlab-paper-item-0.js":function(e,t){Polymer({is:"habitlab-paper-item",behaviors:[Polymer.PaperItemBehavior]})},"./src/bower_components/habitlab-paper-item/habitlab-paper-item-behavior-0.js":function(e,t){Polymer.PaperItemBehaviorImpl={hostAttributes:{role:"option",tabindex:"0"}},Polymer.PaperItemBehavior=[Polymer.IronButtonState,Polymer.IronControlState,Polymer.PaperItemBehaviorImpl]},"./src/bower_components/habitlab-paper-item/habitlab-paper-item-behavior.deps.js":function(e,t,o){const{import_dom_modules:r}=o("./src/libs_frontend/dom_utils.ls");o("./src/bower_components/polymer/polymer.deps.js"),o("./src/bower_components/iron-behaviors/iron-button-state.deps.js"),o("./src/bower_components/iron-behaviors/iron-control-state.deps.js"),r(o("./src/bower_components/habitlab-paper-item/habitlab-paper-item-behavior.html"),"bower_components/habitlab-paper-item/habitlab-paper-item-behavior.html"),o("./src/bower_components/habitlab-paper-item/habitlab-paper-item-behavior-0.js")},"./src/bower_components/habitlab-paper-item/habitlab-paper-item-behavior.html":function(e,t){e.exports="<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-behaviors/iron-button-state.html> <link rel=import href=../iron-behaviors/iron-control-state.html> <script src=habitlab-paper-item-behavior-0.js><\/script> </head><body></body></html>"},"./src/bower_components/habitlab-paper-item/habitlab-paper-item-shared-styles.deps.js":function(e,t,o){const{import_dom_modules:r}=o("./src/libs_frontend/dom_utils.ls");o("./src/bower_components/iron-flex-layout/iron-flex-layout.deps.js"),o("./src/bower_components/paper-styles/color.deps.js"),o("./src/bower_components/paper-styles/default-theme.deps.js"),o("./src/bower_components/paper-styles/typography.deps.js"),r(o("./src/bower_components/habitlab-paper-item/habitlab-paper-item-shared-styles.html"),"bower_components/habitlab-paper-item/habitlab-paper-item-shared-styles.html")},"./src/bower_components/habitlab-paper-item/habitlab-paper-item-shared-styles.html":function(e,t){e.exports=" <link rel=import href=../iron-flex-layout/iron-flex-layout.html> <link rel=import href=../paper-styles/color.html> <link rel=import href=../paper-styles/default-theme.html> <link rel=import href=../paper-styles/typography.html> <habitlab-dom-module id=habitlab-paper-item-shared-styles> <template> <style>.habitlab-paper-item,:host{display:block;position:relative;min-height:var(--habitlab-paper-item-min-height,48px);padding:0 16px}.habitlab-paper-item{@apply(--paper-font-subhead);border:none;outline:0;background:#fff;width:100%;text-align:left}.habitlab-paper-item[hidden],:host([hidden]){display:none!important}.habitlab-paper-item.iron-selected,:host(.iron-selected){font-weight:var(--habitlab-paper-item-selected-weight,bold);@apply(--habitlab-paper-item-selected)}.habitlab-paper-item[disabled],:host([disabled]){color:var(--habitlab-paper-item-disabled-color,--disabled-text-color);@apply(--habitlab-paper-item-disabled)}.habitlab-paper-item:focus,:host(:focus){position:relative;outline:0;@apply(--habitlab-paper-item-focused)}.habitlab-paper-item:focus:before,:host(:focus):before{@apply(--layout-fit);background:currentColor;content:'';opacity:var(--dark-divider-opacity);pointer-events:none;@apply(--habitlab-paper-item-focused-before)}</style> </template> </habitlab-dom-module> "},"./src/bower_components/habitlab-paper-item/habitlab-paper-item.deps.js":function(e,t,o){const{import_dom_modules:r}=o("./src/libs_frontend/dom_utils.ls");o("./src/bower_components/polymer/polymer.deps.js"),o("./src/bower_components/iron-flex-layout/iron-flex-layout.deps.js"),o("./src/bower_components/habitlab-paper-item/habitlab-paper-item-behavior.deps.js"),o("./src/bower_components/habitlab-paper-item/habitlab-paper-item-shared-styles.deps.js"),r(o("./src/bower_components/habitlab-paper-item/habitlab-paper-item.html"),"bower_components/habitlab-paper-item/habitlab-paper-item.html"),o("./src/bower_components/habitlab-paper-item/habitlab-paper-item-0.js")},"./src/bower_components/habitlab-paper-item/habitlab-paper-item.html":function(e,t){e.exports="<html><head><link rel=import href=../polymer/polymer.html> <link rel=import href=../iron-flex-layout/iron-flex-layout.html> <link rel=import href=habitlab-paper-item-behavior.html> <link rel=import href=habitlab-paper-item-shared-styles.html> </head><body><habitlab-dom-module id=habitlab-paper-item> <template> <style include=habitlab-paper-item-shared-styles></style> <style>:host{@apply(--layout-horizontal);@apply(--layout-center);@apply(--paper-font-subhead);@apply(--habitlab-paper-item)}</style> <content></content> </template> <script src=habitlab-paper-item-0.js><\/script> </habitlab-dom-module> </body></html>"},"./src/components/goal-progress-message.deps.js":function(e,t,o){const{import_dom_modules:r}=o("./src/libs_frontend/dom_utils.ls");o("./src/bower_components/polymer/polymer.deps.js"),o("./src/bower_components/habitlab-paper-item/habitlab-paper-item.deps.js"),r(o("./src/components/goal-progress-message.html"),"components/goal-progress-message.html"),o("./src/components/goal-progress-message.ls")},"./src/components/goal-progress-message.html":function(e,t){e.exports='<link rel=import href=../bower_components/polymer/polymer.html> <link rel=import href=../bower_components/habitlab-paper-item/habitlab-paper-item.html> <habitlab-dom-module id=goal-progress-message> <template> <habitlab-custom-style> <style is=habitlab-custom-style>:host{--habitlab-paper-item:{font-family:Verdana,Geneva,Tahoma,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;font-size:13px;overflow:hidden;white-space:nowrap;display:block;text-overflow:ellipsis};--habitlab-paper-item-min-height:36px}#rsscontainer{width:380px;height:240px;display:flex;flex-direction:column;align-items:center;background-color:#e6e6ff}#goalprogresstitle{padding-top:15px;margin-bottom:15px;font-family:Verdana,Geneva,Tahoma,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;font-size:16px}.linktext{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:350px;display:block}a{overflow:hidden;white-space:nowrap;width:350px;text-overflow:ellipsis;display:block}.table-row{display:flex;flex-direction:row;flex-grow:0;flex-wrap:wrap;width:100%;padding-left:15px;padding-right:15px}.goalname{flex-grow:1;overflow:hidden;padding-right:20px;padding-top:10px;padding-bottom:10px;width:100px}.showprogress{flex-grow:1;overflow:hidden;padding-right:20px;padding-top:10px;padding-bottom:10px;width:100px}</style> </habitlab-custom-style> <div id=rsscontainer> <div id=goalprogresstitle>Progress on your goals</div> <div> <div class=table-row> <div class=goalname></div> <div class=showprogress>Today</div> <div class=showprogress>Yesterday</div> </div> <template is=habitlab-dom-repeat items={{goal_info_list}} as=goal_info> <div class=table-row> <div class=goalname>{{goal_info.description}}</div> <template is=habitlab-dom-repeat items=[0,1]> <div class=showprogress>{{get_goal_progress_on_day(goal_info.name, item, goal_name_to_progress_this_week)}}</div> </template> </div> </template> </div> </div> </template> <script src=goal-progress-message.js><\/script> </habitlab-dom-module>'},"./src/components/goal-progress-message.ls":function(e,t,o){var r,s,i,l,a;r=o("./src/libs_frontend/polymer_utils.ls").polymer_ext,o("./src/generated_libs/libs_frontend/history_utils.js").get_work_pages_visited_today,o("./src/libs_common/domain_utils.ls").url_to_domain,o("./src/libs_common/collection_utils.ls").as_array,s=o("./src/generated_libs/libs_frontend/goal_utils.js"),i=s.list_goal_info_for_enabled_goals,l=s.get_all_goal_targets,a=o("./src/generated_libs/libs_frontend/goal_progress.js").get_progress_on_enabled_goals_this_week,r({is:"goal-progress-message",properties:{links:{type:Array},goal_info_list:{type:Array},goal_name_to_target:{type:Object},goal_name_to_progress_this_week:{type:Object},goal_name_to_units:{type:Object,computed:"compute_goal_name_to_units(goal_name_to_progress_this_week)"}},get_goal_target:function(e,t){return t[e]},get_goal_progress_on_day:function(e,t,o){return o[e][t].progress},get_goal_units:function(e,t){return t[e]},compute_goal_name_to_units:function(e){var t,o,r;for(o in t={},e)r=e[o],t[o]=r[0].units;return t},ready:async function(){return this.goal_info_list=await i(),this.goal_name_to_target=await l(),this.goal_name_to_progress_this_week=await a()}})},"./src/generated_libs/libs_frontend/goal_progress.js":function(e,t,o){const{import_lib:r}=o("./src/libs_frontend/import_lib.ls");e.exports=r("goal_progress")},"./src/generated_libs/libs_frontend/history_utils.js":function(e,t,o){const{import_lib:r}=o("./src/libs_frontend/import_lib.ls");e.exports=r("history_utils")},"./src/libs_common/collection_utils.ls":function(e,t){var o=void 0!==t&&t||this;o.as_array=function(e){var t;return Array.isArray(e)?e:function(){var o,r=[];for(t in o=e)!0===o[t]&&r.push(t);return r}()},o.as_dictset=function(e){return Array.isArray(e)?function(){var t,o,r,s={};for(t=0,r=(o=e).length;t<r;++t)s[o[t]]=!0;return s}():e},o.remove_key_from_localstorage_dict=function(e,t){var o,r;null!=(r=null!=(o=localStorage.getItem(e))?JSON.parse(o):{})[t]&&delete r[t],localStorage.setItem(e,JSON.stringify(r))},o.remove_keys_from_localstorage_dict=function(e,t){var o,r,s,i,l;for(r=null!=(o=localStorage.getItem(e))?JSON.parse(o):{},s=0,i=t.length;s<i;++s)null!=r[l=t[s]]&&delete r[l];localStorage.setItem(e,JSON.stringify(r))},o.remove_keys_matching_patternfunc_from_localstorage_dict=function(e,t){var o,r,s,i,l,a;for(r=null!=(o=localStorage.getItem(e))?JSON.parse(o):{},i=0,l=(s=Object.keys(r).filter(t)).length;i<l;++i)null!=r[a=s[i]]&&delete r[a];localStorage.setItem(e,JSON.stringify(r))},o.add_key_val_to_localstorage_dict=function(e,t,o){var r,s;(s=null!=(r=localStorage.getItem(e))?JSON.parse(r):{})[t]=o,localStorage.setItem(e,JSON.stringify(s))},o.add_dict_to_localstorage_dict=function(e,t){var o,r,s,i;for(s in r=null!=(o=localStorage.getItem(e))?JSON.parse(o):{},t)i=t[s],r[s]=i;localStorage.setItem(e,JSON.stringify(r))},o.remove_item_from_localstorage_list=function(e,t){var o,r;return r=(r=null!=(o=localStorage.getItem(e))?JSON.parse(o):[]).filter(function(e){return e!==t}),localStorage.setItem(e,JSON.stringify(r))},o.remove_items_from_localstorage_list=function(e,t){var o,r;return r=(r=null!=(o=localStorage.getItem(e))?JSON.parse(o):[]).filter(function(e){return-1===t.indexOf(e)}),localStorage.setItem(e,JSON.stringify(r))},o.remove_items_matching_patternfunc_from_localstorage_list=function(e,t){var o,r;return r=(r=null!=(o=localStorage.getItem(e))?JSON.parse(o):[]).filter(function(e){return!t(e)}),localStorage.setItem(e,JSON.stringify(r))},o.add_item_to_localstorage_list=function(e,t){var o,r;return-1===(r=null!=(o=localStorage.getItem(e))?JSON.parse(o):[]).indexOf(t)&&r.push(t),localStorage.setItem(e,JSON.stringify(r))}},"./src/libs_common/domain_utils.ls":function(module,exports,__webpack_require__){var ref$,gexport,gexport_module,url_to_domain,domain_to_url,out$=void 0!==exports&&exports||this;ref$=__webpack_require__("./src/libs_common/gexport.ls"),gexport=ref$.gexport,gexport_module=ref$.gexport_module,out$.url_to_domain=url_to_domain=function(e){return e.indexOf("://")>-1?e.split("/")[2]:e.split("/")[0]},out$.domain_to_url=domain_to_url=function(e){return"http://"+url_to_domain(e)+"/"},gexport_module("domain_utils",function(it){return eval(it)})}}]);