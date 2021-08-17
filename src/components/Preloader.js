import preloader from "../images/preloader.gif";

const Preloader = () => {
    return (
        <div className="preloader">
            <p className="preloader__text">Загружаю...</p>
            <img className="preloader__image" src={preloader}/>
        </div>
    )
}

export default Preloader;