import React, { useState, useEffect } from "react";
import instance from "../../../services/apis";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditPro = () => {
  const { _id } = useParams();
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [cateValue, setCateValue] = useState("");
  const [categories, setCategories] = useState<any>();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await instance.get(`/api/products/${_id}`);
        if (data && data.datas) {
          const { name, price, description, categoryId, image } = data.datas;
          setName(name);
          setPrice(price);
          setDesc(description);
          setCateValue(categoryId);
          setImg(image);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, [_id]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await instance.get("/api/categorys");
        if (data && data.data && data.data.length > 0) {
          setCategories(data.data);
          setCateValue(data.data[0]._id); // Set default category value
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [categories]); // <-- Include categories in the dependency array

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", desc);
    formData.append("categoryId", cateValue);
    if (img) {
      formData.append("image", img);
    }

    try {
      await instance.put(`/api/products/${_id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccessMessage("Product updated successfully!");
      const notify = () => toast.success(`Upadate thành công sản phẩm`);
      notify

    } catch (error) {
      setErrorMessage("Error updating product. Please try again later.");
      console.error("Error updating product:", error);
    }
  };

  const handleChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImg(file);
    }
  };

  return (
    <main className="">
      <div className="container mt-5">
        <h1 className="text-center mb-4">Edit Product</h1>
        <form onSubmit={handleSubmit}>
          {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="py-3 form-control"
              id="productName"
              name="productName"
              required
              value={name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productImage" className="form-label">
              Image
            </label>
            <input
              type="file"
              onChange={handleChange}
              className="my-3 form-control"
              id="productImage"
              name="productImage"
            />
            {img && (
              <img
                src={`http://localhost:8088/api/products/image/${img}`}
                alt="Product"
                style={{ maxWidth: "100px", marginTop: "10px" }}
              />
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Price
            </label>
            <input
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              className="py-3 form-control"
              id="productPrice"
              name="productPrice"
              required
              value={price}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productDescription" className="form-label">
              Description
            </label>
            <textarea
              className="py-3 form-control"
              onChange={(e) => setDesc(e.target.value)}
              id="productDescription"
              name="productDescription"
              rows={3}
              required
              value={desc}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <select id="category" value={cateValue} onChange={(e: any) => setCateValue(e.target.value)} className="form-control">
              {categories && categories.map((category: any) => (
                <option key={category._id} value={category._id}>{category.name}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="py-3 mt-3 btn btn-primary"
          >
            Update Product
          </button>
        </form>
      </div>
    </main>
  );
};

export default EditPro;
