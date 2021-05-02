import React from "react";

interface Props {
  data: any;
}
const Info: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{`Type: ${data.types[0].type.name}`}</p>
      <img
        src={data.sprites.other["official-artwork"].front_default}
        alt="sprite"
      ></img>

      <div className="scroll">
        <table>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Gen 1</th>
              <th scope="col">Gen 2</th>
              <th scope="col">Gen 3</th>
              <th scope="col">Gen 4</th>
              <th scope="col">Gen 5</th>
              <th scope="col">Gen 6</th>
              <th scope="col">Gen 7</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Normal</td>
              <td>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/${data.id}.png`}
                  alt="sprite"
                ></img>
              </td>
              <td>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${data.id}.png`}
                  alt="sprite"
                ></img>
              </td>
              <td>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/${data.id}.png`}
                  alt="sprite"
                ></img>
              </td>
              <td>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/${data.id}.png`}
                  alt="sprite"
                ></img>
              </td>
              <td>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${data.id}.png`}
                  alt="sprite"
                ></img>
              </td>
              <td>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/${data.id}.png`}
                  alt="sprite"
                ></img>
              </td>
              <td>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/${data.id}.png`}
                  alt="sprite"
                ></img>
              </td>
            </tr>
            <tr>
              <td>Shiny</td>
              <td> -</td>
              <td>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/${data.id}.png`}
                  alt="sprite"
                ></img>
              </td>
              <td>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/${data.id}.png`}
                  alt="sprite"
                ></img>
              </td>
              <td>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/${data.id}.png`}
                  alt="sprite"
                ></img>
              </td>
              <td>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/${data.id}.png`}
                  alt="sprite"
                ></img>
              </td>
              <td>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/${data.id}.png`}
                  alt="sprite"
                ></img>
              </td>
              <td>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/${data.id}.png`}
                  alt="sprite"
                ></img>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Info;
