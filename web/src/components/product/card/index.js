import './styles.css';

const Product = () => {
    return (
        <div className="product col-3">
            <img 
                src="https://cobasi.vteximg.com.br/arquivos/ids/206370-1000-1000/1.jpg" 
                className="img-fluid align-center" 
            /> 
            <button className="btn btn-primary rounded-circle">+</button>
            <h4>
                <label class="badge badge-primary">R$ 90,00</label>
            </h4>
            <small>
                <b>Ração Magnus Todo Dia Sabor Carne Para Cães Adultos - 15 Kg</b>
            </small>
        </div>
    );
};

export default Product;