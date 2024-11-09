import { useEffect, useState } from "react";
import instance from "../../../services/apis";
import formDataPostConfig from "../../../services/abc";
import { toast } from "react-toastify";

const AddPro = () => {
  const [name, setName] = useState<string>("");
  const [img, setImg] = useState<File | null>(null);
  const [price, setPrice] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [cateValue, setCateValue] = useState<string>("");
  const [categories, setCategories] = useState<any[]>([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const category = categories.find(cat => cat.name === cateValue);
    if (!category) return;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', desc);
    formData.append('categoryId', category._id);
    if (img) {
      formData.append('image', img);
    }

    try {
      await instance.post('/api/products', formData,
      { headers: {
        'Content-Type': 'multipart/form-data'
      }});
      const notify = () => toast.success(`Thêm thành công sản phẩm`);
      notify()
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      setImg(file);
      console.log(file);
    }
  };

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await instance.get('/api/categorys');
        if (data && data.data && data.data.length > 0) {
          // Gán tất cả các cate vào state
          setCategories(data.data);
          // Set default category value
          setCateValue(data.data[0].name);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="">
      <div className="container mt-5">
        <h1 className="text-center mb-4">Add Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">Name</label>
            <input onChange={(e: any) => setName(e.target.value)} type="text" className="py-3 form-control" id="productName" name="productName" required />
          </div>
          <div className="mb-3">
            <label htmlFor="productImage" className="form-label">Image</label>
            <input
              type="file"
              onChange={handleChange}
              className="my-3 form-control"
              id="productImage"
              name="productImage"
              required
            />          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">Price</label>
            <input type="number" onChange={(e: any) => setPrice(e.target.value)} className="py-3 form-control" id="productPrice" name="productPrice" required />
          </div>
          <div className="mb-3">
            <label htmlFor="productDescription" className="form-label">Description</label>
            <textarea className="py-3 form-control" onChange={(e: any) => setDesc(e.target.value)} id="productDescription" name="productDescription" rows={3} required></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <select id="category" value={cateValue} onChange={(e: any) => setCateValue(e.target.value)} className="form-control">
              {categories.map((category: any) => (
                <option key={category._id} value={category.name}>{category.name}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="py-3 mt-3  btn btn-primary">Add Product</button>
        </form>
      </div>
    </main>
  );
}

export default AddPro;
