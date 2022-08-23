import { Publisher, Subjects, TicketUpdatedEvent } from '@gamdev/ticketing-common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}