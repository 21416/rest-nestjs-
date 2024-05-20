import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class DatabaseService {
  private client: MongoClient;

  constructor() {
    this.connect();
  }

  private async connect() {
    try {
      this.client = await MongoClient.connect(
        'mongodb://dev-qa-mongo:2dFhPX76dAhd42Wx8@103.189.172.30:27017/tata_db_8301?authSource=admin',
      );
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
    }
  }

  getDb() {
    return this.client.db('tata_db_8301');
  }
}
