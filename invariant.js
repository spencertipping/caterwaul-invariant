caterwaul.module( 'invariant' ,function($) {$.invariant= (function() {var node=function(behavior) {;
return(function() {var n=function() {;
return n.send.apply(n,arguments) } ,broadcast=$.future() ;
return $.merge(n, (function() {var to=function(b,p) {;
return( (set_edge(b,p) ,set_sibling(b,p) ) ,n) } ,send=function(v,visited) {;
return(function() {var seen= (function(it) {return it[id] =n,it} ) .call(this, ( (visited|| {} ) ) ) ;
return(function(it) {return broadcast(v) ,it} ) .call(this, (behavior(n,v,seen) ) ) } ) .call(this) } ,unlink=function() {;
return( (function(xs) {var x,x0,xi,xl,xr;
for(var xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] , ( (x) .to(false,n) ) ;
return xs} ) .call(this,siblings) ,n) } ,signal=function() {;
return broadcast} ,set_edge=function(b,p) {;
return b? (siblings[p.id] =p,p.siblings[id] =n) : (delete siblings[p.id] ,delete p.siblings[id] ) } ,set_sibling=function(b,p) {;
return b?edges[p.id] =p.edges[id] =b: (delete edges[p.id] ,delete p.edges[id] ) } ,id=gensym() ,edges= {} ,siblings= {} ;
return{to:to,send:send,unlink:unlink,signal:signal,set_edge:set_edge,set_sibling:set_sibling,id:id,edges:edges,siblings:siblings} } ) .call(this) ) } ) .call(this) } ,node_repeat=function() {;
return function(n,v,seen) {;
return(function() {var siblings=n.siblings;
return(future( (function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push( (x[1] (v,seen,siblings[x[0] ] ) ) ) ;
return xr} ) .call(this, (function(o) {var ps= [] ;
for(var k in o)Object.prototype.hasOwnProperty.call(o,k) &&ps.push( [k,o[k] ] ) ;
return ps} ) .call(this, ( (function(xs) {var x,x0,xi,xl,xr;
var xr=new xs.constructor() ;
for(var x in xs)if(Object.prototype.hasOwnProperty.call(xs,x) && ! (seen[x] ) )xr[x] =xs[x] ;
return xr} ) .call(this,n.edges) ) ) ) ) ) .map(function(_) {return v} ) } ) .call(this) } } ,node_cache=function(eq) {;
return function(n,v,seen) {;
return!eq(v,n.val() ) } } ,filter_node=function(f) {;
return function(n) {;
return node( (function(v,seen) {return f(v) ?n(v,seen) :$.future() (v) } ) ) } } ,linear_edge=function(v,visited,n) {;
return n(v,visited) } ,silent_edge=function(v,visited,n) {;
return $.future() (v) } ,fail_edge=function(v,visited,n) {;
return $.future() (null) } ;
return{node:node,node_repeat:node_repeat,node_cache:node_cache,filter_node:filter_node,linear_edge:linear_edge,silent_edge:silent_edge,fail_edge:fail_edge} } ) .call(this) } ) ;
