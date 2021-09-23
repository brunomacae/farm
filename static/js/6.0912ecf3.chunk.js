(this["webpackJsonpfarm-factory"]=this["webpackJsonpfarm-factory"]||[]).push([[6],{701:function(e,t,n){"use strict";var c;n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o})),function(e){e[e.NEW_FARM=0]="NEW_FARM",e[e.SALE_OPENED=1]="SALE_OPENED",e[e.SALE_CLOSED=2]="SALE_CLOSED",e[e.FARM_OPENED=3]="FARM_OPENED",e[e.DEPOSITS_CLOSED=4]="DEPOSITS_CLOSED",e[e.FARM_COMPLETED=5]="FARM_COMPLETED"}(c||(c={}));var r=function(e){return e.endTime&&new Date>e.endTime},i=function(e,t,n){return e.depositsEndBlock&&!function(e,t){return[0,e.tokenEtherPid,e.tokenPoolPid].includes(t)}(e,t)&&n>e.depositsEndBlock},a=function(e,t,n){return(n-t)*e.blockTime},o=function(e,t,n){return Number(t.startBlock)>n?{currentStep:c.NEW_FARM,nextStep:c.FARM_OPENED,secondsToNext:a(e,n,Number(t.startBlock)),blockNextStep:Number(t.startBlock)}:t.endTime&&new Date>t.endTime?{currentStep:c.FARM_COMPLETED}:{currentStep:t.depositsEndBlock&&t.depositsEndBlock<n?c.DEPOSITS_CLOSED:c.FARM_OPENED,secondsToNext:t.endTime&&(new Date(t.endTime).getTime()-Date.now())/1e3,nextStep:t.depositsEndBlock&&t.depositsEndBlock>n?c.DEPOSITS_CLOSED:c.FARM_COMPLETED}}},711:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d}));var c=n(132),r=n(3),i=n.n(r),a=n(16),o=n(0),s=n(36),j=n(62),b=n(119),l=n(66),u=function(e){var t=Object(s.c)().account,n=Object(l.e)(),c=Object(j.e)().callback;return{onReward:Object(o.useCallback)(Object(a.a)(i.a.mark((function r(){var a;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(b.c)(n,e,t);case 2:return a=r.sent,c(),r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)}))),[t,c,e,n])}},d=function(e){var t=Object(s.c)().account,n=Object(l.e)();return{onReward:Object(o.useCallback)(Object(a.a)(i.a.mark((function r(){var a;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.reduce((function(e,r){return[].concat(Object(c.a)(e),[Object(b.c)(n,r,t)])}),[]),r.abrupt("return",Promise.all(a));case 2:case"end":return r.stop()}}),r)}))),[t,e,n])}}},715:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(3),r=n.n(c),i=n(16),a=n(26),o=n(0),s=n(49),j=n(70),b=function(){var e=Object(j.a)().slowRefresh,t=Object(o.useState)(),n=Object(a.a)(t,2),c=n[0],b=n[1],l=Object(s.g)();return Object(o.useEffect)((function(){function e(){return(e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"tokensPerBlock",e.next=3,l.methods.tokensPerBlock().call();case 3:t=e.sent,b(t/1e18);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e,l]),{tokensPerBlock:c}}},721:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(17),r=n.n(c),i=function(e,t,n,c,i){var a=new r.a(i).times(e).times(t).times(n).times(100);return c.toNumber()&&(a=a.div(c)),a.isNaN()||!a.isFinite()?null:a.toNumber()}},738:function(e,t,n){"use strict";n.d(t,"a",(function(){return R}));var c,r,i,a,o,s,j,b,l,u,d=n(29),O=n(13),x=n(21),m=n(0),p=n(227),h=n(78),f=n(62),g=n(12),v=n(55),k=n(180),w=n(701),S=n(7),y=g.e.div(c||(c=Object(d.a)(["\n  color: white;\n  order: 2;\n\n  "," {\n    order: 1;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),E=g.e.div(r||(r=Object(d.a)(["\n  color: white;\n  font-size: 12px;\n  text-align: right;\n  margin-right: 36px;\n\n  "," {\n    margin-right: 50px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),D=(i={},Object(v.a)(i,w.a.SALE_OPENED,Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("p",{children:"Until token offering"})})),Object(v.a)(i,w.a.SALE_CLOSED,"Until offering ends"),Object(v.a)(i,w.a.FARM_OPENED,"Until farming starts"),Object(v.a)(i,w.a.DEPOSITS_CLOSED,"Until deposits are closed"),Object(v.a)(i,w.a.FARM_COMPLETED,"Until farm completes"),i),T=function(){var e=Object(x.a)(),t=e.edition,n=e.network,c=Object(f.a)().currentBlock,r=Object(w.d)(t);if(!c&&!r)return Object(S.jsx)(S.Fragment,{});var i=Object(w.b)(n,t,c);return Object(S.jsx)(y,{children:r?"Farm Completed":Object(S.jsxs)(S.Fragment,{children:[(i.secondsToNext||i.blockNextStep)&&Object(S.jsx)(k.a,{blockNumber:i.blockNextStep,seconds:i.secondsToNext}),Object(S.jsx)(E,{children:D[i.nextStep]})]})})},N=Object(g.e)(O.v).attrs({alignItems:"center"})(a||(a=Object(d.a)(["\n  flex: 1;\n"]))),C=g.e.div(o||(o=Object(d.a)(["\n  flex: none;\n  width: auto;\n\n  "," {\n    width: 270px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),B=g.e.div(s||(s=Object(d.a)(["\n  order: 1;\n  margin: 0 8px 0 0;\n\n  "," {\n    order: 2;\n    margin: 0 0 0 8px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),L=Object(g.e)(O.h)(j||(j=Object(d.a)(["\n  margin-top: -24px;\n  position: absolute;\n  top: 50%;\n  z-index: 30;\n\n  & > svg {\n    height: 48px;\n    width: 48px;\n  }\n\n  "," {\n    margin-top: -32px;\n\n    & > svg {\n      height: 64px;\n      width: 64px;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),P=Object(g.e)(O.S)(b||(b=Object(d.a)(["\n  font-size: 16px;\n  line-height: 21px;\n\n  "," {\n    font-size: 20px;\n    line-height: 22px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),F=Object(g.e)(O.S)(l||(l=Object(d.a)(["\n  height: 18px;\n  justify-self: start;\n  width: 60px;\n\n  "," {\n    text-align: center;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),A=Object(g.e)(O.m)(u||(u=Object(d.a)(["\n  align-items: ",";\n  border-radius: ",";\n  display: flex;\n  flex-direction: column;\n  overflow: initial;\n  padding: ",";\n\n  "," {\n    align-items: center;\n    border-radius: 16px;\n    flex-direction: row;\n    padding: ",";\n  }\n"])),(function(e){return"right"===e.dir?"flex-end":"flex-start"}),(function(e){return"right"===e.dir?"8px 8px 8px 24px":"8px 8px 24px 8px"}),(function(e){return"right"===e.dir?"0 28px 0 8px":"0 8px 0 48px"}),(function(e){return e.theme.mediaQueries.lg}),(function(e){return"right"===e.dir?"8px 40px 8px 8px":"8px 8px 8px 40px"})),_=function(){var e=Object(x.a)().edition,t=Object(f.j)(),n=Object(p.useCountUp)({start:0,end:t.toNumber(),duration:1,decimals:3}),c=n.countUp,r=n.update;return Object(m.useEffect)((function(){r(t.toNumber())}),[t,r]),Object(S.jsx)(O.h,{pl:"24px",position:"relative",display:"inline-block",children:Object(S.jsxs)("a",{href:e.priceLink,target:"_blank",rel:"noopener noreferrer",children:[Object(S.jsx)(L,{left:0,children:Object(S.jsx)("img",{src:e.tokenImage,alt:"".concat(e.token.symbol," logo"),width:64,height:64})}),Object(S.jsxs)(A,{dir:"left",children:[Object(S.jsx)(P,{bold:!0,textTransform:"uppercase",children:e.token.symbol}),t.toNumber()>0&&Object(S.jsx)(F,{fontSize:"12px",children:"$".concat(c)})]})]})})},R=function(e){var t=e.style,n=void 0===t?{}:t;return Object(S.jsxs)(N,{alignItems:"center",style:n,children:[Object(S.jsx)(C,{children:Object(S.jsx)(_,{})}),Object(S.jsx)(N,{justifyContent:"center"}),Object(S.jsx)(C,{children:Object(S.jsxs)(O.v,{alignItems:"center",justifyContent:"flex-end",children:[Object(S.jsx)(T,{}),Object(S.jsx)(B,{children:Object(S.jsx)(O.y,{variant:"subtle",as:h.b,to:"/editions",children:Object(S.jsx)(O.x,{width:"24px",color:"white"})})})]})})]})}},774:function(e,t,n){var c=n(775),r=n(776),i=n(777);e.exports=function(e){return e&&e.length?c(e,i,r):void 0}},775:function(e,t,n){var c=n(142);e.exports=function(e,t,n){for(var r=-1,i=e.length;++r<i;){var a=e[r],o=t(a);if(null!=o&&(void 0===s?o===o&&!c(o):n(o,s)))var s=o,j=a}return j}},776:function(e,t){e.exports=function(e,t){return e>t}},777:function(e,t){e.exports=function(e){return e}},948:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ut}));var c,r,i,a,o,s,j,b,l,u,d,O,x,m,p,h,f,g,v,k,w,S,y,E,D,T,N,C,B,L=n(29),P=n(0),F=n(12),A=n(13),_=n(104),R=n(3),M=n.n(R),z=n(16),Q=n(26),I=n(36),U=n(21),W=n(77),H=n(711),q=n(14),$=n(17),V=n.n($),J=n(82),G=n(81),X=n(27),Y=n(89),K=n(70),Z=function(){var e=Object(Y.a)(),t=Object(P.useState)([]),n=Object(Q.a)(t,2),c=n[0],r=n[1],i=Object(I.c)().account,a=Object(K.a)().fastRefresh,o=Object(X.f)(),s=Object(X.h)(),j=Object(U.a)().edition;return Object(P.useEffect)((function(){var t=function(){var t=Object(z.a)(M.a.mark((function t(){var n,c,a;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=j.farms.map((function(e){return{address:o,name:"pendingTokens",params:[e.pid,i]}})),t.next=3,Object(J.a)(e,s,G,n);case 3:c=t.sent,a=j.farms.map((function(e,t){return Object(q.a)(Object(q.a)({},e),{},{balance:new V.a(c[t])})})),r(a);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();i&&(null===j||void 0===j?void 0:j.farms)&&e&&t()}),[i,a,o,s,j,e]),c},ee=n(100),te=function(){var e=Object(Y.a)(),t=Object(P.useState)([]),n=Object(Q.a)(t,2),c=n[0],r=n[1],i=Object(I.c)().account,a=Object(K.a)().fastRefresh,o=Object(X.f)(),s=Object(X.h)(),j=Object(U.a)().edition;return Object(P.useEffect)((function(){var t=function(){var t=Object(z.a)(M.a.mark((function t(){var n,c;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=j.farms.map((function(e){return{address:o,name:"pendingTokens",params:[e.pid,i]}})),t.next=3,Object(J.a)(e,s,G,n);case 3:c=t.sent,r(c);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();i&&(null===j||void 0===j?void 0:j.farms)&&t()}),[i,a,o,s,j,e]),c},ne=n(62),ce=n(110),re=n(176),ie=n(698),ae=n(7),oe=F.e.div(c||(c=Object(L.a)(["\n  margin-bottom: 24px;\n"]))),se=function(){var e=Object(W.b)().t,t=Object(I.c)().account,n=te().reduce((function(e,t){var n=new V.a(t);return n.eq(0)?e:e+n.div(ce.a).toNumber()}),0),c=Object(ne.j)(),r=new V.a(n).multipliedBy(c).toNumber();return t?Object(ae.jsxs)(oe,{children:[Object(ae.jsx)(re.a,{value:n,lineHeight:"1.5"}),!c.eq(0)&&Object(ae.jsx)(ie.a,{value:r})]}):Object(ae.jsx)(A.S,{color:"textDisabled",style:{lineHeight:"76px"},children:e("Locked")})},je=n(140),be=n(139),le=function(){var e=Object(W.b)().t,t=Object(je.a)(Object(X.k)()),n=Object(ne.j)(),c=new $.BigNumber(Object(be.a)(t)).multipliedBy(n).toNumber();return Object(I.c)().account?Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(re.a,{value:Object(be.a)(t),decimals:4,fontSize:"24px",lineHeight:"36px"}),n.eq(0)?Object(ae.jsx)("br",{}):Object(ae.jsx)(ie.a,{value:c})]}):Object(ae.jsx)(A.S,{color:"textDisabled",style:{lineHeight:"54px"},children:e("Locked")})},ue=F.e.div(r||(r=Object(L.a)(["\n  margin-bottom: 16px;\n"]))),de=F.e.div(i||(i=Object(L.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),Oe=F.e.div(a||(a=Object(L.a)(["\n  margin-top: 46px;\n"]))),xe=function(){var e=Object(U.a)().edition,t=Object(P.useState)(!1),n=Object(Q.a)(t,2),c=n[0],r=n[1],i=Object(I.c)().account,a=Object(W.b)().t,s=Z().filter((function(e){return e.balance.toNumber()>0})),j=Object(H.a)(s.map((function(e){return e.pid}))).onReward,b=Object(P.useCallback)(Object(z.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,j();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,r(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[j]),l=Object(F.e)(A.m)(o||(o=Object(L.a)(["\n    background-image: url('","');\n    background-repeat: no-repeat;\n    background-position: top right;\n    min-height: 376px;\n  "])),e.homeStakingCardBackground);return Object(ae.jsx)(l,{children:Object(ae.jsxs)(A.n,{children:[Object(ae.jsx)("div",{style:{marginBottom:108},children:Object(ae.jsx)(A.w,{scale:"xl",mb:"32px",children:a("Farms & Staking")})}),Object(ae.jsxs)(ue,{children:[Object(ae.jsxs)(de,{children:[e.token.symbol.toUpperCase()," to Harvest:"]}),Object(ae.jsx)(se,{})]}),Object(ae.jsxs)(ue,{children:[Object(ae.jsxs)(de,{children:[e.token.symbol.toUpperCase()," in Wallet:"]}),Object(ae.jsx)(le,{})]}),Object(ae.jsx)(Oe,{children:i?Object(ae.jsx)(A.i,{id:"harvest-all",disabled:s.length<=0,isLoading:c,onClick:b,width:"100%",children:c?"Collecting ".concat(e.token.symbol.toUpperCase()):a("Harvest all (%count%)",{count:s.length})}):Object(ae.jsx)(ee.a,{width:"100%"})})]})})},me=n(712),pe=n(720),he=n(697),fe=n(739),ge=n(740),ve=n(741),ke=n(773),we=F.e.div(s||(s=Object(L.a)(["\n  margin-bottom: 24px;\n"]))),Se=function(e){var t=e.claimAmount,n=Object(W.b)().t,c=Object(I.c)().account,r=Object(be.a)(t),i=Object(ne.j)(),a=new $.BigNumber(r).multipliedBy(i).toNumber();return c?Object(ae.jsxs)(we,{children:[Object(ae.jsx)(re.a,{value:r,lineHeight:"1.5"}),!i.eq(0)&&Object(ae.jsx)(ie.a,{value:a,decimals:2})]}):Object(ae.jsx)(A.S,{color:"textDisabled",style:{lineHeight:"76px"},children:n("Locked")})},ye=function(){var e=Object(U.a)().network,t=Object(W.b)().t,n=Object(he.d)(),c=Object(be.a)(n),r=c.toLocaleString(void 0,{maximumFractionDigits:2}),i=Object(ne.i)(),a=new $.BigNumber(c).multipliedBy(i).toNumber();return Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(A.S,{bold:!0,fontSize:"24px",style:{lineHeight:"1.5"},children:t("%amount% W".concat(e.tokenSymbol),{amount:r})}),i.eq(0)?Object(ae.jsx)("br",{}):Object(ae.jsx)(ie.a,{value:a})]})},Ee=Object(F.e)(A.m)(j||(j=Object(L.a)(["\n  background-image: url('./images/ticket-bg.svg');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),De=F.e.div(b||(b=Object(L.a)(["\n  margin-bottom: 16px;\n"]))),Te=F.e.img(l||(l=Object(L.a)(["\n  margin-bottom: 16px;\n"]))),Ne=F.e.div(u||(u=Object(L.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),Ce=F.e.div(d||(d=Object(L.a)(["\n  display: flex;\n  margin-top: 24px;\n  button {\n    flex: 1 0 50%;\n  }\n"]))),Be=Object(F.e)(A.w).attrs({scale:"xl"})(O||(O=Object(L.a)(["\n  line-height: 44px;\n"]))),Le=function(){var e=Object(U.a)().network,t=Object(I.c)().account,n=Object(me.a)(),c=Object(P.useState)(!1),r=Object(Q.a)(c,2),i=r[0],a=r[1],o=Object(W.b)().t,s=Object(fe.a)(),j=Object(A.db)(Object(ae.jsx)(ve.a,{})),b=Object(Q.a)(j,1)[0],l=Object(he.c)(),u=l.claimAmount,d=l.setLastUpdated,O=Object(pe.c)().onMultiClaim,x=Object(je.a)(Object(X.j)()),m=Object(ge.a)(b),p=m.handleApprove,h=m.requestedApproval,f=Object(P.useCallback)(Object(z.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),e.next=4,O();case 4:e.sent&&(a(!1),d()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[O,a,d]),g=Object(A.db)(Object(ae.jsx)(ke.a,{max:x})),v=Object(Q.a)(g,1)[0],k=function(){return Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsxs)(De,{children:[Object(ae.jsxs)(Ne,{children:["W",e.tokenSymbol," to Collect:"]}),Object(ae.jsx)(Se,{claimAmount:u})]}),Object(ae.jsxs)(De,{children:[Object(ae.jsxs)(Ne,{children:[o("Total jackpot this round"),":"]}),Object(ae.jsx)(ye,{})]}),t?Object(ae.jsxs)(Ce,{children:[Object(ae.jsx)(A.i,{id:"dashboard-collect-winnings",disabled:0===Object(be.a)(u)||i,onClick:f,style:{marginRight:"8px"},children:o("Collect Winnings")}),s.toNumber()?n?Object(ae.jsxs)(A.i,{disabled:!0,children:[" ",o("On sale soon")]}):Object(ae.jsx)(A.i,{id:"dashboard-buy-tickets",variant:"secondary",onClick:v,children:o("Buy Tickets")}):Object(ae.jsxs)(A.i,{width:"100%",disabled:h,onClick:p,children:["Approve W",e.tokenSymbol]})]}):Object(ae.jsx)(Ce,{children:Object(ae.jsx)(ee.a,{width:"100%"})})]})};return Object(ae.jsx)(Ee,{children:Object(ae.jsxs)(A.n,{children:[Object(ae.jsxs)("div",{style:{marginBottom:24},children:[Object(ae.jsx)(A.w,{scale:"xl",children:o("Your Lottery Winnings")}),e.lottery.enabled&&Object(ae.jsxs)(A.S,{children:["Next round on ",e.lottery.nextRoundDate.toDateString()," at"," ",e.lottery.nextRoundDate.toLocaleTimeString()]})]}),Object(ae.jsx)(Te,{src:"./images/ticket.svg",alt:"lottery ticket",width:64,height:64}),e.lottery.enabled?Object(ae.jsx)(k,{}):Object(ae.jsx)(Be,{color:"#7645d9",children:o("Coming Soon")})]})})},Pe=n(715),Fe=Object(F.e)(A.m)(x||(x=Object(L.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),Ae=F.e.div(m||(m=Object(L.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),_e=function(){var e=Object(U.a)().edition,t=Object(je.d)(),n=Object(ne.j)(),c=Object(Pe.a)().tokensPerBlock,r=Object(be.a)(Object(je.b)(Object(X.k)())),i=t?Object(be.a)(t)-r:0,a=n.times(i),o=Object(A.fb)(Object(ae.jsx)("div",{children:"To limit the Max Total Supply emissions follow a phased-based decrease. Please check the documentation for more details."}),{placement:"bottom-end"}),s=o.targetRef,j=o.tooltip,b=o.tooltipVisible;return Object(ae.jsx)(Fe,{children:Object(ae.jsxs)(A.n,{children:[Object(ae.jsxs)(A.w,{scale:"xl",mb:"24px",children:[e.token.symbol," Stats"]}),Object(ae.jsxs)(Ae,{children:[Object(ae.jsx)(A.S,{fontSize:"14px",children:"Market Cap"}),Object(ae.jsx)(re.a,{fontSize:"14px",value:a.toNumber(),decimals:0,prefix:"$"})]}),Object(ae.jsxs)(Ae,{children:[Object(ae.jsxs)(A.S,{fontSize:"14px",children:["Total ",e.token.symbol," Supply"]}),i&&Object(ae.jsx)(re.a,{fontSize:"14px",value:i})]}),Object(ae.jsxs)(Ae,{children:[Object(ae.jsxs)(A.S,{fontSize:"14px",children:["Total ",e.token.symbol," Burned"]}),Object(ae.jsx)(re.a,{fontSize:"14px",decimals:0,value:r})]}),Object(ae.jsxs)(Ae,{children:[Object(ae.jsxs)(A.v,{children:[Object(ae.jsxs)(A.S,{fontSize:"14px",children:["New ",e.token.symbol,"/block"]}),Object(ae.jsxs)("div",{ref:s,children:[Object(ae.jsx)(A.x,{ml:"12px",mt:"2px",width:"16px",height:"16px",color:"textSubtle"}),b&&j]})]}),"number"===typeof c?Object(ae.jsx)(re.a,{fontSize:"14px",decimals:2,value:c}):Object(ae.jsx)(A.O,{width:"36px",height:"24px"})]})]})})},Re=Object(F.e)(A.m)(p||(p=Object(L.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),Me=function(){var e=Object(ne.k)();return Object(ae.jsx)(Re,{children:Object(ae.jsxs)(A.n,{children:[Object(ae.jsx)(A.w,{size:"lg",mb:"24px",children:"Total Value Locked (TVL)"}),Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(re.a,{value:e.toNumber(),prefix:"$",decimals:2}),Object(ae.jsx)(A.S,{color:"textSubtle",children:"Across all Farms and Pools"})]})]})})},ze=n(774),Qe=n.n(ze),Ie=n(78),Ue=n(721),We=Object(F.e)(A.m)(h||(h=Object(L.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),He=Object(F.e)(A.w).attrs({scale:"xl"})(f||(f=Object(L.a)(["\n  line-height: 44px;\n"]))),qe=function(){var e=Object(U.a)().edition,t=Object(W.b)().t,n=Object(ne.d)().data,c=Object(ne.h)(),r=Object(ne.j)(),i=Object(Pe.a)().tokensPerBlock,a=Object(ce.b)(),o=Object(P.useMemo)((function(){var t=n.filter((function(e){return 0!==e.pid&&"0X"!==e.multiplier})).map((function(t){if(t.lpTotalInQuoteToken&&c){var n=c[Object(X.a)(t.quoteToken.address,e.chain).toLowerCase()],o=new V.a(t.lpTotalInQuoteToken).times(n);return Object(Ue.a)(a,t.poolWeight,r,o,i)}return null})),o=Qe()(t);return null===o||void 0===o?void 0:o.toLocaleString("en-US",{maximumFractionDigits:2})}),[r,n,c,i,a,e]);return Object(ae.jsx)(We,{children:Object(ae.jsx)(Ie.c,{exact:!0,activeClassName:"active",to:"/farms",id:"farm-apr-cta",children:Object(ae.jsxs)(A.n,{children:[Object(ae.jsx)(A.w,{color:"contrast",scale:"lg",children:"Earn up to"}),Object(ae.jsx)(He,{color:"#7645d9",children:o?"".concat(o,"% ").concat(t("APR")):Object(ae.jsx)(A.O,{animation:"pulse",variant:"rect",height:"44px"})}),Object(ae.jsxs)(A.v,{justifyContent:"space-between",children:[Object(ae.jsx)(A.w,{color:"contrast",scale:"lg",children:"in Farms"}),Object(ae.jsx)(A.d,{mt:30,color:"primary"})]})]})})})},$e=(Object(F.e)(A.m)(g||(g=Object(L.a)(["\n  background: ",";\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),(function(e){var t=e.theme;return"linear-gradient(".concat(t.colors.primary,", ").concat(t.colors.overlay,")")}),(function(e){return e.theme.mediaQueries.lg})),Object(F.e)(A.w).attrs({scale:"xl"})(v||(v=Object(L.a)(["\n  line-height: 44px;\n"]))),function(){return Object(ae.jsx)(ae.Fragment,{})}),Ve=function(){var e=Object(he.d)();return Object(be.a)(e)*Object(ne.i)().toNumber()},Je=Object(F.e)(A.m)(k||(k=Object(L.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Ge=Object(F.e)(A.w).attrs({scale:"xl"})(w||(w=Object(L.a)(["\n  line-height: 44px;\n"]))),Xe=function(){var e=Object(U.a)().network,t=Ve(),n=function(){return Object(ae.jsxs)(A.n,{children:[Object(ae.jsx)(A.w,{color:"contrast",size:"lg",children:"Lottery with"}),Object(ae.jsx)(Ge,{color:"#7645d9",children:0!==t?"$".concat(t.toLocaleString()):Object(ae.jsx)(A.O,{animation:"pulse",variant:"rect",height:"44px"})}),Object(ae.jsxs)(A.v,{justifyContent:"space-between",children:[Object(ae.jsx)(A.w,{color:"contrast",size:"lg",children:"up for grabs"}),Object(ae.jsx)(A.d,{mt:30,color:"primary"})]})]})},c=function(){return Object(ae.jsxs)(A.n,{children:[Object(ae.jsx)(A.w,{color:"contrast",scale:"lg",children:"Lottery"}),Object(ae.jsx)(Ge,{color:"#7645d9",children:"Coming Soon"}),Object(ae.jsxs)(A.v,{justifyContent:"space-between",children:[Object(ae.jsx)(A.w,{color:"contrast",scale:"lg"}),Object(ae.jsx)(A.d,{mt:30,color:"primary"})]})]})};return Object(ae.jsx)(Je,{children:Object(ae.jsx)(Ie.c,{exact:!0,activeClassName:"active",to:e.lottery.enabled?"/lottery":"/",id:"lottery-pot-cta",children:e.lottery.enabled?Object(ae.jsx)(n,{}):Object(ae.jsx)(c,{})})})},Ye=n(322),Ke=n(66),Ze=n(144),et=n(738),tt=n(701),nt=Object(F.e)(A.m)(S||(S=Object(L.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),ct=function(){var e=Object(U.a)().edition,t=Object(je.d)(),n=Object(be.a)(Object(je.b)(Object(X.k)())),c=t?Object(be.a)(t)-n:0;return Object(ae.jsx)(nt,{children:Object(ae.jsxs)(A.n,{children:[Object(ae.jsxs)(A.w,{size:"lg",mb:"24px",children:["Total ",e.token.symbol," Supply"]}),Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(re.a,{value:c,decimals:2,sufix:" ".concat(e.token.symbol)}),Object(ae.jsx)(A.S,{color:"textSubtle",children:"The total supply will only go down"})]})]})})},rt=n(180),it=F.e.div(y||(y=Object(L.a)(["\n  margin-bottom: 16px;\n"]))),at=F.e.div(E||(E=Object(L.a)(["\n  margin-bottom: 32px;\n  width: 70%;\n  text-align: left;\n\n  "," {\n    width: 40%;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),ot=F.e.div(D||(D=Object(L.a)(["\n  margin-top: 100px;\n\n  "," {\n    margin-top: 200px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),st=F.e.div(T||(T=Object(L.a)(["\n  order: 1;\n  margin: 0 8px 0 0;\n\n  "," {\n    order: 2;\n    margin: 0 0 0 8px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),jt=function(e){var t=e.startDate,n=e.endDate,c=Object(U.a)(),r=c.edition,i=c.network,a=new Date>t,o=new Date>n,s=Object(F.e)(A.m)(N||(N=Object(L.a)(["\n    background-image: url('","');\n    background-repeat: no-repeat;\n    background-position: top right;\n    min-height: 376px;\n  "])),r.homeStakingCardBackground);return Object(ae.jsx)(s,{children:Object(ae.jsxs)(A.n,{children:[Object(ae.jsx)(it,{style:{marginBottom:24},children:Object(ae.jsxs)(A.v,{children:[Object(ae.jsxs)(A.w,{scale:"xl",mb:"16px",style:{flex:1},children:[r.token.symbol," Presale"]}),Object(ae.jsx)(st,{style:{marginTop:8},children:Object(ae.jsx)(A.y,{variant:"subtle",as:Ie.b,to:"/editions",children:Object(ae.jsx)(A.x,{width:"24px",color:"white"})})})]})}),!a&&Object(ae.jsxs)(at,{children:[Object(ae.jsx)(A.w,{scale:"md",mb:"32px",children:"Presale Starts In"}),Object(ae.jsx)(rt.a,{seconds:(t.getTime()-Date.now())/1e3})]}),a&&!o&&Object(ae.jsxs)(at,{children:[Object(ae.jsx)(A.w,{scale:"md",mb:"32px",children:"Presale Ends In"}),Object(ae.jsx)(rt.a,{seconds:(n.getTime()-Date.now())/1e3})]}),Object(ae.jsx)(ot,{children:Object(ae.jsx)(A.i,{style:{width:"100%"},as:"a",href:"https://igo.finance/".concat(i.key,"/").concat(Object(X.a)(r.contracts.igo,r.chain)),target:"_blank",rel:"noreferrer noopener",children:"Go to Presale"})})]})})},bt=Object(F.e)(A.f)(C||(C=Object(L.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),lt=Object(F.e)(A.f)(B||(B=Object(L.a)(["\n  align-items: start;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),ut=function(){var e=Object(U.a)(),t=e.edition,n=e.network,c=function(){var e=Object(Y.a)(),t=Object(U.a)().network,n=Object(ne.a)().currentBlock,c=Object(Ke.a)(),r=Object(P.useState)(!1),i=Object(Q.a)(r,2),a=i[0],o=(i[1],Object(P.useState)(!0)),s=Object(Q.a)(o,2),j=s[0],b=s[1],l=Object(P.useState)(""),u=Object(Q.a)(l,2),d=u[0],O=(u[1],Object(P.useState)()),x=Object(Q.a)(O,2),m=x[0],p=x[1],h=Object(P.useState)(),f=Object(Q.a)(h,2),g=f[0],v=f[1],k=Object(P.useState)(),w=Object(Q.a)(k,2),S=(w[0],w[1],Object(X.b)()),y=Object(X.h)();return Object(P.useEffect)((function(){!function(){var c=Object(z.a)(M.a.mark((function c(){var r,i,a,o,s,j,l,u,d;return M.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(S){c.next=2;break}return c.abrupt("return");case 2:if(!m){c.next=4;break}return c.abrupt("return");case 4:return r=[{address:S,name:"useBlocks",params:[]},{address:S,name:"startTime",params:[]},{address:S,name:"endTime",params:[]}],c.next=7,Object(J.a)(e,y,Ye,r);case 7:i=c.sent,a=Object(Q.a)(i,3),o=a[0],s=a[1],j=a[2],o[0]?n&&(l=t.blockTime,u=(s-n)*l,d=(j-n)*l,p(new Date(Date.now()+1e3*u)),v(new Date(Date.now()+1e3*d))):(p(new Date(1e3*s)),v(new Date(1e3*j))),b(!1);case 14:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}()()}),[null===c||void 0===c?void 0:c.methods,n,m,S,y,t.blockTime,e]),{startDate:m,endDate:g,loading:j,pendingTx:a,error:d}}(),r=c.startDate,i=c.endDate;c.loading;return Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(Ze.a,{title:t.title,subtitle:t.homeTitle,rightContent:Object(ae.jsx)("img",{src:n.image,alt:n.title,width:56===t.chain?180:"",height:56===t.chain?180:""}),leftFlex:2,hideRightOnMobile:!0}),Object(ae.jsxs)(_.a,{children:[t.topBanner&&Object(ae.jsx)("div",{style:{marginBottom:32},children:Object(ae.jsx)("a",{href:t.topBanner.link,children:Object(ae.jsx)("img",{src:t.topBanner.img,alt:"Banner"})})}),Object(ae.jsx)(et.a,{style:{marginBottom:32}}),Object(ae.jsxs)(bt,{children:[i>new Date?Object(ae.jsx)(jt,{startDate:r,endDate:i}):Object(ae.jsx)(xe,{}),Object(ae.jsx)(Le,{})]}),Object(ae.jsxs)(bt,{children:[Object(ae.jsx)(_e,{}),Object(tt.d)(t)?Object(ae.jsx)(ct,{}):Object(ae.jsx)(Me,{})]}),!Object(tt.d)(t)&&Object(ae.jsxs)(lt,{children:[Object(ae.jsx)(qe,{}),Object(ae.jsx)($e,{}),n.lottery.enabled&&Object(ae.jsx)(Xe,{})]})]})]})}}}]);