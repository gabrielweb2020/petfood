import './styles.css';

const Petshop = () => {
    return (
        <li className="petshop d-inline-block">
            <div className="d-inline-block">
                <img 
                    src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png" 
                    class="img-fluid" 
                />
                <div className="d-inline-block pl-3 align-bottom">
                    <b>PetLove</b>
                    <div className="petshop-infos">
                        <span className="mdi mdi-star"></span>
                        <text>
                            <b>2,8</b>
                        </text>
                        <span className="mdi mdi-cash-usd-outline"></span>
                        <text>
                            <b>$$$</b>
                        </text>
                        <span className="mdi mdi-crosshairs-gps"></span>
                        <text>
                            <b>2,9km</b>
                        </text>
                    </div>
                    <div className="badge badge-primary">Frete Grátis</div>
                </div>
            </div>
        </li>
    );
};

export default Petshop;