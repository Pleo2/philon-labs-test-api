"use client"
import { io } from 'socket.io-client';
const PORT = process.env.PORT ?? 1234

export const socket = io(`http://localhost:${PORT}`);
