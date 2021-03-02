var app=function(e,t){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=a(e),l=a(t);function n(){}function i(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(i)}function c(e){return"function"==typeof e}function d(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function p(e,t,a){e.$$.on_destroy.push(function(e,...t){if(null==e)return n;const a=e.subscribe(...t);return a.unsubscribe?()=>a.unsubscribe():a}(t,a))}function u(e,t){e.appendChild(t)}function m(e,t,a){e.insertBefore(t,a||null)}function g(e){e.parentNode.removeChild(e)}function f(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function h(){return x(" ")}function w(e,t,a){null==a?e.removeAttribute(t):e.getAttribute(t)!==a&&e.setAttribute(t,a)}function b(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function v(e,t,a,s){e.style.setProperty(t,a,s?"important":"")}let y;function k(e){y=e}function $(e){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(e)}const S=[],j=[],_=[],C=[],T=Promise.resolve();let A=!1;function L(e){_.push(e)}let H=!1;const N=new Set;function M(){if(!H){H=!0;do{for(let e=0;e<S.length;e+=1){const t=S[e];k(t),B(t.$$)}for(k(null),S.length=0;j.length;)j.pop()();for(let e=0;e<_.length;e+=1){const t=_[e];N.has(t)||(N.add(t),t())}_.length=0}while(S.length);for(;C.length;)C.pop()();A=!1,H=!1,N.clear()}}function B(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}const P=new Set;function D(e,t){e&&e.i&&(P.delete(e),e.i(t))}function E(e,t,a,s){if(e&&e.o){if(P.has(e))return;P.add(e),undefined.c.push((()=>{P.delete(e),s&&(a&&e.d(1),s())})),e.o(t)}}function J(e){e&&e.c()}function R(e,t,a){const{fragment:s,on_mount:l,on_destroy:n,after_update:o}=e.$$;s&&s.m(t,a),L((()=>{const t=l.map(i).filter(c);n?n.push(...t):r(t),e.$$.on_mount=[]})),o.forEach(L)}function z(e,t){const a=e.$$;null!==a.fragment&&(r(a.on_destroy),a.fragment&&a.fragment.d(t),a.on_destroy=a.fragment=null,a.ctx=[])}function F(e,t){-1===e.$$.dirty[0]&&(S.push(e),A||(A=!0,T.then(M)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function G(e,t,a,s,l,i,c=[-1]){const d=y;k(e);const p=t.props||{},u=e.$$={fragment:null,ctx:null,props:i,update:n,not_equal:l,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:o(),dirty:c,skip_bound:!1};let m=!1;if(u.ctx=a?a(e,p,((t,a,...s)=>{const n=s.length?s[0]:a;return u.ctx&&l(u.ctx[t],u.ctx[t]=n)&&(!u.skip_bound&&u.bound[t]&&u.bound[t](n),m&&F(e,t)),a})):[],u.update(),m=!0,r(u.before_update),u.fragment=!!s&&s(u.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target);u.fragment&&u.fragment.l(e),e.forEach(g)}else u.fragment&&u.fragment.c();t.intro&&D(e.$$.fragment),R(e,t.target,t.anchor),M()}k(d)}const O=[];const q=function(e,t=n){let a;const s=[];function l(t){if(d(e,t)&&(e=t,a)){const t=!O.length;for(let t=0;t<s.length;t+=1){const a=s[t];a[1](),O.push(a,e)}if(t){for(let e=0;e<O.length;e+=2)O[e][0](O[e+1]);O.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(i,o=n){const r=[i,o];return s.push(r),1===s.length&&(a=t(l)||n),i(e),()=>{const e=s.indexOf(r);-1!==e&&s.splice(e,1),0===s.length&&(a(),a=null)}}}}({siteName:"Sample Svelte app with Tailwind CSS & Storybook",byLine:"Rethinking the menu",address:"http://localhost:5000",GitHub:"https://raw.micahguay.com/numi.io/",parts:["test.html"],local:!1,styles:{theme:"light",backgroundColor:"#D1BD79",backgroundPicture:"",borderColor:"#AA7942",divColor:"#ECDAAC",divBackgroundPicture:"",borderSize:"5px",borderRadius:"10px",textColor:"black",font:"20px Times New Romand, Arial",headerFont:"20px Verdana, Arial",navFontSize:"24px",navHoverColor:"blue",showlogo:!1,showSideBar:!1,sideBarLeft:!1,widthLogo:920,widthNavbar:700,widthSidebar:900}});function I(e){let t,a,n,i,o,r,c,d,p,y,k,$,S,j,_,C,T,A,L,H,N,M,B,P,F,G,O,q,I,se,le,ne,ie,oe,re,ce,de,pe,ue,me,ge,fe,xe,he,we,be,ve,ye,ke,$e,Se,je,_e,Ce,Te,Ae,Le,He,Ne,Me,Be,Pe,De,Ee,Je,Re,ze,Fe,Ge,Oe,qe,Ie,Ve,Ye,We,Ze,Ke,Qe,Ue,Xe,et,tt,at,st,lt,nt,it,ot,rt,ct,dt,pt,ut,mt=e[1].siteName+"";return t=new s.default({}),pt=new l.default({}),{c(){J(t.$$.fragment),a=h(),n=f("section"),i=f("div"),o=f("div"),r=f("div"),c=f("h2"),d=x("Hello "),p=x(e[0]),y=x(" - "),k=x(mt),$=x("."),S=h(),j=f("p"),j.innerHTML='Notus Svelte is Free and Open Source. It does not change or add any\n          CSS to the already one from\n          <a href="https://tailwindcss.com/?ref=creativetim" class="text-gray-700" target="_blank">Tailwind CSS</a>\n          . It features multiple HTML elements and it comes with dynamic components\n          for ReactJS, Vue and Angular.',_=h(),C=f("div"),C.innerHTML='<a href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus?ref=ns-index" target="_blank" class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-500 active:bg-red-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">Get started</a> \n          <a href="https://github.com/creativetimofficial/notus-svelte?ref=ns-index" class="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150" target="_blank">Github Star</a>',T=h(),A=f("img"),H=h(),N=f("section"),M=f("div"),M.innerHTML='<svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon class="text-gray-200 fill-current" points="2560 0 2560 100 0 100"></polygon></svg>',B=h(),P=f("div"),P.innerHTML='<div class="flex flex-wrap items-center"><div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32"><div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-500"><img alt="..." src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" class="w-full align-middle rounded-t-lg"/> \n          <blockquote class="relative p-8 mb-4"><svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px"><polygon points="-30,95 583,95 583,65" class="text-red-500 fill-current"></polygon></svg> \n            <h4 class="text-xl font-bold text-white">Great for your awesome project</h4> \n            <p class="text-md font-light mt-2 text-white">Putting together a page has never been easier than matching\n              together pre-made components. From landing pages presentation to\n              login areas, you can easily customise and built your pages.</p></blockquote></div></div> \n\n      <div class="w-full md:w-6/12 px-4"><div class="flex flex-wrap"><div class="w-full md:w-6/12 px-4"><div class="relative flex flex-col mt-4"><div class="px-4 py-5 flex-auto"><div class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"><i class="fas fa-sitemap"></i></div> \n                <h6 class="text-xl mb-1 font-semibold">CSS Components</h6> \n                <p class="mb-4 text-gray-600">Notus Svelte comes with a huge number of Fully Coded CSS\n                  components.</p></div></div> \n            <div class="relative flex flex-col min-w-0"><div class="px-4 py-5 flex-auto"><div class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"><i class="fas fa-drafting-compass"></i></div> \n                <h6 class="text-xl mb-1 font-semibold">JavaScript Components</h6> \n                <p class="mb-4 text-gray-600">We also feature many dynamic components for React, NextJS, Vue\n                  and Angular.</p></div></div></div> \n          <div class="w-full md:w-6/12 px-4"><div class="relative flex flex-col min-w-0 mt-4"><div class="px-4 py-5 flex-auto"><div class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"><i class="fas fa-newspaper"></i></div> \n                <h6 class="text-xl mb-1 font-semibold">Pages</h6> \n                <p class="mb-4 text-gray-600">This extension also comes with 3 sample pages. They are fully\n                  coded so you can start working instantly.</p></div></div> \n            <div class="relative flex flex-col min-w-0"><div class="px-4 py-5 flex-auto"><div class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"><i class="fas fa-file-alt"></i></div> \n                <h6 class="text-xl mb-1 font-semibold">Documentation</h6> \n                <p class="mb-4 text-gray-600">Built by developers for developers. You will love how easy is\n                  to to work with Notus Svelte.</p></div></div></div></div></div></div>',F=h(),G=f("div"),O=f("div"),q=f("div"),q.innerHTML='<div class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"><i class="fas fa-sitemap text-xl"></i></div> \n        <h3 class="text-3xl mb-2 font-semibold leading-normal">CSS Components</h3> \n        <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">Every element that you need in a product comes built in as a\n          component. All components fit perfectly with each other and can have\n          different colours.</p> \n        <div class="block pb-6"><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">Buttons</span> \n          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">Inputs</span> \n          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">Labels</span> \n          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">Menus</span> \n          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">Navbars</span> \n          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">Pagination</span> \n          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">Progressbars</span> \n          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">Typography</span></div> \n        <a href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=ns-index" target="_blank" class="font-bold text-gray-800 hover:text-gray-600 ease-linear transition-all duration-150">View All\n          <i class="fa fa-angle-double-right ml-1 leading-relaxed"></i></a>',I=h(),se=f("div"),le=f("div"),ne=f("img"),oe=h(),re=f("img"),de=h(),pe=f("img"),me=h(),ge=f("img"),xe=h(),he=f("img"),be=h(),ve=f("img"),ke=h(),$e=f("div"),$e.innerHTML='<div class="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32"><div class="justify-center flex flex-wrap relative"><div class="my-4 w-full lg:w-6/12 px-4"><a href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=ns-index" target="_blank"><div class="bg-red-600 shadow-lg rounded-lg text-center p-8"><img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"/> \n                <p class="text-lg text-white mt-4 font-semibold">Svelte</p></div></a> \n            <a href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=ns-index" target="_blank"><div class="bg-blue-500 shadow-lg rounded-lg text-center p-8 mt-8"><img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"/> \n                <p class="text-lg text-white mt-4 font-semibold">ReactJS</p></div></a> \n            <a href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=ns-index" target="_blank"><div class="bg-gray-800 shadow-lg rounded-lg text-center p-8 mt-8"><img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"/> \n                <p class="text-lg text-white mt-4 font-semibold">NextJS</p></div></a></div> \n          <div class="my-4 w-full lg:w-6/12 px-4 lg:mt-16"><a href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=ns-index" target="_blank"><div class="bg-yellow-500 shadow-lg rounded-lg text-center p-8"><img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"/> \n                <p class="text-lg text-white mt-4 font-semibold">JavaScript</p></div></a> \n            <a href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=ns-index" target="_blank"><div class="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8"><img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"/> \n                <p class="text-lg text-white mt-4 font-semibold">Angular</p></div></a> \n            <a href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=ns-index" target="_blank"><div class="bg-green-500 shadow-lg rounded-lg text-center p-8 mt-8"><img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"/> \n                <p class="text-lg text-white mt-4 font-semibold">Vue.js</p></div></a></div></div></div> \n\n      <div class="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48"><div class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"><i class="fas fa-drafting-compass text-xl"></i></div> \n        <h3 class="text-3xl mb-2 font-semibold leading-normal">Javascript Components</h3> \n        <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">In order to create a great User Experience some components require\n          JavaScript. In this way you can manipulate the elements on the page\n          and give more options to your users.</p> \n        <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">We created a set of Components that are dynamic and come to help you.</p> \n        <div class="block pb-6"><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">Alerts</span> \n          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">Dropdowns</span> \n          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">Menus</span> \n          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">Modals</span> \n          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">Navbars</span> \n          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">Popovers</span> \n          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">Tabs</span> \n          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">Tooltips</span></div> \n        <a href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=ns-index" target="_blank" class="font-bold text-gray-800 hover:text-gray-600 ease-linear transition-all duration-150">View all\n          <i class="fa fa-angle-double-right ml-1 leading-relaxed"></i></a></div>',Se=h(),je=f("div"),_e=f("div"),Ce=f("div"),Ce.innerHTML='<div class="md:pr-12"><div class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"><i class="fas fa-file-alt text-xl"></i></div> \n          <h3 class="text-3xl font-semibold">Complex Documentation</h3> \n          <p class="mt-4 text-lg leading-relaxed text-gray-600">This extension comes a lot of fully coded examples that help you get\n            started faster. You can adjust the colors and also the programming\n            language. You can change the text and images and you&#39;re good to go.</p> \n          <ul class="list-none mt-6"><li class="py-2"><div class="flex items-center"><div><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3"><i class="fas fa-fingerprint"></i></span></div> \n                <div><h4 class="text-gray-600">Built by Developers for Developers</h4></div></div></li> \n            <li class="py-2"><div class="flex items-center"><div><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3"><i class="fab fa-html5"></i></span></div> \n                <div><h4 class="text-gray-600">Carefully crafted code for Components</h4></div></div></li> \n            <li class="py-2"><div class="flex items-center"><div><span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3"><i class="far fa-paper-plane"></i></span></div> \n                <div><h4 class="text-gray-600">Dynamic Javascript Components</h4></div></div></li></ul></div>',Te=h(),Ae=f("div"),Le=f("img"),Ne=h(),Me=f("div"),Me.innerHTML='<div class="w-full md:w-6/12 px-12 md:px-4"><h2 class="font-semibold text-4xl">Beautiful Example Pages</h2> \n      <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-600">Notus Svelte is a completly new product built using our past experience\n        in web templates. Take the examples we made for you and start playing\n        with them.</p></div>',Be=h(),Pe=f("section"),De=f("div"),Ee=f("div"),Je=f("div"),Re=f("div"),ze=f("div"),Fe=f("h5"),Fe.textContent="Login Page",Ge=h(),Oe=f("div"),qe=f("img"),Ve=h(),Ye=f("div"),We=f("h5"),We.textContent="Profile Page",Ze=h(),Ke=f("div"),Qe=f("img"),Xe=h(),et=f("div"),tt=f("h5"),tt.textContent="Landing Page",at=h(),st=f("div"),lt=f("img"),it=h(),ot=f("section"),ot.innerHTML='<div class="container mx-auto pb-64"><div class="flex flex-wrap justify-center"><div class="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64"><div class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"><i class="fas fa-code-branch text-xl"></i></div> \n        <h3 class="text-3xl mb-2 font-semibold leading-normal text-white">Open Source</h3> \n        <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-500">Since\n          <a href="https://tailwindcss.com/?ref=creativetim" class="text-gray-400" target="_blank">Tailwind CSS</a>\n          is an open source project we wanted to continue this movement too. You\n          can give this version a try to feel the design and also test the quality\n          of the code!</p> \n        <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-500">Get it free on Github and please help us spread the news with a Star!</p> \n        <a href="https://github.com/creativetimofficial/notus-svelte?ref=ns-index" target="_blank" class="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">Github Star</a></div> \n\n      <div class="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative"><i class="fab fa-github text-gray-800 text-55 absolute -top-150-px -right-100 left-auto opacity-80"></i></div></div></div>',rt=h(),ct=f("section"),ct.innerHTML='<div class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20" style="transform: translateZ(0);"><svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon></svg></div> \n\n  <div class="container mx-auto"><div class="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10"><div class="w-full text-center lg:w-8/12"><p class="text-4xl text-center"><span role="img" aria-label="love">😍</span></p> \n        <h3 class="font-semibold text-3xl">Do you love this Starter Kit?</h3> \n        <p class="text-gray-600 text-lg leading-relaxed mt-4 mb-4">Cause if you do, it can be yours now. Hit the buttons below to\n          navigate to get the Free version for your next project. Build a new\n          web app or give an old project a new look!</p> \n        <div class="sm:block flex flex-col mt-10"><a href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus?ref=ns-index" target="_blank" class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-red-500 active:bg-red-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">Get started</a> \n          <a href="https://github.com/creativetimofficial/notus-svelte?ref=ns-index" target="_blank" class="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"><i class="fab fa-github text-lg mr-1"></i> \n            <span>Help With a Star</span></a></div> \n        <div class="text-center mt-16"></div></div></div></div>',dt=h(),J(pt.$$.fragment),w(c,"class","font-semibold text-4xl text-gray-700"),w(j,"class","mt-4 text-lg leading-relaxed text-gray-600"),w(C,"class","mt-12"),w(r,"class","pt-32 sm:pt-0"),w(o,"class","w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4"),w(i,"class","container mx-auto items-center flex flex-wrap"),w(A,"class","absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"),A.src!==(L=V)&&w(A,"src",L),w(A,"alt","..."),w(n,"class","header relative pt-16 items-center flex h-screen max-h-860-px"),w(M,"class","-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"),v(M,"transform","translateZ(0)"),w(P,"class","container mx-auto"),w(q,"class","w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48"),w(ne,"alt","..."),ne.src!==(ie=Y)&&w(ne,"src",ie),w(ne,"class","w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"),w(re,"alt","..."),re.src!==(ce=W)&&w(re,"src",ce),w(re,"class","w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"),w(pe,"alt","..."),pe.src!==(ue=Z)&&w(pe,"src",ue),w(pe,"class","w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"),w(ge,"alt","..."),ge.src!==(fe=K)&&w(ge,"src",fe),w(ge,"class","w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"),w(he,"alt","..."),he.src!==(we=Q)&&w(he,"src",we),w(he,"class","w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"),w(ve,"alt","..."),ve.src!==(ye=U)&&w(ve,"src",ye),w(ve,"class","w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"),w(le,"class","relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0"),w(se,"class","w-full md:w-5/12 px-4 mr-auto ml-auto mt-32"),w(O,"class","flex flex-wrap items-center"),w($e,"class","flex flex-wrap items-center pt-32"),w(G,"class","container mx-auto overflow-hidden pb-20"),w(Ce,"class","w-full md:w-5/12 ml-auto px-12 md:px-4"),w(Le,"alt","..."),w(Le,"class","max-w-full rounded-lg shadow-xl"),v(Le,"transform","scale(1) perspective(1040px) rotateY(-11deg)\n              rotateX(2deg) rotate(2deg)"),Le.src!==(He=X)&&w(Le,"src",He),w(Ae,"class","w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0"),w(_e,"class","items-center flex flex-wrap"),w(je,"class","container mx-auto px-4 pb-32 pt-48"),w(Me,"class","justify-center text-center flex flex-wrap mt-24"),w(N,"class","mt-48 md:mt-40 pb-40 relative bg-gray-200"),w(Fe,"class","text-xl font-semibold pb-4 text-center"),w(qe,"alt","..."),w(qe,"class","align-middle border-none max-w-full h-auto rounded-lg"),qe.src!==(Ie=ee)&&w(qe,"src",Ie),w(Oe,"class","hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"),w(ze,"class","w-full lg:w-4/12 px-4"),w(We,"class","text-xl font-semibold pb-4 text-center"),w(Qe,"alt","..."),w(Qe,"class","align-middle border-none max-w-full h-auto rounded-lg"),Qe.src!==(Ue=te)&&w(Qe,"src",Ue),w(Ke,"class","hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"),w(Ye,"class","w-full lg:w-4/12 px-4"),w(tt,"class","text-xl font-semibold pb-4 text-center"),w(lt,"alt","..."),w(lt,"class","align-middle border-none max-w-full h-auto rounded-lg"),lt.src!==(nt=ae)&&w(lt,"src",nt),w(st,"class","hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"),w(et,"class","w-full lg:w-4/12 px-4"),w(Re,"class","flex flex-wrap"),w(Je,"class","w-full lg:w-12/12 px-4 -mt-24"),w(Ee,"class","justify-center flex flex-wrap"),w(De,"class","container mx-auto"),w(Pe,"class","block relative z-1 bg-gray-700"),w(ot,"class","py-20 bg-gray-700 overflow-hidden"),w(ct,"class","pb-16 bg-gray-300 relative pt-32")},m(e,s){R(t,e,s),m(e,a,s),m(e,n,s),u(n,i),u(i,o),u(o,r),u(r,c),u(c,d),u(c,p),u(c,y),u(c,k),u(c,$),u(r,S),u(r,j),u(r,_),u(r,C),u(n,T),u(n,A),m(e,H,s),m(e,N,s),u(N,M),u(N,B),u(N,P),u(N,F),u(N,G),u(G,O),u(O,q),u(O,I),u(O,se),u(se,le),u(le,ne),u(le,oe),u(le,re),u(le,de),u(le,pe),u(le,me),u(le,ge),u(le,xe),u(le,he),u(le,be),u(le,ve),u(G,ke),u(G,$e),u(N,Se),u(N,je),u(je,_e),u(_e,Ce),u(_e,Te),u(_e,Ae),u(Ae,Le),u(N,Ne),u(N,Me),m(e,Be,s),m(e,Pe,s),u(Pe,De),u(De,Ee),u(Ee,Je),u(Je,Re),u(Re,ze),u(ze,Fe),u(ze,Ge),u(ze,Oe),u(Oe,qe),u(Re,Ve),u(Re,Ye),u(Ye,We),u(Ye,Ze),u(Ye,Ke),u(Ke,Qe),u(Re,Xe),u(Re,et),u(et,tt),u(et,at),u(et,st),u(st,lt),m(e,it,s),m(e,ot,s),m(e,rt,s),m(e,ct,s),m(e,dt,s),R(pt,e,s),ut=!0},p(e,[t]){(!ut||1&t)&&b(p,e[0]),(!ut||2&t)&&mt!==(mt=e[1].siteName+"")&&b(k,mt)},i(e){ut||(D(t.$$.fragment,e),D(pt.$$.fragment,e),ut=!0)},o(e){E(t.$$.fragment,e),E(pt.$$.fragment,e),ut=!1},d(e){z(t,e),e&&g(a),e&&g(n),e&&g(H),e&&g(N),e&&g(Be),e&&g(Pe),e&&g(it),e&&g(ot),e&&g(rt),e&&g(ct),e&&g(dt),z(pt,e)}}}const V="/assets/img/pattern_svelte.png",Y="/assets/img/component-btn.png",W="/assets/img/component-profile-card.png",Z="/assets/img/component-info-card.png",K="/assets/img/component-info-2.png",Q="/assets/img/component-menu.png",U="/assets/img/component-btn-pink.png",X="/assets/img/documentation.png",ee="/assets/img/login.jpg",te="/assets/img/profile.jpg",ae="/assets/img/landing.jpg";function se(e,t,a){let s;p(e,q,(e=>a(1,s=e)));let{name:l}=t;return $((()=>{const e=q.subscribe((e=>{document.body.style.backgroundColor=e.styles.backgroundColor,showLogo=e.styles.showlogo,winResize({})}));return()=>{e()}})),e.$$set=e=>{"name"in e&&a(0,l=e.name)},[l,s]}return new class extends class{$destroy(){z(this,1),this.$destroy=n}$on(e,t){const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(t),()=>{const e=a.indexOf(t);-1!==e&&a.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),G(this,e,se,I,d,{name:0})}}({target:document.body,props:{name:"world"}})}(IndexNavbar,Footer);
//# sourceMappingURL=bundle.js.map
