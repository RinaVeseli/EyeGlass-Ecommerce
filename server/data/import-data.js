const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Brand = require('./../model/brandModel');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log(con.connections);
    console.log('DB connection successful!');
  });

//Read JSON file
const brands = JSON.parse(
  fs.readFileSync(`${__dirname}/brands.json`, 'utf-8')
);

//Import data into database
const importData = async () => {
  try {
    await Brand.create(brands);
    console.log('Data successfully imported');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

//Delete data from database

const deleteData = async () => {
  try {
    await Brand.deleteMany({});
    console.log('Data successfully deleted');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
