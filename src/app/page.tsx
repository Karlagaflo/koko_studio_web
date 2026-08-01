"use client";

import { 
  Smartphone, 
  Download, 
  Apple, 
  Calendar, 
  Clock, 
  Bell, 
  MapPin, 
  Sparkles,
  ShieldCheck,
  UserCheck
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col bg-zinc-950 text-zinc-100 overflow-x-hidden selection:bg-rose-500 selection:text-white font-sans">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-pink-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-600 to-rose-500 flex items-center justify-center shadow-lg shadow-rose-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400">
              Koko Studio
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="hover:text-zinc-100 transition-colors">Características</a>
            <a href="#" className="hover:text-zinc-100 transition-colors">Vista Previa</a>
            <a href="#downloads" className="hover:text-zinc-100 transition-colors">Descargas</a>
          </nav>

          <a 
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white transition-all duration-300 transform hover:scale-[1.03] shadow-md shadow-rose-500/10"
          >
            Contacto Whatsapp
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold tracking-wide mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              ¡Lleva Koko Studio en tu Celular!
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6">
              Tus citas de belleza y uñas{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400">
                a un toque de distancia
              </span>
            </h1>
            
            <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
              Descarga la aplicación oficial de Koko Studio para agendar tus visitas, consultar horarios de manicuristas, ver tu historial completo de citas y recibir alertas en tiempo real de tu sede favorita.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="/downloads/app-release.apk"
                download
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-zinc-100/5 group"
              >
                <Download className="w-5 h-5 text-zinc-950 group-hover:translate-y-[1px] transition-transform" />
                <span>Descargar para Android (.APK)</span>
              </a>
              
              <a 
                href="/downloads/app-release.ipa"
                download
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800/80 text-zinc-200 border border-zinc-800 hover:border-zinc-700 font-bold transition-all duration-300 transform hover:scale-[1.02]"
              >
                <Apple className="w-5 h-5 text-zinc-400" />
                <span>Descargar para iOS (.IPA)</span>
              </a>
            </div>

            {/* Badges Info */}
            <div className="flex flex-wrap items-center gap-6 mt-12 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Libre de virus (Firma Segura)</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-purple-400" />
                <span>Exclusivo para Clientas y Personal</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Interactive Styled UI Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 h-[560px] rounded-[48px] border-[12px] border-zinc-900 bg-zinc-950 shadow-2xl shadow-rose-500/5 overflow-hidden flex flex-col">
              
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-zinc-900 rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-zinc-800 rounded-full" />
              </div>

              {/* Mockup App Screen */}
              <div className="flex-1 flex flex-col p-5 pt-8 overflow-y-auto bg-zinc-950 text-zinc-100 space-y-4">
                
                {/* Simulated Header */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-900">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-rose-500 flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-display font-bold text-sm">Koko Studio</span>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                </div>

                {/* Simulated Greeting Card */}
                <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/60 p-4 rounded-2xl border border-zinc-800/80">
                  <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider">Bienvenida</span>
                  <h4 className="font-bold text-sm text-zinc-200 mt-0.5">Hola, Clienta Koko</h4>
                  <div className="flex items-center gap-2 mt-3 text-[11px] text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>Sede Seleccionada: Belaunde</span>
                  </div>
                </div>

                {/* Simulated Quick Action: Time Slots */}
                <div className="space-y-2">
                  <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider block">Agendar Cita</span>
                  <div className="bg-zinc-900/50 border border-zinc-900 p-3 rounded-2xl space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-zinc-400">
                      <span>Servicio: Manicure Gel</span>
                      <span className="font-bold text-rose-300">S/ 45.00</span>
                    </div>
                    {/* Hour picker mockup */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-zinc-900 p-2 rounded-xl border border-zinc-800 flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-zinc-500" />
                        <div className="text-left">
                          <span className="text-[8px] text-zinc-500 block leading-none">Inicio</span>
                          <span className="text-[10px] font-bold">14:00</span>
                        </div>
                      </div>
                      <div className="bg-zinc-900 p-2 rounded-xl border border-zinc-800 flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-rose-400" />
                        <div className="text-left">
                          <span className="text-[8px] text-zinc-500 block leading-none">Fin</span>
                          <span className="text-[10px] font-bold text-rose-300">15:30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simulated Alerts Inbox */}
                <div className="space-y-2">
                  <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider block">Última Alerta</span>
                  <div className="bg-zinc-900/80 border border-zinc-800/80 p-3.5 rounded-2xl flex gap-3 items-start relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-rose-500/5 rounded-bl-3xl pointer-events-none" />
                    <div className="w-7 h-7 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0">
                      <Bell className="w-3.5 h-3.5 text-rose-400" />
                    </div>
                    <div className="text-left">
                      <span className="text-[9px] text-rose-300 font-semibold block leading-none mb-1">Cita Confirmada</span>
                      <p className="text-[10px] text-zinc-300 leading-tight">Tu cita para Manicure en Belaunde ha sido agendada con éxito.</p>
                      <span className="text-[8px] text-zinc-500 block mt-1.5">Hoy 10:15 AM</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Bottom Navigation */}
                <div className="pt-2 border-t border-zinc-900 flex justify-around text-zinc-600 mt-auto">
                  <div className="flex flex-col items-center text-rose-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-[8px] mt-1 font-medium">Citas</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Bell className="w-4 h-4 text-zinc-600" />
                    <span className="text-[8px] mt-1">Buzón</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin className="w-4 h-4 text-zinc-600" />
                    <span className="text-[8px] mt-1">Sedes</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features" className="py-24 border-t border-zinc-900 bg-zinc-950/40 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Diseñada para la{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-300">
              máxima comodidad
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto mb-16">
            Todo lo que necesitas para gestionar tu tiempo en Koko Studio sin llamadas telefónicas ni demoras innecesarias.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-zinc-900/30 border border-zinc-900/80 p-8 rounded-3xl text-left hover:border-zinc-800 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-500/5 to-transparent rounded-tr-3xl pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Calendar className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="font-bold text-lg text-zinc-200 mb-3">Reservas Express</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Agenda tu cita favorita seleccionando el tipo de servicio, manicurista asignada y sede en menos de un minuto.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-zinc-900/30 border border-zinc-900/80 p-8 rounded-3xl text-left hover:border-zinc-800 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-rose-500/5 to-transparent rounded-tr-3xl pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Clock className="w-6 h-6 text-rose-400" />
              </div>
              <h3 className="font-bold text-lg text-zinc-200 mb-3">Control de Horarios</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Visualiza la hora exacta de inicio y de fin de tus citas directamente en la interfaz de gestión para organizar mejor tu día.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-zinc-900/30 border border-zinc-900/80 p-8 rounded-3xl text-left hover:border-zinc-800 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-tr-3xl pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Bell className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-bold text-lg text-zinc-200 mb-3">Buzón de Alertas</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Historial dinámico de notificaciones para estar al tanto al instante de citas creadas, canceladas o cambios de estado.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-zinc-900/30 border border-zinc-900/80 p-8 rounded-3xl text-left hover:border-zinc-800 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-tr-3xl pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="font-bold text-lg text-zinc-200 mb-3">Sedes Inteligentes</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Filtrado por sede y comunicación directa por WhatsApp redirigida automáticamente al teléfono de la recepcionista correspondiente.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Downloads Action Section */}
      <section id="downloads" className="py-24 border-t border-zinc-900 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-8">
            <Smartphone className="w-8 h-8" />
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6">
            Elige tu plataforma e instala la app
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-12">
            Disfruta de Koko Studio en tu celular. Elige el instalador compatible con tu dispositivo y empieza a agendar tus citas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
            
            {/* Android Card */}
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 rounded-3xl border border-zinc-850 flex flex-col h-full hover:border-zinc-700 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-750 flex items-center justify-center mb-6">
                <Smartphone className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-zinc-100">Dispositivos Android</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-8">
                Descarga el archivo APK directamente a tu celular. Deberás habilitar la casilla "Permitir instalar aplicaciones de orígenes desconocidos" en tu dispositivo cuando el navegador te lo solicite.
              </p>
              <a 
                href="/downloads/app-release.apk"
                download
                className="mt-auto inline-flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold transition-all duration-300"
              >
                <Download className="w-4.5 h-4.5" />
                <span>Descargar APK</span>
              </a>
            </div>

            {/* iOS Card */}
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 rounded-3xl border border-zinc-850 flex flex-col h-full hover:border-zinc-700 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-750 flex items-center justify-center mb-6">
                <Apple className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-zinc-100">Dispositivos iOS (iPhone)</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-8">
                Descarga el archivo instalador (.IPA) directamente a tu iPhone. Para instalarlo sin App Store, puedes usar TestFlight o tu perfil de aprovisionamiento de Koko Studio.
              </p>
              <a 
                href="/downloads/app-release.ipa"
                download
                className="mt-auto inline-flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl bg-zinc-900 hover:bg-zinc-800/80 text-zinc-200 border border-zinc-800 hover:border-zinc-700 font-bold transition-all duration-300"
              >
                <Download className="w-4.5 h-4.5" />
                <span>Descargar IPA</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-zinc-950 border-t border-zinc-900/80 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center">
              <Sparkles className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="font-display font-bold text-lg text-zinc-300">Koko Studio</span>
          </div>

          <div className="text-xs text-zinc-500 text-center md:text-right">
            <span>© {new Date().getFullYear()} Koko Studio. Todos los derechos reservados.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
