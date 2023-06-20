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
 connectionString:'postgres://signoff:8p6SgdSsbd9pkN63XxG7soQx3vumgvq3@dpg-ci8mk2t9aq0ee2f0rre0-a.oregon-postgres.render.com/signoff_5bi9',
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
