import { Server, Socket } from 'socket.io';

import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { PokemonService } from './pokemon.service';

@WebSocketGateway()
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly pokemonService: PokemonService) {}
  private clients: Set<WebSocket> = new Set();

  @SubscribeMessage('send-sprite')
  async sendSprite(@MessageBody() @MessageBody() imageBuffer: Buffer) {
    const pokemonId = Math.floor(Math.random() * 898) + 1; // create ramdon id // TODO obterner todas los url disponibles // generar un random a partir de ese punto
    const sprite = await this.pokemonService.base64img(pokemonId); 
    this.clients.forEach((client) => {
      client.send(JSON.stringify({ image: sprite }));
    });
  }

  handleDisconnect(client: Socket) {
    console.log(`client disconnect: ${client.id}`);
    // throw new Error("Method not implemented.")
  }
  handleConnection(client: Socket, ...args: any[]) {
    console.log(`client connect: ${client.id}`);
    // throw new Error("Method not implemented.")
  }

  @WebSocketServer()
  server: Server;
}
