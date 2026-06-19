import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Cookies | Torres Jack',
  description: 'Política de cookies de Torres Jack Correduría de Seguros, S.L.',
}

export default function CookiesPage() {
  return (
    <div className="bg-brand-paper-alt min-h-screen py-[clamp(64px,8vw,112px)]">
      <div className="w-full max-w-3xl mx-auto px-6">

        <h1 className="font-serif font-medium text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.015em] text-brand-dark mb-[56px]">
          Política de cookies
        </h1>

        <div className="prose prose-lg prose-neutral max-w-none
          prose-p:text-brand-ink-soft prose-p:leading-[1.75]
          prose-a:text-brand-accent prose-a:no-underline hover:prose-a:underline
          prose-strong:text-brand-ink prose-strong:font-semibold
          prose-table:text-brand-ink-soft prose-thead:text-brand-ink
          prose-th:font-semibold prose-th:text-brand-ink">

          <p>
            Este sitio web puede utilizar cookies técnicas (pequeños archivos de información que el
            servidor envía al ordenador de quien accede a la página) para llevar a cabo determinadas
            funciones que son consideradas imprescindibles para el correcto funcionamiento y
            visualización del sitio. Las cookies utilizadas tienen, en todo caso, carácter temporal,
            con la única finalidad de hacer más eficaz la navegación, y desaparecen al terminar la
            sesión del usuario. En ningún caso, estas cookies proporcionan por sí mismas datos de
            carácter personal y no se utilizarán para la recogida de los mismos.
          </p>

          <p>
            Mediante el uso de cookies también es posible que el servidor donde se encuentra la web
            reconozca el navegador utilizado por el usuario con la finalidad de que la navegación sea
            más sencilla, permitiendo, por ejemplo, el acceso de los usuarios que se hayan registrado
            previamente a las áreas, servicios, promociones o concursos reservados exclusivamente a
            ellos sin tener que registrarse en cada visita. También se pueden utilizar para medir la
            audiencia, parámetros de tráfico, controlar el progreso y número de entradas, etc., siendo
            en estos casos cookies prescindibles técnicamente, pero beneficiosas para el usuario. Este
            sitio web no instalará cookies prescindibles sin el consentimiento previo del usuario.
          </p>

          <p>
            El usuario tiene la posibilidad de configurar su navegador para ser alertado de la
            recepción de cookies y para impedir su instalación en su equipo. Por favor, consulte las
            instrucciones de su navegador para ampliar esta información.
          </p>

          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Finalidad</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sesión (Next.js)</td>
                <td>Técnica necesaria</td>
                <td>Funcionamiento correcto del sitio</td>
                <td>Sesión</td>
              </tr>
              <tr>
                <td>cookie_consent</td>
                <td>Técnica necesaria</td>
                <td>Recordar que el usuario aceptó este aviso</td>
                <td>1 año</td>
              </tr>
            </tbody>
          </table>

          <p>
            Para más información sobre nuestra política de privacidad, consulta nuestro{' '}
            <Link href="/aviso-legal">aviso legal</Link>.
          </p>
        </div>

      </div>
    </div>
  )
}
