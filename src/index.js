import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ status: "Backend running" });
});

// Vendors (mock for now)
app.get("/vendors", (req, res) => {
  res.json([
    { id: 1, name: "ABC Laundry", active: true },
    { id: 2, name: "Quick Clean", active: false }
  ]);
});

// Orders (mock for now)
app.get("/orders", (req, res) => {
  res.json([
    { id: 101, vendor: "ABC Laundry", status: "Picked Up", value: 250 },
    { id: 102, vendor: "Quick Clean", status: "In Processing", value: 180 }
  ]);
});

// Dashboard summary
app.get("/summary", (req, res) => {
  res.json({
    totalOrdersToday: 2,
    totalRevenueToday: 430,
    pendingOrders: 1
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
