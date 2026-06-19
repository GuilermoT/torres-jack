import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso legal | Torres Jack',
  description:
    'Aviso legal, política de privacidad y análisis objetivo de Torres Jack Correduría de Seguros, S.L.',
}

export default function AvisoLegalPage() {
  return (
    <div className="bg-brand-paper-alt min-h-screen py-[clamp(64px,8vw,112px)]">
      <div className="w-full max-w-3xl mx-auto px-6">

        <h1 className="font-serif font-medium text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.015em] text-brand-dark mb-[56px]">
          Aviso legal, política de privacidad y análisis objetivo
        </h1>

        {/* ── 1. Aviso legal ─────────────────────────────────────────────── */}
        <section className="mb-[52px]">
          <h2 className="font-serif font-medium text-[clamp(22px,2.6vw,30px)] leading-[1.15] tracking-[-0.01em] text-brand-dark mb-6">
            1. Aviso legal
          </h2>
          <div className="prose prose-lg prose-neutral max-w-none
            prose-headings:font-serif prose-headings:font-medium prose-headings:text-brand-dark
            prose-p:text-brand-ink-soft prose-p:leading-[1.75]
            prose-li:text-brand-ink-soft prose-li:leading-[1.75]
            prose-a:text-brand-accent prose-a:no-underline hover:prose-a:underline
            prose-strong:text-brand-ink prose-strong:font-semibold">

            <p>
              Torres Jack Correduría de Seguros, S.L., responsable del sitio web, en adelante RESPONSABLE,
              pone a disposición de los usuarios el presente documento, con el que pretende dar
              cumplimiento a las obligaciones dispuestas en la Ley 34/2002, de 11 de julio, de Servicios
              de la Sociedad de la Información y de Comercio Electrónico (LSSICE), BOE N.º 166, así como
              informar a todos los usuarios del sitio web respecto a cuáles son las condiciones de uso.
            </p>
            <p>
              Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la
              observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a
              cualquier otra disposición legal que fuera de aplicación.
            </p>
            <p>
              Torres Jack Correduría de Seguros, S.L. se reserva el derecho de modificar cualquier tipo de
              información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar o
              poner en conocimiento de los usuarios dichas obligaciones, entendiéndose como suficiente la
              publicación en el sitio web de Torres Jack Correduría de Seguros, S.L.
            </p>

            <h3>1.1 Datos identificativos</h3>
            <p>
              Nombre de dominio: www.torresjack.com<br />
              Denominación social: Torres Jack Correduría de Seguros, S.L.<br />
              NIF: B15661929<br />
              Domicilio social: Federico Tapia, 13-1ºD, 15005 A Coruña<br />
              Teléfono: 981 12 14 08<br />
              E-mail: <a href="mailto:direccion@torresjack.com">direccion@torresjack.com</a><br />
              Registro Mercantil A Coruña 5 – 15021 Tomo 2241 Folio 199 Hoja C22940
            </p>

            <h3>1.2 Derechos de propiedad intelectual e industrial</h3>
            <p>
              El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición,
              compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto
              y/o gráficos, son propiedad del RESPONSABLE o, si es el caso, dispone de licencia o
              autorización expresa por parte de los autores. Todos los contenidos del sitio web se
              encuentran debidamente protegidos por la normativa de propiedad intelectual e industrial, así
              como inscritos en los registros públicos correspondientes.
            </p>
            <p>
              Independientemente de la finalidad para la que fueran destinados, la reproducción total o
              parcial, uso, explotación, distribución y comercialización, requiere en todo caso la
              autorización escrita previa por parte del RESPONSABLE. Cualquier uso no autorizado previamente
              se considera un incumplimiento grave de los derechos de propiedad intelectual o industrial del
              autor.
            </p>
            <p>
              Los diseños, logotipos, texto y/o gráficos ajenos al RESPONSABLE y que pudieran aparecer en
              el sitio web, pertenecen a sus respectivos propietarios, siendo ellos mismos responsables de
              cualquier posible controversia que pudiera suscitarse respecto a los mismos. El RESPONSABLE
              autoriza expresamente a que terceros puedan redirigir directamente a los contenidos concretos
              del sitio web, y en todo caso redirigir al sitio web principal de www.torresjack.com.
            </p>
            <p>
              Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los
              derechos de propiedad intelectual o industrial, así como sobre cualquiera de los contenidos
              del sitio web, puede hacerlo a través del correo electrónico{' '}
              <a href="mailto:direccion@torresjack.com">direccion@torresjack.com</a>.
            </p>

            <h3>1.3 Exención de responsabilidades</h3>
            <p>
              El RESPONSABLE se exime de cualquier tipo de responsabilidad derivada de la información
              publicada en su sitio web siempre que no tenga conocimiento efectivo de que esta información
              haya sido manipulada o introducida por un tercero ajeno al mismo o, si lo tiene, haya actuado
              con diligencia para retirar los datos o hacer imposible el acceso a ellos.
            </p>

            <h3>1.4 Política de enlaces</h3>
            <p>
              Desde el sitio web, es posible que se redirija a contenidos de terceros sitios web. Dado que
              el RESPONSABLE no puede controlar siempre los contenidos introducidos por terceros en sus
              respectivos sitios web, no asume ningún tipo de responsabilidad respecto a dichos contenidos.
              En todo caso, procederá a la retirada inmediata de cualquier contenido que pudiera contravenir
              la legislación nacional o internacional, la moral o el orden público, procediendo a la
              retirada inmediata de la redirección a dicho sitio web, poniendo en conocimiento de las
              autoridades competentes el contenido en cuestión.
            </p>

            <h3>1.5 Direcciones IP</h3>
            <p>
              Los servidores del sitio web podrán detectar de manera automática la dirección IP y el nombre
              de dominio utilizados por el usuario. Una dirección IP es un número asignado automáticamente a
              un ordenador cuando este se conecta a Internet. Toda esta información se registra en un
              fichero de actividad del servidor que permite el posterior procesamiento de los datos con el
              fin de obtener mediciones únicamente estadísticas que permitan conocer el número de impresiones
              de páginas, el número de visitas realizadas a los servidores web, el orden de visitas, el
              punto de acceso, etc.
            </p>

            <h3>1.6 Ley aplicable y jurisdicción</h3>
            <p>
              Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio
              web o de las actividades en él desarrolladas, será de aplicación la legislación española, a
              la que se someten expresamente las partes, siendo competentes para la resolución de todos los
              conflictos derivados o relacionados con su uso los Juzgados y Tribunales del domicilio del
              USUARIO o el lugar del cumplimiento de la obligación.
            </p>
          </div>
        </section>

        {/* ── 2. Inscripción en registro administrativo ─────────────────── */}
        <section className="mb-[52px]">
          <h2 className="font-serif font-medium text-[clamp(22px,2.6vw,30px)] leading-[1.15] tracking-[-0.01em] text-brand-dark mb-6">
            2. Inscripción en registro administrativo
          </h2>
          <div className="prose prose-lg prose-neutral max-w-none
            prose-p:text-brand-ink-soft prose-p:leading-[1.75]
            prose-li:text-brand-ink-soft prose-li:leading-[1.75]
            prose-a:text-brand-accent prose-a:no-underline hover:prose-a:underline">
            <p>
              Esta Correduría de Seguros está inscrita en la Dirección General de Seguros y Fondos de
              Pensiones, con número de Registro J-2220. Puedes comprobar la inscripción de las siguientes
              formas:
            </p>
            <ul>
              <li>Enviando un escrito a la Dirección General de Seguros y Fondos de Pensiones.</li>
              <li>
                En la página web de dicho organismo:{' '}
                <a
                  href="http://www.dgsfp.mineco.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.dgsfp.mineco.es/
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* ── 3. Servicio de atención al cliente ────────────────────────── */}
        <section className="mb-[52px]">
          <h2 className="font-serif font-medium text-[clamp(22px,2.6vw,30px)] leading-[1.15] tracking-[-0.01em] text-brand-dark mb-6">
            3. Servicio de atención al cliente
          </h2>
          <div className="prose prose-lg prose-neutral max-w-none
            prose-p:text-brand-ink-soft prose-p:leading-[1.75]
            prose-a:text-brand-accent prose-a:no-underline hover:prose-a:underline">
            <p>
              Esta empresa dispone de un servicio de atención al cliente, que resolverá las quejas y
              reclamaciones que presenten nuestros clientes en el plazo máximo de dos meses desde la
              presentación. Pueden dirigirse al correo electrónico:{' '}
              <a href="mailto:atencioncliente@torresjack.com">atencioncliente@torresjack.com</a>
            </p>
            <p>
              En el supuesto de que la resolución del servicio de atención al cliente no fuere de tu
              agrado, podrás presentar en segunda instancia la queja o reclamación ante el comisionado para
              la defensa del asegurado, en la siguiente dirección:
            </p>
            <p>
              Dirección General de Seguros. Comisionado de Defensa del Asegurado<br />
              Paseo de la Castellana, 44<br />
              28046 Madrid
            </p>
          </div>
        </section>

        {/* ── 4. Política de privacidad ──────────────────────────────────── */}
        <section className="mb-[52px]">
          <h2 className="font-serif font-medium text-[clamp(22px,2.6vw,30px)] leading-[1.15] tracking-[-0.01em] text-brand-dark mb-6">
            4. Política de privacidad
          </h2>
          <div className="prose prose-lg prose-neutral max-w-none
            prose-headings:font-serif prose-headings:font-medium prose-headings:text-brand-dark
            prose-p:text-brand-ink-soft prose-p:leading-[1.75]
            prose-li:text-brand-ink-soft prose-li:leading-[1.75]
            prose-a:text-brand-accent prose-a:no-underline hover:prose-a:underline
            prose-strong:text-brand-ink prose-strong:font-semibold">

            <h3>¿Quién es el responsable del tratamiento de tus datos personales?</h3>
            <p>
              Torres Jack Correduría de Seguros, S.L. es el RESPONSABLE del tratamiento de los datos
              personales del USUARIO y le informa de que estos datos serán tratados de conformidad con lo
              dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (RGPD), y la Ley Orgánica 3/2018,
              de 5 de diciembre (LOPDGDD).
            </p>

            <h3>¿Para qué tratamos tus datos personales?</h3>
            <p>Para mantener una relación comercial con el usuario. Las operaciones previstas para realizar el tratamiento son:</p>
            <ul>
              <li>
                Remisión de comunicaciones comerciales publicitarias por e-mail, fax, SMS, MMS, redes
                sociales o cualquier otro medio electrónico o físico, presente o futuro, que posibilite
                realizar comunicaciones comerciales. Estas comunicaciones serán realizadas por el
                RESPONSABLE y estarán relacionadas con sus productos y servicios, o de sus colaboradores o
                proveedores, con los que este haya alcanzado algún acuerdo de promoción. En este caso, los
                terceros nunca tendrán acceso a los datos personales.
              </li>
              <li>Realizar estudios de mercado y análisis estadísticos.</li>
              <li>
                Tramitar encargos, solicitudes, dar respuesta a las consultas o cualquier tipo de petición
                que sea realizada por el USUARIO a través de cualquiera de las formas de contacto que se
                ponen a su disposición en la página web del RESPONSABLE.
              </li>
              <li>Remitir el boletín informativo online, sobre novedades, ofertas y promociones en nuestra actividad.</li>
            </ul>

            <h3>¿Por qué motivo podemos tratar tus datos personales?</h3>
            <p>Porque el tratamiento está legitimado por el artículo 6 del RGPD de la siguiente forma:</p>
            <ul>
              <li>Con el consentimiento del USUARIO: remisión de comunicaciones comerciales y del boletín informativo.</li>
              <li>
                Por interés legítimo del RESPONSABLE: realizar estudios de mercado, análisis estadísticos,
                etc. y tramitar encargos, solicitudes, etc. a petición del USUARIO.
              </li>
            </ul>

            <h3>¿Durante cuánto tiempo guardaremos tus datos personales?</h3>
            <p>
              Se conservarán durante no más tiempo del necesario para mantener el fin del tratamiento o
              existan prescripciones legales que dictaminen su custodia y cuando ya no sea necesario para
              ello, se suprimirán con medidas de seguridad adecuadas para garantizar la anonimización de
              los datos o la destrucción total de los mismos.
            </p>

            <h3>¿A quién facilitamos tus datos personales?</h3>
            <p>
              No está prevista ninguna comunicación de datos personales a terceros salvo, si fuese
              necesario para el desarrollo y ejecución de las finalidades del tratamiento, a nuestros
              proveedores de servicios relacionados con comunicaciones, con los cuales el RESPONSABLE tiene
              suscritos los contratos de confidencialidad y de encargado de tratamiento exigidos por la
              normativa vigente de privacidad.
            </p>

            <h3>¿Cuáles son tus derechos?</h3>
            <p>Los derechos que asisten al USUARIO son:</p>
            <ul>
              <li>Derecho a retirar el consentimiento en cualquier momento.</li>
              <li>
                Derecho de acceso, rectificación, portabilidad y supresión de sus datos, y de limitación u
                oposición a su tratamiento.
              </li>
              <li>
                Derecho a presentar una reclamación ante la autoridad de control (
                <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>
                ) si considera que el tratamiento no se ajusta a la normativa vigente.
              </li>
            </ul>
            <p>
              <strong>Datos de contacto para ejercer sus derechos:</strong><br />
              Torres Jack Correduría de Seguros, S.L. Federico Tapia, 13-1ºD, 15005 A Coruña.
              E-mail: <a href="mailto:direccion@torresjack.com">direccion@torresjack.com</a>
            </p>

            <h3>Carácter obligatorio o facultativo de la información</h3>
            <p>
              Los USUARIOS, mediante la marcación de las casillas correspondientes y la entrada de datos en
              los campos marcados con un asterisco (*) en el formulario de contacto o presentados en
              formularios de descarga, aceptan expresamente y de forma libre e inequívoca, que sus datos
              son necesarios para atender su petición, por parte del prestador, siendo voluntaria la
              inclusión de datos en los campos restantes. El USUARIO garantiza que los datos personales
              facilitados al RESPONSABLE son veraces y se hace responsable de comunicar cualquier
              modificación de los mismos.
            </p>

            <h3>Medidas de seguridad</h3>
            <p>
              De conformidad con lo dispuesto en las normativas vigentes en protección de datos personales,
              el RESPONSABLE está cumpliendo con todas las disposiciones de las normativas RGPD y LOPDGDD
              para el tratamiento de los datos personales de su responsabilidad, y manifiestamente con los
              principios descritos en el artículo 5 del RGPD, por los cuales son tratados de manera lícita,
              leal y transparente en relación con el interesado y adecuados, pertinentes y limitados a lo
              necesario en relación con los fines para los que son tratados.
            </p>
            <p>
              El RESPONSABLE garantiza que ha implementado políticas técnicas y organizativas apropiadas
              para aplicar las medidas de seguridad que establecen el RGPD y la LOPDGDD con el fin de
              proteger los derechos y libertades de los USUARIOS y les ha comunicado la información adecuada
              para que puedan ejercerlos.
            </p>
            <p>
              Para más información sobre las garantías de privacidad, puedes dirigirte al RESPONSABLE a
              través de Torres Jack Correduría de Seguros, S.L. Federico Tapia, 13-1ºD, 15005 A Coruña.
              E-mail: <a href="mailto:direccion@torresjack.com">direccion@torresjack.com</a>
            </p>
          </div>
        </section>

        {/* ── 5. Análisis objetivo ───────────────────────────────────────── */}
        <section className="mb-[52px]">
          <h2 className="font-serif font-medium text-[clamp(22px,2.6vw,30px)] leading-[1.15] tracking-[-0.01em] text-brand-dark mb-6">
            5. Análisis objetivo y recomendaciones de seguros
          </h2>
          <div className="prose prose-lg prose-neutral max-w-none
            prose-p:text-brand-ink-soft prose-p:leading-[1.75]
            prose-li:text-brand-ink-soft prose-li:leading-[1.75]">
            <p>
              De conformidad con lo dispuesto en la legislación vigente en materia de distribución de
              seguros y reaseguros privados, Torres Jack Correduría de Seguros, S.L. presta a sus clientes
              un servicio de asesoramiento basado en un análisis objetivo y personalizado.
            </p>
            <p>Para cumplir con esta obligación legal, informamos de lo siguiente:</p>
            <ul>
              <li><strong>Estudio previo:</strong> Analizamos de forma generalizada el mercado de seguros.</li>
              <li><strong>Número de ofertas:</strong> Evaluamos contratos de una pluralidad de entidades aseguradoras.</li>
              <li><strong>Mínimo legal:</strong> Examinamos un número suficiente de alternativas disponibles.</li>
              <li><strong>Criterio profesional:</strong> Seleccionamos las coberturas que mejor se adaptan a sus necesidades.</li>
              <li><strong>Independencia garantizada:</strong> No mantenemos vínculos contractuales que afecten a nuestra imparcialidad.</li>
            </ul>
            <p>
              Nuestras recomendaciones se basan exclusivamente en el interés del cliente, garantizando un
              análisis imparcial y riguroso del mercado asegurador.
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}
