import { useUsersQuery } from "../generated/graphql";

export const Home = () => {
  const { data, loading, error } = useUsersQuery({
    fetchPolicy: "network-only",
  });

  if (loading) {
    return <div>Loading... Calm down it'll be here soon</div>;
  }

  if (error) {
    return <div>Some stuff have gone wrong ... </div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
