import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormTambah = () => {
    const [nama, setNama] = useState("");
    const [kode, setKode] = useState("");
    const [qty, setJumlah] = useState("");
    const [foto, setFoto] = useState(null);
    const [category_id, setCategoryId] = useState("");
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get("http://final_project_backend_andhika.test/api/categories");
            setCategories(response.data);
        };

        fetchCategories();
    }, []);

    const saveProduct = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nama', nama);
        formData.append('kode', kode);
        formData.append('qty', qty);
        formData.append('foto', foto);
        formData.append('category_id', category_id);

        try {
            await axios.post("http://final_project_backend_andhika.test/api/products", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            alert("Data berhasil disimpan");
            navigate("/");
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
            } else {
                console.error('Error message:', error.message);
            }
        }
    };

    return (
        <div className="container">
            <div className="row my-5 shadow px-3 py-3" style={{ 'width': '80%', 'margin': '30px auto' }}>
                <h2 className="text-center">FORM TAMBAH DATA</h2>
                <hr />

                <div className="row" style={{ 'margin': 'auto' }}>
                    <form onSubmit={saveProduct}>
                        <div className="mb-3 row">
                            <label htmlFor="category_id" className="col-sm-3 col-form-label">Kategori Produk</label>
                            <div className="col-sm-9">
                                <select className="form-control" value={category_id} onChange={(e) => setCategoryId(e.target.value)}>
                                    <option value="">Pilih Kategori</option>
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>
                                            {category.nama_kategori}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="namaProduk" className="col-sm-3 col-form-label">Nama Produk</label>
                            <div className="col-sm-9">
                                <input type="text" id="namaProduk" className="form-control" value={nama} onChange={(e) => setNama(e.target.value)} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="kodeBarang" className="col-sm-3 col-form-label">Kode Barang</label>
                            <div className="col-sm-9">
                                <input type="number" id="kodeBarang" className="form-control" value={kode} onChange={(e) => setKode(e.target.value)} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="qty" className="col-sm-3 col-form-label">Qty</label>
                            <div className="col-sm-9">
                                <input type="number" id="qty" className="form-control" value={qty} onChange={(e) => setJumlah(e.target.value)} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="foto" className="col-sm-3 col-form-label">Foto</label>
                            <div className="col-sm-9">
                                <input type="file" id="foto" className="form-control" onChange={(e) => setFoto(e.target.files[0])} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-9 offset-sm-3">
                                <button type="submit" className="btn btn-info">SUBMIT</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormTambah;
