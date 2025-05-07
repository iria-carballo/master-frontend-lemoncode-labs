/* Head
Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring. */

const head = (array) => {
  const [first] = array;
  return first;
};

/* Tail
Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator. */

const tail = (array) => {
  const [, ...otherElements] = array;
  return otherElements;
};

/* Init
Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
 */

const init = (array) => {
  return array.slice(0, array.length - 1);
};

/* Last
Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento. */

const last = (array) => {
  return array.slice(array.length - 1);
};
