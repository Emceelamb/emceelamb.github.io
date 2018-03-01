let projects = [
  {
    title: "Random News Headline",
    info: "This project uses News API to gather the most recent headlines around the globe. You can click through to randomly browse.",
    imgurl: "https://markofthelam.com/wp-content/uploads/2017/12/Capture.png",
    link:"https://markofthelam.com/2017/12/05/news-headlines/"
  },
  {
    title: "Too Little Too Late",
    info: "This is an anonymous apology board built with Django.",
    imgurl: "https://markofthelam.com/wp-content/uploads/2017/08/2l2l-1.gif",
    link:"https://markofthelam.com/2017/12/05/news-headlines/"
  },
  {
    title: "HTML E-mail",
    info: "An HTML email invitation for a College of Environmental Design event.",
    imgurl: "https://markofthelam.com/wp-content/uploads/2017/02/ehdd.jpg",
    link:"https://markofthelam.com/2017/12/05/news-headlines/"
  },
  {
    title: "ICG Website",
    info: "I developed this website on Wordpress as well as the content writing.",
    imgurl: "https://markofthelam.com/wp-content/uploads/2018/02/icg.png",
    link:"https://markofthelam.com/2017/12/05/news-headlines/"
  },
  {
    title: "Vietnamese Diaspora",
    info: "Data visualization of the Vietnamese Refugee Crisis in America using D3.js.",
    imgurl: "https://markofthelam.com/wp-content/uploads/2017/08/diasporagraph-1.gif",
    link:"https://markofthelam.com/2017/12/05/news-headlines/"
  },
  {
    title: "Arduino heart",
    info: "A beating heart using an Arduino and servomotor. It is activated by heat.",
    imgurl: "https://markofthelam.com/wp-content/uploads/2017/03/beatingheart.jpg",
    link: ""
  },
  {
    title: "Multi-Channel Projection",
    info: "Three web cameras are projection mapped to a cube.",
    imgurl: "https://markofthelam.com/wp-content/uploads/2017/03/3cam.gif",
    link: ""
  }
];

Vue.component("modal", {
  template: "#project-template",
  data: function() {
    return {
      active: false,
      project: {
        title: "",
        info: ""
      }
    };
  },
  methods: {
    open: function(project) {
      this.active = true;
      this.project = project;
    },
    close: function() {
      this.active = false;
      this.isShowing = false;
      console.log(this.isShowing, "close");
      this.toggleShow();
    },
    toggleShow: function(){
      console.log(this.isShowing);
      this.isShowing = !this.isShowing;
      console.log(this.isShowing, "toggle");
    }
  },
  mounted: function() {
    this.$nextTick(
      function() {
        portfolio.$on("open-modal", this.open);
        portfolio.$on("close-modal", this.close);
        portfolio.$on("toggle-show", this.toggleShow);
      }.bind(this)
    );
  }
});

Vue.component('info-modal', {
    template: '#info-template',
    
  })
  

  
const portfolio = new Vue({
  el: "#portfolio",
  data(){
    return {
        active: 0,
        showModal: false,
        showModal2: false,
        projects: projects,
        bkClass: 'bk',
        blurClass: 'blur',
        isShowing:false
    }
  },
  methods: {
    openModal: function(project) {
      portfolio.$emit("open-modal", project);
    //   toggleShow();
    isShowing = true;
    },
    closeModal: function() {
      portfolio.$emit("close-modal");
      portfolio.$emit("toggle-show");
      toggleShow();
      isShowing = false;
    },
    toggleShow() {
        this.isShowing = !this.isShowing;
      }
  }
});
