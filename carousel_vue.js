
const App=Vue.createApp({
    data(){
        return{
            allPic:[

                "./img/大自然風景類/_MG_0403-1.jpg",
                "./img/大自然風景類/000006.jpg",
                "./img/大自然風景類/19.張利聰-雙心石滬-2007.jpg",
                "./img/大自然風景類/3.張仁典-田野風光.jpg",
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
                "./img/大自然風景類/IMG_8458-1.jpg",
                "./img/大自然風景類/IMG_9656-1.jpg",
                "./img/大自然風景類/IMG_9682-2.jpg",
                "./img/大自然風景類/P8170023.JPG",
                "./img/大自然風景類/PICT0158.jpg",
                "./img/大自然風景類/大自然1.jpg",
                "./img/大自然風景類/太平36灣.jpg",
                "./img/大自然風景類/日出.jpg",
                "./img/大自然風景類/合掌村.jpg",
                "./img/大自然風景類/百岳-張利聰-合歡群峰.jpg",
                "./img/大自然風景類/金瓜石.jpg",
                "./img/大自然風景類/南方澳漁港夜景-張利聰-南方澳-2020.01.18.jpg",
                "./img/大自然風景類/洪秀卿-落日餘暉.jpg",
                "./img/大自然風景類/倒影.jpg",
                "./img/大自然風景類/張利聰-木棉道之夜.jpg",
                "./img/大自然風景類/張利聰-伴遊木棉道.jpg",
                "./img/大自然風景類/張利聰-赤科山金針花海.jpg",
                "./img/大自然風景類/張利聰-相得益彰.jpg",
                "./img/大自然風景類/張利聰-倒影之美.jpg",
                "./img/大自然風景類/張利聰-蘭潭風華.jpg",
                "./img/大自然風景類/造景之美.jpg",
                "./img/大自然風景類/越南之美.jpg",
                "./img/大自然風景類/微笑天梯.jpg",
                "./img/大自然風景類/憶阿里山神木-張利聰.jpg",
                "./img/大自然風景類/樹的愛.jpg",
                "./img/大自然風景類/櫻花.jpg",
                "./img/大自然風景類/鐵軌之美.jpg",

                "./img/生命教育類/_DSC4602.JPG",
                "./img/生命教育類/_DSC4924.JPG",
                "./img/生命教育類/_DSC4986.JPG",
                "./img/生命教育類/04.jpg",
                "./img/生命教育類/1.張仁典-823砲戰勝利紀念碑.JPG",
                "./img/生命教育類/17.jpg",
                "./img/生命教育類/4.IMG_5756.jpg",
                "./img/生命教育類/DSC_0755.JPG",
                "./img/生命教育類/DSC_0761.JPG",
                "./img/生命教育類/DSC_7110.JPG",
                "./img/生命教育類/DSC_9112.JPG",
                "./img/生命教育類/DSC0511-1.jpg",
                "./img/生命教育類/DSC06704後.jpg",
                "./img/生命教育類/DSC07709-1.jpg",
                "./img/生命教育類/P7021925.jpg",
                "./img/生命教育類/P8032833.JPG",
                "./img/生命教育類/PICT0901.JPG",
                "./img/生命教育類/中寮鄉公所遭震損毀.jpg",
                "./img/生命教育類/民雄鄉金世界社區水患.jpg",
                "./img/生命教育類/東星大樓遭震倒塌.jpg",
                "./img/生命教育類/動物.jpg",
                "./img/生命教育類/喘息.jpg",
                "./img/生命教育類/等待.jpg",
                "./img/生命教育類/照片 176-1.jpg",
                "./img/生命教育類/照片 180-2.jpg",
                "./img/生命教育類/照片 182-3.jpg",
                "./img/生命教育類/照片 187.jpg",
                "./img/生命教育類/照片 189-6.jpg",
                "./img/生命教育類/鞋子之美.jpg",
                "./img/生命教育類/貓的眼神.jpg",
                "./img/生命教育類/躦轎底保平安-張利聰.jpg",

                "./img/生活環境類/6-1廟會-張利聰.jpg",
                "./img/生活環境類/6-3廟會-張利聰.jpg",
                "./img/生活環境類/6-6廟會-張利聰.jpg",
                "./img/生活環境類/DSC_3341-1.jpg",
                "./img/生活環境類/DSC00374-1.jpg",
                "./img/生活環境類/DSC00864-1.jpg",
                "./img/生活環境類/DSC01107-1.jpg",
                "./img/生活環境類/油桐花.jpg",
                "./img/生活環境類/花.jpg",
                "./img/生活環境類/花之美.jpg",
                "./img/生活環境類/風景1.jpg",
                "./img/生活環境類/飛機的彩虹.jpg",
                "./img/生活環境類/高永昌-綠繡眼育雛.jpg",
                "./img/生活環境類/張仁典-蝶戀花(1).jpg",
                "./img/生活環境類/農場之美.jpg",
                "./img/生活環境類/彰化火車頭而.jpg",
                "./img/生活環境類/管樂節.jpg",
                "./img/生活環境類/噴水池.jpg",
                "./img/生活環境類/螢火蟲的聚集.jpg",
                "./img/生活環境類/鹽田.jpg",

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
                this.addClass(actDom,"animate__animated")
                // this.addClass(actDom,"animate__fadeOutRight")
                this.addClass(actDom,"animate__fadeInLeft")

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
            // console.log("hi");
            this.runPic.push(this.add_runPic());
            let temp=document.querySelector("#theCarousel .active");
            this.addClass(temp,"animate__fadeOutRight")
            setTimeout(()=>{
            temp.style.display="none";
            this.runPic.shift();
            this.removeClass(temp,"animate__fadeOutRight")
            },700)
            setTimeout(()=>{
                this.removeClass(temp,"animate__fadeOutRight")
                temp.style.display="block";
            //     this.addClass(temp,"animate__fadeInDown")
            },750)
        },4500)
   
    }
})

App.mount('#App')