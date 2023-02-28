async function dropTables() {
    console.log("Dropping All Tables...")
    try {
      await client.query(`
    DROP TABLE IF EXISTS users;
    `);
    console.log("finishing dropTables")
    } catch (error) {
      console.error("Error dropping tables!");
      throw error;
    }
    console.log("All Tables Dropped!")
}

// const createTables = async () => {
//   try {
//     console.log("Building Tables");

//     await client.query(`
//         CREATE TABLE customers (
//         id SERIAL PRIMARY KEY,
//         name VARCHAR(255) UNIQUE NOT NULL,
//         password VARCHAR(255) NOT NULL,
//         email VARCHAR(255) UNIQUE NOT NULL,
//         "phoneNumber" VARCHAR(255) UNIQUE NOT NULL,
//         "isAdmin" BOOLEAN DEFAULT false
//         );

//         CREATE TABLE products (
//         id SERIAL PRIMARY KEY,
//         name VARCHAR(255),
//         description VARCHAR(255),
//         category VARCHAR(255),
//         price DECIMAL,
//         image TEXT NOT NULL,
//         quantity INTEGER DEFAULT 1
//         );

//         CREATE TABLE reviews (
//         id SERIAL PRIMARY KEY,
//         name VARCHAR(255),
//         description VARCHAR(255),
//         rating INTEGER,
//         "userId" INTEGER REFERENCES customers(id)
//         );

//         CREATE TABLE orders (
//         id SERIAL PRIMARY KEY,
//         "userId" INTEGER REFERENCES customers(id),
//         total DECIMAL,
//         "salesTax" DECIMAL,
//         "isActive" BOOLEAN DEFAULT true
//         );

//         CREATE TABLE orderProducts (
//         id SERIAL PRIMARY KEY,
//         "orderId" INTEGER REFERENCES orders(id),
//         "productId" INTEGER REFERENCES products(id),
//         quantity INTEGER,
//         UNIQUE ("orderId", "productId")
//         );

//         CREATE TABLE customerReviews (
//         id SERIAL PRIMARY KEY,
//         "userId" INTEGER REFERENCES customers(id) NOT NULL,
//         "reviewId" INTEGER REFERENCES reviews(id) NOT NULL
//         );

//         `);

//     console.log("Tables built");
//   } catch (error) {
//     console.error("Error building tables");
//     throw error;
//   }
// };