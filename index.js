import pgPromise from 'pg-promise';
import express from 'express';
import 'dotenv/config';
//setting up express handlebars
import { engine } from "express-handlebars";

import FuelConsumption from './fuel-consumption.js';
import FuelConsumptionAPI from './fuel-consumption-api.js';

const pgp = pgPromise();

const connectionOptions = {
    connectionString: process.env.DATABASE_URL || 'postgres://fuel:fuel@localhost:5432/fuel_consumption',
    ssl: process.env.NODE_ENV === 'production', // Enable SSL in production
};

const db = pgp(connectionOptions);

const fuelConsumption = FuelConsumption(db);
const fuelConsumptionAPI = FuelConsumptionAPI(fuelConsumption)

const app = express();
const PORT = process.env.PORT || 3000;
//configuring express handlebars
app.engine("handlebars", engine({
    layoutsDir: "./views/layouts"
}));

app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(express.static("public"))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get('/api/vehicles', fuelConsumptionAPI.vehicles);
app.get('/api/vehicle', fuelConsumptionAPI.vehicle);
app.post('/api/vehicle', fuelConsumptionAPI.addVehicle);
app.post('/api/refuel', fuelConsumptionAPI.refuel);
//rending the index page when a user goes to the home route
app.get("/", (req, res) => {
    res.render("index")
})
//rendering the add vehicle page when a user navigates to the /add route
app.get("/add", (req, res) => {
    res.render("add-vehicle")
})
//rending the refuel vehicle page when a user navigates to the /refuel route
app.get("/refuel", (req, res) => {
    res.render("refuel-vehicle")
})

app.listen(PORT, () => console.log(`App started on port: ${PORT}`));

