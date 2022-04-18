import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import routes from './routes';
// import amqp from "amqplib/callback_api";

const app = express();

app.use(express.urlencoded({
  extended: true,
}));

app.use(express.json());
app.use(cors());
app.use('/', routes);
app.get('/', (req, res) => {
  res.send('Events microservice has been started, new');
});

const port = process.env.PORT !== undefined ? parseInt(process.env.PORT, 10) : 3002;

app.listen(port, () => console.log(`Express is listening at http://localhost:${port}`));

const prisma = new PrismaClient();

async function main() {
  console.log('Events Microservice has been started!');

  // const CONN_URL = 'amqp://guest:guest@rabbitmq:5672';
  // amqp.connect(CONN_URL, function (err, conn) {
  //   conn.createChannel(function (err, ch) {
  //     ch.consume('example', function (msg) {
  //       console.log('.....');
  //       setTimeout(function(){
  //         if(msg){
  //         console.log("Message:", msg.content.toString());
  //         ch.ack(msg);
  //         }
  //       },4000);
  //       },{ noAck: true }
  //     );
  //   });
  // });
  await prisma.event.create({
    data: {
      eventName: 'Running in heels',
      date: '12-12-2020',
      goal: 'Build strenght',
      description: '4km run ',
      startingLocation: 'Piazza',
    },
  });

  const allUsers = await prisma.event.findMany();
  console.dir(allUsers, { depth: null });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
