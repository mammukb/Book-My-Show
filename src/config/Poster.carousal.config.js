

const settings = {
    infinite : true ,
    autoplay : true ,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide : 0,
    responsive : [
        {
            breakpoint :1024,
            settings :{
                slidesToShow :3,
                slidesToScroll : 3
            }
        },
        {
            breakpoint :400,
            settings :{
                slidesToShow :1,
                slidesToScroll : 1
            }
        },
        {
            breakpoint :600,
            settings :{
                slidesToShow :2,
                slidesToScroll : 2
            }
        },


    ]


    }

    export default settings;