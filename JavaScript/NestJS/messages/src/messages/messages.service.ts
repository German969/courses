import { Injectable } from '@nestjs/common';
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService {
  // messagesRepo: MessagesRepository;

  constructor(public messagesRepo: MessagesRepository) {
    // Service is creating its own dependencies
    // Dont do this
    // this.messagesRepo = new MessagesRepository();
  }

  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  async findAll() {
    return this.messagesRepo.findAll();
  }

  async create(content: string) {
    return this.messagesRepo.create(content);
  }
}