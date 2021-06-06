import React from "react";

interface Props {
  data: any;
}
const SpritesGrid: React.FC<Props> = ({ data }) => {
  return (
    <div className='scroll'>
      <table>
        <tbody>
          <tr className='tr-gen'>
            <td>
              <p>Game Series</p>
            </td>
            <td>
              <p>Gen 1</p>
            </td>
            <td>
              <p>Gen 2</p>
            </td>
            <td>
              <p>Gen 3</p>
            </td>
            <td>
              <p>Gen 4</p>
            </td>
            <td>
              <p>Gen 5</p>
            </td>
            <td>
              <p>Gen 6</p>
            </td>
            <td>
              <p>Gen 7</p>
            </td>
          </tr>
          <tr>
            <td>Normal</td>
            <td>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/${data.id}.png`}
                alt='sprite'></img>
            </td>
            <td>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${data.id}.png`}
                alt='sprite'></img>
            </td>
            <td>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/${data.id}.png`}
                alt='sprite'></img>
            </td>
            <td>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/${data.id}.png`}
                alt='sprite'></img>
            </td>
            <td>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${data.id}.png`}
                alt='sprite'></img>
            </td>
            <td>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/${data.id}.png`}
                alt='sprite'></img>
            </td>
            <td>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/${data.id}.png`}
                alt='sprite'></img>
            </td>
          </tr>
          <tr>
            <td>Shiny</td>

            <td>-</td>
            <td>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/${data.id}.png`}
                alt='sprite'></img>
            </td>
            <td>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/${data.id}.png`}
                alt='sprite'></img>
            </td>
            <td>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/${data.id}.png`}
                alt='sprite'></img>
            </td>
            <td>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/${data.id}.png`}
                alt='sprite'></img>
            </td>
            <td>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/${data.id}.png`}
                alt='sprite'></img>
            </td>
            <td>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/${data.id}.png`}
                alt='sprite'></img>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SpritesGrid;
