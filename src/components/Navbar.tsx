export default function () {

    function my_fun () {
        alert("a")
    }

    return (  
        <header>
            <nav id="main">
                <div>
                    <a href="/">
                        <h1 onClick={my_fun}>CM</h1>
                    </a>
                </div>    
                <div>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/shop">Tienda</a></li>
                        <li><a href="/about-us">Sobre Nosotros</a></li>
                    </ul>
                </div>

                <div className="Buttons">
                    <a href="/#location">
                        {/* <Icon name={"map-pin"} size={"36px"} class={"Icon"}/> */}
                    </a>
                </div>
                
            </nav>

        </header>      
    )
}