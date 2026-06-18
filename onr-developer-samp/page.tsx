'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Zap, Shield, Users, Gamepad2, Github, Twitter, Linkedin, ArrowRight, Menu, X, Play, BookOpen, MessageCircle } from 'lucide-react'

const ONRDeveloperPage = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, []):

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <style>{`
        :root { --primary: #8B5CF6; --secondary: #1E293B; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: linear-gradient(135deg, #0f172a 0%, #1a1f3a 100%); color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        .glass { background: rgba(139, 92, 246, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(139, 92, 246, 0.2); }
        .gradient-text { background: linear-gradient(135deg, #8B5CF6, #7C3AED); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        .animate-float { animation: float 3s ease-in-out infinite; }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 10px rgba(139, 92, 246, 0.5); } 50% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.8); } }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold gradient-text">ONR DEVELOPER</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-purple-400 transition">الخدمات</a>
              <a href="#projects" className="hover:text-purple-400 transition">المشاريع</a>
              <a href="#about" className="hover:text-purple-400 transition">عن الفريق</a>
              <a href="#contact" className="hover:text-purple-400 transition">التواصل</a>
            </div>

            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden pb-4 space-y-3">
              <a href="#services" className="block py-2 hover:text-purple-400">الخدمات</a>
              <a href="#projects" className="block py-2 hover:text-purple-400">المشاريع</a>
              <a href="#about" className="block py-2 hover:text-purple-400">عن الفريق</a>
              <a href="#contact" className="block py-2 hover:text-purple-400">التواصل</a>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-violet-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-6">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/50 rounded-full text-sm font-semibold text-purple-300">🎮 SAMP/OpenMP Developer</span>
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">ONR Developer</span><br />
            <span className="text-white">مع SAMP/OpenMP</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            نحن فريق متخصص في تطوير سيرفرات SA-MP والـ OpenMP العراقية. نوفر حلول احترافية وكاملة لسيرفرك.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 rounded-lg font-semibold inline-flex items-center gap-2 transition"
            >
              ابدأ الآن
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 border-2 border-purple-500 hover:bg-purple-500/10 rounded-lg font-semibold transition"
            >
              شوف الشغل
            </motion.a>
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-16 grid grid-cols-3 gap-8">
            {[
              { num: '150+', text: 'سيرفر مطور' },
              { num: '5000+', text: 'يلاعب سعيد' },
              { num: '10+', text: 'سنين خبرة' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400">{stat.num}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.text}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">الخدمات اللي نوفرها</h2>
            <p className="text-gray-400 text-lg">كل اللي تحتاج عشان تطلع سيرفر احترافي</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code2, title: 'تطوير السيرفر', desc: 'نطور لك سيرفر من الصفر بأحدث التقنيات والأكواد المحترفة' },
              { icon: Gamepad2, title: 'تطوير الجيم مود', desc: 'نخلق تجربة لعب فريدة بأنظمة وميزات ما شفت مثلها' },
              { icon: Shield, title: 'الحماية والأمان', desc: 'نحمي سيرفرك من الهاكرز والمشاكل الأمنية تماماً' },
              { icon: Zap, title: 'التحسين والأداء', desc: 'نخلي السيرفر سريع ويشتغل بدون اي مشاكل' },
              { icon: Users, title: 'أنظمة الإدارة', desc: 'نطور أنظمة إدارة متقدمة وسهلة الاستخدام' },
              { icon: MessageCircle, title: 'الدعم الفني', desc: 'فريق معنا 24/7 للرد على كل اسئلتك ومشاكلك' }
            ].map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass rounded-lg p-6 border border-purple-500/20"
                >
                  <div className="mb-4 p-3 bg-purple-500/20 rounded-lg w-fit">
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">المشاريع اللي انجزناها</h2>
            <p className="text-gray-400 text-lg">شوف بعض الشغل اللي طلعنا إيدينا</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Iraq Gaming Hub', players: '2000+ لاعب', desc: 'سيرفر عراقي ضخم مع أنظمة متقدمة', features: ['RP System', 'Economy System', 'Admin Panel'] },
              { name: 'Phoenix City', players: '1500+ لاعب', desc: 'تجربة لعب واقعية وممتعة', features: ['Real Economy', 'Job System', 'Gangs System'] },
              { name: 'Elite Racing', players: '800+ لاعب', desc: 'سيرفر متخصص في السباقات والاثارة', features: ['Racing System', 'Garage', 'Tournaments'] },
              { name: 'Dark Roleplay', players: '1200+ لاعب', desc: 'عالم واقعي من الجريمة والعدالة', features: ['Cop System', 'Crime Jobs', 'Courts'] }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-lg p-6 border border-purple-500/20 group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
                    <p className="text-purple-400 text-sm">{project.players}</p>
                  </div>
                  <Play className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition" />
                </div>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((f, j) => (
                    <span key={j} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">{f}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">عن الفريق</h2>
            <p className="text-gray-400 text-lg">الناس اللي تخلي أحلامك بسيرفر واقع</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'علي محمد', role: 'Lead Developer', bio: 'محترف في البرمجة ما عنده مستحيل' },
              { name: 'حسن احمد', role: 'Senior Scripter', bio: 'بخبرة 8 سنين وما زال يطور احدث الأشياء' },
              { name: 'فاطمة خالد', role: 'Database Manager', bio: 'معها السيرفر بأمان وسرعة عالية' },
              { name: 'محمود علي', role: 'Support Manager', bio: 'يرد على كل سؤال وحاجة بسرعة البرق' }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-purple-400 text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">تواصل معنا</h2>
            <p className="text-gray-400 text-lg">خذ سيرفرك الاحترافي الحين</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass rounded-lg p-8 border border-purple-500/20"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="اسمك"
                  className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
                <input
                  type="email"
                  placeholder="الإيميل"
                  className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
              </div>
              <textarea
                placeholder="اكتب لنا رغباتك وحاجتك"
                rows={5}
                className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 rounded-lg py-3 font-semibold transition"
              >
                ابعت الرسالة
              </motion.button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-12 text-center space-y-4">
            <p className="text-gray-400">أو التواصل المباشر:</p>
            <div className="flex justify-center gap-6">
              <a href="https://discord.gg/onr" target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3671a19.8067 19.8067 0 00-4.885-1.515.0741.0741 0 00-.079.0371c-.211.3671-.445.8447-.608 1.2182a18.9078 18.9078 0 00-5.669 0c-.163-.3735-.397-.8511-.609-1.2182a.077.077 0 00-.079-.037 19.7347 19.7347 0 00-4.885 1.515.0699.0699 0 00-.032.0277C.5 9.6558.873 14.929 4.002 18.0574a.0789.0789 0 00.067.0364c.108.006.216.015.324.015a12.64 12.64 0 002.252-.379.079.079 0 00.054-.039l.52-1.294a.069.069 0 00-.038-.097 8.349 8.349 0 01-1.185-.559.07.07 0 01-.006-.117l.149-.112a.07.07 0 01.073-.01c2.489 1.231 5.189 1.231 7.632 0a.07.07 0 01.074.011l.149.111a.07.07 0 01-.006.118 8.38 8.38 0 01-1.192.567.069.069 0 00-.037.097l.523 1.294a.069.069 0 00.054.04 12.662 12.662 0 002.255.379.077.077 0 00.023-.003c.08-.005.16-.014.24-.025a.0789.0789 0 00.067-.0365c3.133-3.144 3.506-8.418 1.567-12.47a.072.072 0 00-.031-.0277zM8.02 15.3312c-1.1825 0-2.1588-.9447-2.1588-2.1055 0-1.1608.9606-2.1055 2.1587-2.1055 1.203 0 2.1887.9447 2.1772 2.1055 0 1.1608-.9606 2.1055-2.1772 2.1055zm7.973 0c-1.1825 0-2.1587-.9447-2.1587-2.1055 0-1.1608.9606-2.1055 2.1588-2.1055 1.202 0 2.1887.9447 2.1772 2.1055 0 1.1608-.977 2.1055-2.1772 2.1055z"/></svg>
              </a>
              <a href="https://t.me/onrdeveloper" target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/onrdeveloper" target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 bg-slate-900/50 backdrop-blur-sm py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="mb-2">&copy; 2024 ONR DEVELOPER. كل الحقوق محفوظة.</p>
          <p className="text-sm">نحن فريق عراقي متخصص في تطوير سيرفرات SA-MP/OpenMP</p>
        </div>
      </footer>
    </main>
  )
}

export default ONRDeveloperPage