function zmc(){}
function Fmc(){}
function Imc(){}
function Jmc(){Jmc=ZBc;Emc=new Imc}
function xmc(){gmb(this,Bmc(new Cmc))}
function omc(a,b,c){Olb.call(this,a,b,c,(Y_b(),X_b))}
function hpc(a){var b;if(!a.q){b=new xmc(new zmc);a.q=b}return a.q}
function Kmc(a){var b;b=new Dsb;b.b.b+=XIc;xsb(b,J_(a));b.b.b+=YIc;return new p_(b.b.b)}
function Lmc(a){var b;b=new Dsb;b.b.b+=XIc;xsb(b,J_(a));b.b.b+=YIc;return new p_(b.b.b)}
function gpc(a){var b;if(!a.p){b=new omc(Xkb(smb(a.b)),hpc(a),fpc(a));nlb((tmb(a.b),b),Emb(tmb(a.b)));a.p=b}return a.p}
function Cmc(){this.f=(new Fmc,Jmc(),Emc);Hmc(this.f);this.b=Er($doc);this.d=Er($doc);this.c=new n1(this.b);this.e=new n1(this.d)}
function Hmc(a){if(!a.b){a.b=true;rv();uv((fz(),'.GOBEEQNHK{background-color:#fcf2f2;border-color:#dfb5b4;}.GOBEEQNIK{margin-top:0 !important;}.GOBEEQNJK{margin-left:5px;}'));return true}return false}
function Bmc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I;b=new eHb;Rzb(b,(c=new ECb(QIc),Rzb(c,(d=new SFb,d.b=EHc,RFb(d),d)),Rzb(c,(e=new CAb,Rzb(e,(f=new BDb(4),O1(f._,'GOBEEQNIK',true),f.c=jPc,zDb(f),f)),Rzb(e,new oEb((n=new Dsb,n.b.b+='To use Offline, you must first add the extras module to your project. In Maven:',new p_(n.b.b)).b)),Rzb(e,(g=new bxc,XGb(g,(o=new Dsb,o.b.b+=kPc,new p_(o.b.b)).b),O1(g._,UIc,true),g)),Rzb(e,new oEb((p=new Dsb,p.b.b+=lPc,new p_(p.b.b)).b)),Rzb(e,(i=new bxc,XGb(i,(q=new Dsb,q.b.b+='&lt;inherits name="org.gwtbootstrap3.extras.cachemanifest.Offline"/&gt;',new p_(q.b.b)).b),O1(i._,UIc,true),i)),O1(e._,'GOBEEQNHK',true),e)),Rzb(c,(j=new iGb,Rzb(j,(r=new tGb(Kmc(a.b).b),s=p1(r._),m1(a.c),s.c?Tq(s.c,s.b,s.d):s1(s.b),Reb(r,(t=new BDb(3),t.c='What is Offline?',zDb(t),t),m1(a.c)),r)),Rzb(j,(u=new lGb,Rzb(u,new Fzb((v=new Dsb,v.b.b+="<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the <b>cache manifest<\/b>.<br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'>http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5<\/a> <\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage.<\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\/b> needs to reflect this new set of files each time.<\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile.<\/p>",new p_(v.b.b)).b)),u)),Rzb(j,new pGb),j)),Rzb(c,(k=new iGb,Rzb(k,(w=new tGb(Lmc(a.d).b),x=p1(w._),m1(a.e),x.c?Tq(x.c,x.b,x.d):s1(x.b),Reb(w,(y=new BDb(3),y.c='How to configure?',zDb(y),y),m1(a.e)),w)),Rzb(k,(z=new lGb,Rzb(z,new oEb((A=new Dsb,A.b.b+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new p_(A.b.b)).b)),Rzb(z,(B=new bxc,XGb(B,(C=new Dsb,C.b.b+='&lt;extend-configuration-property name="cachemanifest_static_files" value="index.html" /&gt;\\n',new p_(C.b.b)).b),O1(B._,UIc,true),B)),Rzb(z,new oEb((D=new Dsb,D.b.b+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new p_(D.b.b)).b)),Rzb(z,(E=new bxc,XGb(E,(F=new Dsb,F.b.b+='&lt;inherits name="org.gwtbootstrap3.extras.cachemanifest.Offline"/&gt;\\n &lt;add-linker name="offline" /&gt;',new p_(F.b.b)).b),O1(E._,UIc,true),E)),Rzb(z,new oEb((G=new Dsb,G.b.b+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new p_(G.b.b)).b)),Rzb(z,(H=new bxc,XGb(H,(I=new Dsb,I.b.b+='&lt;!doctype html&gt;\\n &lt;html manifest="&lt;modulename&gt;/appcache.manifest"&gt;\\n ....\\n &lt;/html&gt;\\n',new p_(I.b.b)).b),O1(H._,UIc,true),H)),z)),Rzb(k,new pGb),k)),c));return b}
l$(1236,531,QCc,omc);l$(1239,536,RCc,xmc);l$(1240,1,{},zmc);l$(1241,1,{},Cmc);_.b=null;_.c=null;_.d=null;_.e=null;_.f=null;l$(1242,1,{},Fmc);var Emc=null;l$(1243,1,{},Imc);_.b=false;l$(1295,1,qDc);_.Ab=function Upc(){Xnb(this.c,gpc(this.b.b))};var yU=Rqb(jIc,'OfflinePresenter',1236),DU=Rqb(jIc,'OfflineView',1239),CU=Rqb(jIc,'OfflineView_BinderImpl',1240),zU=Rqb(jIc,'OfflineView_BinderImpl$Widgets',1241),BU=Rqb(jIc,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1242),AU=Rqb(jIc,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1',1243);xDc(hn)(32);