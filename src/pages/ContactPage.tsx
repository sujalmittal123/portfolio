export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    // Create email body with sender's information
    const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    // Create mailto link
    const mailtoLink = `mailto:sujalmittal720@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.open(mailtoLink, '_self');
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="dark:text-white text-slate-900">Get In </span>
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400 mx-auto rounded-full mb-6"></div>
          <p className="dark:text-slate-400 text-slate-600 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Whether you have a 
            project in mind or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-zinc-900/10 dark:bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="dark:text-white text-slate-900 font-semibold text-lg mb-1">Email</h4>
                <a href="mailto:sujalmittal720@gmail.com" className="dark:text-slate-400 text-slate-600 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  sujalmittal720@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-zinc-900/10 dark:bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="dark:text-white text-slate-900 font-semibold text-lg mb-1">Location</h4>
                <p className="dark:text-slate-400 text-slate-600">India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-zinc-900/10 dark:bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-zinc-700 dark:text-zinc-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="dark:text-white text-slate-900 font-semibold text-lg mb-1">Status</h4>
                <p className="text-zinc-700 dark:text-zinc-200 font-medium">Open to opportunities</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t dark:border-slate-700/50 border-slate-200">
              <h4 className="dark:text-white text-slate-900 font-semibold text-lg mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/sujalmittal123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 dark:bg-slate-800 bg-slate-100 rounded-xl flex items-center justify-center dark:text-slate-400 text-slate-600 hover:text-zinc-900 dark:hover:text-white dark:hover:bg-slate-700 hover:bg-slate-200 transition-all"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/sujal-mittal-73a14727b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 dark:bg-slate-800 bg-slate-100 rounded-xl flex items-center justify-center dark:text-slate-400 text-slate-600 hover:text-zinc-900 dark:hover:text-white dark:hover:bg-slate-700 hover:bg-slate-200 transition-all"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/viveksharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 dark:bg-slate-800 bg-slate-100 rounded-xl flex items-center justify-center dark:text-slate-400 text-slate-600 hover:text-zinc-900 dark:hover:text-white dark:hover:bg-slate-700 hover:bg-slate-200 transition-all"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 dark:bg-slate-800/30 bg-white/50 backdrop-blur-sm border dark:border-slate-700/50 border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-right">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block dark:text-slate-300 text-slate-700 mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 rounded-xl px-4 py-3 dark:text-white text-slate-900 placeholder-slate-500 focus:outline-none focus:border-zinc-700 dark:focus:border-zinc-200 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block dark:text-slate-300 text-slate-700 mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 rounded-xl px-4 py-3 dark:text-white text-slate-900 placeholder-slate-500 focus:outline-none focus:border-zinc-700 dark:focus:border-zinc-200 transition-colors"
                  placeholder="abc@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block dark:text-slate-300 text-slate-700 mb-2 font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 rounded-xl px-4 py-3 dark:text-white text-slate-900 placeholder-slate-500 focus:outline-none focus:border-zinc-700 dark:focus:border-zinc-200 transition-colors"
                placeholder="Project Inquiry"
              />
            </div>
            <div>
              <label htmlFor="message" className="block dark:text-slate-300 text-slate-700 mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 rounded-xl px-4 py-3 dark:text-white text-slate-900 placeholder-slate-500 focus:outline-none focus:border-zinc-700 dark:focus:border-zinc-200 transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-zinc-900/20 dark:shadow-white/10 hover:bg-zinc-700 dark:hover:bg-zinc-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
