
const App=Vue.createApp({
    data(){
        return{
            allPic:[
                "./img/大自然風景類/_MG_0403-1.jpg",
                "./img/大自然風景類/3.張仁典-田野風光.jpg",
                "./img/大自然風景類/000006.jpg",
                "./img/大自然風景類/19.張利聰-雙心石滬-2007.jpg",
                "./img/大自然風景類/DSC_1127.JPG",
                "./img/大自然風景類/DSC_4511.JPG",
                "./img/大自然風景類/DSC_5097.JPG",
                "./img/大自然風景類/DSC00406-1.jpg",
                "./img/大自然風景類/DSC01028.JPG",
                "./img/大自然風景類/DSC02068-1.jpg",
                "./img/大自然風景類/DSC03179-1-1.jpg",
                "./img/大自然風景類/DSC06677-1.jpg",
                "./img/大自然風景類/DSC08191-1-1.jpg",
                "./img/大自然風景類/DSC09315.JPG",
                "./img/大自然風景類/DSCF4098.JPG",
                "./img/大自然風景類/F10000020.jpg",
                "./img/大自然風景類/IMG_0105-1.jpg",
                "./img/大自然風景類/IMG_0817-1.jpg",
                "./img/大自然風景類/IMG_7327後.jpg",
            ],
            turnPic:[],
            runPic:[],
            

        };
    },
    methods:{

        rand(n){
			return Math.ceil(Math.random()*n)
		},

        //---------
        set_turnPic(){
            let temp=[];
            for(n=0;n<this.allPic.length;n++){
                temp.push(n);
            };
            this.shuffle(temp);
            return temp;
        },
            shuffle(array) {    //亂數排序
                for (let i = array.length - 1; i > 0; i--) {
                  let j = Math.floor(Math.random() * (i + 1));
                  [array[i], array[j]] = [array[j], array[i]];
                }
            },

        set_runPic(){
            let temp;
            if(this.turnPic.length>=2){
                console.log("tPL=",this.turnPic.length);
                temp=this.turnPic.slice(0,2);
                this.turnPic.splice(0,2)
                console.log("tPL=",this.turnPic.length);
            }else{
                let a=2-this.turnPic.length;
                temp=this.turnPic;
                this.turnPic=this.set_turnPic();
                temp2=this.turnPic.slice(0,a);
                this.turnPic.splice(0,a)
                temp=temp.concat(temp2);
            }
            return temp;
        },
        add_runPic(){
            let temp;
            if(this.turnPic.length>0){
                console.log("tPL=",this.turnPic.length);
                temp=this.turnPic.shift();
                console.log("tPL=",this.turnPic.length);
            }else{
                this.turnPic=this.set_turnPic();
                temp=this.turnPic.shift();
            }
            return temp;
        },
        set_activePic(){
                let parDom=document.querySelector('#theCarousel');
                let actDom=document.querySelector('.carousel-item');
                this.addClass(actDom,"active")

        },
        runCarousel(carouselName){
            setTimeout(()=>{
                var theCarousel = document.querySelector('#'+carouselName);
                console.log(theCarousel);
                var carousel = new bootstrap.Carousel(theCarousel)
                console.log(carousel);
            },1200)
        },
        listen_theCarouseSlid(){    //怪怪的 不是輪播完後
            console.log("hi")
            let theCarousel = document.getElementById('theCarousel');
            theCarousel.addEventListener('slid.bs.carousel', this.set_runPic());
            console.log(this.runPic);

        },
        addClass(element, classToAdd){
            let currentClassValue = element.className;
            if (currentClassValue.indexOf(classToAdd) == -1){
                if((currentClassValue == null) || (currentClassValue === "")){
                    element.className = classToAdd;
                } 
                else 
                {
                    element.className += " " + classToAdd;
        }}},
        removeClass(element, classToRemove) {
            let currentClassValue = element.className;
            if(currentClassValue == classToRemove){
                element.className = "";
            return;}
            let classValues = currentClassValue.split(" ");
            let filteredList = [];
            for (var i = 0 ; i < classValues.length ; i++){
                if(classToRemove != classValues[i]){
                    filteredList.push(classValues[i]);
                }}
            element.className = filteredList.join(" ");
        },
        try(){
            console.log("try")
        },
        rePage(){
            location.reload();
        },
    },

    watch:{


    },

    beforeMount(){
        this.turnPic=this.set_turnPic();
        this.runPic=this.set_runPic();
        // this.set_activePic();
    },
    mounted(){
        setTimeout(()=>{
            this.set_activePic();
        },100)
        setInterval(()=>{
            console.log("hi");
            this.runPic.push(this.add_runPic())
        },4000)
   
    }
})

App.mount('#App')