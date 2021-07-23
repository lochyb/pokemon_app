import Footer from "../Home/Footer";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../state/actions/index";
import { SkeletonCard } from "../skeleton/SkeletonCard";
import ShinyCard from "./ShinyCard";
import { useState } from "react";

const ShinyCards = () => {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch();

  const amount = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  return (
    <div className='shiny-list-wrapper'>
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
      {state.store.posts.length === undefined ? (
        <p>Loading</p>
      ) : (
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
            <ShinyCard data={state.store.posts} key={`pokemonCard`} />
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  loading: state.loading,
  posts: state,
  hasErrors: state,
});
export default connect(mapStateToProps)(ShinyCards);
