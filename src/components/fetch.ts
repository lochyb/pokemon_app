// reusable fetch logic

export async function getPokemon(url: string) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((x) => resolve(x));
  });
}
