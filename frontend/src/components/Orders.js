import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Select,
  MenuItem,
} from "@mui/material";
import Sidebar from "./Sidebar";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    // Fetch products
    axios
      .get("http://localhost:9999/getorders")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  const handleEdit = (productId) => {
    console.log("Edit product with ID: " + productId);
  };

  const handleDelete = (productId) => {
    console.log("Delete product with ID: " + productId);
    axios
      .delete(`http://localhost:9999/product/delete/${productId}`)
      .then((response) => {
        console.log("Product deleted successfully");
        const updatedProducts = products.filter(
          (product) => product._id !== productId
        );
        setProducts(updatedProducts);
      })
      .catch((error) => {
        console.error("Error deleting product: " + error);
      });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleStatusChange = (event, productId) => {
    const { value } = event.target;
    const updatedProducts = products.map((product) =>
      product._id === productId ? { ...product, status: value } : product
    );
    setProducts(updatedProducts);
  };

  const handleSaveStatus = (productId) => {
    const productToUpdate = products.find((product) => product._id === productId);
    if (productToUpdate) {
      axios
        .put(`http://localhost:9999/updatestatus/${productId}`, { shipmentStatus: productToUpdate.status })
        .then((response) => {
          console.log("Shipment status updated successfully:", response.data);
          // Optionally update state or provide feedback to user
        })
        .catch((error) => {
          console.error("Error updating shipment status:", error);
          // Handle error appropriately
        });
    }
  };

  return (
    <div>
      <Sidebar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div style={{ width: "800px" }}>
          <TableContainer component={Paper}>
            <Table style={{ tableLayout: "fixed" }}>
              <TableHead>
                <TableRow>
                  <TableCell>Payment ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((product) => (
                    <TableRow key={product._id}>
                      <TableCell>{product.payment_id}</TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.phone}</TableCell>
                      <TableCell>{product.amount}</TableCell>
                      <TableCell>
                        <Select
                          value={product.status || ""}
                          onChange={(e) => handleStatusChange(e, product._id)}
                        >
                          <MenuItem value="packed">Packed</MenuItem>
                          <MenuItem value="dispatched">Dispatched</MenuItem>
                          <MenuItem value="out for delivery">Out for Delivery</MenuItem>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          onClick={() => handleSaveStatus(product._id)}
                        >
                          Save
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <TablePagination
          component="div"
          count={products.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default ProductTable;
