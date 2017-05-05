!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var o=n(1),r=n(2);if(o.isMaster){var i=r.cpus().length;console.log("Forking for "+i+" CPUs");for(var u=0;u<i;u++)o.fork();o.on("exit",function(e,t){t!=e.exitedAfterDisconnect&&(console.log("Worker "+e.id+" crashedStarting new worker..."),o.fork())})}else n(3)},function(e,t){e.exports=require("cluster")},function(e,t){e.exports=require("os")},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}n(4);var r=n(5),i=o(r),u=n(6),l=(o(u),n(7)),a=o(l),s=n(8),c=o(s),f=n(9),d=(o(f),n(10)),p=o(d),v=n(11),g=o(v),m=n(12),b=(o(m),n(13)),h=o(b),x=n(16),_=o(x),w=n(15),y=o(w),M=new _["default"];M.cfg({consoleLevel:"debug",fileLevel:"error"});var q=process.pid,j=(0,i["default"])();j.use("/favicon.ico",i["default"]["static"]("./src/server/public/favicon.ico")),j.use((0,a["default"])()),j.use((0,c["default"])()),process.env.NODE_ENV="production",y["default"].connect().then(function(){M.log("Database is connected using the worker is "+q,"info")})["catch"](function(e){M.log(e,"error")}),j.use(p["default"].urlencoded({extended:!0})),j.use(p["default"].json()),j.use((0,g["default"])()),j.use(M.dev),j.use("/admin",function(e,t){t.send("Api Server is loaded for admin using worker-id: "+q)}),j.use("/movies",h["default"]),j.use(function(e,t,n,o){M.log(e,"error")});var O=process.env.PORT||5e3;j.get("/",function(e,t){var n="App is running";t.send(n)}).listen(O,function(e){M.log("api started on port "+O,"info"),e&&M.log(e)})},function(e,t){e.exports=require("babel-polyfill")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("cookie-parser")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("method-override")},function(e,t){e.exports=require("mongoose")},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=o(r),u=n(14),l=o(u),a=n(16),s=o(a),c=i["default"].Router(),f=new l["default"];new s["default"];c.get("/",f.get),c.post("/",f.save),c.put("/",f.save),c.get("/:id",f.getbyId),c["delete"]("/:id",f.remove),t["default"]=c},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=n(15),u=o(i),l=n(16),a=o(l),s=n(22),c=o(s),f=new a["default"],d=function p(){r(this,p),f.log("Starting Movie AP","debug");var e=function(e,t,n){u["default"].db.collection("movies").find().toArray().then(function(e){t.json(e)})["catch"](function(e){f.log("Mongo has a problem: "+e,"debug"),n(e)})},t=function(e,t,n){var o=e.body;o._id&&(o._id=new c["default"].ObjectID(o._id.trim())),u["default"].db.collection("movies").save(e.body).then(function(e){null===e?(f.log("Errror on Save adding Movie to the database","debug"),n("Result was null")):t.json(e)})["catch"](function(e){f.log("Mongo has a problem: "+e,"debug"),n(e)})},n=function(e,t,n){var o=new c["default"].ObjectID(e.params.id.trim());u["default"].db.collection("movies").remove({_id:o}).then(function(){t.sendStatus(200)})["catch"](function(e){f.log("Mongo has a problem: "+e,"debug"),n(e)})},o=function(e,t,n){var o=new c["default"].ObjectID(e.params.id);u["default"].db.collection("movies").findOne(o).then(function(e){f.log("the movie is "+JSON.stringify(e),"debug"),null===e?(f.log("No record Found","debug"),n("Result was null")):t.json(e)})["catch"](function(e){f.log("Mongo has a problem: "+e,"debug"),n(e)})},i={get:e,getbyId:o,save:t,remove:n};return i};t["default"]=d},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(16),l=o(u),a=n(22),s=o(a),c=new l["default"],f="",d=function(){function e(){r(this,e)}return i(e,null,[{key:"connect",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mongodb://api:!AgileRules4#@ds062059.mlab.com:62059/mic-pro";return f=t,s["default"].MongoClient.connect(f).then(function(t){c.log("successful db connection","info"),e.db=t})["catch"](function(e){c.error(e,"error")})}}]),e}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=d},function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(17),l=o(u),a=n(6),s=o(a),c=n(18),f=o(c),d=n(19),p=o(d),v=n(20),g=o(v),m=n(21),b=o(m),h=Symbol("winston"),x=null,_={consoleLevel:"info",fileLevel:"error"},w=function(){function t(){var n=this;if(r(this,t),!x){this._timeStamp=this.time;var o=function(){return(0,b["default"])().format("YYYY-MM-DD h:mm:ss a")};p["default"].token("id",function(e){return e.id});var i=s["default"].join(e,"log");l["default"].existsSync(i);var u=(0,f["default"])("request.log",{interval:"1d",path:i});this[h]=new g["default"].Logger({transports:[new g["default"].transports.File({level:_.fileLevel,filename:"app.log",handleExceptions:!0,json:!0,maxsize:5242880,maxFiles:5,colorize:!1,timestamp:!0,prettyprint:!0}),new g["default"].transports.Console({level:_.consoleLevel,handleExceptions:!0,json:!1,colorize:!0})],exitOnError:!1});var a=function(e){_=e,n[h].transports.console.level=e.consoleLevel,n[h].transports.file.level=e.fileLevel},c={timeStamp:this._timeStamp,time:o,log:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";n[h].log(t,e)},cfg:a,dev:(0,p["default"])(":id :method :status :url :response-time[3]",{stream:u})};x=c}return x}return i(t,[{key:"timeStamp",get:function(){return this._timeStamp}}]),t}();t["default"]=w}).call(t,"/")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("rotating-file-stream")},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("winston")},function(e,t){e.exports=require("moment")},function(e,t){e.exports=require("mongodb")}]);
//# sourceMappingURL=culster-api-min.js.map