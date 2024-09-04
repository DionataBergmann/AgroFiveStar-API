import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private messageRepository: Repository<Chat>,
  ) {}

  async saveMessage(user: string, text: string): Promise<Chat> {
    const message = this.messageRepository.create({ user, text });
    return this.messageRepository.save(message);
  }

  async getAllMessages(): Promise<Chat[]> {
    return this.messageRepository.find({
      order: { createdAt: 'ASC' },
    });
  }
}
