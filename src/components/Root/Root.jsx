import { Outlet, Form } from 'react-router-dom';
import Nav from './Nav';

export default function Root() {
  return (
    <>
      <header className="flex justify-between pt-6 mb-8 items-center">
        <h2 className="text-lg font-medium">RAWG</h2>
        <Form method="post">
          <input
            type="text"
            name="game"
            className="rounded-lg  px-2 text-slate-200 bg-slate-600 w-56 outline-none md:w-56 xl:w-80"
            placeholder="Search"
          />
        </Form>
        <Nav />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
}
