import { QUESTIONS } from "./questions.js";
import { db } from "./firebase.js";
import {
    shuffle,
    randomCode,
    uid,
    sleep,
    copy,
    capitalize
} from "./utils.js";

import {
    playCorrect,
    playWrong,
    confettiExplosion,
    rainExplosion
} from "./effects.js";

// TODO:
// Toda a lógica do jogo ficará aqui.
// Salas
// Técnicos
// Jogadores
// Perguntas
// Cronômetro
// Melhor de 3
// Pontuação
// Firebase
// etc.
