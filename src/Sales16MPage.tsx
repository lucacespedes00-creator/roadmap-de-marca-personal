import { TableOfContents } from './components/TableOfContents';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Target, DollarSign, TrendingUp, AlertTriangle, Users, Zap, BarChart,
  CheckSquare, ShieldAlert, Layers, Clock, Activity, BookOpen, Columns, Maximize2
} from 'lucide-react';

const ArcadiaLogo = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.41 3.53H19.78L12.35 18.06H7.98L15.41 3.53Z" />
    <path d="M6.02 12.37H10.39L8.21 16.65H3.84L6.02 12.37Z" />
  </svg>
);

export const Sales16MPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {
  const [isVideoPinned, setIsVideoPinned] = useState(false);
  const [videoWidth, setVideoWidth] = useState(500);
  const [isResizing, setIsResizing] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const startResizing = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      if (videoContainerRef.current) {
        const rightEdge = videoContainerRef.current.getBoundingClientRect().right;
        const newWidth = rightEdge - e.clientX;
        const maxWidth = Math.min(800, window.innerWidth * 0.7);
        if (newWidth > 300 && newWidth < maxWidth) {
          setVideoWidth(newWidth);
        }
      }
    };
    const handleMouseUp = () => setIsResizing(false);
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = 'none';
      document.body.style.cursor = 'col-resize';
    } else {
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };
  }, [isResizing]);

  return (
    <div className={`mx-auto w-full pb-20 animate-in fade-in duration-300 ${isVideoPinned ? 'max-w-[95%]' : 'max-w-3xl'}`}>
      <TableOfContents sections={[
        {"id":"section-1","title":"La tesis: todo depende de tu capacidad de vender"},
        {"id":"section-2","title":"Vendés todo el tiempo, no solo a prospectos"},
        {"id":"section-3","title":"Origen del playbook"},
        {"id":"section-4","title":"Cómo se usa el playbook y resultados"},
        {"id":"section-5","title":"Pilar 1: el comprador escéptico y \"quién le falló al mercado\""},
        {"id":"section-6","title":"Pilar 2: la trampa del precio del fundador"},
        {"id":"section-7","title":"Pilar 3: venta basada en el dolor (pain-first)"},
        {"id":"section-8","title":"Pilar 4: arquitectura de la oferta"},
        {"id":"section-9","title":"Urgencia y escasez: la palanca más poderosa"},
        {"id":"section-10","title":"Repaso y cierre: mentalidad y tácticas finales"}
      ]} />
      
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
          <ArcadiaLogo />
          <span className="text-zinc-500">Boards</span>
          <span className="text-zinc-700">/</span>
          <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('sales_parent')}>Sales</span>
        </div>
      </div>

      <div className="flex items-start gap-5 mb-12">
        <div className="border border-[#D5B15B]/30 p-3.5 rounded-2xl text-[#D5B15B] bg-[#1A1A1E] mt-1 shadow-[0_0_20px_rgba(213,177,91,0.15)]">
          <DollarSign size={28} strokeWidth={1.5} />
        </div>
        <div>
          <p className="text-sm text-zinc-500 mb-2 font-medium">Sales</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">$16.000.000 en conocimiento de ventas en 36 minutos</h1>
        </div>
      </div>

      <div className={`flex items-start gap-8 ${isVideoPinned ? 'flex-row' : 'flex-col'}`}>

        {/* Video */}
        <div
          ref={videoContainerRef}
          style={isVideoPinned ? { width: `${videoWidth}px` } : {}}
          className={`relative ${isVideoPinned ? 'order-2 shrink-0 sticky top-6' : 'order-1 w-full'} ${!isResizing ? 'transition-all duration-500' : ''}`}
        >
          {isVideoPinned && (
            <div
              onMouseDown={startResizing}
              className="absolute -left-4 top-0 bottom-0 w-8 cursor-col-resize z-20 group/resizer flex items-center justify-center"
            >
              <div className={`h-16 w-1 rounded-full transition-colors duration-200 ${isResizing ? 'bg-[#D5B15B]' : 'bg-white/10 group-hover/resizer:bg-white/30'}`} />
            </div>
          )}
          <div className="w-full aspect-video rounded-3xl overflow-hidden border border-[#27272A]/80 shadow-2xl mb-8 bg-[#121214] relative group">
            <button
              onClick={() => setIsVideoPinned(!isVideoPinned)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md border border-white/10 z-10 flex items-center gap-2 text-sm font-medium"
            >
              {isVideoPinned ? <Maximize2 size={16} /> : <Columns size={16} />}
              {isVideoPinned ? 'Desfijar' : 'Fijar lectura'}
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/e52MW7Dx5Rc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Content */}
        <div className={`${isVideoPinned ? 'order-1 flex-1 min-w-0' : 'order-2 w-full'}`}>
          <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-6 rounded-2xl mb-12 flex items-start gap-4">
            <div className="text-[#D5B15B] mt-1">
              <Target size={24} />
            </div>
            <div>
              <p className="text-zinc-300 text-lg">El expositor es Serge, consultor de crecimiento con seis años de experiencia, dueño de una firma de crecimiento con IA.</p>
            </div>
          </div>

          <div className="space-y-16">

        <section id="section-1">
          <div className="mb-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
              <Target size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">1. La tesis: todo depende de tu capacidad de vender</h3>
          </div>
          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
            <p className="text-zinc-300">Dice haber visto a cientos, tal vez miles, de emprendedores fracasar por no dominar una sola cosa. Lo que soñás al acostarte y al despertarte (darle un futuro a tus hijos, cuidar a tus padres y abuelos, comprar casas y Porsches, pasar un verano europeo con tu familia, darle una gran vida a tu pareja) depende de eso. Podés dominar la elección de nicho, la construcción de ofertas, el marketing, el contenido y los anuncios, pero si no entendés esto, no llegás.</p>
            
            <div className="bg-[#1A1A1E] border-l-4 border-[#D5B15B] p-5 rounded-xl">
              <p className="text-zinc-300">Su definición de ventas es conseguir que un desconocido se comprometa a obtener lo que quiere, con vos y no con otro, e invierta en tu servicio para atravesar esa transformación, <strong>hoy y no mañana</strong>.</p>
            </div>

            <p className="text-zinc-300">Al terminar la llamada, esa persona tiene que querer cambiar su vida ahora: "sacá la tarjeta, acá está el link de la factura". Las excusas típicas ("mi marido tiene que opinar", "no tengo plata") no le importan. La pregunta real es si querés lo que soñás o querés ser promedio toda la vida.</p>
            <p className="text-zinc-300">Dice que vender tiene que encenderte, y que si no podés transmitir la convicción de que ayudás a cerrar una brecha que otros proveedores no cerraron, "olvidate de conseguir lo que querés". Esto vale igual para ganar 10K al mes que un millón al mes o a la semana.</p>
          </div>
        </section>

        <section id="section-2">
          <div className="mb-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
              <Users size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">2. Vendés todo el tiempo, no solo a prospectos</h3>
          </div>
          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
            <p className="text-zinc-300">Para ganar mucho dinero también tenés que venderle a tus empleados y a la persona con la que convivís. Por ejemplo, alguien que te pregunta por qué trabajás un domingo si ganaste 100 mil dólares en tres días: tenés que venderle la razón por la que seguís empujando.</p>
            <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
              <p className="text-zinc-300">Además, el video mismo es venta: te vende la idea de que tenés que mejorar, porque si mejorás tenés éxito y eso se vuelve un caso de estudio para él. Todo lo que hace apunta a que seas mejor y estés más comprometido con lo que querés. Incluso tiene que venderte la importancia de aprender ventas, porque si no, te falla.</p>
            </div>
          </div>
        </section>

        <section id="section-3">
          <div className="mb-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
              <BookOpen size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">3. Origen del playbook</h3>
          </div>
          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
            <ul className="list-disc pl-5 text-zinc-300 space-y-3">
              <li>Tomó cientos de llamadas de ventas que cerraron ofertas de $15.000 y buscó qué tenían en común entre clientes, verticales y nichos.</li>
              <li>Auditó las mejores ofertas, llamadas y resultados de las empresas que construyeron y escalaron en los últimos 12 meses.</li>
              <li>El resultado es un playbook de ventas que sirve para cualquier oferta: infraestructura de crecimiento con IA, coaching, SEO con IA, empresas de techos, etc.</li>
            </ul>

            <p className="text-white font-semibold mt-8">Describe la habilidad de vender como una escala:</p>
            <div className="space-y-4">
              <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                <p className="text-zinc-300"><strong className="text-white">Un extremo:</strong> los que saben lo que hacen, dominan sistemas, entienden el nicho y están en las trincheras entregando, pero en la llamada dicen "esto cuesta 2 mil", el prospecto responde "es muy caro" y se caen.</p>
              </div>
              <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                <p className="text-zinc-300"><strong className="text-white">El otro extremo:</strong> quien domina esto entra a cualquier nicho sin saber nada del negocio, lo diagnostica, hace que compartan sus dolores y al final les pitchea 15 mil y el prospecto reacciona con "esto es increíble".</p>
              </div>
            </div>

            <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-5 rounded-xl mt-4">
              <p className="text-zinc-300">Insiste en que <strong>las ventas no tienen que ver con tu producto</strong>: a nadie le importa tu producto, tiene que ver con el mercado.</p>
            </div>

            <p className="text-zinc-500 italic text-sm mt-6">(Intermedio promocional: invita a un próximo workshop gratuito donde comparte su playbook de firma de crecimiento con IA de seis y siete cifras: cómo eligen nichos, arman ofertas y construyen la infraestructura de adquisición que genera de 1 a 30 citas por día para sus clientes, con anuncios pagos y agentes que hacen outbound, y usando Cook4/"Try Cook.ai" para cumplir con los clientes. Incluye una comunidad privada para asistentes.)</p>
          </div>
        </section>

        <section id="section-4">
          <div className="mb-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">4. Cómo se usa el playbook y resultados</h3>
          </div>
          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
            <p className="text-zinc-300">El documento cubre la arquitectura de la oferta, la personalización por vertical (negocios online vs. servicios locales), si llama el fundador o un closer, el marco de la oferta, el guion de ventas, cómo cobrar y los bonos. En el video no recorre el documento entero, se enfoca en los principios. Después se puede alimentar con eso a un agente en Cook y generar un Google Doc; dice que hará un video sobre eso.</p>
            
            <p className="text-white font-semibold mt-8">Casos:</p>
            <ul className="list-disc pl-5 text-zinc-300 space-y-3">
              <li>Un cliente, su mejor amigo de la secundaria, tenía muchas llamadas y no cerraba. Cruzó el playbook con su nicho y con transcripciones de sus llamadas, reescribió su guion, y en la primera llamada usándolo palabra por palabra cerró un cliente de <strong>$8.000</strong>: pagó 50% y luego el total.</li>
              <li>Otro cliente, en un nicho "muy interesante", cerró su primer cliente en <strong>$16.000 CAD (unos 12.000 USD)</strong> gracias al encuadre y al pitch del playbook.</li>
              <li>El guion les permitió construir ofertas en nichos sin experiencia, escalar empresas a <strong>$200.000 al mes</strong> y cobrar 5K, 15K o 7K a gente que normalmente nunca pagaría 1.500 al mes, en mercados quemados por otros proveedores.</li>
            </ul>
          </div>
        </section>

        <section id="section-5">
          <div className="mb-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
              <ShieldAlert size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">5. Pilar 1: el comprador escéptico y "quién le falló al mercado"</h3>
          </div>
          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
            <p className="text-zinc-300">La persona del otro lado construyó algo real con su tiempo, habilidades y reputación, y fue abordada repetidamente por proveedores que prometieron y no cumplieron. Su escepticismo no es hacia la IA o la tecnología sino hacia proveedores "largos en promesas y cortos en responsabilidad". La confianza no se gana con features sino siendo <strong>más específico, más transparente y estructuralmente más responsable</strong> que todos los anteriores.</p>
            
            <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
              <p className="text-zinc-300">Todo prospecto en todo nicho ya fue quemado una y otra vez, así que la forma de venderle es <strong>nombrar todo lo que no funcionó</strong>:</p>
              <ul className="list-disc pl-5 text-zinc-300 space-y-2 mt-4">
                <li>Si fallaron agencias de marketing: "solo les importa lanzar tu campaña y darte leads; no califican, no verifican teléfonos, no te dicen que si no contactás al lead en menos de 60 segundos o 5 minutos (speed to lead) los leads no sirven".</li>
                <li>Si falta contenido: "si no hacés contenido, estás cocinado".</li>
              </ul>
            </div>

            <p className="text-zinc-300">Si no lo hacés y asumís "querés más clientes, hacemos esto y esto", el prospecto piensa "sos como todas las agencias que me quemaron" y responde "lo voy a pensar". Tu trabajo número uno es entender quién le falló al mercado y en qué; si no, hay minas por todos lados y no cerrás nada.</p>
          </div>
        </section>

        <section id="section-6">
          <div className="mb-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
              <DollarSign size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">6. Pilar 2: la trampa del precio del fundador</h3>
          </div>
          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
            <p className="text-zinc-300">Cobrás según tu visión del mundo. Ejemplo: cuando renunció a su trabajo en 2020 ganaba 30K al año, y al lanzar su agencia de appointment setting cobraba $700 al mes, porque para él 2 mil mensuales ya era suficiente y con dos o tres clientes reemplazaba su sueldo. Si sos alguien que nunca ganó mucho, no podés concebir lo que es una empresa solar que factura 500K al mes o gana 200K de ganancia mensual, y te vas a fijar precios "de persona pobre".</p>
            
            <p className="text-white font-semibold mt-6">Reglas:</p>
            <ul className="list-disc pl-5 text-zinc-300 space-y-3">
              <li>El precio debe depender de <strong>las finanzas y metas del prospecto</strong>. Si quiere sumar un millón al año y le cobrás 1K al mes, va a pensar que sos una estafa.</li>
              <li><strong>El mayor indicador de valor para un extraño es el precio</strong>: no conocen tu onboarding ni tu velocidad, y no confían aún en los casos de estudio, así que lo único que pueden medir es cuán caro sos.</li>
              <li>Conoce gente que sale al mercado con una oferta de $15.000 en un nicho donde nunca entregó y sin pruebas, y cierra más rápido que alguien con muchísimas pruebas que cobra 1.500 al mes.</li>
              <li>Ejemplo: alguien pagó $26.000 el día anterior por ayuda para lanzar una agencia de IA. Un prospecto que no compró a Serge (5K, 10K o 15K) terminó pagando ese monto a otro con peor servicio, y después le dijo que ojalá hubiera ido con ellos. Serge admite que no tienen servicio perfecto y que aún aprende esta lección; el precio alto probablemente hizo pensar "si cobran tanto, deben ser mejores".</li>
              <li>Tu precio es <strong>el primer pitch y la única prueba de concepto</strong> que ve el prospecto: si no creés en tu negocio como para cobrar mucho, ¿por qué te creería un extraño?</li>
            </ul>

            <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-5 rounded-xl mt-6">
              <p className="text-zinc-300"><strong>Salvedad:</strong> no significa cobrar 10 o 100 mil ya mismo; depende del nicho. Si el prospecto gana 100–200K al año, no le vas a decir "son 50.000", salvo que estés prometiendo Bugattis online.</p>
            </div>
          </div>
        </section>

        <section id="section-7">
          <div className="mb-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
              <Activity size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">7. Pilar 3: venta basada en el dolor (pain-first)</h3>
          </div>
          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
            <p className="text-zinc-300">Nadie compra por features; compra porque lo llevaste a sacar a la superficie su dolor y cuánto le costó. Preguntas del estilo: ¿hace cuánto tenés este problema?, ¿cuánto te cuesta en el día a día?, ¿cómo te sentís manejando este negocio?, ¿qué intentaste para arreglarlo?, ¿qué específicamente no funcionó?, ¿empezaste este negocio para ser libre, para mantener a tu familia, por pasión, cuánta pasión queda hoy?, ¿qué te cuesta no tener este resultado tras tantos años?</p>
            
            <p className="text-zinc-300">Como se trata de negocios, hay que ser específico con números, pero además hay que dedicar mucho tiempo a que cuenten con qué luchan y cuánto les cuesta. Al liderar con su dolor, preguntar, escuchar por completo y reflejar lo que oís, los ponés en <strong>modo reconocimiento</strong>: dejan de comparar y empiezan a asentir, se sienten comprendidos y no vendidos. <strong>La decisión emocional ocurre en el descubrimiento, no en el pitch.</strong></p>

            <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
              <p className="text-zinc-300">Una línea de la formación de Serge: si no hacés un buen descubrimiento y presentás lo tuyo como "más leads o más citas", incluso $1.000 parece mucho. La resistencia al precio casi siempre viene de un descubrimiento omitido o superficial, no del precio.</p>
            </div>

            <p className="text-zinc-300"><strong>El "buying pocket"</strong> (bolsillo de compra) es el estado emocional en que el prospecto reconoció su dolor con tanta claridad que busca una razón para decir sí en lugar de una para decir no. No necesita ser convencido, solo confirmación de que tu oferta responde al problema que él articuló. El pitch pasa a ser la conclusión lógica de una conversación que ya tuvo consigo mismo.</p>

            <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
              <p className="text-zinc-300">Ejemplo con una clínica o empresa de techos: preguntás por el tamaño del equipo y la nómina (dicen "gastamos un millón al mes y necesitamos leads de mejor calidad"), cuánto gastan en anuncios, cuánto les cuesta no resolver el speed to lead. Luego vas a lo emocional: ¿qué te cuesta en el día a día?, ¿por qué querés resolverlo y no dejarlo así? ("siento que voy a quebrar, gasto todo en anuncios y los leads son malos"), ¿por qué querés llegar a un millón al mes o sumar 100 mil?, ¿solo por plata o hay una razón más profunda? ("tengo una hipoteca, compré máquinas, no puedo crear demanda"), ¿qué pasa si no la creás? ("le voy a fallar a mi familia"), ¿cuán pronto querés resolverlo? Nadie quiere solo "más plata": el dinero es reserva de valor, y hay que descubrir qué quieren hacer con él y de qué huyen. Si mantenés todo lógico, "buena suerte".</p>
            </div>
          </div>
        </section>

        <section id="section-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
              <Layers size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">8. Pilar 4: arquitectura de la oferta</h3>
          </div>
          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
            <p className="text-zinc-300">Cómo posicionás lo que vendés te da apalancamiento. Casos de su firma: mercado dental para construir una agencia de $200.000 al mes, clínicas estéticas y med spas cobrando $10.000, estudios y gimnasios con un cuarto de millón en cuatro semanas, un cliente de negocios facturando $20.000 por semana. Sus clientes pasan de cero a múltiples cinco cifras en el primer mes por <strong>cómo posicionan la oferta</strong>.</p>
            
            <p className="text-zinc-300">La mejor manera de que alguien quiera darte mucho dinero, y de aumentar la probabilidad percibida de que comprarte elimine todo lo que le falló antes, es <strong>posicionar la oferta para superar cada objeción y obstáculo previo</strong>.</p>

            <div className="bg-[#1A1A1E] border border-zinc-800 p-5 rounded-xl">
              <p className="text-zinc-300">Su propio giro: tenía una agencia de appointment setting con retainers de 1.200, 1.300 o 2.000 al mes y estaba estancado en unos 30K mensuales. La cerró y empezó a cobrar 8K, 10K, 12K y 15K a la misma gente que se quejaba del servicio de 1K al mes, y llegó a 300K mensuales de ganancia, medio millón al mes y un millón cada 90 días; de un trabajo de 30K anuales a eso en 20 meses. No fue por ser el mejor vendedor sino por construir la oferta desde la lente del prospecto: "si le doy 10.000 a Serge, obtengo todo lo que quiero".</p>
            </div>

            <p className="text-zinc-300 mt-6"><strong>El encuadre clave: activo en vez de retainer.</strong> Los negocios están cansados de retainers donde todos los proveedores rinden poco. Entonces: "te construimos un activo, no venís a pagar renta cada mes". Analogía de la hipoteca: la gente se mete en 30 años de deuda por "ser dueña" de una casa, aunque si dejás de pagar vuelve al banco; a los humanos les encanta poseer cosas. (Reconoce que hay argumentos a favor de comprar vs. alquilar, pero "no en 2026"; su tío compró una propiedad por 300 mil hace 20 años y hoy vale más de un millón, pero tardó 20 años en componer, y hoy comprarla sería distinto.) Entonces en lugar de "pagános para resolverlo", decís "construimos la infraestructura que lo resuelve para siempre, aun cuando no estemos, y ya no tenés que pagarnos".</p>

            <p className="text-white font-semibold mt-6">Esto genera tres beneficios:</p>
            <ol className="list-decimal pl-5 text-zinc-300 space-y-3">
              <li><strong>Elasticidad de precio enorme:</strong> quien no pagaría 1.000 al mes paga 10 veces eso por adelantado porque siente que es dueño y que el resultado quedó resuelto.</li>
              <li><strong>Financiás tu adquisición sin poner plata propia:</strong> con un pago inicial de 10–15K, usás 5K para marketing; cada cliente financia de uno a cinco clientes nuevos. "5K te traen 25K, 25K te traen 100K, 100K te llevan a medio millón al mes." Así pasás de estancarte en 30K/mes a 300K por semana.</li>
              <li><strong>Los clientes son los más fáciles de retener:</strong> al estar anclados tan alto, después proponés que, como ya pueden manejar el sistema, paguen un retainer de 1K a 3K según el tamaño. Su regla: retener sobre el <strong>15–20% del fee inicial</strong> (hasta 25% si estirás). Tu negocio debe dar más valor del que exprime: si cobrás 5K/mes y aportás solo 5K de valor, se van.</li>
            </ol>

            <p className="text-zinc-300 mt-6">Para negocios pequeños con ingresos de seis cifras anuales que luchan: cobrales <strong>$500 al mes</strong>. Con herramientas de IA (Cook) podés entregar creativos y gestionar anuncios; con 10 negocios pagando 500 al mes son 5.000 mensuales, o 60.000 al año, trabajando unas 3 horas por semana. (En la transcripción los números salen algo confusos, pero esa es la cuenta.) La mentalidad: vender un ticket alto al frente que liquide el costo de adquisición y luego un downsell a un retainer del 10–25% del inicial.</p>

            <p className="text-white font-semibold mt-6">Otros elementos:</p>
            <ul className="list-disc pl-5 text-zinc-300 space-y-3">
              <li><strong>Sin permanencia:</strong> mes a mes. Si entregás el primer sistema, te aman.</li>
              <li><strong>La garantía se mide en el éxito del cliente,</strong> no en "leads calificados" o "citas calificadas": cuántas pólizas vas a ayudar a escribir en 90 días (agentes de seguros), cuántos pacientes en la silla (dentales), cuántos techos cerrás o no pagan (roofing), cuántos retainers firmados (estudios de abogados). Cada nicho tiene su unidad de valor; a un dentista no le importan las "citas" sino las consultas o los pacientes en la silla.</li>
            </ul>
          </div>
        </section>

        <section id="section-9">
          <div className="mb-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
              <Clock size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">9. Urgencia y escasez: la palanca más poderosa después del precio</h3>
          </div>
          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
            <p className="text-zinc-300">Tu capacidad de crear urgencia y escasez en la llamada define si hacés un millón en 10 años o cada 90 días, cada mes, cada semana o cada día, porque hace que la persona quiera hacerlo <strong>hoy</strong>. Esto importa más que qué tan buena sea tu oferta o servicio.</p>

            <div className="space-y-6 mt-6">
              <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                <p className="text-zinc-300"><strong className="text-white">Palanca 1: cupos limitados o cohorte cerrada.</strong> "Solo incorporamos cinco clientes al mes y ya incorporamos tres." Marca que hay un tope, un timing y una fecha límite.</p>
              </div>

              <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                <p className="text-zinc-300"><strong className="text-white">Palanca 2: bonos</strong> (su favorita). Tiene que ser algo que el prospecto realmente quiere. Ejemplo con empresas de limpieza: creés que quieren trabajos, pero lo que piden es leads ("necesito más leads"). Entonces <strong>sacás la generación de leads de los pilares principales</strong> de la oferta y describís esos pilares de forma "aburrida": "implementamos la infraestructura, te ayudamos a construir la oferta y con ventas para que cierres más". Al final: "si tomás la decisión en esta llamada, la generación de leads te la incluimos gratis". Si no compran en la llamada o en la cohorte, tendrán que pagar extra por eso después y será más caro.</p>
                <p className="text-zinc-300 mt-4">Otro ejemplo: alguien que necesita atención y contenido. Le ofrecés lo mismo y además <strong>30 días gratis de ideas de contenido y edición</strong>, con el mismo mecanismo de "si no comprás hoy, después lo pagás".</p>
                
                <div className="bg-black/20 p-4 rounded-lg mt-4 border border-zinc-700/50">
                  <p className="text-zinc-300">Detrás está el principio: el mayor motor de decisiones de gasto es <strong>el miedo a perder</strong>. Su analogía: dale algo a un niño y tratá de quitárselo; aunque no camine, va a pelear como si fuera Hulk. Dice que podrías ser el peor vendedor y, con solo una hora pensando qué podés darle gratis que el prospecto realmente quiera (y que si vuelve más tarde le costará por ejemplo $5.000 más), lograrías más que con manejo de objeciones.</p>
                </div>

                <div className="bg-[#D5B15B]/10 p-4 rounded-lg mt-4 border border-[#D5B15B]/30">
                  <p className="text-zinc-300">Regla de calidad: <strong>el bono debe valer lo mismo que el precio de la oferta</strong>: si la oferta es 5K, el bono en sí debería valer 5K. Si 30 días de anuncios no parecen suficientes, dale 90 días de gestión de anuncios (alguien cobra 5–10K por eso); o 100 creativos con IA para que no tengan que grabar. Para llevarlo más lejos, tené varios bonos, preferentemente <strong>tres</strong>, sin exagerar. Dice que así "imprimís dinero como la Reserva Federal".</p>
                </div>
              </div>

              <div className="bg-[#1A1A1E] p-5 rounded-xl border border-zinc-800">
                <p className="text-zinc-300"><strong className="text-white">Palanca 3: aumento de precio.</strong> Debe ser claro y con fecha: a fin de mes, si no aprovechan la oferta, el precio sube. La gente vuelve diciendo "quería anotarme antes de que subiera".</p>
              </div>
            </div>
          </div>
        </section>

        <section id="section-10">
          <div className="mb-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
              <CheckSquare size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">10. Repaso y cierre: mentalidad y tácticas finales</h3>
          </div>
          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mb-8 space-y-6">
            <ul className="list-disc pl-5 text-zinc-300 space-y-4">
              <li>Preguntas base: ¿en qué falló antes? <strong>Poné el precio según su mundo, no el tuyo.</strong> Aunque estés sin plata, ponelo aparte: cuando hablás con una empresa de ocho cifras, sos un consultor o proveedor de ocho cifras y cobrás en consecuencia, sobre todo si tienen metas enormes. Si quieren llegar a un millón al mes: "son 50 mil para empezar".</li>
              <li><strong>Siempre asumí que van a objetar el precio,</strong> así que dales algo grande de qué quejarse.</li>
              <li><strong>Anclaje de precio:</strong> decís 15K, responden "es demasiado", y respondés "¿cómo hacemos que funcione? 50% ahora, 50% después". Usá esa concesión como palanca: tienen que decidir hoy o en 24 horas, o pierden el esquema 50/50. Es especialmente útil con alguien indeciso, reconociendo que es una relación nueva y que fue quemado por mil proveedores.</li>
              <li>Dedicá más tiempo a <strong>fabricar razones para comprar ahora</strong> que a entender tu propio negocio. Necesitás varias palancas (dice "1, 2, 3... siete") listas en cada llamada.</li>
              <li>Los extraños tienen <strong>miedo</strong> de obtener lo que quieren; alguien del otro lado tiene que ingeniar mil razones para que quieran transformarse. Somos "los seres no lógicos más inteligentes": puro emocional.</li>
              <li><strong>El fracaso es un dato:</strong> si fallás con una oferta, esa oferta no funciona; si fallás cerrando, no sabés cerrar; si fallás en publicidad, tu creativo no genera leads. Nunca temas vender.</li>
              <li><strong>Vender es el 90% del trabajo</strong> (en otro momento dice 80%); el último 20% es entrega, sistemas e IA. Si alguien dice que quiere algo y no se mueve ni toma el riesgo, ¿realmente lo quiere? Entonces terminá la llamada.</li>
              <li><strong>Sobre "es mucho dinero":</strong> su postura es que las objeciones de dinero casi nunca son reales, sobre todo en países donde hay acceso a tarjeta de crédito. Cuestiona cuánto gastaron en vacaciones, autos, salidas, ropa de diseñador o apuestas. Si ayudarte a ganar 100 mil más al mes por 10K les parece caro, están fingiendo.</li>
              <li><strong>"Lo voy a pensar":</strong> confrontalo ("¿qué exactamente vas a pensar? pasará otra semana, otro mes, otro año"). Si alguien dice que quiere construir un negocio pero no toma decisiones distintas, seguirá estancado. Podés decirle: "probaste esto, esto y esto, y falló. ¿Todavía lo querés? ¿Y lo querés ahora?". Preguntá "¿querés cambiar ahora?" incluso antes de pitchear.</li>
              <li><strong>Deber moral:</strong> si no cerrás a estas personas, no las ayudás a cambiar su vida. Tenés que "venderte a vos mismo primero" y entender que tu trabajo es cambiar vidas, empezando por lograr que alguien se comprometa en una llamada de Zoom.</li>
            </ul>

            <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-6 rounded-xl mt-8 text-center">
              <p className="text-[#D5B15B] font-medium">El video termina anticipando que el siguiente material recorrerá el documento (toda la teoría), y con un cierre motivacional: es una habilidad difícil, pero tomá el control, es la única forma de ganar.</p>
            </div>
          </div>
        </section>

          </div>
        </div>
      </div>
    </div>
  );
};
