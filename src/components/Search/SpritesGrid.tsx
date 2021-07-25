import React from "react";

interface Props {
  data: any;
}
const SpritesGrid: React.FC<Props> = ({ data }) => {
  const image = {
    gen1Normal:
      data.sprites.versions["generation-i"]["red-blue"]["front_default"],
    gen2Normal:
      data.sprites.versions["generation-ii"]["crystal"]["front_default"],
    gen2Shiny: data.sprites.versions["generation-ii"]["crystal"]["front_shiny"],
    gen3Normal:
      data.sprites.versions["generation-iii"]["emerald"]["front_default"],
    gen3Shiny:
      data.sprites.versions["generation-iii"]["emerald"]["front_shiny"],
    gen4Normal:
      data.sprites.versions["generation-iv"]["diamond-pearl"]["front_default"],
    gen4Shiny:
      data.sprites.versions["generation-iv"]["diamond-pearl"]["front_shiny"],
    gen5Normal:
      data.sprites.versions["generation-v"]["black-white"]["front_default"],
    gen5Shiny:
      data.sprites.versions["generation-v"]["black-white"]["front_shiny"],
    gen6Normal:
      data.sprites.versions["generation-vi"]["omegaruby-alphasapphire"][
        "front_default"
      ],
    gen6Shiny:
      data.sprites.versions["generation-vi"]["omegaruby-alphasapphire"][
        "front_shiny"
      ],
    gen7Normal:
      data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"][
        "front_default"
      ],
    gen7Shiny:
      data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"][
        "front_shiny"
      ],
  };

  return (
    <div className='scroll'>
      <table>
        <tr>
          <th>Gen</th>
          <th>Normal</th>
          <th>Shiny</th>
        </tr>
        {image.gen1Normal !== null && (
          <tr>
            <td>Gen1</td>
            <td>
              <img src={image.gen1Normal} alt='nonShiny'></img>
            </td>
            <td>No Shiny Available</td>
          </tr>
        )}
        {image.gen2Normal !== null && (
          <tr>
            <td>Gen2</td>
            <td>
              <img src={image.gen2Normal} alt='nonShiny'></img>
            </td>
            <td>
              <img src={image.gen2Shiny} alt='shiny' />
            </td>
          </tr>
        )}
        {image.gen3Normal !== null && (
          <tr>
            <td>Gen3</td>
            <td>
              <img src={image.gen3Normal} alt='nonShiny'></img>
            </td>
            <td>
              <img src={image.gen3Shiny} alt='shiny' />
            </td>
          </tr>
        )}
        {image.gen4Normal !== null && (
          <tr>
            <td>Gen4</td>
            <td>
              <img src={image.gen4Normal} alt='nonShiny'></img>
            </td>
            <td>
              <img src={image.gen4Shiny} alt='shiny' />
            </td>
          </tr>
        )}
        {image.gen5Normal !== null && (
          <tr>
            <td>Gen5</td>
            <td>
              <img src={image.gen5Normal} alt='nonShiny'></img>
            </td>
            <td>
              <img src={image.gen5Shiny} alt='shiny' />
            </td>
          </tr>
        )}
        {image.gen6Normal !== null && (
          <tr>
            <td>Gen6</td>
            <td>
              <img src={image.gen6Normal} alt='nonShiny'></img>
            </td>
            <td>
              <img src={image.gen6Shiny} alt='shiny' />
            </td>
          </tr>
        )}{" "}
        {image.gen7Normal !== null && (
          <tr>
            <td>Gen7</td>
            <td>
              <img src={image.gen7Normal} alt='nonShiny'></img>
            </td>
            <td>
              <img src={image.gen7Shiny} alt='shiny' />
            </td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default SpritesGrid;
