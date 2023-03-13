import pg from "pg"
import {
  createBookings,
  createUsers,
  createPlaces,
  createImages,
  createSessions
} from "./query.js"
import { autodDeleteBookingRecords } from "../bookingsModel.js"
const { Pool } = pg

const pool = new Pool({
 connectionString:'postgres://signoff:ntw5gLiqsLwj39WreyJ2lQ5OENIhNQqC@dpg-cg7ea5d269v5l617am7g-a.oregon-postgres.render.com/signoff',
 ssl:{rejectUnauthorized:false}
})

async function initDB() {
  // await pool.query('drop table property cascade')
  // await pool.query('drop table images cascade')
  // await pool.query('drop table bookings cascade')

  await pool.query(createPlaces)
  await pool.query(createUsers)
  await pool.query(createSessions)
  await pool.query(createBookings)
  await pool.query(createImages)
  // autodDeleteBookingRecords()
  console.log('db initiated')
}

export { initDB, pool }
