(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{36:function(e,t,n){},38:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(19),s=n.n(a),r=n(18),o=n(43),l=n(17),j=n(5),b=(n(54),n(55),n(2)),d=function(){return Object(b.jsx)("span",{className:"banner animate__animated animate__fadeInRight",children:"There are 5 movies nominated for the Shoppies Awards 2021"})},u=(n(57),function(e){var t=e.nominees;return Object(b.jsx)("div",{onClick:function(){return window.scroll(0,0)},children:Object(b.jsxs)("h1",{className:"header",children:["\ud83c\udf9e The Shoppies \ud83c\udfac ",5===t.length&&Object(b.jsx)(d,{})]})})}),h=n(21),m=n.n(h),O=n(26),f=n(89),p=(n(36),function(e){var t,n=e.poster,c=e.title,i=e.date,a=e.rating;return t=c.length>20?"".concat(c.substring(0,21)," ..."):c,Object(b.jsxs)("div",{className:"media",children:[Object(b.jsx)(f.a,{badgeContent:a,color:a>=7?"primary":"secondary"}),Object(b.jsx)("img",{className:"poster",src:"".concat("https://image.tmdb.org/t/p/w300").concat(n),alt:c}),Object(b.jsx)("b",{className:"title",children:t}),Object(b.jsx)("span",{className:"subTitle",children:i})]})}),v=(n(62),function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],a=function(){var e=Object(O.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/movie/week?api_key=d4ba5eb46aeffb06e1401f8e2b87dd48",e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=d4ba5eb46aeffb06e1401f8e2b87dd48");case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent).results&&i(n.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"pageTitle",children:"New Movies"}),Object(b.jsx)("div",{className:"newMovies",children:n&&n.map((function(e){return Object(b.jsx)(p,{id:e.id,poster:e.poster_path,title:e.title,date:e.release_date,rating:e.vote_average},e.id)}))})]})}),x=(n(63),function(e){var t=e.searchMovie,n=e.setSearchMovie,i=Object(c.useRef)(null);Object(c.useEffect)((function(){i.current.focus()}));return Object(b.jsx)("div",{children:Object(b.jsx)("input",{ref:i,className:"form-control",placeholder:"Search a movie...",value:t,onChange:function(e){e.preventDefault();var t=e.target.value;n(t)}})})}),g=n(91),N=function(e){var t,n=e.posterSearch,c=e.title,i=e.year,a=e.disabledState,s=e.handleNomineeClick,r=e.currentMovie,o=e.isMoviesPage;return t=c.length>20?"".concat(c.substring(0,21)," ..."):c,Object(b.jsxs)("div",{className:"media",children:[o&&Object(b.jsx)(g.a,{className:"buttonNominate",variant:"contained",color:"primary",disabled:a,onClick:function(){return s(r)},children:"Nominate"}),!o&&Object(b.jsx)(g.a,{className:"buttonRemove",variant:"contained",color:"primary",onClick:function(){return s(r)},children:"Remove"}),Object(b.jsx)("img",{className:"posterSearch",src:n,alt:c}),Object(b.jsx)("b",{className:"title",children:t}),Object(b.jsx)("span",{className:"subTitle",children:"Released  in ".concat(i)})]})},S=(n(64),function(e){var t=e.isMoviesPage,n=e.nominees,i=e.handleNomineeClick,a=Object(c.useState)([]),s=Object(l.a)(a,2),r=s[0],o=s[1],j=Object(c.useState)(""),d=Object(l.a)(j,2),u=d[0],h=d[1],f=function(){var e=Object(O.a)(m.a.mark((function e(t){var n,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://www.omdbapi.com/?s=".concat(t,"&type=movie&apikey=986ccdbc"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:(i=e.sent).Search&&o(i.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=!0;return e&&f(u),function(){return e=!1}}),[u]),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"pageTitle",children:"Movies title"}),Object(b.jsx)(x,{searchMovie:u,setSearchMovie:h}),Object(b.jsx)("div",{className:"movies",children:r&&r.map((function(e){return Object(b.jsx)(N,{id:e.imdbID,currentMovie:e,handleNomineeClick:i,posterSearch:e.Poster,title:e.Title,year:e.Year,disabledState:!!n.find((function(t){return t.imdbID===e.imdbID}))||n.length>=5,isMoviesPage:t},e.imdbID)}))})]})}),w=(n(65),function(e){var t=e.isMoviesPage,n=e.nominees,c=e.handleNomineeClick,i=e.clicked;return Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"pageTitle",children:"Nominees Titles"}),Object(b.jsx)("div",{className:"nominees",children:n&&n.map((function(e){return Object(b.jsx)(N,{id:e.imdbID,currentMovie:e,posterSearch:e.Poster,title:e.Title,year:e.Year,isMoviesPage:t,handleNomineeClick:c,clicked:i},e.imdbID)}))})]})}),k=function(){return Object(b.jsx)("div",{className:"pageTitle",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Sorry this page does not exist."}),Object(b.jsx)(r.b,{exact:!0,to:"/",children:Object(b.jsx)("span",{children:" Home"})})]})})},y=n(98),M=n(92),C=(n(38),n(93)),I=n(94),T=n(95),D=n(96),P=n(97),_=Object(M.a)({root:{width:"100%",position:"fixed",bottom:0,zIndex:100,backgroundColor:"#2980B9"},notifications:{transform:"translate(-320%, -10%)"}});function E(e){var t=e.nomineesCounter,n=_(),a=i.a.useState(),s=Object(l.a)(a,2),r=s[0],o=s[1],d=(new Date).getFullYear(),u=Object(j.f)();return Object(c.useEffect)((function(){0===r?u.replace("/"):1===r?u.replace("/movies"):2===r&&u.replace("/nominees")}),[r,u]),Object(b.jsxs)(C.a,{value:r,onChange:function(e,t){o(t)},showLabels:!0,className:n.root,children:[Object(b.jsx)(I.a,{style:{color:"white"},label:"Coming in ".concat(d),icon:Object(b.jsx)(T.a,{})}),Object(b.jsx)(I.a,{style:{color:"white"},label:"Movies",icon:Object(b.jsx)(D.a,{})}),Object(b.jsx)(I.a,{style:{color:"white"},label:"Nominees",icon:Object(b.jsx)(P.a,{})}),Object(b.jsx)(f.a,{classes:{badge:n.notifications},badgeContent:t,color:"secondary"})]})}n(70);var R=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],a=Object(j.g)().pathname.includes("movies");Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("shoppies-nominees"));e&&i(e)}),[]);var s=function(e){localStorage.setItem("shoppies-nominees",JSON.stringify(e))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u,{nominees:n}),Object(b.jsx)("div",{className:"app",children:Object(b.jsx)(y.a,{children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",children:Object(b.jsx)(v,{})}),Object(b.jsx)(j.a,{exact:!0,path:"/movies",children:Object(b.jsx)(S,{isMoviesPage:a,nominees:n,handleNomineeClick:function(e){var t=[].concat(Object(o.a)(n),[e]);i(t),s(t)}})}),Object(b.jsx)(j.a,{exact:!0,path:"/nominees",children:Object(b.jsx)(w,{isMoviesPage:a,nominees:n,handleNomineeClick:function(e){var t=n.filter((function(t){return t.imdbID!==e.imdbID}));i(t),s(t)}})}),Object(b.jsx)(j.a,{children:Object(b.jsx)(k,{})})]})})}),Object(b.jsx)(E,{nomineesCounter:n.length})]})};s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(r.a,{children:Object(b.jsx)(R,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.137b54ea.chunk.js.map