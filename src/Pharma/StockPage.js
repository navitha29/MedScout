import React from 'react';
import './StockPage.css';

const products = [
  { 
    name: 'Aspirin', 
    category: 'Pain Relief', 
    sku: 'AS-101', 
    quantity: '100', 
    cost: '₹10.00', 
    price: '₹15.00', 
    status: 'Active', 
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/330506870/UM/GZ/QO/135658020/aspirin-dispersible-tablets.jpg'
  },
  { 
    name: 'Paracetamol', 
    category: 'Pain Relief', 
    sku: 'PA-202', 
    quantity: '200', 
    cost: '₹12.00', 
    price: '₹18.00', 
    status: 'Active', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRZ7OJLFc6xnOAtowHLTSPtSTxsz3zP8lHw&s'
  },
  { 
    name: 'Vomidin', 
    category: 'Anti-Emetic', 
    sku: 'VO-303', 
    quantity: '150', 
    cost: '₹15.00', 
    price: '₹20.00', 
    status: 'Active', 
    image: 'https://www.pharmahopers.com/assets/images/products/ca633-VOMIDIN-TAB..jpg'
  },
  { 
    name: 'Dolo 650', 
    category: 'Pain Relief', 
    sku: 'DO-404', 
    quantity: '250', 
    cost: '₹20.00', 
    price: '₹25.00', 
    status: 'Active', 
    image: 'https://images.apollo247.in/pub/media/catalog/product/d/o/dol0026_1-.jpg'
  },
  { 
    name: 'Cefixime', 
    category: 'Antibiotic', 
    sku: 'CE-505', 
    quantity: '300', 
    cost: '₹30.00', 
    price: '₹35.00', 
    status: 'Active', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4dxR-DR7jcA4oyAoscs6ocjvtbxBkAeSWw&s'
  },
  { 
    name: 'Ibuprofen', 
    category: 'Pain Relief', 
    sku: 'IB-606', 
    quantity: '400', 
    cost: '₹25.00', 
    price: '₹30.00', 
    status: 'Active', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxSNokF_9UB7yrXhB1ICZwC9ilwAUrYReDdA&s'
  },
  { 
    name: 'Ebast', 
    category: 'Antihistamine', 
    sku: 'EB-707', 
    quantity: '500', 
    cost: '₹18.00', 
    price: '₹23.00', 
    status: 'Active', 
    image: 'https://m.media-amazon.com/images/I/717IcTsyiTL._AC_UF1000,1000_QL80_.jpg'
  },
  { 
    name: 'Pantaprazole', 
    category: 'Acid Reducer', 
    sku: 'PA-808', 
    quantity: '600', 
    cost: '₹22.00', 
    price: '₹28.00', 
    status: 'Active', 
    image: 'https://m.media-amazon.com/images/I/717IcTsyiTL._AC_UF1000,1000_QL80_.jpg'
  },
  { 
    name: 'Albendazole', 
    category: 'Anthelmintic', 
    sku: 'AL-909', 
    quantity: '700', 
    cost: '₹35.00', 
    price: '₹40.00', 
    status: 'Active', 
    image: 'https://onemg.gumlet.io/l_watermark_346,w_480,h_480,c_fit,q_auto,f_auto/e3757c6edba44bbebabe1279ade6ab9d.jpg'
  }
];

const StockPage = () => {
  return (
    <div className="stock-body">
      <div className="stock-section">
        <div className="header">
          <h1>Manage Products</h1>
          <div>
            <button>Create Category</button>
            <button>Add New Product</button>
          </div>
        </div>
        <div className="filters">
          <input type="text" placeholder="Search products" />
          <select>
            <option>Category</option>
            <option>Price</option>
          </select>
        </div>
        <table className="product-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Product Name</th>
              <th>Category</th>
              <th>SKU</th>
              <th>Quantity</th>
              <th>Cost</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td className="product-name">
                  <img src={product.image} alt={product.name} />
                  {product.name}
                </td>
                <td>{product.category}</td>
                <td>{product.sku}</td>
                <td>{product.quantity}</td>
                <td>{product.cost}</td>
                <td>{product.price}</td>
                <td><span className="status-active">{product.status}</span></td>
                <td className="actions">
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockPage;
