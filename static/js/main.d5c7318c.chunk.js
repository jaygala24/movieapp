(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(49)},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),s=a.n(i),o=a(7),c=a.n(o),l=a(9),m=a(2),u=a(3),v=a(5),p=a(4),h=a(6),d=a(10),g=a.n(d),b=function(e){var t;return e&&(t=e.branding),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-dark justify-content-center"},r.a.createElement("a",{href:"https://jaygala24.github.io/movieapp",className:"navbar-brand"},r.a.createElement("p",{className:"display-4"},t))))};b.defaultProps={branding:"Movie App"};var E=b,f=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={searchMovie:""},a.onSubmit=function(e){e.preventDefault(),a.props.getMovies(e),a.setState({searchMovie:e.target.elements.movie.value})},a.onChange=function(e){a.setState({searchMovie:e.target.value})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container my-5"},r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h3",{className:"mb-4"},"Search For Any Movie"),r.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},r.a.createElement("input",{type:"text",className:"form-control",name:"movie",placeholder:"Search any movie",value:this.state.searchMovie,onChange:this.onChange})),this.props.errors?r.a.createElement("p",{className:"lead text-danger"},"Please enter valid movie name"):null))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).getMovieID=function(e){localStorage.setItem("id",a.props.movie.imdbID),a.props.getMovie(e),e.preventDefault()},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.movie;return r.a.createElement("div",{className:"col-12 col-sm-6 col-md-3"},r.a.createElement("div",{className:"card text-center mb-2 mx-auto"},r.a.createElement("img",{className:"card-img-top",src:e.Poster,alt:"Movie Poster"}),r.a.createElement("div",{className:"card-footer"},r.a.createElement("h5",{className:"card-title"},e.Title),r.a.createElement("a",{href:"/",onClick:this.getMovieID.bind(this),className:"btn btn-primary"},"More info"))))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).getMovieID=function(e){a.props.getMovie(e)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.movies.map(function(t){return r.a.createElement(N,{key:t.imdbID,movie:t,getMovie:e.getMovieID.bind(e)})});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},t))}}]),t}(n.Component),y=(a(45),a(47),function(e){var t=e.movie,a="http://www.imdb.com/title/"+t.imdbID;return r.a.createElement("div",{className:"container text-white text-center"},r.a.createElement("h2",null,t.Title),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-4 mt-2"},r.a.createElement("img",{src:t.Poster,className:"thumbnail",alt:"Poster"})),r.a.createElement("div",{className:"col-12 col-lg-8 mt-2"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"IMDB Rating:")," ",t.imdbRating),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Genre:")," ",t.Genre),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Released:")," ",t.Released),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Language:")," ",t.Language),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Director:")," ",t.Director),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Writer:")," ",t.Writer),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Actors:")," ",t.Actors),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Plot:")," ",t.Plot)))),r.a.createElement("div",{className:"row m-3"},r.a.createElement("div",{className:"col-12"},r.a.createElement("a",{href:a,className:"btn btn-primary mr-3"},"View IMDB"),r.a.createElement("a",{href:"https://jaygala24.github.io/movieapp/",className:"btn btn-primary"},"Go Back"))))}),j=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[],movie:{},errors:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getMovies",value:function(){var e=Object(l.a)(c.a.mark(function e(t){var a,n,r,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.elements.movie.value,n=this.state.errors,e.next=5,g.a.get("https://www.omdbapi.com/?s=".concat(a,"&apikey=3273255d"));case 5:"True"===(r=e.sent).data.Response?(i=r.data.Search,n?this.setState({movies:i,errors:!n}):this.setState({movies:i})):n?this.setState({movies:[]}):this.setState({movies:[],errors:!n});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getMovie",value:function(){var e=Object(l.a)(c.a.mark(function e(t){var a,n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("id"),e.next=3,g.a.get("https://www.omdbapi.com/?i=".concat(a,"&apikey=3273255d"));case 3:n=e.sent,r={data:n.data},this.setState({movies:[],movie:r});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,{branding:"Movie Mania"}),this.state.movie.data?null:r.a.createElement(f,{getMovies:this.getMovies.bind(this),errors:this.state.errors}),this.state.movies?r.a.createElement(w,{movies:this.state.movies,getMovie:this.getMovie.bind(this)}):null,this.state.movie.data?r.a.createElement(y,{movie:this.state.movie.data}):null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.d5c7318c.chunk.js.map