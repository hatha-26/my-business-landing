export function Footer() {
    return (
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © 2025 MyBusiness. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    )
  }