let projects = [
  {
    title: "Random News Headline",
    info: "This project uses News API to gather the most recent headlines around the globe. You can click through to randomly browse.",
    imgurl: "https://markofthelam.com/wp-content/uploads/2017/12/Capture.png",
    link:"https://markofthelam.com/2017/12/05/news-headlines/"
  },
  {
    title: "item 2",
    info: "bla bla bla"
  },
  {
    title: "item 3",
    info: "bla bla bla"
  },
  {
    title: "item 4",
    info: "bla bla bla"
  },
  {
    title: "item 5",
    info: "bla bla bla"
  },
  {
    title: "item 6",
    info: "bla bla bla"
  },
  {
    title: "item 7",
    info: "bla bla bla"
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
      this.isShowing=false;
    }
  },
  mounted: function() {
    this.$nextTick(
      function() {
        portfolio.$on("open-modal", this.open);
        // portfolio.$on("close-modal", this.close);
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
      toggleShow();
      isShowing = false;
    },
    toggleShow() {
        this.isShowing = !this.isShowing;
      }
  }
});
