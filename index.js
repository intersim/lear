#!/usr/bin/env node

const quotes = [
  "My love's more richer than my tongue.",
  "Nothing will come of nothing.",
  "Love is not love When it is mingled with regards that stand Aloof from the entire point.",
  "How sharper than a serpent's tooth it is to have a thankless child!",
  "Striving to better, oft we mar what's well",
  "Have more than thou showest, speak less than thou knowest, lend less than thou owest.",
  "I am a man more sinned against than sinning.",
  "The worst is not, So long as we can say, 'This is the worst'.",
  "You are not worth the dust which the rude wind Blows in your face.",
  "When we are born, we cry that we are come To this great stage of fools.",
  "Reason in madness!"]

const idx = Math.floor(Math.random() * quotes.length);

console.log(quotes[idx]);
