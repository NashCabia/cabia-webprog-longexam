import { Outlet, useLocation } from 'react-router-dom';

const AuthLayout = () => {
  const location = useLocation();
  const isSignUp = location.pathname.includes('signup');
  const illustrationSrc = isSignUp ? '/auth/logo.png' : '/auth/logo.png';
  const illustrationAlt = isSignUp ? 'Sign up illustration' : 'Sign in illustration';
  const panelBackgroundImage = 'linear-gradient(rgba(24, 24, 27, 0.12), rgba(24, 24, 27, 0.12)), url(/auth/NU.webp)';

  return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div
          className="flex items-center justify-center border-b-2 border-zinc-300 bg-zinc-200 bg-cover bg-center p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:border-zinc-300 lg:p-16"
          style={{ backgroundImage: panelBackgroundImage }}
        >
          <div className="flex w-full max-w-md items-center justify-center p-8 sm:p-10">
            <img
              src={illustrationSrc}
              alt={illustrationAlt}
              className="aspect-square w-full max-w-[18rem] object-cover"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>

        <main className="flex items-center bg-zinc-50 px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
