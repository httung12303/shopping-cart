import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import Root from '../Root/Root';
import Home from '../Home/Home';
import GameList from '../GameList/GameList';
import {
  featuredGamesLoader,
  genreGameListLoader,
  queryLoader,
} from '../GameList/GameList.utils';
import { genresLoader } from '../Genres/Genres.utils';
import Genres from '../Genres/Genres';
import Game from '../Game/Game';
import { gameLoader } from '../Game/Game.utils';
import { searchAction } from '../Root/Root.utils';
import About from '../About/About';
import ErrorPage from '../ErrorPage/ErrorPage';

export default function Router() {
  const [cart, setCart] = useState([]);
  const addGame = (game) => {
    setCart([...cart, game]);
    console.log(cart);
  };
  const removeGame = (game) =>
    setCart(cart.filter((cartGame) => cartGame.id !== game.id));
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      action: searchAction,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: 'feature/:feature',
              element: <GameList />,
              loader: featuredGamesLoader,
            },
            {
              path: 'genres',
              element: <Genres />,
              loader: genresLoader,
            },
            {
              path: 'genres/:genre',
              element: <GameList />,
              loader: genreGameListLoader,
            },
            {
              path: 'games/:id',
              element: <Game {...{ addGame, removeGame, cart }} />,
              loader: gameLoader,
            },
            {
              path: 'cart',
              element: <GameList/>,
              loader: () => {return {title: 'Added games', games: cart}}
            },
            {
              path: 'search/:search',
              element: <GameList />,
              loader: queryLoader,
            },
            {
              path: 'about',
              element: <About />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
