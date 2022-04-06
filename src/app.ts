import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client'
import routes from './routes'

const app = express();

app.use(express.urlencoded({
    extended: true
  }));

  app.use(express.json())
  app.use(cors());
  app.use('/', routes)
  app.get('/', (req, res) => {
    res.send('Events microservice has been started');
  })

const port = process.env.PORT !== undefined ? parseInt(process.env.PORT) : 3000;

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

const prisma = new PrismaClient()

async function main() {
  console.log("Events Microservice has been started!");

  // await prisma.event.create({
  //   data: {
  //     eventName: "Running in heels",
  //     date: new Date(2017, 2, 7),
  //     goal:"Build strenght",
  //     description:"4km run ",
  //     startingLocation:"Piazza"
  // },
  // })

  // const allUsers = await prisma.event.findMany()
  // console.dir(allUsers, { depth: null })
  
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })