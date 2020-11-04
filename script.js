const ClassName = {
    container : 'container-fluid',
    row : 'row',
    header : 'col-12 header',
    title : 'title mt-5 text-center',
    image : './logo.png', // link,
    logo : 'logo mx-auto'

}

class Header extends React.Component{

    render () {
       return   <div className={ClassName.container} >
                   <div className={ClassName.row}>
                       <div className={ClassName.header}>
                            <h1 className={ClassName.title}>HELLO REACT ! </h1>
                           <img src={ClassName.image} alt="logo"  className={ClassName.logo}/>
                       </div>
                   </div>
           </div>

    }
}


ReactDOM.render(
    < Header />,
    document.getElementById('header')
)