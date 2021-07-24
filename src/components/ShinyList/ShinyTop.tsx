import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../state/actions/index";
import { SkeletonCard } from "../skeleton/SkeletonCard";
import { ShinyCard } from "./ShinyCard";
import { useState } from "react";

const ShinyCards = () => {
  const state: any = useSelector((stateful) => stateful);
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);

  const amount = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  return (
    <div
      className='shiny-list-wrapper'
      onClick={() => {
        setActive(!active);
      }}>
      {state.store.posts.length === undefined && <h3>Select a Generation</h3>}
      <div className='shiny-list-header'>
        <button
          className='btn'
          onClick={() => {
            dispatch(fetchPosts("https://pokeapi.co/api/v2/pokemon?limit=151"));
          }}>
          Generation 1
        </button>
        <button
          className='btn'
          onClick={() => {
            dispatch(
              fetchPosts(
                "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151"
              )
            );
          }}>
          Generation 2
        </button>

        <button
          className='btn'
          onClick={() => {
            dispatch(
              fetchPosts(
                "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251"
              )
            );
          }}>
          Generation 3
        </button>
        <button
          className='btn'
          onClick={() => {
            dispatch(
              fetchPosts(
                "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386"
              )
            );
          }}>
          Generation 4
        </button>
      </div>
      {state.store.posts.length !== undefined && (
        <div className='cardContainer'>
          {state.store.loading ? (
            <div className='skeleton-wrapper'>
              <div>
                {amount.map((n, id) => (
                  <SkeletonCard key={`skeleton${id}`} />
                ))}
              </div>
            </div>
          ) : (
            <>
              {state.store.posts.map((x: any, key: number) => (
                <ShinyCard data={x} key={`pokemonKey${key}`} state={active} />
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};
// const mapStateToProps = (state: any) => ({
//   loading: state.store.loading,
//   posts: state.store.posts,
//   hasErrors: state.store.hasError,
// });
// export default connect(mapStateToProps)(ShinyCards);
export default ShinyCards;
