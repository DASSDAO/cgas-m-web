(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["a4fe2126"],{"2be9":function(t,e,s){},4769:function(t,e,s){"use strict";var i=s("2be9"),n=s.n(i);n.a},"845e":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mypage"},[s("TitleBar",{attrs:{titleTx:t.title}}),s("div",{staticClass:"tr-eth-block"},[s("q-input",{staticClass:"input-data",attrs:{"float-label":t.$t("ensoraddrs")},model:{value:t.toAddress,callback:function(e){t.toAddress=e},expression:"toAddress"}}),""===t.global.user.ensname?s("span",{staticClass:"curt-balance",staticStyle:{color:"dodgerblue"},on:{click:t.toRegisteEns}},[s("u",[t._v(t._s(t.$t("registename")))])]):t._e(),s("q-input",{staticClass:"input-data",attrs:{"float-label":t.$t("tramt"),type:"number"},model:{value:t.toAmt,callback:function(e){t.toAmt=e},expression:"toAmt"}}),s("span",{staticClass:"curt-balance"},[t._v(t._s(t.$t("cbalance"))+":"+t._s(Number(t.currentBalance).toFixed(4)))]),s("q-btn",{staticClass:"btn-next",attrs:{rounded:"",label:t.$t("submit"),color:"primary"},on:{click:t.toNext}})],1)],1)},n=[];i._withStripped=!0;s("96cf");var a=s("c973"),r=s.n(a),o=(s("f559"),s("9bfb")),l=(s("079c"),s("e7ea")),c=(s("a002"),s("96a1"),s("3452"),{components:{TitleBar:o["a"]},data:function(){return{currentBalance:"CGAS"===this.$route.query.p1?this.global.wallet.lastMcoinBalance:this.global.wallet.lastEthbalance,title:"CGAS"===this.$route.query.p1?"CGAS"+this.$t("send"):"ETH"+this.$t("send"),toAddress:"",toAddress2:"",toAmt:""}},mounted:function(){console.log("----"+this.$route.query.p1),this.util.refreshGasPrice(this)},methods:{toRegisteEns:function(){this.$router.push({path:"registeens",query:{p1:"transfer"}})},toNext:function(){""!==this.toAddress?""!==this.toAmt?this.toAddress.startsWith("0x")?(this.toAddress2=this.toAddress,this.showPswdInputDialog()):this.getAddress(this.toAddress):toast(this.$t("tramtnull")):toast(this.$t("addressnull"))},getAddress:function(t){var e=this;e.$q.loading.show({message:this.$t("checking"),spinnerSize:50});var s=function(){var s=r()(regeneratorRuntime.mark(function s(){return regeneratorRuntime.wrap(function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.global.nabContract.getAddress(t.toLowerCase());case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},s,this)}));return function(){return s.apply(this,arguments)}}();s().then(function(t){e.$q.loading.hide(),t!==e.global.emptyAddress?(e.toAddress2=t,e.showPswdInputDialog()):toast(e.$t("ensnoexist"))})},showPswdInputDialog:function(){var t=this,e=this;this.$q.dialog({title:this.itmeName1,message:this.$t("enterpswd"),prompt:{model:"",type:"text"},ok:this.$t("ok"),cancel:this.$t("cancel"),color:"secondary"}).then(function(s){if(""===s)toast(t.$t("pswdnull"));else{e.$q.loading.show({message:t.$t("txsubmiting"),spinnerSize:50});var i=e.util.getWallet(t,s);"ETH"===t.$route.query.p1?t.transferETH(i):t.tansferMcoin(i)}})},tansferMcoin:function(t){var e=this,s=this.global.tokenContract.connect(t),i=18,n=l["ethers"].utils.parseUnits(e.toAmt+"",i);console.log("开始转CGAS");var a={gasPrice:l["ethers"].utils.bigNumberify(this.global.contractConfig.gasprice)};s.transfer(e.toAddress2,n,a).then(function(t){console.log(t),e.$q.loading.hide(),e.util.showInfoDialog(e,t.hash,!0),e.util.listen4TxResult(e,t.hash,e.$t("submitsuccess"),e.$t("submitfailed"))}).catch(function(t){e.util.reprotError2Bmob(e,"TransferCGAS",t,""),e.$q.loading.hide()})},transferETH:function(t){var e=this,s={to:this.toAddress2,value:l["ethers"].utils.parseEther(this.toAmt+""),gasPrice:l["ethers"].utils.bigNumberify(this.global.contractConfig.gasprice)},i=t.sendTransaction(s);i.then(function(t){console.log(t),e.$q.loading.hide(),e.util.showInfoDialog(e,t.hash,!0),e.util.listen4TxResult(e,t.hash,e.$t("submitsuccess"),e.$t("submitfailed"))}).catch(function(t){e.util.reprotError2Bmob(e,"TransferETH",t,""),e.$q.loading.hide()})}},beforeDestroy:function(){this.$q.loading.hide()}}),u=c,h=(s("4769"),s("2877")),d=Object(h["a"])(u,i,n,!1,null,"6084b152",null);d.options.__file="TransferEth.vue";e["default"]=d.exports},"9bfb":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title-bar"},[s("q-icon",{staticClass:"title-back-icon",attrs:{name:"navigate_before"},nativeOn:{click:function(e){return t.goBack(e)}}}),s("div",{staticClass:"title-tx"},[t._v(t._s(t.titleTx))])],1)},n=[];i._withStripped=!0;var a={props:["titleTx"],methods:{goBack:function(){this.$router.go(-1)}}},r=a,o=(s("a675"),s("2877")),l=Object(o["a"])(r,i,n,!1,null,null,null);l.options.__file="TitleBar.vue";e["a"]=l.exports},a675:function(t,e,s){"use strict";var i=s("ca51"),n=s.n(i);n.a},ca51:function(t,e,s){}}]);