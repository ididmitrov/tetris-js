import * as express from "express";
import { Event, IEvent } from "../schema/events";
import { createEvent } from "../services/events-service";
export const EventsRouter = express.Router();
const pageSize = 20;

try {
  EventsRouter.get("/all", async (req, res) => {
    const { currentPage } = req.body;
    const take = currentPage * pageSize;
    const skip = take - pageSize;

    const count = await Event.find().countDocuments();
    const totalPages = Math.ceil(count / pageSize);
    const events: IEvent[] = await Event.find().skip(skip).limit(pageSize);
    res.status(200).send({ events, totalPages });
  });
  EventsRouter.post("/create", async (req, res) => {
    const event: IEvent = await createEvent(req.body);
    res
      .status(200)
      .json({ msg: "event created succesfully", eventId: event._id });
  });
  EventsRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    const event: IEvent = await Event.findById(id);
    res.send(event);
  });
} catch (err) {
  console.log(err);
}
