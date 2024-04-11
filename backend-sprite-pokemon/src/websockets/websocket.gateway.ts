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
import { allowedOrigins } from 'src/config/allowedorigins';
const clients = {}
// this the port where the websocket, it's running
@WebSocketGateway(1234, {
  cors: { origin: allowedOrigins}
})
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly pokemonService: PokemonService) {}

  @SubscribeMessage('send-sprite')
  async sendSprite(@MessageBody() imageBuffer: Buffer) {
    const pokemonId = Math.floor(Math.random() * 898) + 1; // create ramdon id // TODO obterner todas los url disponibles // generar un random a partir de ese punto
    const sprite = await this.pokemonService.base64img(pokemonId); 


    this.server.emit("sprite", sprite)
  }

  handleDisconnect(client: Socket) {
    console.log(`client disconnect: ${client.id}`)
  }
  handleConnection(client: Socket, ...args: any[]) {
    console.log(`client connected: ${client.id}`)
  }

  @WebSocketServer()
  server: Server;
}
