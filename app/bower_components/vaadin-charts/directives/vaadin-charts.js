System.register(["@angular/core"],function(t,e){"use strict";var a,n,i,r=(e&&e.id,this&&this.__decorate||function(t,e,a,n){var i,r=arguments.length,o=3>r?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,a,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(o=(3>r?i(o):r>3?i(e,a,o):i(e,a))||o);return r>3&&o&&Object.defineProperty(e,a,o),o}),o=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0};return{setters:[function(t){a=t}],execute:function(){n=function(){function t(t,e){this._el=t,this.zone=e,this._element=this._el.nativeElement}return t.prototype.ngOnInit=function(){return window.Polymer&&Polymer.isInstance(this._element)?void this.fixLightDom():void console.error("vaadin-charts has not been registered yet, please remember to import vaadin-charts in your main HTML page. http://webcomponents.org/polyfills/html-imports/")},t.prototype.fixLightDom=function(){var t=this,e=this._element.querySelectorAll("*:not(.style-scope)");[].forEach.call(e,function(e){e.parentElement===t._element&&Polymer.dom(t._element).appendChild(e)}),this._element.isInitialized&&this._element.isInitialized()&&this.zone.runOutsideAngular(function(){t._element.reloadConfiguration()})},t=r([a.Directive({selector:"\n  vaadin-area-chart,\n  vaadin-arearange-chart,\n  vaadin-areaspline-chart,\n  vaadin-areasplinerange-chart,\n  vaadin-bar-chart,\n  vaadin-boxplot-chart,\n  vaadin-bubble-chart,\n  vaadin-candlestick-chart,\n  vaadin-column-chart,\n  vaadin-columnrange-chart,\n  vaadin-errorbar-chart,\n  vaadin-flags-chart,\n  vaadin-funnel-chart,\n  vaadin-gauge-chart,\n  vaadin-heatmap-chart,\n  vaadin-line-chart,\n  vaadin-ohlc-chart,\n  vaadin-pie-chart,\n  vaadin-polygon-chart,\n  vaadin-pyramid-chart,\n  vaadin-scatter-chart,\n  vaadin-solidgauge-chart,\n  vaadin-sparkline,\n  vaadin-spline-chart,\n  vaadin-treemap-chart,\n  vaadin-waterfall-chart\n  "}),o("design:paramtypes",[a.ElementRef,a.NgZone])],t)}(),t("VaadinCharts",n),i=function(){function t(t,e,a){this._el=t,this._chart=a,this._differ=e.find([]).create(null)}return t.prototype.ngOnInit=function(){this._element=this._el.nativeElement},t.prototype.ngDoCheck=function(){if("object"!=typeof this.data)try{if(this.data=JSON.parse(this.data),"object"!=typeof this.data)throw"type is not object"}catch(t){try{this.data=JSON.parse("["+this.data+"]")}catch(t){return}}var e=this._differ.diff(this.data);e&&(this._element.data=e.collection.slice(0))},r([a.Input(),o("design:type",Object)],t.prototype,"data",void 0),t=r([a.Directive({selector:"data-series"}),o("design:paramtypes",[a.ElementRef,a.IterableDiffers,n])],t)}(),t("DataSeries",i)}}});