/* Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators. */

const concat = (a, b) => {
  return [...a, ...b];
}; // Implementation here.

/* Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método Array.prototype.concat. */

const concat2 = (...args) => {
  let resultado = [];

  for (const arr of args) {
    resultado = [...resultado, ...arr];
  }

  return resultado;
};
