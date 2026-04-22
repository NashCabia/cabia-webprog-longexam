import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="border-t-2 border-zinc-900 bg-zinc-900 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-zinc-50 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold">BulldogEx Shop</p>
          <p className="mt-1 text-sm text-zinc-300">Campus essentials, simple ordering.</p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-300" aria-label="Footer">
          <Link className="transition hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900" to="/">
            Home
          </Link>
          <Link className="transition hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900" to="/about">
            About
          </Link>
          <Link className="transition hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900" to="/products">
            Products
          </Link>
          <Link className="transition hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900" to="/auth/signin">
            Sign In
          </Link>
          <Link className="transition hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900" to="/auth/signup">
            Sign Up
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Footer
