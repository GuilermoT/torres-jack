export default async function PolizaPage({
  params,
}: {
  params: Promise<{ token: string }>
}) {
  const { token } = await params

  return (
    <main>
      <h1>Portal del Cliente</h1>
      <p>Token: {token}</p>
    </main>
  )
}
