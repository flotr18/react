const ClassName = {
    container : 'container-fluid',
    row : 'row',
    header : 'col-12 header',
    header_title : 'header_title mt-5 text-center',
    image : './logo.png', // link,
    logo : 'logo mx-auto',

    main : 'col-12 main',
    main_title : 'main_title mt-5 text-center',

    footer : 'col-12 footer',
    footer_title : 'footer_title mt-5 text-center'


}

function Header(){


       return   <div className={ClassName.container}>
                   <div className={ClassName.row}>
                       <div className={ClassName.header}>
                            <h1 className={ClassName.header_title}>HELLO REACT ! </h1>
                           <img src={ClassName.image} alt="logo"  className={ClassName.logo}/>
                       </div>
                   </div>
           </div>


}


function Main(){

        return <div className={ClassName.container}>
                    <div className={ClassName.row}>
                        <div className={ClassName.main}>
                            <h1 className={ClassName.main_title}>MAIN PART ! </h1>
                        </div>


                    </div>
        </div>

}


function Footer(props){
    return <div className={ClassName.container}>
        <div className={ClassName.row}>
            <div className={ClassName.footer}>
                <h1 className={ClassName.footer_title}>{props.footer}</h1>
            </div>


        </div>
    </div>
}


ReactDOM.render(
    < Header />,
    document.getElementById('header')
)

ReactDOM.render(
    < Main />,
    document.getElementById('main')
)

ReactDOM.render(
    < Footer footer="Footer Part ! " />,
    document.getElementById('footer')
)