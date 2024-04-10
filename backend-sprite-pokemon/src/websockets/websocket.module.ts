import { Module } from '@nestjs/common'
import { WebsocketGateway } from './websocket.gateway'
import { PokemonService } from './pokemon.service'

@Module({
    providers: [WebsocketGateway, PokemonService],
})
export class GatewayModule{}