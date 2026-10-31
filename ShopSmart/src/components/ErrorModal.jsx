
export default function ErrorModal({ loading }) {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-md">

      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-white p-8 text-center shadow-2xl">

        {/* Top accent */}
        <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600" />

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.7}
            stroke="currentColor"
            className="h-10 w-10 text-orange-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.42 3.84a1.5 1.5 0 0 1 2.16 0l1.15 1.2a1.5 1.5 0 0 0 1.06.46h1.7a1.5 1.5 0 0 1 1.53 1.53v1.7a1.5 1.5 0 0 0 .46 1.06l1.2 1.15a1.5 1.5 0 0 1 0 2.16l-1.2 1.15a1.5 1.5 0 0 0-.46 1.06v1.7a1.5 1.5 0 0 1-1.53 1.53h-1.7a1.5 1.5 0 0 0-1.06.46l-1.15 1.2a1.5 1.5 0 0 1-2.16 0l-1.15-1.2a1.5 1.5 0 0 0-1.06-.46h-1.7a1.5 1.5 0 0 1-1.53-1.53v-1.7a1.5 1.5 0 0 0-.46-1.06l-1.2-1.15a1.5 1.5 0 0 1 0-2.16l1.2-1.15a1.5 1.5 0 0 0 .46-1.06v-1.7a1.5 1.5 0 0 1 1.53-1.53h1.7a1.5 1.5 0 0 0 1.06-.46l1.15-1.2Z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
          </svg>
        </div>

        {/* Status */}
        <div className="mb-4 flex justify-center">
          <span className="flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
            Under Maintenance
          </span>
        </div>

        {/* Content */}
        <h1 className="mb-3 text-2xl font-bold tracking-tight text-slate-900">
          We'll Be Right Back!
        </h1>

        <p className="mx-auto max-w-xs text-sm leading-6 text-slate-500">
          Our system is currently undergoing maintenance to improve your
          experience. We apologize for the inconvenience.
        </p>

        {/* Divider */}
        <div className="my-7 border-t border-slate-100" />

        {/* Footer */}
        <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
            />
          </svg>
          Please try again later.
        </div>

      </div>
    </div>
  );
}
