import Card from "@/components/common/card";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <Card>{users}</Card>
      <Card>{revenue}</Card>
      <Card>{notifications}</Card>
    </>
  );
}
