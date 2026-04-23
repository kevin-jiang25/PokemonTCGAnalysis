import { trpc } from "..";

export default function UploadPage() {
  const userQuery = trpc.userById.useQuery("1");

  if (userQuery.isLoading) return <div>Loading...</div>;
  if (userQuery.error) return <div>Error: {userQuery.error.message}</div>;

  return (
    <div>
      <h1>Sup Boys</h1>
      <div>Hit backend: {userQuery.data?.name}</div>
    </div>
  );
}
