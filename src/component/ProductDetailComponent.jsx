import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom"

const ProductDetailComponent = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://final_project_backend_andhika.test/api/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <p>Product Not Found</p>;
    }

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://final_project_backend_andhika.test/api/products/${id}`);
            alert('Product deleted successfully');
            navigate('/home');
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card border-1 rounded shadow-sm mt-2">
                        <div className="card-body text-center">
                            <h3 className="text-center mb-4">{product.nama}</h3>
                            <div className="text-center">
                                <img src={product.foto} alt={product.nama} height={200} className="mb-3" />
                            </div>
                            <p><strong>Kode:</strong> {product.kode}</p>
                            <p><strong>Qty:</strong> {product.qty}</p>
                            <p><strong>Kategori:</strong> {product.nama_kategori}</p>
                            <NavLink to={'/home'} className="btn btn-md btn-success rounded shadow-sm m-2">Kembali</NavLink>
                            <NavLink to={`/update-product/${product.id}`} className="btn btn-md btn-primary rounded shadow-sm m-2">Update</NavLink>
                            <button onClick={() => deleteProduct(product.id)} className="btn btn-md btn-danger rounded shadow-sm m-2">Hapus</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailComponent;
