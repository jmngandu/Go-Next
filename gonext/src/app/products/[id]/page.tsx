export default async function products({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <>
      <h1>product: {id}</h1>
    </>
  );
}
