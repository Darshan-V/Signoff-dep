import express from "express"
import cors from "cors"
import { initDB } from "./models/config/init.js"
import { routes as signupRouter } from "./routes/signup.js"
import { routes as signinRouter } from "./routes/signin.js"
import { routes as hotelRouter } from "./routes/hotel.js"
import { routes as userRouter } from "./routes/user.js"
import { routes as reservationRouter } from "./routes/reservation.js"
import { routes as LogoutRouter } from "./routes/logout.js"
import {dirname} from 'path'
import { fileURLToPath } from 'url'
import path from 'path'
import { routeSwitch } from "./middleware/switch.js"

const PORT = 8000

const app = express()
app.use(express.json())
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      'http://localhost:4173'
    ],
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  })
)
initDB()

const filePath = dirname(fileURLToPath(import.meta.url))
// console.log(path.join(filePath,'dist'))
app.use(express.static(path.join(filePath, 'dist')))

app.use(routeSwitch(filePath))

app.use("/api", signupRouter)

app.use("/api", hotelRouter)

app.use("/api", userRouter)

app.use("/api", reservationRouter)

app.use("/api", signinRouter)

app.use("/api", LogoutRouter)

app.listen(PORT, () => {
  console.log(`Server running at port:${PORT}`)
})
