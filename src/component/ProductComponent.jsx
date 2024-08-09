import { useState, useEffect } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom";

const ProductComponent = () => {
    // buat state product
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllData();
    }, [])

    // fungsi untuk ambil data dari api
    const getAllData = async () => {

        const result = await axios.get("http://final_project_backend_andhika.test/api/products");

        setProducts(result.data);

        console.log(result.data);
    }
    return (
        <div className="container my-2">
            <div className="py-3 px-3">
                <h2 className="text-center py-2 bg-light">Data Product</h2>
                <div className="row">
                    {products.map((product, index) => (
                        <div className="col-md-3" key={index}>
                            <div className="card border-1 rounded shadow-sm mt-2">
                                <div className="card-body text-center">
                                    <h4 className="mb-3 text-center">{product.nama}</h4>
                                    <img src={product.foto} alt={product.nama} height={140} className="mx-auto d-block" />
                                    <br />
                                    <NavLink to={`/product/${product.id}`} className="btn btn-md btn-success rounded shadow-sm mb-3">Lihat Detail</NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductComponent
