import {
  Baby,
  Bell,
  Calendar,
  Clock,
  DollarSign,
  FileText,
  Heart,
  MessageCircle,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import placeholder from "../public/imagens/placeholder.jpg";
import profissionalWorking from "../public/imagens/profissionalWorking.png";
import InfoCard from "./components/Card";

export default function Component() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <div className="relative h-[600px] flex items-center justify-center">
        <Image
          src={placeholder}
          alt="Background"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-block bg-black p-4 mb-4">
              <Image
                src="/placeholder.svg"
                alt="Logo"
                width={50}
                height={50}
                className="invert"
              />
            </div>
            <h1 className="text-2xl font-serif text-white mb-2">
              Maria Julia Ramos
            </h1>
            <p className="text-white/90 text-sm">Psicóloga</p>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Precisando de advogada para divórcio, pensão alimentícia ou outra
            causa do direito de família?
          </h2>
          <p className="text-white/90 mb-8">
            Entre em contato clicando no botão abaixo.
          </p>
          <Link
            href="https://wa.me/YOUR_PHONE_NUMBER"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Fale comigo agora pelo WhatsApp
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Como posso te ajudar?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service cards (same as before) */}
            <InfoCard
              title="Divórcio"
              icon={Users}
              items={["Consensual", "Litigioso", "Extrajudicial"]}
            />
            <InfoCard
              title="Pensão Alimentícia"
              icon={DollarSign}
              items={["Fixação", "Revisão", "Execução", "Exoneração"]}
            />
            <InfoCard
              title="União Estável"
              icon={Heart}
              items={[
                "Reconhecimento",
                "Dissolução",
                "Contrato de União Estável em Cartório",
              ]}
            />

            <InfoCard
              title="Guarda de Filhos e Alimentos"
              icon={Baby}
              items={["Unilateral", "Compartilhada", "Provisória"]}
            />

            <InfoCard
              title="Regulamentação de Visitas"
              icon={Clock}
              items={["Fixação", "Alteração", "Suspensão"]}
            />
          </div>
        </div>
      </section>

      {/* After Click Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Após clicar no botão:
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Image
              src={profissionalWorking}
              alt="Professional working"
              width={500}
              height={400}
              className="rounded-lg"
            />
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
                  1
                </div>
                <p>
                  Você será atendida e explicará seu problema para podermos
                  entender como ajudar.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
                  2
                </div>
                <p>
                  Vamos fazer perguntas para entender melhor a sua situação.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
                  3
                </div>
                <p>
                  Você receberá uma análise inicial do seu caso, além de
                  orientações e esclarecimentos sobre seus direitos.
                </p>
              </div>
              <Link
                href="https://wa.me/YOUR_PHONE_NUMBER"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors mt-6"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Fale comigo agora pelo WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Professional */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Conheça a profissional:
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Image
              src="/placeholder.svg"
              alt="Dra. Sumaia Rohden Speck"
              width={300}
              height={400}
              className="rounded-lg"
            />
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Dra. Sumaia Rohden Speck</h3>
              <p className="text-gray-600">
                Advogada especializada em Direito de Família, atuo há mais de X
                anos na área, sempre buscando as melhores soluções para meus
                clientes.
              </p>
              <p className="text-gray-600">
                Atendo com exclusividade e dedicação cada caso, com o
                compromisso de oferecer um serviço jurídico de qualidade e
                humanizado.
              </p>
              <Link
                href="https://wa.me/YOUR_PHONE_NUMBER"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors mt-4"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Fale comigo agora pelo WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Como Funciona:
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Calendar className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="font-bold mb-2">Agendamento</h3>
              <p className="text-sm text-gray-600">
                Entre em contato e agende seu horário de atendimento
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <MessageCircle className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="font-bold mb-2">Atendimento</h3>
              <p className="text-sm text-gray-600">
                Reunião para entender seu caso e esclarecer dúvidas
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <FileText className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="font-bold mb-2">Documentação</h3>
              <p className="text-sm text-gray-600">
                Preparação e análise dos documentos necessários
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Bell className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="font-bold mb-2">Acompanhamento</h3>
              <p className="text-sm text-gray-600">
                Acompanhamento contínuo do seu processo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contato</h2>
          <p className="text-gray-600 mb-6">Tel: (XX) XXXX-XXXX</p>
          <p className="text-gray-600 mb-8">email@exemplo.com</p>
          <Link
            href="https://wa.me/YOUR_PHONE_NUMBER"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Fale comigo agora pelo WhatsApp
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} - Todos os direitos reservados</p>
          <p className="mt-2">OAB/XX 123.456</p>
        </div>
      </footer>
    </main>
  );
}
