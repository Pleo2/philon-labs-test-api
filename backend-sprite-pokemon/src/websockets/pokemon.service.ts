import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PokemonService {
  async getSpriteUrl(id: number): Promise<string> {
    const data = await fetch(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    );
    return data.url;
  }

  async downloadImage(url: string): Promise<Buffer> {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
    });
    const imageBuffer = Buffer.from(response.data, 'binary');
    return imageBuffer;
  }

  async base64img(id: number) {
    const url = await this.getSpriteUrl(id)
    const image = await this.downloadImage(url)
    const imageBase64 = Buffer.from(image).toString('base64')
    return imageBase64
  }
}
