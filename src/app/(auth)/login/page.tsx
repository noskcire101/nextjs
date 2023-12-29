import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page Title",
  description: "Login Page description",
  openGraph: {
    images: "https://photos.sphereshowcase.com/tBJczsgyzUAP3woETDr31.jpg",
  },
};

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Login</p>
    </main>
  );
}
