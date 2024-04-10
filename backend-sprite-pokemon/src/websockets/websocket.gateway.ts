import { Server, Socket } from 'socket.io';

import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody
} from '@nestjs/websockets';
import { PokemonService } from './pokemon.service';

@WebSocketGateway()
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly pokemonService: PokemonService) {}

  @SubscribeMessage('get-sprite')
  async getSprite(@MessageBody() data: any): Promise<any> {
    const pokemonId = Math.floor(Math.random() * 898) + 1;
    const sprite = await this.pokemonService.getSprite(pokemonId);
    console.log(sprite)
    return sprite;
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
