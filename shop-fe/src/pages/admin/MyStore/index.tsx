import { useEffect, useState } from "react";
import Iproducts from "../../../interfaces";
import instance from "../../../services/apis";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyStore = () => {
  const [products, setProducts] = useState<Iproducts[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/api/products");
      console.log(data.datas);
      setProducts(data.datas);
    })();
  }, []);

  const handleDelete = async (id: any) => {
    const { data } = await instance.delete(`/api/products/${id}`);
    const notify = () =>
      toast.success(`Xóa thành công sản phẩm: ${data.datas.name}`);
    const newPro = products.filter((product) => product._id !== id);
    setProducts(newPro);
    notify();
  };

  return (
    <div className=" my-5">
      <h1 className="text-center">Product list</h1>
      <div className="table-responsive">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col" className="px-4">
                STT
              </th>
              <th scope="col" className="px-4">
                Title
              </th>
              <th scope="col" className="px-4">
                Image
              </th>
              <th scope="col" className="px-4">
                Price
              </th>
              <th scope="col" className="px-4">
                Description
              </th>
              <th scope="col" className="px-4">
                Category
              </th>
              <th scope="col" className="px-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => (
              <tr className="align-middle" key={index}>
                <td className="px-4">{index}</td>
                <td className="px-4">{p.name}</td>
                <td className="px-4">
                  <img
                    width={100}
                    height={100}
                    src={`http://localhost:8088/api/products/image/${p.image}`}
                  />
                </td>
                <td className="px-4">{p.price}</td>
                <td className="px-4">{p.description}</td>
                <td className="px-4">{p.category}</td>
                <td className="px-4">
                  <div
                    className="d-grid gap-2"
                    role="group"
                    aria-label="Product actions"
                  >
                    <Link to={`/admin/editpro/${p._id}`}>
                      <button className="btn btn-success w-100">Update</button>
                    </Link>
                    <Link to={`/admin/details/${p._id}`}>
                      <button className="btn btn-primary w-100">Details</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyStore;
