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
 connectionString:'postgres://signoff:CbKmUAjKWGzyHRknrLBqq1ODMek1qoUS@dpg-ci8m0398g3n3vm5o7j6g-a.oregon-postgres.render.com/signoff_su01',
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
